import imgOldInterface1 from "figma:asset/9c4d6d7e57e97e1f4c4620907dbe49905718fb4f.png";
import imgGroup105821 from "figma:asset/76ebef2be79e223e0826d6a84ae399a03efdc10e.png";

function Frame1550() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[64px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="var(--fill-0, #A90836)" fillOpacity="0.15" id="Ellipse 1" r="32" />
        </svg>
      </div>
      <p className="absolute font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] left-[calc(50%-20px)] text-[#a90836] text-[32px] text-nowrap top-[calc(50%-19px)] tracking-[1.6px] whitespace-pre">03</p>
    </div>
  );
}

function Frame1573() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[76px] top-[25px]">
      <Frame1550 />
      <p className="font-['Montserrat:Bold',_sans-serif] leading-[62px] not-italic relative shrink-0 text-[32px] text-black text-center text-nowrap whitespace-pre">{`Lack of structure and help with data collection. `}</p>
    </div>
  );
}

function Visuals() {
  return (
    <div className="absolute bg-white h-[966.723px] left-0 overflow-clip rounded-tl-[26.668px] rounded-tr-[26.668px] top-[57px] w-[1919px]" data-name="Visuals">
      <Frame1573 />
    </div>
  );
}

function Visuals1() {
  return (
    <div className="absolute bg-white h-[931px] left-[25px] overflow-clip rounded-tl-[26.668px] rounded-tr-[26.668px] top-[167px] w-[1838px]" data-name="Visuals">
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[72px] left-[55px] not-italic text-[#172b4d] text-[24px] text-nowrap top-[-10px] whitespace-pre">Current Interface</p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[72px] left-[977px] not-italic text-[#172b4d] text-[24px] text-nowrap top-[-10px] whitespace-pre">New design</p>
      <div className="absolute h-[925px] left-[13px] top-[35px] w-[556px]" data-name="old interface 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-282.96%] max-w-none top-0 w-[382.96%]" src={imgOldInterface1} />
        </div>
      </div>
      <div className="absolute h-[861px] left-[919px] top-[46px] w-[928px]" data-name="Group 10582 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-49.08%] max-w-none top-0 w-[149.08%]" src={imgGroup105821} />
        </div>
      </div>
    </div>
  );
}

export default function Component15() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] size-full" data-name="15">
      <Visuals />
      <Visuals1 />
    </div>
  );
}