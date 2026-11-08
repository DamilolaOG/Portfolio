import svgPaths from "./svg-qr54dc51im";
import clsx from "clsx";
import imgScreenshot20251202At1725491 from "figma:asset/36f57513b444712840fc9ab0bfffdffa07bbe816.png";

function Comment({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#e7fff8] relative rounded-[7.877px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#1b883c] border-[1.313px] border-solid inset-0 pointer-events-none rounded-[7.877px]" />
      <div className="content-stretch flex flex-col items-start p-[21.006px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#0d1846] content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[20px] py-[12px] relative shrink-0">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[14.559px] text-center text-nowrap text-white">{children}</p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type LTextTextProps = {
  text: string;
};

function LTextText({ text }: LTextTextProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.252px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b883c] text-[21.006px] w-full">
        <p className="leading-[31.509px]">{text}</p>
      </div>
    </div>
  );
}
type IndicatorTextProps = {
  text: string;
};

function IndicatorText({ text }: IndicatorTextProps) {
  return (
    <div className="bg-[#1b883c] relative rounded-[13128.9px] shrink-0 size-[31.509px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[18.38px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="h-[48.747px] relative rounded-[6.964px] shrink-0">
      <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[13.928px] py-0 relative rounded-[inherit]">
        <div className="content-stretch flex items-start px-[6.964px] py-0 relative shrink-0">
          <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0079c8] text-[13.928px] text-center text-nowrap">
            <p className="leading-[20.892px]">{"Book an appointment"}</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#0079c8] border-[1.741px] border-solid inset-0 pointer-events-none rounded-[6.964px]" />
    </div>
  );
}
type Helper3Props = {
  text: string;
  text1: string;
  text2: string;
  additionalClassNames?: string;
};

function Helper3({ text, text1, text2, additionalClassNames = "" }: Helper3Props) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start leading-[1.35] relative shrink-0 text-[17.41px] w-full", additionalClassNames)}>
      <p className="relative shrink-0 w-[249.828px]">{text}</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">{text1}</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">{text2}</p>
    </div>
  );
}
type Helper2Props = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  additionalClassNames?: string;
};

function Helper2({ text, text1, text2, text3, text4, additionalClassNames = "" }: Helper2Props) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start leading-[1.35] relative shrink-0 text-[17.41px] w-full", additionalClassNames)}>
      <p className="relative shrink-0 w-[249.828px]">{text}</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">{text1}</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">{text2}</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">{text3}</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">{text4}</p>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  additionalClassNames?: string;
};

function Helper1({ text, text1, text2, text3, text4, additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start leading-[1.35] relative shrink-0 text-[17.41px] w-full", additionalClassNames)}>
      <p className="relative shrink-0 w-full">{text}</p>
      <p className="relative shrink-0 w-full">{text1}</p>
      <p className="relative shrink-0 w-full">{text2}</p>
      <p className="relative shrink-0 w-full">{text3}</p>
      <p className="relative shrink-0 w-full">{text4}</p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, text2, text3, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start leading-[1.35] relative shrink-0 text-[17.41px] w-full", additionalClassNames)}>
      <p className="relative shrink-0 w-full">{text}</p>
      <p className="relative shrink-0 w-full">{text1}</p>
      <p className="relative shrink-0 w-full">{text2}</p>
      <p className="relative shrink-0 w-full">{text3}</p>
    </div>
  );
}
type NavItemText2Props = {
  text: string;
  additionalClassNames?: string;
};

function NavItemText2({ text, additionalClassNames = "" }: NavItemText2Props) {
  return (
    <div className={clsx("absolute bg-[#0d1846] content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[20px] py-[12px] top-0", additionalClassNames)}>
      <LeftIcon />
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[14.559px] text-center text-nowrap text-white">{text}</p>
    </div>
  );
}
type NavItemText1Props = {
  text: string;
};

