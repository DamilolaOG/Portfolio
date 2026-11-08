import svgPaths from "./svg-vcag2p1gkj";
import clsx from "clsx";
import imgScreenshot20240611At07253 from "figma:asset/f2b06d5a9750d4a3ad830509619f31851e20ed9e.png";
import imgScreenshot20240715At0743512 from "figma:asset/e21632e12cc1074232bd3c0534b7b9784d976a10.png";
type Component24HelperProps = {
  additionalClassNames?: string;
};

function Component24Helper({ children, additionalClassNames = "" }: React.PropsWithChildren<Component24HelperProps>) {
  return (
    <div className={clsx("absolute pointer-events-none w-[1287.089px]", additionalClassNames)}>
      <div className="absolute inset-0 overflow-hidden">{children}</div>
      <div aria-hidden="true" className="absolute border-[3.048px] border-black border-solid inset-0" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#efefef] relative size-full" data-name="24">
      <Component24Helper additionalClassNames="h-[324.058px] left-[74px] top-[172px]">
        <img alt="" className="absolute h-[277.72%] left-[-64.89%] max-w-none top-[-23.53%] w-[167.04%]" src={imgScreenshot20240611At07253} />
      </Component24Helper>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[69px] top-[729px] w-[507px]">
        <div className="content-stretch flex items-center relative rounded-[8.002px] shrink-0 w-[538.817px]" data-name="l-column">
          <div className="content-stretch flex items-start relative shrink-0" data-name="l-item">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#db3907] text-[21.339px] text-nowrap">
              <p className="leading-[32.009px]">Needs to be Fixed</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Comment">
          <div className="bg-[#ffe4ee] relative rounded-[8.002px] shrink-0 w-full" data-name="_comment">
            <div aria-hidden="true" className="absolute border-[#db3907] border-[1.334px] border-solid inset-0 pointer-events-none rounded-[8.002px]" />
            <div className="content-stretch flex flex-col items-start p-[21.339px] relative w-full">
              <div className="content-stretch flex gap-[10.67px] items-start relative shrink-0 w-full" data-name="l-content">
                <div className="bg-[#db3907] relative rounded-[13337.1px] shrink-0 size-[32.009px]" data-name="indicator">
                  <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[18.672px] text-center text-white">
                    <p className="leading-[normal]">1</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[5.335px] grow items-start min-h-px min-w-px relative shrink-0" data-name="l-text">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#db3907] text-[21.339px] w-full">
                    <p className="leading-[32.009px]">Navigation menu disappears, making the option to navigate only accessible when they scroll all the way back to the top</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Component24Helper additionalClassNames="h-[411.96px] left-[586.77px] top-[539.04px]">
        <img alt="" className="absolute h-[204.69%] left-0 max-w-none top-[-13.6%] w-[101.35%]" src={imgScreenshot20240715At0743512} />
      </Component24Helper>
      <div className="absolute h-[250px] left-[317px] top-[496px] w-[272px]">
        <div className="absolute inset-[0_0_-3.52%_-0.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 273.524 258.798">
            <path d={svgPaths.p1a31bfc0} fill="var(--stroke-0, black)" id="Vector 23" />
          </svg>
        </div>
      </div>
      <div className="absolute contents left-[74px] top-[613.2px]" data-name="🟨  Note">
        <div className="absolute bg-[#ffc331] h-[74.157px] left-[74px] rounded-[0.574px] shadow-[0px_0.574px_1.148px_0px_rgba(0,0,0,0.25)] top-[613.2px] w-[222.472px]" data-name="Background" />
        <div className="absolute flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] left-[97.36px] text-[#222] text-[38.603px] text-nowrap top-[650.92px] translate-y-[-50%]">
          <p className="leading-[normal]">On Scroll</p>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[87.364px] items-center left-[563.4px] px-0 py-[29.068px] rounded-[7.267px] top-[520.76px] w-[1319.597px]" data-name="zone">
        <div className="content-stretch flex items-center justify-end pl-0 pr-[19.379px] py-0 relative shrink-0 size-[38.757px]" data-name="l-offeset">
          <div className="bg-[#db3907] relative rounded-[12111.7px] shrink-0 size-[29.068px]" data-name="indicator">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[16.956px] text-center text-white">
              <p className="leading-[normal]">1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#d02670] content-stretch flex items-center justify-center left-[69px] p-[17.135px] rounded-[45px] top-[74px] w-[155px]">
        <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-nowrap text-white uppercase">
          <p className="leading-[normal]">Before</p>
        </div>
      </div>
    </div>
  );
}