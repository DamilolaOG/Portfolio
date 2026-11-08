import imgImage14 from "figma:asset/de22cb36849d189bbfea51378c9b83d02d9cc6f3.png";

function Frame1505() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p className="font-['Montserrat:Bold',_sans-serif] leading-[72px] not-italic relative shrink-0 text-[#172b4d] text-[32px] text-nowrap whitespace-pre">{`Data & Analytics`}</p>
    </div>
  );
}

function IntroContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[103px] top-[173px]" data-name="intro content">
      <Frame1505 />
      <ul className="block font-['Montserrat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#474747] text-[32px] w-[658px]">
        <li className="ms-[48px]">
          <span className="leading-[43.25px]">Whilst doing desk research I noticed the low conversion rates during customer onboarding.</span>
        </li>
      </ul>
      <ul className="block font-['Montserrat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#474747] text-[32px] w-[658px]">
        <li className="ms-[48px] whitespace-pre-wrap">
          <span className="leading-[43.25px]">{`I saw an opportunity to expose the areas of friction during the data collection phase.  `}</span>
        </li>
      </ul>
      <ul className="block font-['Montserrat:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#474747] text-[32px] w-[658px]">
        <li className="ms-[48px]">
          <span className="leading-[43.25px]">The end goal became to Optimise the onboarding journey to serve as a hook for new customers.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame1566() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[1692px] px-[10px] py-[6px] rounded-[3px] top-[142px]">
      <div aria-hidden="true" className="absolute border-[#b9b9b9] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[32px] not-italic relative shrink-0 text-[#979797] text-[16px] text-nowrap whitespace-pre">Jan 2019 - Jan 2020</p>
    </div>
  );
}

function Group10682() {
  return (
    <div className="absolute contents left-[788px] top-[60px]">
      <div className="absolute h-[828.945px] left-[788px] rounded-bl-[16.377px] rounded-tl-[16.377px] shadow-[0px_12.068px_41.375px_0px_rgba(146,142,142,0.25)] top-[60px] w-[1132px]" data-name="image 14">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[16.377px] rounded-tl-[16.377px]">
          <img alt="" className="absolute h-[102.95%] left-[-0.22%] max-w-none top-[0.13%] w-[101.31%]" src={imgImage14} />
        </div>
      </div>
      <Frame1566 />
    </div>
  );
}

export default function Component7() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] size-full" data-name="7">
      <IntroContent />
      <Group10682 />
    </div>
  );
}