function NavItemText1({ text }: NavItemText1Props) {
  return (
    <div className="bg-[#0079c8] content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[20px] py-[12px] relative shrink-0">
      <LeftIcon />
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[14.559px] text-center text-nowrap text-white">{text}</p>
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Right icon">
            <path d={svgPaths.p23e32d00} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LeftIcon() {
  return (
    <Wrapper>
      <g clipPath="url(#clip0_40000116_3647)" id="Left icon">
        <path clipRule="evenodd" d={svgPaths.p20ab0300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_40000116_3647">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </Wrapper>
  );
}

function NavItem() {
  return (
    <div className="bg-[#0d1846] content-stretch flex gap-[8px] h-[44px] items-center justify-center px-[20px] py-[12px] relative shrink-0">
      <Wrapper>
        <g clipPath="url(#clip0_40000116_3644)" id="Left icon">
          <path clipRule="evenodd" d={svgPaths.p20ab0300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_40000116_3644">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </Wrapper>
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[14.559px] text-center text-nowrap text-white">{`Help & support`}</p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Wrapper1>{`Individuals & families`}</Wrapper1>
      <NavItemText text="Business" />
      <NavItemText text="Intermediaries" />
      <NavItemText text="Healthcare professionals" />
      <NavItemText text="Find a healthcare professional or service" />
    </div>
  );
}
type NavItemTextProps = {
  text: string;
};

function NavItemText({ text }: NavItemTextProps) {
  return <Wrapper1>{text}</Wrapper1>;
}

function MenuItems() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <MenuItemText text="Health insurance" />
      <div className="content-stretch flex h-[78px] items-start pb-[48px] pt-[7px] px-[30px] relative shrink-0">
        <div aria-hidden="true" className="absolute border-[#0079c8] border-[0px_0px_3.482px] border-solid inset-0 pointer-events-none" />
        <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[#0079c8] text-[17px] text-nowrap">{"Dental"}</p>
      </div>
      <MenuItemText text="Care homes" />
      <MenuItemText text="Pay as you go" />
      <MenuItemText text="Health information" />
      <MenuItemText text="Mental health" />
    </div>
  );
}
type MenuItemTextProps = {
  text: string;
};

function MenuItemText({ text }: MenuItemTextProps) {
  return (
    <div className="content-stretch flex h-[78px] items-start pb-[48px] pt-[7px] px-[30px] relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.35] relative shrink-0 text-[#21272a] text-[17px] text-nowrap">{text}</p>
    </div>
  );
}

function BupaLogo() {
  return (
    <div className="h-[80px] relative shrink-0 w-[80.001px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80.0004 80">
        <g id="Bupa Logo">
          <path d={svgPaths.p32618780} fill="var(--fill-0, #0079C8)" id="Vector" />
          <path d={svgPaths.p39e33410} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#efefef] relative size-full" data-name="22">
      <div className="absolute h-[534px] left-[74px] top-[187px] w-[1791px]">
        <div aria-hidden="true" className="absolute border-[3.04px] border-black border-solid inset-[-3.04px] pointer-events-none" />
        <div className="absolute bg-white content-stretch flex flex-col gap-[16.798px] items-start left-0 pb-[17.918px] pt-[49.275px] px-[257.575px] top-0 w-[1791.824px]" data-name="🦖 Top navigation desktop">
          <div className="content-stretch flex h-[132.147px] items-end relative shrink-0" data-name="🦖 Mega menu desktop">
            <div className="content-stretch flex flex-col items-start pb-[22px] pl-0 pr-[27px] pt-[16px] relative shrink-0" data-name="Logo container">
              <BupaLogo />
            </div>
            <MenuItems />
          </div>
          <div className="absolute bg-[#0d1846] content-stretch flex items-start justify-between left-0 top-0 w-[1791.824px]" data-name="🦖 Top navigation">
            <div aria-hidden="true" className="absolute border-[#9747ff] border-[1.12px] border-solid inset-0 pointer-events-none" />
            <Left />
            <div className="content-stretch flex items-center relative shrink-0 w-[602px]" data-name="Right">
              <NavItem />
              <div className="absolute content-stretch flex flex-col items-end left-[125px] top-0 w-[477px]" data-name="Sign in dropdown">
                <NavItemText1 text="Sign in" />
              </div>
              <NavItemText2 text="Contact us" additionalClassNames="left-[169px]" />
              <NavItemText2 text="Search Bupa" additionalClassNames="left-[310px]" />
            </div>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex flex-col gap-[16.798px] h-[181.06px] items-start left-0 pb-[17.918px] pt-[49.275px] px-[257.575px] top-0 w-[1791.452px]" data-name="🦖 Top navigation desktop">
          <div className="content-stretch flex h-[132.147px] items-end relative shrink-0" data-name="🦖 Mega menu desktop">
            <div className="content-stretch flex flex-col items-start pb-[22px] pl-0 pr-[27px] pt-[16px] relative shrink-0" data-name="Logo container">
              <BupaLogo />
            </div>
            <MenuItems />
          </div>
          <div className="absolute bg-[#0d1846] content-stretch flex items-start justify-between left-0 top-0 w-[1791.824px]" data-name="🦖 Top navigation">
            <div aria-hidden="true" className="absolute border-[#9747ff] border-[1.12px] border-solid inset-0 pointer-events-none" />
            <Left />
            <div className="content-stretch flex items-center relative shrink-0 w-[602px]" data-name="Right">
              <NavItem />
              <div className="absolute content-stretch flex flex-col items-end left-[125px] top-0 w-[477px]" data-name="Sign in dropdown">
                <NavItemText1 text="Sign in" />
              </div>
              <NavItemText2 text="Contact us" additionalClassNames="left-[169px]" />
              <NavItemText2 text="Search Bupa" additionalClassNames="left-[310px]" />
            </div>
          </div>
        </div>
        <div className="absolute contents left-0 top-[181px]">
          <div className="absolute bg-white border-[#9e9e9e] border-[0.87px_0px_0px] border-solid h-[353px] left-0 top-[181px] w-[1791px]" />
          <div className="absolute content-stretch flex flex-col gap-[15.669px] items-start left-[482.25px] top-[214.14px] w-[228.066px]">
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#0079c8] text-[24.373px] w-full">Dental Treatment</p>
            <Helper text="Prevention" text1="General" text2="Cosmetic" text3="Straighter teeth" additionalClassNames="gap-[6.964px] text-black" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[15.669px] items-start left-[777.34px] top-[214.14px] w-[228.066px]">
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#0079c8] text-[24.373px] w-full">Dental Services</p>
            <Helper1 text="Private" text1="NHS" text2="Emergency" text3="Kids dental" text4="Ways to pay" additionalClassNames="gap-[6.964px] text-black" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[15.669px] items-start left-[1072.43px] top-[214.14px] w-[249.828px]">
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#0079c8] text-[24.373px] w-full">Dental Insurance</p>
            <Helper2 text="Dental insurance home" text1="Single cover" text2="Business cover" text3="Make A claim" text4="Ways to pay" additionalClassNames="gap-[6.964px] text-black" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[15.669px] items-start left-[1389.29px] top-[214.14px] w-[252.44px]">
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#0079c8] text-[24.373px] w-full">Dental Professionals</p>
            <Helper3 text="Professionals home" text1="Referrals" text2="Careers" additionalClassNames="gap-[6.964px] text-black" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[20.892px] items-start left-[187.15px] top-[214.14px] w-[228.066px]">
            <div className="content-stretch flex flex-col gap-[13.928px] items-start relative shrink-0 w-full">
              <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#0079c8] text-[24.373px] w-full">{`Bupa Dental Care `}</p>
              <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal gap-[6.964px] items-start leading-[1.35] relative shrink-0 text-[17.41px] text-black w-full">
                <p className="relative shrink-0 w-full">Dental home</p>
                <p className="relative shrink-0 w-full">Find a dental practice</p>
              </div>
            </div>
            <ButtonSecondary />
          </div>
        </div>
        <div className="absolute contents left-0 top-[181.06px]">
          <div className="absolute bg-white border-[#9e9e9e] border-[0.87px_0px_0px] border-solid h-[352.939px] left-0 top-[181.06px] w-[1791.452px]" />
          <div className="absolute content-stretch flex flex-col gap-[15.669px] h-[155.114px] items-start left-[482.25px] top-[210.47px] w-[228.066px]">
            <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[1.35] relative shrink-0 text-[#21272a] text-[15.669px] w-full">Dental Treatment</p>
            <Helper text="Prevention" text1="General" text2="Cosmetic" text3="Straighter teeth" additionalClassNames="gap-[13.928px] text-[#0074bf]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[15.669px] h-[188.837px] items-start left-[777.34px] top-[210.47px] w-[228.066px]">
            <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[1.35] relative shrink-0 text-[#21272a] text-[15.669px] w-full">Dental Services</p>
            <Helper1 text="Private" text1="NHS" text2="Emergency" text3="Kids dental" text4="Ways to pay" additionalClassNames="gap-[13.928px] text-[#0074bf]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[15.669px] h-[188.837px] items-start left-[1072.43px] top-[210.47px] w-[249.828px]">
            <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[1.35] relative shrink-0 text-[#21272a] text-[15.669px] w-full">Dental Insurance</p>
            <Helper2 text="Dental insurance home" text1="Single cover" text2="Business cover" text3="Make A claim" text4="Ways to pay" additionalClassNames="gap-[13.928px] text-[#0074bf]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[15.669px] h-[121.39px] items-start left-[1389.29px] top-[210.47px] w-[252.44px]">
            <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[1.35] relative shrink-0 text-[#21272a] text-[15.669px] w-full">Dental Professionals</p>
            <Helper3 text="Professionals home" text1="Referrals" text2="Careers" additionalClassNames="gap-[13.928px] text-[#0074bf]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[20.892px] h-[181.762px] items-start left-[187.15px] top-[210.47px] w-[228.066px]">
            <div className="content-stretch flex flex-col gap-[13.928px] items-start relative shrink-0 w-full">
              <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[1.35] relative shrink-0 text-[#21272a] text-[15.669px] w-full">{`Bupa Dental Care `}</p>
              <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal gap-[13.928px] items-start leading-[1.35] relative shrink-0 text-[#0074bf] text-[17.41px] w-full">
                <p className="relative shrink-0 w-full">Dental home</p>
                <p className="relative shrink-0 w-full">Dental home</p>
                <p className="relative shrink-0 w-full">Find a dental practice</p>
              </div>
            </div>
            <ButtonSecondary />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[1332px] top-[761px]">
        <div className="content-stretch flex items-center relative rounded-[7.877px] shrink-0 w-[530.407px]" data-name="l-column">
          <div className="content-stretch flex items-start relative shrink-0" data-name="l-item">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b883c] text-[21.006px] text-nowrap">
              <p className="leading-[31.509px]">UX optimisations</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[533.033px]" data-name="Comment">
          <Comment>
            <div className="content-stretch flex gap-[10.503px] items-start relative shrink-0 w-full" data-name="l-content">
              <IndicatorText text="1" />
              <LTextText text="White background to improve accessibility create distinction between links and titles." />
            </div>
          </Comment>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[533.033px]" data-name="Comment">
          <Comment>
            <div className="content-stretch flex gap-[10.503px] items-start relative shrink-0 w-full" data-name="l-content">
              <IndicatorText text="2" />
              <LTextText text="Use subtle highlight to improve usability" />
            </div>
          </Comment>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[343px] items-center left-[32px] px-0 py-[45.171px] rounded-[11.293px] top-[352px] w-[1834px]" data-name="zone">
        <div className="content-stretch flex items-center justify-end pl-0 pr-[30.114px] py-0 relative shrink-0 size-[60.228px]" data-name="l-offeset">
          <div className="bg-[#1b883c] relative rounded-[18821.1px] shrink-0 size-[45.171px]" data-name="indicator">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[26.35px] text-center text-white">
              <p className="leading-[normal]">1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[35px] left-[835px] rounded-[11.293px] top-[350px] w-[227px]" data-name="zone">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-0 py-[45.171px] relative size-full">
            <div className="content-stretch flex items-center justify-end pl-0 pr-[30.114px] py-0 relative shrink-0 size-[60.228px]" data-name="l-offeset">
              <div className="bg-[#1b883c] relative rounded-[18821.1px] shrink-0 size-[45.171px]" data-name="indicator">
                <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[20px] text-center text-white">
                  <p className="leading-[normal]">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#d02670] content-stretch flex items-center justify-center left-[75px] p-[17.135px] rounded-[45px] top-[74px] w-[155px]">
        <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-nowrap text-white uppercase">
          <p className="leading-[normal]">After</p>
        </div>
      </div>
      <div className="absolute h-[340px] left-[396px] rounded-[16px] top-[695px] w-[452px]" data-name="Screenshot 2025-12-02 at 17.25.49 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgScreenshot20251202At1725491} />
        </div>
      </div>
    </div>
  );
}