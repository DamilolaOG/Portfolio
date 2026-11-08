import svgPaths from "./svg-fgfnt2nesq";
import clsx from "clsx";
import imgScreenshot20240709At0840131 from "figma:asset/eda06f9719e95dc5de6e7966d34f05a6e50b38e9.png";

function Comment({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#e7fff8] relative rounded-[7.877px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#1b883c] border-[1.313px] border-solid inset-0 pointer-events-none rounded-[7.877px]" />
      <div className="content-stretch flex flex-col items-start p-[21.006px] relative w-full">{children}</div>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("absolute bg-[#d02670] content-stretch flex items-center justify-center p-[17.135px] rounded-[45px] top-[74px] w-[155px]", additionalClassNames)}>
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-nowrap text-white uppercase">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type IndicatorText1Props = {
  text: string;
};

function IndicatorText1({ text }: IndicatorText1Props) {
  return (
    <div className="bg-[#1b883c] relative rounded-[18804.3px] shrink-0 size-[45.13px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[26.326px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Group20ImageProps = {
  additionalClassNames?: string;
};

function Group20Image({ additionalClassNames = "" }: Group20ImageProps) {
  return (
    <div className={clsx("absolute inset-0 overflow-hidden", additionalClassNames)}>
      <img alt="" className="absolute h-[312.71%] left-[-354.64%] max-w-none top-[-32.27%] w-[1584.54%]" src={imgScreenshot20240709At0840131} />
    </div>
  );
}
type LTextTextProps = {
  text: string;
};

function LTextText({ text }: LTextTextProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.252px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b883c] text-[21.006px] w-full">
        <p className="leading-[31.509px]">{text}</p>
      </div>
    </div>
  );
}
type IndicatorTextProps = {
  text: string;
  additionalClassNames?: string;
};

