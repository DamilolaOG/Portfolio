import imgGroup105981 from "figma:asset/56978f628232d12de67153d05167dac72bcfe819.png";
import imgGroup105811 from "figma:asset/180a4a4ae336b03b8964cab037ccfd577bc94ce1.png";
import imgGroup105971 from "figma:asset/99da3aa34b86420d89a9066144f6faf41f0fe738.png";

function Group10621() {
  return (
    <div className="absolute contents h-[calc(1px*((var(--transform-inner-width)*0.5)+(var(--transform-inner-height)*0.8660253882408142)))] left-[728px] top-[269.77px] w-[calc(1px*((var(--transform-inner-height)*0.5)+(var(--transform-inner-width)*0.8660253882408142)))]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.5)+(var(--transform-inner-height)*0.8660253882408142)))] items-center justify-center left-[728px] top-[269.77px] w-[calc(1px*((var(--transform-inner-height)*0.5)+(var(--transform-inner-width)*0.8660253882408142)))]" style={{ "--transform-inner-width": "1206.03125", "--transform-inner-height": "749.953125" } as React.CSSProperties}>
        <div className="flex-none rotate-[330deg]">
          <div className="h-[749.968px] relative w-[1206.04px]" data-name="Group 10598 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup105981} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Group10620() {
  return (
    <div className="absolute contents h-[calc(1px*((var(--transform-inner-width)*0.5)+(var(--transform-inner-height)*0.8660253882408142)))] left-[728px] top-[269.77px] w-[calc(1px*((var(--transform-inner-height)*0.5)+(var(--transform-inner-width)*0.8660253882408142)))]">
      <Group10621 />
    </div>
  );
}

function Group10646() {
  return (
    <div className="absolute contents left-[663px] top-[-414px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.5)+(var(--transform-inner-height)*0.8660253882408142)))] items-center justify-center left-[663px] top-[-414px] w-[calc(1px*((var(--transform-inner-height)*0.5)+(var(--transform-inner-width)*0.8660253882408142)))]" style={{ "--transform-inner-width": "1085.09375", "--transform-inner-height": "675.125" } as React.CSSProperties}>
        <div className="flex-none rotate-[330deg]">
          <div className="h-[675.132px] relative w-[1085.1px]" data-name="Group 10581 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup105811} />
          </div>
        </div>
      </div>
      <Group10620 />
    </div>
  );
}

function Frame1505() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Bold',_sans-serif] gap-[23.58px] items-start leading-[106.109px] relative shrink-0 text-[#172b4d]">
      <p className="relative shrink-0 text-[32px] w-[736.871px]">Why the redesign?</p>
      <p className="relative shrink-0 text-[64px] w-[736.871px]">Problem Background</p>
    </div>
  );
}

function IntroContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.58px] items-start left-[75px] not-italic top-[calc(50%-0.42px)] translate-y-[-50%]" data-name="intro content">
      <Frame1505 />
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[53.7px] relative shrink-0 text-[#474747] text-[40px] w-[712px]">Alat, the first digital bank in Nigeria wanted to increase customer acquisition as a means of boosting company revenue.</p>
    </div>
  );
}

export default function Component3() {
  return (
    <div className="bg-white relative size-full" data-name="3">
      <Group10646 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.5)+(var(--transform-inner-height)*0.8660253882408142)))] items-center justify-center left-[1079px] top-[459px] w-[calc(1px*((var(--transform-inner-height)*0.5)+(var(--transform-inner-width)*0.8660253882408142)))]" style={{ "--transform-inner-width": "405.328125", "--transform-inner-height": "735.84375" } as React.CSSProperties}>
        <div className="flex-none rotate-[330deg]">
          <div className="h-[735.849px] relative w-[405.341px]" data-name="Group 10597 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[291.94%]" src={imgGroup105971} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.5)+(var(--transform-inner-height)*0.8660253882408142)))] items-center justify-center left-[1762px] top-[67px] w-[calc(1px*((var(--transform-inner-height)*0.5)+(var(--transform-inner-width)*0.8660253882408142)))]" style={{ "--transform-inner-width": "405.328125", "--transform-inner-height": "735.84375" } as React.CSSProperties}>
        <div className="flex-none rotate-[330deg]">
          <div className="h-[735.849px] relative w-[405.341px]" data-name="Group 10597 2">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[291.94%]" src={imgGroup105971} />
            </div>
          </div>
        </div>
      </div>
      <IntroContent />
    </div>
  );
}