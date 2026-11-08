import svgPaths from "./svg-0khdvl7onm";
import imgIPhone16Pro from "figma:asset/85a8d4cb5dd8334894f69f8c4156fea900e1fc9a.png";
import imgFlouraCharacter from "figma:asset/53c8aac1468cc5235ab0f4eccb424c152866e206.png";

function Frame6() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[40px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-left">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-8.33%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
              <path d="M7 13L1 7L7 1" id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlouraCharacter() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[40px]" data-name="FlouraCharacter">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[100px]">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[100px] size-full" src={imgFlouraCharacter} />
        <div className="absolute bg-[rgba(255,255,255,0.2)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[100px]" />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[71.429px] shrink-0 size-[40px]" data-name="Container">
      <FlouraCharacter />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-[120px]">
      <Frame6 />
      <Container />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex gap-[4px] h-full items-center justify-center px-[12px] relative rounded-[100px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="recording-01">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p314ca900} id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['figtree:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[normal]">Speak to floura</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex h-full items-center justify-center relative rounded-[100px] shrink-0 w-[40px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="settings-01">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <g id="Icon">
                <path d={svgPaths.p2acf2900} stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p218c3700} stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0">
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-start justify-between left-[16px] top-[56px] w-[370px]">
      <Frame />
      <Frame5 />
    </div>
  );
}

function FlouraCharacter1() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[40px]" data-name="FlouraCharacter">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[100px]">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[100px] size-full" src={imgFlouraCharacter} />
        <div className="absolute bg-[rgba(255,255,255,0.2)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[100px]" />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[71.429px] shrink-0 size-[40px]" data-name="Container">
      <FlouraCharacter1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f9f9f8] text-[16px] tracking-[0.16px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Hi there! I'm your AI therapist companion.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`I'm here to listen, understand, and support you through whatever you're experiencing. Feel free to share what's on your mind, and we'll explore it together. How can I help you today?`}</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shadow-[0px_0.906px_2.719px_0px_rgba(0,0,0,0.1),0px_0.906px_1.813px_0px_rgba(0,0,0,0.1)] shrink-0 w-[293px]" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-end left-[16px] top-[129px]">
      <Container1 />
      <Container2 />
    </div>
  );
}

function FlouraCharacter2() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[40px]" data-name="FlouraCharacter">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[100px]">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[100px] size-full" src={imgFlouraCharacter} />
        <div className="absolute bg-[rgba(255,255,255,0.2)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[100px]" />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[71.429px] shrink-0 size-[40px]" data-name="Container">
      <FlouraCharacter2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f9f9f8] text-[16px] tracking-[0.16px] w-full">
        <p className="mb-0">I completely understand that heavy feeling in your chest, the fog about where to begin is something many people experience after a major loss like a job. It can shake your sense of stability and identity, so your mind and body are reacting in a very human way.</p>
        <p>Let’s slow this moment down a bit. Talk me through how that heaviness feels to you?</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#2b2b2b] content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shadow-[0px_0.906px_2.719px_0px_rgba(0,0,0,0.1),0px_0.906px_1.813px_0px_rgba(0,0,0,0.1)] shrink-0 w-[293px]" data-name="Container">
      <Frame8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-end left-[16px] top-[505px]">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#2b2b2b] text-[16px] tracking-[0.16px] w-full">{`Hey Floura, I’ve been feeling anxious and depressed since I lost my job. I wake up with my chest feeling heavy and not knowing where to start. `}</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#9fe870] content-stretch flex flex-col items-start left-[93px] p-[16px] rounded-[16px] shadow-[0px_0.906px_2.719px_0px_rgba(0,0,0,0.1),0px_0.906px_1.813px_0px_rgba(0,0,0,0.1)] top-[357px] w-[293px]" data-name="Container">
      <Frame9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#9fe870] content-stretch flex items-center justify-center p-[10px] relative rounded-[100px] shrink-0 size-[43px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="send-02">
        <div className="absolute inset-[11.33%_14.29%_9.78%_14.31%]" data-name="Icon">
          <div className="absolute inset-[-2.64%_-2.92%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.1365 19.9344">
              <g id="Icon">
                <path d={svgPaths.p3093c300} fill="var(--fill-0, #111111)" />
                <path d={svgPaths.p34259600} stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[43px] items-center left-[302px] top-[792px]">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="microphone-01">
        <div className="absolute inset-[8.33%_20.83%]" data-name="Icon">
          <div className="absolute inset-[-3.75%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 21.5">
              <path d={svgPaths.p213f3e00} id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame12 />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute content-stretch flex flex-col h-[59px] items-center justify-center left-[4px] pb-[3px] pl-[10px] top-0 w-[134px]" data-name="Left Side">
      <div className="h-[21px] relative rounded-[24px] shrink-0 w-[54px]" data-name="_StatusBar-time">
        <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[20px] leading-[21px] left-[27px] not-italic text-[#f9f9f8] text-[16px] text-center top-px tracking-[-0.32px] w-[54px]">9:41</p>
      </div>
    </div>
  );
}

