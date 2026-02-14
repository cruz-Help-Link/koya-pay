import React from "react";

interface ListContainerProps {
  title: string;
  children: React.ReactNode;
  actionText?: string;
  onActionClick?: () => void;
}

export const ListContainer: React.FC<ListContainerProps> = ({
  title,
  children,
  actionText,
  onActionClick,
}) => {
  return (
    <div className="px-5 mt-7 max-w-lg lg:max-w-5xl mx-auto w-full">
      <div className="bg-[#c9b8ff] rounded-2xl px-5 py-4 shadow-sm">
        <h3 className="text-[#22144F] font-bold text-base mb-2 font-aeonik">
          {title}
        </h3>

        <div className="divide-y divide-gray-200">
          {children}
        </div>

        {actionText && (
          <button
            onClick={onActionClick}
            className="w-full text-center text-sm text-white hover:text-[#22144F] mt-3 font-medium"
          >
            {actionText} &gt;
          </button>
        )}
      </div>
    </div>
  );
};
