import imgScreenshot20240603At16341 from "figma:asset/5898a46b2aebcf5b2796a2277d23f7e25ef06252.png";
import imgScreenshot20240611At07061 from "figma:asset/a7af6858bc28dcf32bcff8b97e6f9da78c622342.png";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[1.35]">{children}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return <Wrapper>{text}</Wrapper>;
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
    <div className="bg-white relative size-full" data-name="3">
      <div className="absolute h-[577px] left-[848px] pointer-events-none rounded-[8px] top-[116px] w-[1011.651px]" data-name="Screenshot 2024-06-11 at 07.06 1">
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-[183.85%] left-[-98.28%] max-w-none top-[-17.61%] w-[250.49%]" src={imgScreenshot20240611At07061} />
        </div>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 rounded-[8px] shadow-[0px_10px_30px_0px_rgba(195,195,195,0.25)]" />
      </div>
      <div className="absolute h-[30.642px] left-[1642px] rounded-tr-[8px] shadow-[0px_10px_30px_0px_rgba(195,195,195,0.25)] top-[116.75px] w-[216.828px]" data-name="Screenshot 2024-06-11 at 07.06 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-tr-[8px]">
          <img alt="" className="absolute h-[3461.91%] left-[-1053.64%] max-w-none top-[-334.13%] w-[1168.73%]" src={imgScreenshot20240611At07061} />
        </div>
      </div>
      <div className="absolute contents left-[699px] top-[592px]">
        <div className="absolute h-[343px] left-[699px] pointer-events-none top-[592px] w-[725.336px]" data-name="Screenshot 2024-06-03 at 16.34 1">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[100.32%] left-0 max-w-none top-[-0.16%] w-[199.65%]" src={imgScreenshot20240603At16341} />
          </div>
          <div aria-hidden="true" className="absolute border-[#007d79] border-[1.927px_0px_1.927px_1.927px] border-solid inset-0" />
        </div>
        <div className="absolute h-[343px] left-[1424.74px] pointer-events-none top-[592px] w-[368.575px]" data-name="Screenshot 2024-06-03 at 16.34 2">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[100.32%] left-[-292.9%] max-w-none top-[-0.16%] w-[392.9%]" src={imgScreenshot20240603At16341} />
          </div>
          <div aria-hidden="true" className="absolute border-[#007d79] border-[1.927px_1.927px_1.927px_0px] border-solid inset-0" />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[70px] top-[140px] w-[534px]">
        <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0" data-name="Label ⇵ Content">
          <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[0px] text-[18px] text-black text-nowrap">
            <span>{`.co.uk `}</span>
            <span className="font-['Montserrat:Regular',sans-serif] font-normal">Nav optimisation</span>
          </p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[443px]" data-name="Headline ⇵ Text">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[44px] text-black w-[483px]">Project background</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <HeaderText text="01" />
            <Text text="The mega menu is a key means for customers find our healthcare products and services that meets their needs." />
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <HeaderText text="02" />
            <Wrapper>{`No research had been done in almost a decade! to see if the mega menu was still functional, or to  improve the look of it.`}</Wrapper>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <HeaderText text="05" />
            <Text text="The current design is inaccessible and flawed with poor information hierarchy (links are clustered and it’s hard to tell what is clickable or not)" />
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <HeaderText text="03" />
            <Text text="Data showed that roughly 6% of visitors where engaging with the Mega menu and search. More engagement = more conversion, How might we achieve this." />
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <HeaderText text="04" />
            <Wrapper>{`Improving the menu became part of a strategic optimisation to drive engagement. This  fed into our North star (making 500 CEX improvements per year)`}</Wrapper>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[105.883px] items-center left-[1718.12px] px-0 py-[49.821px] rounded-[12.455px] top-[817px] w-[62.868px]" data-name="zone">
        <div aria-hidden="true" className="absolute border-4 border-[#e03e1a] border-dashed inset-[-2px] pointer-events-none rounded-[14.455px]" />
        <div className="content-stretch flex items-center justify-end pl-0 pr-[33.214px] py-0 shrink-0 size-[66.428px]" data-name="l-offeset" />
      </div>
    </div>
  );
}