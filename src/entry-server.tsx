import React from "react";
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";

type RenderResult = {
  appHtml: string;
  headHtml: string;
};

function renderReactToHtml(element: React.ReactElement): Promise<string> {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    let html = "";
    let settled = false;

    output.setEncoding("utf8");

    output.on("data", (chunk) => {
      html += chunk;
    });

    output.on("end", () => {
      if (!settled) {
        settled = true;
        resolve(html);
      }
    });

    output.on("error", (error) => {
      if (!settled) {
        settled = true;
        reject(error);
      }
    });

    const stream = renderToPipeableStream(element, {
      onAllReady() {
        stream.pipe(output);
      },

      onShellError(error) {
        if (!settled) {
          settled = true;
          reject(error);
        }
      },

      onError(error) {
        console.error("[prerender] React render error:", error);
      },
    });

    setTimeout(() => {
      if (!settled) {
        stream.abort();
        settled = true;
        reject(new Error("Static rendering timed out after 30 seconds."));
      }
    }, 30_000);
  });
}

export async function render(url: string): Promise<RenderResult> {
  const helmetContext: Record<string, any> = {};

  const appHtml = await renderReactToHtml(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;

  const headHtml = helmet
    ? [
        helmet.title?.toString(),
        helmet.priority?.toString(),
        helmet.meta?.toString(),
        helmet.link?.toString(),
        helmet.base?.toString(),
        helmet.style?.toString(),
        helmet.script?.toString(),
        helmet.noscript?.toString(),
      ]
        .filter(Boolean)
        .join("\n")
    : "";

  return {
    appHtml,
    headHtml,
  };
}
