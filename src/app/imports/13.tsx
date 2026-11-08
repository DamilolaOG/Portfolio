import svgPaths from "./svg-vczqnptdz3";
import imgGroup105811 from "figma:asset/180a4a4ae336b03b8964cab037ccfd577bc94ce1.png";
import imgOldInterface1 from "figma:asset/9c4d6d7e57e97e1f4c4620907dbe49905718fb4f.png";
import imgGroup105821 from "figma:asset/76ebef2be79e223e0826d6a84ae399a03efdc10e.png";

function Group10688() {
  return (
    <div className="absolute contents left-[954px] top-[46px]">
      <div className="absolute h-[858.312px] left-[954px] top-[46px] w-[450.271px]" data-name="Group 10581 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-206.38%] max-w-none top-0 w-[306.38%]" src={imgGroup105811} />
        </div>
      </div>
    </div>
  );
}

function Visuals() {
  return (
    <div className="absolute bg-white h-[931px] left-[25px] overflow-clip rounded-tl-[26.668px] rounded-tr-[26.668px] top-[167px] w-[1838px]" data-name="Visuals">
      <div className="absolute h-[920px] left-[-6px] top-[35px] w-[514px]" data-name="old interface 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[411.91%]" src={imgOldInterface1} />
        </div>
      </div>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[72px] left-[55px] not-italic text-[#172b4d] text-[24px] text-nowrap top-[-10px] whitespace-pre">Current Interface</p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[72px] left-[997px] not-italic text-[#172b4d] text-[24px] text-nowrap top-[-10px] whitespace-pre">New design</p>
      <Group10688 />
      <div className="absolute h-[858.629px] left-[1404px] top-[46px] w-[453.277px]" data-name="Group 10582 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[304.33%]" src={imgGroup105821} />
        </div>
      </div>
      <div className="absolute h-[605.893px] left-[518px] pointer-events-none top-[255px] w-[390px]" data-name="old interface 1">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[133%] left-[-245.66%] max-w-none top-[-19.38%] w-[475.77%]" src={imgOldInterface1} />
        </div>
        <div aria-hidden="true" className="absolute border-[#bca9a9] border-[0.995px_0px_0px] border-solid inset-0 shadow-[0px_16px_32px_0px_rgba(176,170,171,0.25)]" />
      </div>
      <div className="absolute h-[56px] left-[508px] top-[191px] w-[197px]">
        <div className="absolute bottom-0 left-0 right-[-0.51%] top-[-1.79%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 198 57">
            <path d={svgPaths.p31cc8500} id="Vector 67" stroke="var(--stroke-0, #9F083E)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[72px] left-[536px] not-italic text-[24px] text-black text-nowrap top-[126px] whitespace-pre">Scroll was Too Long</p>
    </div>
  );
}

function Frame1550() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[64px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="var(--fill-0, #A90836)" fillOpacity="0.15" id="Ellipse 1" r="32" />
        </svg>
      </div>
      <p className="absolute font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] left-[calc(50%-18px)] text-[#a90836] text-[32px] text-nowrap top-[calc(50%-19px)] tracking-[1.6px] whitespace-pre">01</p>
    </div>
  );
}

function Frame1573() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[76px] top-[71px]">
      <Frame1550 />
      <p className="font-['Montserrat:Bold',_sans-serif] leading-[86.806px] not-italic relative shrink-0 text-[32px] text-black text-center text-nowrap tracking-[-0.64px] whitespace-pre">Extensive data profiling</p>
    </div>
  );
}

export default function Component13() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] size-full" data-name="13">
      <Visuals />
      <Frame1573 />
    </div>
  );
}