import imgRectangle1 from "figma:asset/e068813df176478f56fe443bed7e1f8c5156a820.png";
import { imgRectangle2, imgRectangle3 } from "./svg-90xqm";

function Group15() {
  return (
    <div className="absolute contents left-1/2 top-[45px] translate-x-[-50%]">
      <div className="absolute backdrop-blur-[22.606px] backdrop-filter bg-[rgba(36,36,36,0.5)] h-[989px] left-[128px] rounded-[28.935px] top-[45px] w-[1664px]" />
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[86.806px] left-1/2 not-italic text-[45px] text-center text-nowrap text-white top-[157px] tracking-[-0.9px] translate-x-[-50%] whitespace-pre">Synthesis of analysis</p>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] bg-[#a90836] h-[59px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.227px_8.165px] mask-size-[166.5px_31.16px] ml-[-0.067px] mt-[-0.045px] w-[184px]" style={{ maskImage: `url('${imgRectangle2}')` }} />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-[#f1f1f1] box-border content-stretch flex flex-col gap-[21.067px] h-[431px] items-start leading-[0] left-[992px] px-[21.067px] py-[20px] rounded-[5px] shadow-[0px_14px_48px_0px_rgba(146,142,142,0.25)] top-[444px] w-[548px]">
      <MaskGroup />
      <ul className="block font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[30px] text-black w-[487px]">
        <li className="mb-[11px] ms-[45px]">
          <span className="leading-[38px]">Using complex authentication process to validate users.</span>
        </li>
        <li className="ms-[45px]">
          <span className="leading-[38px]">Using ambiguous language to communicate input fields during customer profiling.</span>
        </li>
      </ul>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] bg-[#a90836] h-[59px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.227px_9.365px] mask-size-[110.293px_29.96px] ml-[-0.067px] mt-[-0.045px] w-[184px]" style={{ maskImage: `url('${imgRectangle3}')` }} />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-[#f1f1f1] box-border content-stretch flex flex-col gap-[21.067px] h-[431px] items-start leading-[0] left-[381px] px-[21.067px] py-[20px] rounded-[5px] shadow-[0px_14px_48px_0px_rgba(146,142,142,0.25)] top-[444px] w-[548px]">
      <MaskGroup1 />
      <ul className="block font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[30px] text-black w-[487px]">
        <li className="mb-[11px] ms-[45px]">
          <span className="leading-[38px]">{`Use clearly defined form fields. `}</span>
        </li>
        <li className="mb-[11px] ms-[45px]">
          <span className="leading-[38px]">Use standard account security measures.</span>
        </li>
        <li className="ms-[45px] whitespace-pre-wrap">
          <span className="leading-[38px]">
            {`Use Clear error messages to  communicate instructions. `}
            <br aria-hidden="true" />
            <br aria-hidden="true" />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default function Component19() {
  return (
    <div className="bg-white relative size-full" data-name="19">
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
      <p className="absolute font-['Helvetica:Bold',_sans-serif] leading-[79.239px] left-[605px] not-italic text-[56.55px] text-center text-nowrap text-white top-[650px] tracking-[-1.131px] translate-x-[-50%] whitespace-pre">&nbsp;</p>
      <p className="absolute font-['Montserrat:Medium',_sans-serif] leading-[normal] left-[calc(50%+0.5px)] not-italic text-[32px] text-center text-white top-[251px] translate-x-[-50%] w-[1057px]">Based on this research, I have compiled a summary of the successful strategies employed by our competitors that we should consider adopting, as well as the pitfalls to avoid.</p>
      <Frame24 />
      <Frame25 />
    </div>
  );
}