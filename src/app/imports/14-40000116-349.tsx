type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start leading-[1.35] relative shrink-0 text-nowrap w-full">
      <p className="relative shrink-0 text-[#9f9f9f] text-[30px]">{text}</p>
      <p className="relative shrink-0 text-[34.667px] text-black">{text1}</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="14">
      <div className="absolute content-stretch flex flex-col items-start left-[90px] top-[97px] w-[730.667px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[730.667px]">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label ⇵ Content">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Headline ⇵ Text">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[53.333px] text-black text-nowrap">Problems identified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[86px] items-start left-[99px] top-[236px] w-[803px]">
        <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[32px] text-black w-full">Business</p>
        <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full">
          <Helper text="01" text1="Low engagement with the mega menu" />
          <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start leading-[1.35] relative shrink-0">
            <p className="relative shrink-0 text-[#9f9f9f] text-[30px] text-nowrap">02</p>
            <p className="relative shrink-0 text-[34.667px] text-black w-[681px]">High drop-offs could be leading to potential revenue loss.</p>
          </div>
          <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start relative shrink-0 text-nowrap w-full">
            <p className="leading-[1.35] relative shrink-0 text-[#9f9f9f] text-[30px]">03</p>
            <div className="leading-[1.35] relative shrink-0 text-[34.667px] text-black">
              <p className="mb-0">{`Low NPS (45) indicates poor customer `}</p>
              <p>experience.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[86px] items-start left-[1077px] top-[236px] w-[703px]">
        <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[32px] text-black w-full">User</p>
        <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full">
          <Helper text="01" text1="Unclear navigation structure" />
          <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start relative shrink-0 text-nowrap w-full">
            <p className="leading-[1.35] relative shrink-0 text-[#9f9f9f] text-[30px]">02</p>
            <div className="leading-[1.35] relative shrink-0 text-[34.667px] text-black">
              <p className="mb-0">{`Poor accessibility for users with vision `}</p>
              <p>impairment.</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start relative shrink-0 text-nowrap w-full">
            <p className="leading-[1.35] relative shrink-0 text-[#9f9f9f] text-[30px]">03</p>
            <div className="leading-[1.35] relative shrink-0 text-[34.667px] text-black">
              <p className="mb-0">{`Excessive use of ambiguous and broad `}</p>
              <p>clinical terms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}