import imgImage1 from "figma:asset/e3528bccdf864d126ab85ff84ce8a95eb209f093.png";

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="7">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.28] left-[calc(50%-125px)] not-italic text-[#ff5815] text-[60px] text-nowrap top-[calc(50%+42px)] tracking-[-0.6px]">Discover</p>
      <div className="absolute h-[287.414px] left-[638px] top-[259px] w-[190.806px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.66%] left-0 max-w-none top-[-14.66%] w-[337.52%]" src={imgImage1} />
        </div>
      </div>
      <div className="absolute h-[287.414px] left-[826.21px] top-[259px] w-[455.788px]" data-name="image 2">
        <div className="absolute inset-0 opacity-25 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.66%] left-[-41.29%] max-w-none top-[-14.66%] w-[141.29%]" src={imgImage1} />
        </div>
      </div>
    </div>
  );
}