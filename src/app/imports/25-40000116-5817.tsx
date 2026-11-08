import svgPaths from "./svg-9m48z24sus";
import imgScreenshot20240715At0743511 from "figma:asset/e21632e12cc1074232bd3c0534b7b9784d976a10.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-full relative shrink-0">
      <div className="content-stretch flex h-full items-start pb-[51.549px] pt-[7.518px] px-[32.218px] relative">{children}</div>
    </div>
  );
}
type MenuItemTextProps = {
  text: string;
};

function MenuItemText({ text }: MenuItemTextProps) {
  return (
    <Wrapper>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.35] relative shrink-0 text-[#21272a] text-[18px] text-nowrap">{text}</p>
    </Wrapper>
  );
}

export default function Component() {
  return (
    <div className="bg-[#efefef] relative size-full" data-name="25">
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[1243px] top-[815px]">
        <div className="content-stretch flex items-center relative rounded-[7.877px] shrink-0 w-[530.407px]" data-name="l-column">
          <div className="content-stretch flex items-start relative shrink-0" data-name="l-item">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b883c] text-[21.006px] text-nowrap">
              <p className="leading-[31.509px]">UX optimisations</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[533.033px]" data-name="Comment">
          <div className="bg-[#e7fff8] relative rounded-[7.877px] shrink-0 w-full" data-name="_comment">
            <div aria-hidden="true" className="absolute border-[#1b883c] border-[1.313px] border-solid inset-0 pointer-events-none rounded-[7.877px]" />
            <div className="content-stretch flex flex-col items-start p-[21.006px] relative w-full">
              <div className="content-stretch flex gap-[10.503px] items-start relative shrink-0 w-full" data-name="l-content">
                <div className="bg-[#1b883c] relative rounded-[13128.9px] shrink-0 size-[31.509px]" data-name="indicator">
                  <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[18.38px] text-center text-white">
                    <p className="leading-[normal]">1</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[5.252px] grow items-start min-h-px min-w-px relative shrink-0" data-name="l-text">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b883c] text-[21.006px] w-full">
                    <p className="leading-[31.509px]">Hide on Scroll Down, Show on Scroll Up to allow users access the quick menu option especially on mobile with longer scroll depth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col isolate items-center left-[113.55px] top-[189.55px] w-[1718.306px]">
        <div className="bg-white relative shrink-0 w-full z-[2]" data-name="Top navigation">
          <div aria-hidden="true" className="absolute border-0 border-[#02df0a] border-solid inset-0 pointer-events-none shadow-[0px_1.406px_5.622px_0px_rgba(0,0,0,0.15)]" />
          <div className="content-stretch flex flex-col items-start pb-[17.183px] pl-[247.38px] pr-[247.006px] pt-[19.535px] relative w-full">
            <div className="content-stretch flex items-center relative shrink-0 w-[1227.585px]" data-name="Mega menu">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Logo container">
                <div className="relative shrink-0 size-[45.106px]" data-name="Bupa Logo">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.1054 45.1055">
                    <g id="Bupa Logo">
                      <path d={svgPaths.p1df81400} fill="var(--fill-0, #0079C8)" id="Vector" />
                      <path d={svgPaths.p2dc1b480} fill="var(--fill-0, white)" id="Vector_2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex h-[38px] items-center relative shrink-0" data-name="Menu items">
                <Wrapper>
                  <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[1.35] relative shrink-0 text-[#21272a] text-[18px] text-nowrap">Health insurance</p>
                </Wrapper>
                <MenuItemText text="Dental" />
                <MenuItemText text="Care homes" />
                <MenuItemText text="Pay as you go" />
                <MenuItemText text="Health information" />
              </div>
            </div>
          </div>
        </div>
        <div className="aspect-[1718.31/514.626] relative shrink-0 w-full z-[1]" data-name="Screenshot 2024-07-15 at 07.43.51 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[203.09%] left-[-1.31%] max-w-none top-[-22.54%] w-[102.61%]" src={imgScreenshot20240715At0743511} />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[121px] items-center left-[78px] px-0 py-[35.254px] rounded-[8.814px] top-[171px] w-[1764px]" data-name="zone">
        <div className="content-stretch flex items-center justify-end pl-0 pr-[23.503px] py-0 relative shrink-0 size-[47.006px]" data-name="l-offeset">
          <div className="bg-[#1b883c] relative rounded-[14689.3px] shrink-0 size-[35.254px]" data-name="indicator">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[20.565px] text-center text-white">
              <p className="leading-[normal]">1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#d02670] content-stretch flex items-center justify-center left-[114px] p-[17.135px] rounded-[45px] top-[74px] w-[155px]">
        <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-nowrap text-white uppercase">
          <p className="leading-[normal]">After</p>
        </div>
      </div>
    </div>
  );
}