import imgScreenshot20240614At1817151 from "figma:asset/27db993a14042a60791719c388d59c916e39fedd.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center px-0 py-[50.259px] relative size-full">{children}</div>
    </div>
  );
}

function LText({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.252px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#db3907] text-[21.006px] w-full">
        <p className="leading-[31.509px]">{children}</p>
      </div>
    </div>
  );
}
type IndicatorText1Props = {
  text: string;
};

function IndicatorText1({ text }: IndicatorText1Props) {
  return (
    <div className="bg-[#db3907] relative rounded-[20941.1px] shrink-0 size-[50.259px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[29.318px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type IndicatorTextProps = {
  text: string;
};

function IndicatorText({ text }: IndicatorTextProps) {
  return (
    <div className="bg-[#db3907] relative rounded-[13128.9px] shrink-0 size-[31.509px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[18.38px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#efefef] relative size-full" data-name="27">
      <div className="absolute contents left-[84px] top-[180.48px]">
        <div className="absolute h-[621px] left-[84px] top-[180.48px] w-[1757.179px]" data-name="Screenshot 2024-06-14 at 18.17.15 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[188.2%] left-[-0.07%] max-w-none top-[-24.81%] w-[102.89%]" src={imgScreenshot20240614At1817151} />
          </div>
        </div>
        <div className="absolute bg-white h-[37.703px] left-[844.08px] top-[232.63px] w-[168.486px]" />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[715px] top-[833px]">
        <div className="content-stretch flex items-center relative rounded-[7.877px] shrink-0 w-[530.407px]" data-name="l-column">
          <div className="content-stretch flex items-start relative shrink-0" data-name="l-item">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#db3907] text-[21.006px] text-nowrap">
              <p className="leading-[31.509px]">Needs to be Fixed</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[577px]" data-name="Comment">
            <div className="bg-[#ffe4ee] relative rounded-[7.877px] shrink-0 w-full" data-name="_comment">
              <div aria-hidden="true" className="absolute border-[#db3907] border-[1.313px] border-solid inset-0 pointer-events-none rounded-[7.877px]" />
              <div className="content-stretch flex flex-col items-start p-[21.006px] relative w-full">
                <div className="content-stretch flex gap-[10.503px] items-start relative shrink-0 w-full" data-name="l-content">
                  <IndicatorText text="1" />
                  <LText>The size of navigation elements may be difficult for users with visual impairments to perceive</LText>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ffe4ee] content-stretch flex flex-col items-start p-[21.006px] relative rounded-[7.877px] shrink-0 w-[530.407px]" data-name="_comment">
            <div aria-hidden="true" className="absolute border-[#db3907] border-[1.313px] border-solid inset-0 pointer-events-none rounded-[7.877px]" />
            <div className="content-stretch flex gap-[10.503px] items-start relative shrink-0 w-full" data-name="l-content">
              <IndicatorText text="2" />
              <LText>{`Search button is hidden and may not be easily accessible `}</LText>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[94.679px] left-[1624px] rounded-[12.565px] top-[100px] w-[217.638px]" data-name="zone">
        <Wrapper>
          <div className="content-stretch flex items-center justify-end pl-0 pr-[33.506px] py-0 relative shrink-0 size-[67.012px]" data-name="l-offeset">
            <IndicatorText1 text="2" />
          </div>
        </Wrapper>
      </div>
      <div className="absolute h-[66.455px] left-[65px] rounded-[12.565px] top-[173.85px] w-[1777.398px]" data-name="zone">
        <Wrapper>
          <div className="content-stretch flex items-center justify-end pl-0 pr-[33.506px] py-0 relative shrink-0 size-[67.012px]" data-name="l-offeset">
            <IndicatorText1 text="1" />
          </div>
        </Wrapper>
      </div>
      <div className="absolute bg-[#d02670] content-stretch flex items-center justify-center left-[84px] p-[17.135px] rounded-[45px] top-[74px] w-[155px]">
        <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-nowrap text-white uppercase">
          <p className="leading-[normal]">Before</p>
        </div>
      </div>
    </div>
  );
}