function IndicatorText({ text, additionalClassNames = "" }: IndicatorTextProps) {
  return (
    <div className={clsx("relative rounded-[13128.9px] shrink-0 size-[31.509px]", additionalClassNames)}>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[18.38px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#efefef] relative size-full" data-name="30">
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[603px] top-[178px]">
        <div className="content-stretch flex items-center relative rounded-[7.877px] shrink-0 w-[115px]" data-name="l-column">
          <div className="content-stretch flex items-start relative shrink-0" data-name="l-item">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#db3907] text-[21.006px] text-nowrap">
              <p className="leading-[31.509px]">Idea</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[498px]" data-name="Comment">
          <div className="bg-[#ffe4ee] relative rounded-[7.877px] shrink-0 w-full" data-name="_comment">
            <div aria-hidden="true" className="absolute border-[#db3907] border-[1.313px] border-solid inset-0 pointer-events-none rounded-[7.877px]" />
            <div className="content-stretch flex flex-col items-start p-[21.006px] relative w-full">
              <div className="content-stretch flex gap-[10.503px] items-start relative shrink-0 w-full" data-name="l-content">
                <IndicatorText text="1" additionalClassNames="bg-[#db3907]" />
                <div className="basis-0 content-stretch flex flex-col gap-[5.252px] grow items-start min-h-px min-w-px relative shrink-0" data-name="l-text">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#db3907] text-[21.006px] w-full">
                    <p className="leading-[31.509px]">On small screens where real estate is limited, it can be difficult for users to see the primary content they came to the site for, especially users with visual impairment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[793.051px] left-[64px] top-[178px] w-[464px]" data-name="Screenshot 2024-07-09 at 08.40.13 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[126.25%] left-[-17.17%] max-w-none top-[-13.03%] w-[383.63%]" src={imgScreenshot20240709At0840131} />
        </div>
      </div>
      <div className="absolute content-stretch flex h-[837px] items-center left-[205px] px-0 py-[40.874px] rounded-[10.219px] top-[157px] w-[350px]" data-name="zone">
        <div aria-hidden="true" className="absolute border-[#db3907] border-[1.703px] border-dashed inset-[-0.852px] pointer-events-none rounded-[11.071px]" />
        <div className="content-stretch flex items-center justify-end pl-0 pr-[27.25px] py-0 relative shrink-0 size-[54.499px]" data-name="l-offeset">
          <div className="bg-[#db3907] relative rounded-[17030.9px] shrink-0 size-[40.874px]" data-name="indicator">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[23.843px] text-center text-white">
              <p className="leading-[normal]">1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[754px] top-[652px]">
        <div className="content-stretch flex items-center relative rounded-[7.877px] shrink-0 w-[530.407px]" data-name="l-column">
          <div className="content-stretch flex items-start relative shrink-0" data-name="l-item">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b883c] text-[21.006px] text-nowrap">
              <p className="leading-[31.509px]">UX optimisations</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[533.033px]" data-name="Comment">
          <Comment>
            <div className="content-stretch flex gap-[10.503px] items-start relative shrink-0 w-full" data-name="l-content">
              <IndicatorText text="1" additionalClassNames="bg-[#1b883c]" />
              <LTextText text="Extend the mega menu to cover the entire screen, allowing users a clearer view of the primary content in the mega menu." />
            </div>
          </Comment>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[533.033px]" data-name="Comment">
          <Comment>
            <div className="content-stretch flex gap-[10.503px] items-start relative shrink-0 w-full" data-name="l-content">
              <div className="bg-[#1b883c] relative rounded-[13128.9px] shrink-0 size-[31.509px]" data-name="indicator">
                <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%_12.51%_12.5%_12.49%] justify-center leading-[0] not-italic text-[18.38px] text-center text-white">
                  <p className="leading-[normal]">2</p>
                </div>
              </div>
              <LTextText text="Close button from right to left following users mental model." />
            </div>
          </Comment>
        </div>
      </div>
      <div className="absolute contents left-[1340px] top-[190px]">
        <div className="absolute h-[802.39px] left-[1340px] top-[190px] w-[470px]" data-name="Screenshot 2024-07-09 at 08.40.13 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[126.4%] left-[-17.17%] max-w-none top-[-13.04%] w-[383.63%]" src={imgScreenshot20240709At0840131} />
          </div>
        </div>
        <div className="absolute h-[802.39px] left-[1340px] top-[190px] w-[292.261px]" data-name="Screenshot 2024-07-09 at 08.40.13 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[126.4%] left-[-88.42%] max-w-none top-[-13.04%] w-[616.93%]" src={imgScreenshot20240709At0840131} />
          </div>
        </div>
        <div className="absolute bg-white h-[681.821px] left-[1589.02px] top-[190.55px] w-[138.71px]" />
        <div className="absolute bg-white h-[90.885px] left-[1645.64px] top-[658.17px] w-[138.71px]" />
        <div className="absolute h-[324.328px] left-[1589.02px] top-[190px] w-[157.216px]" data-name="Screenshot 2024-07-09 at 08.40.13 3">
          <Group20Image additionalClassNames="pointer-events-none" />
        </div>
        <div className="absolute bg-[#006ec1] h-[120.019px] left-[1595.98px] top-[872.37px] w-[172.791px]" />
        <div className="absolute h-[66.698px] left-[1589.02px] top-[887.4px] w-[195.329px]" data-name="Screenshot 2024-07-09 at 08.40.13 4">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <Group20Image />
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[1520.6%] left-[-285.44%] max-w-none top-[-1202.51%] w-[1275.36%]" src={imgScreenshot20240709At0840131} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[835px] items-center left-[1322px] px-0 py-[45.13px] rounded-[11.283px] top-[178px] w-[518px]" data-name="zone">
        <div aria-hidden="true" className="absolute border-[1.88px] border-[rgba(27,136,60,0.5)] border-dashed inset-[-0.94px] pointer-events-none rounded-[12.223px]" />
        <div className="content-stretch flex items-center justify-end pl-0 pr-[30.087px] py-0 relative shrink-0 size-[60.174px]" data-name="l-offeset">
          <IndicatorText1 text="1" />
        </div>
      </div>
      <div className="absolute bg-white h-[29px] left-[1349px] top-[202px] w-[24.65px]" />
      <div className="absolute bg-white h-[29px] left-[1518px] top-[215px] w-[24.65px]" />
      <div className="absolute left-[1355.12px] size-[16.111px] top-[211.18px]" data-name="fluent-mdl2:cancel">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1111 16.1111">
          <g id="fluent-mdl2:cancel">
            <path d={svgPaths.p34b81780} fill="var(--fill-0, black)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[60px] left-[1296px] rounded-[11.283px] top-[195px] w-[151px]" data-name="zone">
        <div aria-hidden="true" className="absolute border-[1.88px] border-[rgba(27,136,60,0.5)] border-dashed inset-[-0.94px] pointer-events-none rounded-[12.223px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-0 py-[45.13px] relative size-full">
            <div className="content-stretch flex items-center justify-end pl-0 pr-[30.087px] py-0 relative shrink-0 size-[60.174px]" data-name="l-offeset">
              <IndicatorText1 text="2" />
            </div>
          </div>
        </div>
      </div>
      <Text text="Before" additionalClassNames="left-[57px]" />
      <Text text="After" additionalClassNames="left-[1313px]" />
      <div className="absolute bg-white h-[40px] left-[1762px] top-[204px] w-[42px]" />
    </div>
  );
}