import React from 'react';

const SectionHeader = ({p1, h1, p2}) => {
    return (
        <div className='container'> 
            {/* Header */}
        <div className="flex flex-col items-center gap-4  text-center">
          <p className="text-[#F3FE00] text-sm font-medium uppercase tracking-[0.2em] font-[Inter]">
            {p1}
          </p>
          <h1 className="text-white text-[40px] font-bold leading-10 font-[Geologica]">
            {h1}
          </h1>
          <p className="max-w-[596px] text-[#D5D5D5] text-sm font-normal leading-[21px] font-[Inter]">
            {p2}
          </p>
        </div>
        </div>
    );
}

export default SectionHeader;
