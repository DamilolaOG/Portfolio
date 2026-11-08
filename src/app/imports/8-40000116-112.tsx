import imgWorkshop1 from "figma:asset/56fa19a58a41c896c1d3a4c7e4f6b06cafb730fe.png";
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[1.35]">{text}</p>
      </div>
    </div>
  );
}
type HeaderTextProps = {
  text: string;
};

function HeaderText({ text }: HeaderTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#979797] text-[16px] text-nowrap">
        <p className="leading-[1.35]">{text}</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="8">
      <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[70px] top-[140px] w-[565px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
          <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0" data-name="Label ⇵ Content">
            <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[0px] text-[18px] text-black text-nowrap">
              <span>{`.co.uk `}</span>
              <span className="font-['Montserrat:Regular',sans-serif] font-normal">Nav optimisation</span>
            </p>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[443px]" data-name="Headline ⇵ Text">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[44px] text-black w-[483px]">Initial workshop</p>
              </div>
            </div>
          </div>
          <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[18px] text-black w-[423px]">I set up a workshop and invited stakeholders from each Business Unit to:</p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <HeaderText text="01" />
            <Text text="Align on the aim, impact, and success metrics for this project." />
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <HeaderText text="02" />
            <Text text="Get their thoughts on the current navigation." />
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <HeaderText text="03" />
            <Text text="Get a better sense of what products drive the most impact and should be kept in the menu" />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f3f5f8] content-stretch flex items-center justify-center left-[70px] p-[16px] rounded-[10px] top-[552px] w-[661px]">
        <p className="basis-0 font-['Montserrat:Bold',sans-serif] font-bold grow leading-[26px] min-h-px min-w-px relative shrink-0 text-[#4f4f4f] text-[20px]">I didn’t get any objections as to why we needed a redesign, everyone was in alignment and at the end I got the go ahead which helped me proceed.</p>
      </div>
      <div className="absolute h-[789px] left-[800.02px] rounded-[10.724px] top-[128px] w-[1051.316px]" data-name="workshop 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10.724px] size-full" src={imgWorkshop1} />
      </div>
    </div>
  );
}