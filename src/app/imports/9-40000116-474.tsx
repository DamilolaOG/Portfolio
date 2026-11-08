import imgScreenshot20250312At1755221 from "figma:asset/1aecdd532a7ab7357e102cff3ad41dbfe79d7d8c.png";
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
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
    <div className="bg-white relative size-full" data-name="9">
      <div className="absolute h-[841px] left-[759px] rounded-[10px] shadow-[0px_10px_30px_0px_rgba(126,126,126,0.25)] top-[106px] w-[1096px]" data-name="Screenshot 2025-03-12 at 17.55.22 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[123.31%] left-[-23%] max-w-none top-[-18.61%] w-[146.37%]" src={imgScreenshot20250312At1755221} />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[70px] top-[140px] w-[534px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label ⇵ Content">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[443px]" data-name="Headline ⇵ Text">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[44px] text-black w-[483px]">UX Heuristics</p>
              </div>
            </div>
          </div>
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[18px] text-black w-full">Conducted a UX heuristic evaluation to identify changes needed for improving the experience. Prioritised high-impact opportunity areas, including:</p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
            <HeaderText text="01" />
            <Text text="Information architecture" />
          </div>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
            <HeaderText text="02" />
            <Text text="Background contrast" />
          </div>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
            <HeaderText text="03" />
            <Text text="Search prominence" />
          </div>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
            <HeaderText text="04" />
            <Text text="Scroll behaviour" />
          </div>
        </div>
      </div>
    </div>
  );
}