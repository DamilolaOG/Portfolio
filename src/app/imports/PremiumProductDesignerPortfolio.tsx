import imgImg from "figma:asset/78c21aca32a6d43a2967c87080f836280bab84c5.png";

function Section() {
  return <div className="absolute h-0 left-0 top-[72px] w-[1541px]" data-name="Section" />;
}

function Img() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#ffeb9c] relative rounded-[33554400px] shrink-0 size-[64px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Img />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[43.656px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#737373] text-[16px] top-0 tracking-[-0.3125px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.203px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#737373] text-[16px] top-0 tracking-[-0.3125px] whitespace-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58.266px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#737373] text-[16px] top-0 tracking-[-0.3125px] whitespace-nowrap">Resume</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[#171717] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[33554400px]" data-name="Link">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.1504px] whitespace-nowrap">{`Let's Talk`}</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[367.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex h-[72px] items-center justify-between left-[180px] top-[52px] w-[1183px]" data-name="Navigation">
      <Link />
      <Container1 />
    </div>
  );
}

function Div() {
  return (
    <div className="absolute h-[895px] left-0 top-0 w-[1541px]" data-name="div" style={{ backgroundImage: "linear-gradient(149.852deg, rgb(250, 250, 250) 0%, rgb(255, 255, 255) 50%, rgb(245, 245, 245) 100%)" }}>
      <Navigation />
    </div>
  );
}

function MotionDiv() {
  return <div className="absolute bg-[#bedbff] blur-[64px] left-[385.25px] opacity-37 rounded-[33554400px] size-[256px] top-[265.14px]" data-name="motion.div" />;
}

function MotionDiv1() {
  return <div className="absolute bg-[#fee685] blur-[64px] left-[771.75px] opacity-24 rounded-[33554400px] size-[384px] top-[313.73px]" data-name="motion.div" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[76.8px] not-italic relative shrink-0 text-[#171717] text-[60px] tracking-[-1.0612px] whitespace-nowrap">{`Hello there 👋🏽, I'm Dami.`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[76.8px] min-h-px min-w-px not-italic relative text-[#171717] text-[60px] tracking-[-1.0612px]">I design experiences that feel easy to use, yet drive business outcomes.</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] min-h-px min-w-px not-italic relative text-[#171717] text-[0px] text-[60px] tracking-[-1.0612px]">
        <span className="leading-[76.8px]">{`I'm currently a senior product designer at `}</span>
        <span className="leading-[76.8px] text-[#0074bf]">Bupa</span>
        <span className="leading-[76.8px]">.</span>
      </p>
    </div>
  );
}

function H() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[180px] top-[215px] w-[1183px]" data-name="h1">
      <Frame2 />
      <Frame1 />
      <Frame />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[895px] left-0 overflow-clip top-0 w-[1541px]" data-name="section">
      <Div />
      <MotionDiv />
      <MotionDiv1 />
      <H />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[883px] left-0 top-0 w-[1541px]" data-name="Container">
      <Section1 />
    </div>
  );
}

export default function PremiumProductDesignerPortfolio() {
  return (
    <div className="bg-white relative size-full" data-name="Premium Product Designer Portfolio">
      <Section />
      <Container />
    </div>
  );
}