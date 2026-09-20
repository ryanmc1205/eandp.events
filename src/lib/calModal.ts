type CalNamespace = "30min" | "clarity" | "corporate-b2b-15";

type CalWindow = Window & {
  Cal?: {
    ns?: Record<
      string,
      (
        command: string,
        options: {
          calLink: string;
          config?: Record<string, unknown>;
        }
      ) => void
    >;
  };
};

const CAL_LINKS: Record<CalNamespace, string> = {
  "30min": "eandp.events/30min",
  clarity: "eandp.events/clarity",
  "corporate-b2b-15": "eandp.events/corporate-b2b-15",
};

export function openCalModal(
  namespace: CalNamespace
): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  const calWindow = window as CalWindow;
  const calApi = calWindow.Cal?.ns?.[namespace];

  if (typeof calApi !== "function") {
    return false;
  }

  calApi("modal", {
    calLink: CAL_LINKS[namespace],
    config: {
      layout: "month_view",
      useSlotsViewOnSmallScreen: true,
    },
  });

  return true;
}