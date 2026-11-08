import svgPaths from "./svg-9crpm3mn4g";
import imgUntitled1 from "figma:asset/dbcb9ea277dad14e3210068b27b78a6a063e6d28.png";

function Visuals() {
  return (
    <div className="absolute bg-white h-[316.941px] left-[calc(50%-23.714px)] overflow-clip rounded-tl-[28.51px] rounded-tr-[28.51px] top-[230px] translate-x-[-50%] w-[1770.57px]" data-name="Visuals">
      <div className="absolute h-[123.249px] left-[1462.23px] top-[193.39px] w-[308.152px]" data-name="Untitled 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[429.92%] left-[-550.33%] max-w-none top-[-156.91%] w-[650.33%]" src={imgUntitled1} />
        </div>
      </div>
      <div className="absolute h-[316.637px] left-[0.58px] top-[0.3px] w-[302.397px]" data-name="Untitled 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[167.34%] left-0 max-w-none top-0 w-[662.71%]" src={imgUntitled1} />
        </div>
      </div>
    </div>
  );
}

function Frame1569() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Medium',_sans-serif] font-medium gap-[3.283px] items-center leading-[17.51px] left-[934.59px] not-italic text-[#333333] text-[14.227px] text-nowrap top-[43.77px] whitespace-pre">
      <p className="relative shrink-0">Create pin</p>
      <p className="relative shrink-0">Verify pin</p>
    </div>
  );
}

function Frame1568() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Medium',_sans-serif] font-medium gap-[3.283px] items-center leading-[17.51px] left-[613.94px] not-italic text-[#333333] text-[14.227px] text-nowrap top-[22.98px] whitespace-pre">
      <p className="relative shrink-0">Verify email</p>
      <p className="relative shrink-0">{`Facial Verification `}</p>
      <p className="relative shrink-0">Verify phone number</p>
      <p className="relative shrink-0">Proof of address</p>
    </div>
  );
}

function Visuals1() {
  return (
    <div className="absolute bg-white h-[135.702px] left-[155.22px] overflow-clip rounded-tl-[29.041px] rounded-tr-[29.041px] top-[546.94px] w-[1713.79px]" data-name="Visuals">
      <div className="absolute bg-white h-[123.664px] left-[303.14px] top-[12.04px] w-[1216.94px]" />
      <div className="absolute h-[135.702px] left-[307.51px] top-0 w-[1046.22px]" data-name="Untitled 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[397.73%] left-[-61.03%] max-w-none top-[-250.58%] w-[195.11%]" src={imgUntitled1} />
        </div>
      </div>
      <div className="absolute h-[124.628px] left-[1353.71px] top-[-60.16px] w-[143.966px]">
        <div className="absolute bottom-[-0.66%] left-0 right-[-0.57%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 145 126">
            <path d={svgPaths.p23608500} id="Arrow 1" stroke="var(--stroke-0, #E4A951)" strokeWidth="1.64156" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#c4c4c4] h-[20.793px] left-[913.8px] top-[52.53px] w-[111.626px]" />
      <div className="absolute bg-[#c4c4c4] h-[20.793px] left-[613.94px] top-[52.53px] w-[143.363px]" />
      <Frame1569 />
      <Frame1568 />
    </div>
  );
}

function Group10683() {
  return (
    <div className="absolute contents left-[51px] top-[230px]">
      <Visuals />
      <Visuals1 />
      <div className="absolute h-[123.016px] left-[315.3px] top-[485.7px] w-[205.743px]">
        <div className="absolute bottom-[-0.66%] left-0 right-0 top-[-0.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 206 125">
            <path d={svgPaths.p83ef100} id="Vector 66" stroke="var(--stroke-0, #C4C4C4)" strokeWidth="1.61156" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Component39() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] size-full" data-name="39">
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[66px] left-[75px] not-italic text-[36px] text-black text-nowrap top-[164px] whitespace-pre">Existing Flow</p>
      <Group10683 />
    </div>
  );
}