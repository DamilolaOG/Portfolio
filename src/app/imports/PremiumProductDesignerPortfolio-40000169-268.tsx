import imgImageWithFallback from "figma:asset/12bb14123e7c81748a01989520dad7246cca8574.png";
import imgImageWithFallback1 from "figma:asset/66f96a181bdf7430a3d83f2b36d61372551c46a3.png";
import imgImg from "figma:asset/78c21aca32a6d43a2967c87080f836280bab84c5.png";

function Section() {
  return <div className="h-0 shrink-0 w-full" data-name="Section" />;
}

function H1() {
  return (
    <div className="h-[46.797px] relative shrink-0 w-full" data-name="h2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[46.8px] left-0 not-italic text-[#171717] text-[36px] top-0 tracking-[0.0091px] whitespace-nowrap">Selected Works</p>
    </div>
  );
}

function P() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[34px] left-0 not-italic text-[#737373] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">A collection of projects where design meets impact</p>
    </div>
  );
}

function MotionDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[96.797px] items-start relative shrink-0 w-full" data-name="motion.div">
      <H1 />
      <P />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[468px] left-0 top-0 w-[624px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[468px] left-0 top-0 w-[624px]" data-name="Container" />;
}

function Div() {
  return (
    <div className="bg-[#f5f5f5] h-[468px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="div">
      <ImageWithFallback />
      <Container2 />
    </div>
  );
}

function H2() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#171717] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Bupa .co.uk</p>
    </div>
  );
}

function P1() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#737373] text-[18px] top-px tracking-[-0.4395px] w-[562px]">Redesigning the mega menu navigation to improve user findability and engagement</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[92px] items-start relative shrink-0 w-full" data-name="div">
      <H2 />
      <P1 />
    </div>
  );
}

function MotionDiv1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="motion.div">
      <Div />
      <Div1 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[468px] left-0 top-0 w-[624px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[rgba(0,0,0,0)] h-[468px] left-0 top-0 w-[624px]" data-name="Container" />;
}

function Div2() {
  return (
    <div className="bg-[#ddeef8] h-[468px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="div">
      <ImageWithFallback1 />
      <Container3 />
    </div>
  );
}

function H3() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="h3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#171717] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Bupa Blua</p>
    </div>
  );
}

function P2() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-0 not-italic text-[#737373] text-[18px] top-px tracking-[-0.4395px] w-[619px]">{`Transforming BUPA's wellbeing app engagement through personalisation and strategic UX improvements`}</p>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[92px] items-start relative shrink-0 w-full" data-name="div">
      <H3 />
      <P2 />
    </div>
  );
}

function MotionDiv2() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="motion.div">
      <Div2 />
      <Div3 />
    </div>
  );
}

function Link() {
  return <div className="col-1 justify-self-stretch row-2 self-stretch shrink-0" data-name="Link" />;
}

function Link1() {
  return <div className="col-2 justify-self-stretch row-2 self-stretch shrink-0" data-name="Link" />;
}

function Container1() {
  return (
    <div className="gap-x-[32px] gap-y-[64px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[1232px] relative shrink-0 w-full" data-name="Container">
      <MotionDiv1 />
      <MotionDiv2 />
      <Link />
      <Link1 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[1516.797px] items-start left-[130.5px] top-[915px] w-[1280px]" data-name="Section">
      <MotionDiv />
      <Container1 />
    </div>
  );
}

function Div4() {
  return <div className="h-[248px] shrink-0 w-full" data-name="div" />;
}

function Footer() {
  return (
    <div className="absolute bg-[#fafafa] content-stretch flex flex-col h-[482px] items-start left-0 pt-[65px] px-[178.5px] top-[2628.8px] w-[1541px]" data-name="footer">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <Div4 />
    </div>
  );
}

function MotionDiv3() {
  return <div className="absolute bg-[#bedbff] blur-[64px] left-[385.25px] opacity-38 rounded-[33554400px] size-[256px] top-[261.54px]" data-name="motion.div" />;
}

function MotionDiv4() {
  return <div className="absolute bg-[#fee685] blur-[64px] left-[770.5px] opacity-39 rounded-[33554400px] size-[384px] top-[332.96px]" data-name="motion.div" />;
}

function H() {
  return (
    <div className="h-[76.797px] relative shrink-0 w-[1184px]" data-name="h1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[76.8px] left-0 not-italic text-[#171717] text-[60px] top-0 tracking-[-0.7975px] whitespace-nowrap">{`Hello there 👋🏽, I'm Dami.`}</p>
      </div>
    </div>
  );
}

function H4() {
  return (
    <div className="h-[153.594px] relative shrink-0 w-[1184px]" data-name="h1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[76.8px] left-0 not-italic text-[#171717] text-[60px] top-0 tracking-[-0.7975px] w-[1149px]">I design experiences that feel easy to use, yet drive business outcomes.</p>
      </div>
    </div>
  );
}

function H5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1184px]" data-name="h1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#171717] text-[60px] top-0 tracking-[-0.7975px] w-[1046px]">
          <span className="leading-[76.8px]">{`I'm currently a senior product designer at `}</span>
          <span className="leading-[76.8px] text-[#0074bf]">Bupa</span>
          <span className="leading-[76.8px]">.</span>
        </p>
      </div>
    </div>
  );
}

function MotionDiv5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[415.984px] items-start left-[178.5px] top-[242px] w-[1184px]" data-name="motion.div">
      <H />
      <H4 />
      <H5 />
    </div>
  );
}

function Img() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#ffeb9c] relative rounded-[33554400px] shrink-0 size-[64px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Img />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[42.094px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#737373] text-[16px] top-0 tracking-[-0.625px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56.703px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#737373] text-[16px] top-0 tracking-[-0.625px] whitespace-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56.391px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#737373] text-[16px] top-0 tracking-[-0.625px] whitespace-nowrap">Resume</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#171717] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[33554400px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[24px] not-italic text-[14px] text-white top-[8px] tracking-[-0.3008px] whitespace-nowrap">{`Let's Talk`}</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[360.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute content-stretch flex h-[112px] items-center justify-between left-[130.5px] px-[48px] top-[36px] w-[1280px]" data-name="div">
      <Link2 />
      <Container4 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute h-[867px] left-0 overflow-clip top-0 w-[1541px]" data-name="section" style={{ backgroundImage: "linear-gradient(161.904deg, rgb(250, 250, 250) 7.7009%, rgb(255, 255, 255) 50%, rgb(245, 245, 245) 92.299%)" }}>
      <MotionDiv3 />
      <MotionDiv4 />
      <MotionDiv5 />
      <Div5 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[3110.797px] relative shrink-0 w-full" data-name="Container">
      <Section1 />
      <Footer />
      <Section2 />
    </div>
  );
}

export default function PremiumProductDesignerPortfolio() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Premium Product Designer Portfolio">
      <Section />
      <Container />
    </div>
  );
}