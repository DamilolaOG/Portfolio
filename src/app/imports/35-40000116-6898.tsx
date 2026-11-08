import imgAction1 from "figma:asset/d160afe66f2cd34a9ccc10c1383324f836c6a241.png";
import imgAccept1 from "figma:asset/1dff896ea1a39ac85bd5b0292bded11fd07f6569.png";
import imgTelephone1 from "figma:asset/a7886c55528f6e197789a4b7d647dd63cdc250d2.png";
import imgRequest1 from "figma:asset/4a213a7c2c2e7d2c4eddae6d2fa9b7b81f2bbfd6.png";

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="35">
      <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold leading-[1.35] left-[166px] text-[64px] text-black text-nowrap top-[115px] tracking-[0.2891px]">{`Prototype Takeaways `}</p>
      <div className="absolute bg-[#ddedf8] h-[631px] left-[168px] top-[311px] w-[366px]" />
      <div className="absolute bg-[#fcecf4] h-[631px] left-[549px] top-[311px] w-[366px]" />
      <div className="absolute bg-[#fbeacf] h-[631px] left-[930px] top-[311px] w-[366px]" />
      <div className="absolute bg-[#f4f0fe] h-[631px] left-[1311px] top-[311px] w-[366px]" />
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.3] left-[197px] not-italic text-[24px] text-black top-[372px] w-[323px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-[5px]">
          Users feel the mega menu is accessible for all.
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="mb-[5px]">
          {`The updates made to the `}
          <br aria-hidden="true" />
          {`mega menu have been well received by users. The menu is accessible, easy to read, and understood by people using it. `}
        </p>
        <p className="mb-[5px]">&nbsp;</p>
        <p className="mb-[5px]">{`No accessibility concerns were highlighted by users with low vision or dyslexia in terms of the visuals and wording. `}</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.3] left-[584px] not-italic text-[24px] text-black top-[372px] w-[298px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold mb-[5px]">
          {`Users want a menu that is actionable over informational. `}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p>{`Although it’s important for users to understand what they are booking when it comes to Health Insurance, they also want the main menu to ‘get to the point’ and take them to where they need to be quickly without wading through options. `}</p>
      </div>
      <div className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.3] left-[957px] not-italic text-[24px] text-black top-[372px] w-[323px]">
        <p className="mb-[5px]">
          {`The differences between Mobile and Desktop need more consideration. `}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">{`Users exploring the Mobile prototype were more frustrated compared with Desktop users, and this is due to the sub-headings not being immediately on display for them. Often Mobile users would look for items through process of elimination and click through all the categories. `}</p>
      </div>
      <div className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.3] left-[1352px] not-italic text-[24px] text-black top-[372px] w-[296px]">
        <p className="mb-[5px]">
          {`Users don’t always know what Health Insurance means, and we can’t assume they do. `}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal">{`The prototype test and Card Sort have shown us that there is a limited understanding of what Health Insurance really is and what it includes (as well as PAYG and Subscriptions). We need to be mindful of this with everything we create on the Bupa website.  `}</p>
      </div>
      <div className="absolute left-[675px] size-[96px] top-[276px]" data-name="action 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAction1} />
      </div>
      <div className="absolute left-[297px] size-[69px] top-[276px]" data-name="accept 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAccept1} />
      </div>
      <div className="absolute left-[1080px] size-[62px] top-[283px]" data-name="telephone 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTelephone1} />
      </div>
      <div className="absolute left-[1455px] size-[78px] top-[276px]" data-name="request 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRequest1} />
      </div>
    </div>
  );
}