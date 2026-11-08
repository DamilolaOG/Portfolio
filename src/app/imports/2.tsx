import svgPaths from "./svg-339z9ffilw";
import imgRectangle1 from "figma:asset/ab221121894dbb1376622316d44229f03547f45b.png";

function Group28() {
  return (
    <div className="absolute h-[56.976px] left-[928.55px] top-[358.05px] w-[61.08px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 57">
        <g id="Group 28">
          <path clipRule="evenodd" d={svgPaths.p22af0e00} fill="var(--fill-0, white)" fillRule="evenodd" id="logo" />
          <g id="Group 3">
            <path clipRule="evenodd" d={svgPaths.p1acd3b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Path" />
            <path clipRule="evenodd" d={svgPaths.p3ef2f600} fill="var(--fill-0, white)" fillRule="evenodd" id="Combined Shape" />
            <path clipRule="evenodd" d={svgPaths.p21293200} fill="var(--fill-0, white)" fillRule="evenodd" id="Path_2" />
            <path clipRule="evenodd" d={svgPaths.p1edc0200} fill="var(--fill-0, white)" fillRule="evenodd" id="Combined Shape_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[482px] top-[311px]">
      <div className="absolute backdrop-blur-[20.635px] backdrop-filter bg-[rgba(36,36,36,0.5)] h-[457.277px] left-[482px] rounded-[26.413px] top-[311px] w-[955px]" />
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[79.239px] left-[955px] not-italic text-[56.55px] text-center text-white top-[447px] tracking-[-1.131px] translate-x-[-50%] w-[828px]">Redesigning the onboarding process for Nigeria’s First Digital Bank, ALAT</p>
      <Group28 />
    </div>
  );
}

export default function Component2() {
  return (
    <div className="bg-white relative size-full" data-name="2">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.2610955238342285)+(var(--transform-inner-height)*0.9653129577636719)))] items-center justify-center left-[-637px] top-[-692.24px] w-[calc(1px*((var(--transform-inner-height)*0.2610955238342285)+(var(--transform-inner-width)*0.9653129577636719)))]" style={{ "--transform-inner-width": "3053.484375", "--transform-inner-height": "1607.34375" } as React.CSSProperties}>
        <div className="flex-none rotate-[344.865deg]">
          <div className="h-[1607.36px] relative w-[3053.49px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[129%] left-[-20.71%] max-w-none top-[-15.11%] w-[105.58%]" src={imgRectangle1} />
              </div>
              <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
            </div>
          </div>
        </div>
      </div>
      <Group15 />
    </div>
  );
}