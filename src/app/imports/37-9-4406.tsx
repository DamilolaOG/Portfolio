import { imgRectangle2, imgRectangle3, imgRectangle4 } from "./svg-seux1";

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] bg-gradient-to-r from-[#a90836] h-[67px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.242px_12.904px] mask-size-[110.172px_40.992px] ml-0 mt-0 to-[#63132a] to-[102.8%] w-[115px]" style={{ maskImage: `url('${imgRectangle2}')` }} />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute bg-[#f1f1f1] box-border content-stretch flex flex-col gap-[24px] h-[370px] items-start left-[108px] px-[24px] py-[16px] top-[294px] w-[510px]">
      <MaskGroup />
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[40px] min-w-full not-italic relative shrink-0 text-[32px] text-black w-[min-content]">{`of Users prefer to have their data auto populated rather than having to enter personal data. `}</p>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] bg-gradient-to-r from-[#a90836] h-[67px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.633px_12.904px] mask-size-[115.906px_40.992px] ml-0 mt-0 to-[#63132a] to-[102.8%] w-[121px]" style={{ maskImage: `url('${imgRectangle3}')` }} />
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute bg-[#f1f1f1] box-border content-stretch flex flex-col gap-[24px] h-[370px] items-start left-[678px] px-[24px] py-[16px] top-[294px] w-[510px]">
      <MaskGroup1 />
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[40px] not-italic relative shrink-0 text-[32px] text-black w-[472px] whitespace-pre-wrap">{`of users who have used  platforms with a similar system reported an overall positive customer experience.`}</p>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] bg-gradient-to-r from-[#a90836] h-[67px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.242px_12.904px] mask-size-[113.18px_40.992px] ml-0 mt-0 to-[#63132a] to-[102.8%] w-[118px]" style={{ maskImage: `url('${imgRectangle4}')` }} />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bg-[#f1f1f1] box-border content-stretch flex flex-col gap-[24px] h-[370px] items-start leading-[0] left-[1248px] px-[24px] py-[16px] top-[294px] w-[510px]">
      <MaskGroup2 />
      <div className="font-['Montserrat:Regular',_sans-serif] leading-[40px] not-italic relative shrink-0 text-[32px] text-black w-[466px]">
        <p className="mb-[19px]">of businesses believe that integrating an API for easy data retrieval helps prevent human errors and speeds up the signup process.</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

export default function Component37() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] size-full" data-name="37">
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[66px] left-[108px] not-italic text-[36px] text-black text-nowrap top-[113px] whitespace-pre">Business case for data retrieval using BVN API</p>
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}