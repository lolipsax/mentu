import React from 'react';

export const PhoneMockup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl flex flex-col justify-start overflow-hidden">
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden h-full w-full bg-white relative">
        {/* Status Bar Mock */}
        <div className="absolute top-0 w-full h-8 bg-white z-20 flex justify-between items-center px-4 text-[10px] font-medium text-gray-800">
            <span>19:23</span>
            <div className="flex gap-1">
                <span>5G</span>
                <span>100%</span>
            </div>
        </div>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-6 w-32 bg-black rounded-b-2xl z-30"></div>
        
        {/* Content */}
        <div className="h-full w-full overflow-y-auto pt-8 no-scrollbar pb-4">
            {children}
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-900 rounded-full z-30"></div>
      </div>
    </div>
  );
};
