import React from "react";
import clsx from "clsx";

const AccordionCard = ({
  icon: Icon,
  title,
  short,
  details,
  isOpen,
  onToggle,
}: {
  icon: any;
  title: string;
  short: string;
  details: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      onClick={onToggle}
      className={clsx(
        "flex flex-col items-center justify-start text-center px-6 py-5 bg-white text-[#2a2a3a] rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md",
        isOpen
          ? "border-2 border-gold"
          : "border border-transparent"
      )}
    >
      <div
        className={clsx(
          "h-12 w-12 bg-[#f5f1ea] rounded-full flex items-center justify-center mb-3 transition-colors duration-300",
          isOpen ? "text-gold" : "text-gray-500"
        )}
      >
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-xl font-semibold mb-1">
        {title}
      </h3>

      <p className="text-lg text-clay">
        {short}
      </p>

      {/* Animated Details */}
      <div
  className={clsx(
    "overflow-hidden transition-all duration-300 ease-in-out w-full",
    isOpen
      ? "mt-4 opacity-100 max-h-[13rem]"
      : "mt-0 opacity-0 max-h-0"
  )}
>
  <div className="h-[13rem] flex items-start justify-center">
    <p className="text-base text-gray-700 leading-relaxed">
      {details}
    </p>
  </div>
</div>
    </div>
  );
};

export default AccordionCard;