function SignalWifiBattery() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Signal, Wifi, Battery">
      <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Icon / Mobile Signal">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p1ec31400} fill="var(--fill-0, #F9F9F8)" />
            <path d={svgPaths.p19f8d480} fill="var(--fill-0, #F9F9F8)" />
            <path d={svgPaths.p13f4aa00} fill="var(--fill-0, #F9F9F8)" />
            <path d={svgPaths.p1bfb7500} fill="var(--fill-0, #F9F9F8)" />
          </g>
        </svg>
      </div>
      <div className="h-[11.834px] relative shrink-0 w-[17px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11.8338">
          <path d={svgPaths.p17a4bf30} fill="var(--fill-0, #F9F9F8)" id="Wifi" />
        </svg>
      </div>
      <div className="h-[13px] relative shrink-0 w-[27.401px]" data-name="_StatusBar-battery">
        <div className="-translate-y-1/2 absolute h-[13px] left-0 right-[2.4px] top-1/2" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
            <path d={svgPaths.p3f827980} id="Outline" opacity="0.35" stroke="var(--stroke-0, #F9F9F8)" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[4.22px] right-0 top-[calc(50%+0.61px)] w-[1.401px]" data-name="Battery End">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.40119 4.22034">
            <path d={svgPaths.p237cb000} fill="var(--fill-0, #F9F9F8)" id="Battery End" opacity="0.4" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute h-[9px] left-[2px] right-[4.4px] top-1/2" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
            <path d={svgPaths.pa544c00} fill="var(--fill-0, #F9F9F8)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute content-stretch flex h-[59px] items-center justify-center left-[263px] pr-[11px] top-0 w-[134px]" data-name="Right Side">
      <SignalWifiBattery />
    </div>
  );
}

function IPhone16Pro() {
  return (
    <div className="absolute bg-[#020202] h-[874px] left-0 overflow-clip rounded-[60px] top-0 w-[402px]" data-name="iPhone 16 Pro - 19">
      <div className="absolute bg-[#111] h-[113px] left-0 top-0 w-[402px]" />
      <Frame1 />
      <Frame7 />
      <Frame11 />
      <Container5 />
      <div className="absolute bg-[#2b2b2b] content-stretch flex gap-[8px] items-center left-[16px] p-[16px] rounded-[100px] top-[788px] w-[370px]" data-name="Input fields">
        <div aria-hidden="true" className="absolute border border-[#2b2b2b] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".inputText">
          <div className="flex flex-[1_0_0] flex-col font-['figtree:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-ellipsis text-white whitespace-nowrap">
            <p className="leading-[normal] overflow-hidden">Type your message</p>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#2b2b2b] content-stretch flex gap-[8px] items-center left-[16px] p-[16px] rounded-[100px] top-[788px] w-[370px]" data-name="Input fields">
        <div aria-hidden="true" className="absolute border border-[#2b2b2b] border-solid inset-0 pointer-events-none rounded-[100px]" />
        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name=".inputText">
          <div className="flex flex-[1_0_0] flex-col font-['figtree:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[16px] text-ellipsis text-white whitespace-nowrap">
            <p className="leading-[normal] overflow-hidden">Type your message</p>
          </div>
        </div>
      </div>
      <Frame10 />
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default function Frame13() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-name="Home Screen">
        <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-name="Bezel">
          <div className="absolute h-[920px] left-[-24px] top-[-23px] w-[450px]" data-name="iPhone 16 Pro">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIPhone16Pro} />
          </div>
        </div>
      </div>
      <IPhone16Pro />
      <div className="-translate-x-1/2 absolute bg-white bottom-0 h-[4px] left-[calc(50%-0.5px)] rounded-[999px] w-[135px]" data-name="---" />
    </div>
  );
}