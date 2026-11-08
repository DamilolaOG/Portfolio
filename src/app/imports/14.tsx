import svgPaths from "./svg-ehutmyau16";
import imgGroup105812 from "figma:asset/180a4a4ae336b03b8964cab037ccfd577bc94ce1.png";
import imgOldInterface1 from "figma:asset/9c4d6d7e57e97e1f4c4620907dbe49905718fb4f.png";

function Frame1550() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[64px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="var(--fill-0, #A90836)" fillOpacity="0.15" id="Ellipse 1" r="32" />
        </svg>
      </div>
      <p className="absolute font-['Figtree:Bold',_sans-serif] font-bold leading-[normal] left-[calc(50%-20px)] text-[#a90836] text-[32px] text-nowrap top-[calc(50%-19px)] tracking-[1.6px] whitespace-pre">02</p>
    </div>
  );
}

function Frame1573() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[76px] top-[14px]">
      <Frame1550 />
      <p className="font-['Montserrat:Bold',_sans-serif] leading-[86.806px] not-italic relative shrink-0 text-[32px] text-black text-center text-nowrap tracking-[-0.64px] whitespace-pre">Failed image authentications with no clear error message.</p>
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

function MaterialSymbolsCancelRounded() {
  return (
    <div className="absolute left-[883px] size-[24px] top-[356px]" data-name="material-symbols:cancel-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:cancel-rounded">
          <path d={svgPaths.p34582700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StashArrowRetry() {
  return (
    <div className="absolute left-[748px] size-[68px] top-[378px]" data-name="stash:arrow-retry">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 68">
        <g id="stash:arrow-retry">
          <path d={svgPaths.p3109000} fill="var(--fill-0, #CF0000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group10691() {
  return (
    <div className="absolute contents left-[649px] top-[348px]">
      <div className="absolute bg-white h-[222.897px] left-[649px] top-[348px] w-[267px]" />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[72px] left-[750px] not-italic text-[#cf0000] text-[26px] text-nowrap top-[426px] whitespace-pre">Error</p>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[72px] left-[742px] not-italic text-[16px] text-black text-nowrap top-[479px] whitespace-pre">Try again</p>
      <MaterialSymbolsCancelRounded />
      <StashArrowRetry />
    </div>
  );
}

function Visuals1() {
  return (
    <div className="absolute bg-white h-[931px] left-0 overflow-clip rounded-tl-[26.668px] rounded-tr-[26.668px] top-[158px] w-[1838px]" data-name="Visuals">
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[72px] left-[76px] not-italic text-[#172b4d] text-[24px] text-nowrap top-[-10px] whitespace-pre">Current Interface</p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[72px] left-[1304px] not-italic text-[#172b4d] text-[24px] text-nowrap top-[-10px] whitespace-pre">New design</p>
      <div className="absolute h-[865px] left-[1237px] top-[35px] w-[480px]" data-name="Group 10581 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-189.65%] max-w-none top-0 w-[289.65%]" src={imgGroup105812} />
        </div>
      </div>
      <div className="absolute h-[930px] left-[40px] top-[33px] w-[527px]" data-name="old interface 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-103.27%] max-w-none top-0 w-[406.32%]" src={imgOldInterface1} />
        </div>
      </div>
      <div className="absolute h-[930px] left-[516px] top-[33px] w-[527px]" data-name="old interface 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-103.27%] max-w-none top-0 w-[406.32%]" src={imgOldInterface1} />
        </div>
      </div>
      <div className="absolute bg-white h-[21px] left-[1401px] top-[449px] w-[196px]" />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[72px] left-[1401px] not-italic text-[10px] text-[red] text-nowrap top-[423px] whitespace-pre">Image too large, maximum 2MB required</p>
      <div className="absolute bg-[rgba(0,0,0,0.39)] h-[806px] left-[556px] top-[62px] w-[452px]" />
      <Group10691 />
    </div>
  );
}

export default function Component14() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] size-full" data-name="14">
      <Visuals />
      <Visuals1 />
    </div>
  );
}