export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="42">
      <div className="absolute contents left-[82px] top-[77px]">
        <div className="absolute bg-[#e8ecf2] h-[477px] left-[82px] rounded-[17px] top-[77px] w-[777px]" />
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.32] left-[146px] not-italic text-[36px] text-black text-nowrap top-[113px] tracking-[-0.72px]">Challenges</p>
        <div className="absolute content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-start leading-[0] left-[146px] not-italic text-[#484848] text-[24px] top-[186px] tracking-[-0.24px]">
          <ul className="block relative shrink-0 w-[649px]">
            <li className="ms-[36px]">
              <span className="leading-[1.36]">Stakeholders withheld feedback until late in the design process, only engaging after realising the impact of changes</span>
            </li>
          </ul>
          <ul className="block relative shrink-0 w-[668px]">
            <li className="ms-[36px]">
              <span className="leading-[1.36]">Balancing business priorities (e.g., SEO) with user needs. what is a better experience vs what is best for our SEO ranking</span>
            </li>
          </ul>
          <ul className="block relative shrink-0 text-nowrap">
            <li className="ms-[36px]">
              <span className="leading-[1.36]">Tight timeline impacting process.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute contents left-[910px] top-[71px]">
        <div className="absolute contents left-[910px] top-[71px]">
          <div className="absolute bg-[#e8ecf2] h-[483px] left-[910px] rounded-[17px] top-[71px] w-[935px]" />
        </div>
        <div className="absolute contents left-[947px] top-[105px]">
          <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.32] left-[947px] not-italic text-[36px] text-black text-nowrap top-[105px] tracking-[-0.72px]">{`Learnings & takeaways`}</p>
        </div>
        <ul className="absolute block font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[947px] not-italic text-[#484848] text-[26px] top-[186px] w-[776px]">
          <li className="mb-0 ms-[39px]">
            <span className="leading-[1.61]">Collaboration with diverse teams was critical. Success came from the synergy of ideas, not just individual expertise.</span>
          </li>
          <li className="mb-0 ms-[39px]">
            <span className="leading-[1.61]">Involve stakeholders early and often in key design decisions, such as adding or removing content.</span>
          </li>
          <li className="ms-[39px]">
            <span className="leading-[1.61]">Engage users throughout: uncover pain points and validate solutions to keep them at the center of the design process.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}