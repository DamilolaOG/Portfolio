import imgScreenshot20240611At07061 from "figma:asset/a7af6858bc28dcf32bcff8b97e6f9da78c622342.png";

function Comment({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffe4ee] relative rounded-[7.877px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#db3907] border-[1.313px] border-solid inset-0 pointer-events-none rounded-[7.877px]" />
      <div className="content-stretch flex flex-col items-start p-[21.006px] relative w-full">{children}</div>
    </div>
  );
}
type IndicatorText1Props = {
  text: string;
};

function IndicatorText1({ text }: IndicatorText1Props) {
  return (
    <div className="bg-[#db3907] relative rounded-[18821.1px] shrink-0 size-[45.171px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[26.35px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type LTextTextProps = {
  text: string;
};

function LTextText({ text }: LTextTextProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#db3907] text-[21.006px] w-full">
        <p className="leading-[31.509px]">{text}</p>
      </div>
    </div>
  );
}
type IndicatorTextProps = {
  text: string;
};

function IndicatorText({ text }: IndicatorTextProps) {
  return (
    <div className="bg-[#db3907] relative rounded-[10000px] shrink-0 size-[24px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[16.41%_-14.88%_-14.88%_16.41%] justify-center leading-[0] not-italic text-[14px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#efefef] relative size-full" data-name="18">
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[35px] top-[758px] w-[533.033px]">
        <div className="content-stretch flex items-start relative shrink-0" data-name="l-item">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#db3907] text-[21.006px] text-nowrap">
            <p className="leading-[31.509px]">Needs to be Fixed</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Comment">
          <Comment>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="l-content">
              <IndicatorText text="1" />
              <LTextText text="Button disrupting navigation hierarchy." />
            </div>
          </Comment>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Comment">
          <Comment>
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="l-content">
              <IndicatorText text="2" />
              <LTextText text="Redundant and uncategorised information" />
            </div>
          </Comment>
        </div>
      </div>
      <div className="absolute h-[544px] left-[35px] pointer-events-none top-[172px] w-[1818.12px]" data-name="Screenshot 2024-06-11 at 07.06 1">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[195%] left-[-37.8%] max-w-none top-[-18.68%] w-[139.38%]" src={imgScreenshot20240611At07061} />
        </div>
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-0" />
      </div>
      <div className="absolute h-[52.922px] left-[487px] rounded-[11.293px] top-[360px] w-[184.373px]" data-name="zone">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-0 py-[45.171px] relative size-full">
            <div className="content-stretch flex items-center justify-end pl-0 pr-[30.114px] py-0 relative shrink-0 size-[60.228px]" data-name="l-offeset">
              <IndicatorText1 text="1" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[96px] items-center left-[768px] px-0 py-[45.171px] rounded-[11.293px] top-[374px] w-[206px]" data-name="zone">
        <div className="content-stretch flex items-center justify-end pl-0 pr-[30.114px] py-0 relative shrink-0 size-[60.228px]" data-name="l-offeset">
          <IndicatorText1 text="2" />
        </div>
      </div>
      <div className="absolute bg-[#d02670] content-stretch flex items-center justify-center left-[40px] p-[17.135px] rounded-[45px] top-[74px] w-[155px]">
        <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-nowrap text-white uppercase">
          <p className="leading-[normal]">Before</p>
        </div>
      </div>
    </div>
  );
}