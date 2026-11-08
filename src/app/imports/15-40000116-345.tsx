type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.35] relative shrink-0 text-[34.667px] w-full">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-nowrap">{text}</p>
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold min-w-full relative shrink-0 w-[min-content]">{text1}</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="15">
      <div className="absolute content-stretch flex flex-col items-start left-[70px] top-[140px] w-[730.667px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label ⇵ Content">
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Headline ⇵ Text">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[53.333px] text-black text-nowrap">Success metrics</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[540px] items-center left-[70px] top-[360.67px]">
        <div className="content-stretch flex flex-col gap-[32px] h-full items-start relative shrink-0 text-black">
          <Helper text="01" text1="Improved User Experience" />
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[21.333px] w-[389.333px]">This was our Northstar aligning with Bupa’s overarching strategy to encourage self service, and reduce call centre costs.</p>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[540px] items-center left-[514.33px] top-[360.67px]">
        <div className="content-stretch flex flex-col gap-[32px] h-full items-start relative shrink-0 text-black">
          <div className="content-stretch flex flex-col items-start leading-[1.35] relative shrink-0 text-[34.667px] w-full">
            <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-nowrap">02</p>
            <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold relative shrink-0 w-[331px]">Higher conversion via increased CTR</p>
          </div>
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[21.333px] w-[389.333px]">{`Make it easier for customers to find products on the menu to improve the chances of faster checkouts. `}</p>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[540px] items-center left-[1403px] top-[360.67px]">
        <div className="content-stretch flex flex-col gap-[32px] h-full items-start relative shrink-0 text-black">
          <div className="content-stretch flex flex-col items-start leading-[1.35] relative shrink-0 text-[34.667px] w-full">
            <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-nowrap">04</p>
            <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold min-w-full relative shrink-0 w-[min-content]">{`Improve NPS 45>60`}</p>
          </div>
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[21.333px] w-[433.333px]">{`A better experience would help Increase our Nps. More promoters  equals more referrals.`}</p>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[540px] items-center left-[958.67px] top-[360.67px]">
        <div className="content-stretch flex flex-col gap-[32px] h-full items-start relative shrink-0 text-black">
          <Helper text="03" text1="Reduce drop offs" />
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.4] relative shrink-0 text-[21.333px] w-[389.333px]">{`Clearer navigation would reduce friction which may otherwise make us lose customers to competitors. `}</p>
        </div>
      </div>
    </div>
  );
}