export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="34">
      <div className="absolute bg-[#f3f5f8] border border-[#1b883c] border-solid h-[234px] left-[268px] top-[582px] w-[760px]" />
      <div className="absolute bg-[#f3f5f8] border border-[#1b883c] border-solid h-[186px] left-[268px] top-[363px] w-[1358px]" />
      <div className="absolute bg-[#f3f5f8] border border-[#1b883c] border-solid h-[366px] left-[1053px] top-[582px] w-[573px]" />
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[1.35] left-[166px] text-[64px] text-black text-nowrap top-[115px] tracking-[0.2891px]">Prototype testing</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[768px] not-italic text-[0px] text-black text-nowrap top-[390px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] mb-0 text-[30px]">20 users in total:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.5] text-[30px]">11 Desktop / 9 Mobile</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[1.5] text-[30px]">Mix of ages and genders</span>
          </li>
        </ul>
      </div>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[344px] not-italic text-[0px] text-black text-nowrap top-[608px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] mb-0 text-[30px]">Insurance</p>
        <p className="leading-[1.5] mb-0 text-[30px]">
          <span>{`Bupa health insurance members: `}</span>7
        </p>
        <p className="leading-[1.5] mb-0 text-[30px]">
          <span>{`No insurance or purchases with Bupa: `}</span>6
        </p>
        <p className="leading-[1.5] text-[30px]">
          <span>{`Competitor insurance member: `}</span>7
        </p>
      </div>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.5] left-[1175px] not-italic text-[0px] text-[30px] text-black text-nowrap top-[603px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-0">Accessibility</p>
        <p className="mb-0">Dyslexia: 7</p>
        <p className="mb-0">ADHD: 6</p>
        <p className="mb-0">Autism: 6</p>
        <p className="mb-0">Low vision: 3</p>
        <p className="mb-0">{`Assistive Screen Reader: 2 `}</p>
        <p>Colour blind: 1</p>
      </div>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36px] left-[166px] not-italic text-[24px] text-black top-[213px] w-[1598px]">{`For the prototype tests, it was important for us to include a range of people with different levels of understanding of Insurance / Bupa, as well as people with different needs and requirements. This is to ensure the menu is designed in a way that is inclusive of everyones needs. `}</p>
    </div>
  );
}