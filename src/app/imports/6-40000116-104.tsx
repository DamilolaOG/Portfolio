import imgImage1 from "figma:asset/e3528bccdf864d126ab85ff84ce8a95eb209f093.png";

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="6">
      <div className="absolute h-[683.277px] left-[194px] top-[198px] w-[1531px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.66%] left-0 max-w-none top-[-14.66%] w-full" src={imgImage1} />
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.32] left-[128px] not-italic text-[36px] text-black text-nowrap top-[80px] tracking-[-0.72px]">Design process</p>
    </div>
  );
}