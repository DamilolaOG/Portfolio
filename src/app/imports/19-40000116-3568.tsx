import svgPaths from "./svg-b0a3yekj4f";
import clsx from "clsx";

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
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[14.774px] text-center text-nowrap text-white">{children}</p>
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
type IndicatorText1Props = {
  text: string;
};

function IndicatorText1({ text }: IndicatorText1Props) {
  return (
    <div className="bg-[#1b883c] relative rounded-[18821.1px] shrink-0 size-[45.171px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[26.35px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
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
type Helper3Props = {
  text: string;
  text1: string;
  text2: string;
  additionalClassNames?: string;
};

function Helper3({ text, text1, text2, additionalClassNames = "" }: Helper3Props) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start leading-[1.35] relative shrink-0 text-[17.668px] text-white w-full", additionalClassNames)}>
      <p className="relative shrink-0 w-[253.531px]">{text}</p>
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
    <div className={clsx("content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start leading-[1.35] relative shrink-0 text-[17.668px] text-white w-full", additionalClassNames)}>
      <p className="relative shrink-0 w-[253.531px]">{text}</p>
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
    <div className={clsx("content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start leading-[1.35] relative shrink-0 text-[17.668px] text-white w-full", additionalClassNames)}>
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
    <div className={clsx("content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start leading-[1.35] relative shrink-0 text-[17.668px] text-white w-full", additionalClassNames)}>
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
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[14.774px] text-center text-nowrap text-white">{text}</p>
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
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[14.774px] text-center text-nowrap text-white">{text}</p>
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
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[14.774px] text-center text-nowrap text-white">{`Help & support`}</p>
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
    <div className="bg-[#efefef] relative size-full" data-name="19">
      <div className="absolute h-[544px] left-[65px] top-[181px] w-[1818px]">
        <div aria-hidden="true" className="absolute border-[3px] border-black border-solid inset-[-3px] pointer-events-none" />
        <div className="absolute bg-white content-stretch flex flex-col gap-[17.047px] items-start left-0 pb-[18.184px] pt-[50.005px] px-[261.392px] top-0 w-[1818.377px]" data-name="🦖 Top navigation desktop">
          <div className="content-stretch flex h-[118px] items-end relative shrink-0" data-name="🦖 Mega menu desktop">
            <div className="content-stretch flex flex-col items-start pb-[22px] pl-0 pr-[27px] pt-[16px] relative shrink-0" data-name="Logo container">
              <BupaLogo />
            </div>
            <div className="content-stretch flex items-start relative shrink-0" data-name="Menu items">
              <MenuItemText text="Health insurance" />
              <div className="content-stretch flex h-[78px] items-start pb-[48px] pt-[7px] px-[30px] relative shrink-0" data-name="_Menu item">
                <div aria-hidden="true" className="absolute border-[#0079c8] border-[0px_0px_3.534px] border-solid inset-0 pointer-events-none" />
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[#0079c8] text-[17px] text-nowrap">Dental</p>
              </div>
              <MenuItemText text="Care homes" />
              <MenuItemText text="Pay as you go" />
              <MenuItemText text="Health information" />
              <MenuItemText text="Mental health" />
            </div>
          </div>
          <div className="absolute bg-[#0d1846] content-stretch flex items-start justify-between left-0 top-0 w-[1818.377px]" data-name="🦖 Top navigation">
            <div aria-hidden="true" className="absolute border-[#9747ff] border-[1.136px] border-solid inset-0 pointer-events-none" />
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
        <div className="absolute bg-white content-stretch flex flex-col gap-[17.047px] h-[183.743px] items-start left-0 pb-[18.184px] pt-[50.005px] px-[261.392px] top-0 w-[1818px]" data-name="🦖 Top navigation desktop">
          <div className="content-stretch flex h-[118px] items-end relative shrink-0" data-name="🦖 Mega menu desktop">
            <div className="content-stretch flex flex-col items-start pb-[22px] pl-0 pr-[27px] pt-[16px] relative shrink-0" data-name="Logo container">
              <BupaLogo />
            </div>
            <div className="content-stretch flex items-start relative shrink-0" data-name="Menu items">
              <MenuItemText text="Health insurance" />
              <div className="bg-[#0079c8] content-stretch flex h-[78px] items-start pb-[48px] pt-[7px] px-[30px] relative shrink-0" data-name="_Menu item">
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[17px] text-nowrap text-white">Dental</p>
              </div>
              <MenuItemText text="Care homes" />
              <MenuItemText text="Pay as you go" />
              <MenuItemText text="Health information" />
              <MenuItemText text="Mental health" />
            </div>
          </div>
          <div className="absolute bg-[#0d1846] content-stretch flex items-start justify-between left-0 top-0 w-[1818.377px]" data-name="🦖 Top navigation">
            <div aria-hidden="true" className="absolute border-[#9747ff] border-[1.136px] border-solid inset-0 pointer-events-none" />
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
        <div className="absolute contents left-0 top-[183.74px]">
          <div className="absolute bg-white border-[#9e9e9e] border-[0.883px_0px_0px] border-solid h-[360.26px] left-0 top-[183.74px] w-[1818px]" />
          <div className="absolute content-stretch flex flex-col gap-[15.901px] h-[148.552px] items-start left-[489.39px] top-[213.76px] w-[231.446px]">
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[24.735px] text-white w-full">Dental Treatment</p>
            <Helper text="Prevention" text1="General" text2="Cosmetic" text3="Straighter teeth" additionalClassNames="gap-[7.067px]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[15.901px] h-[176.336px] items-start left-[788.86px] top-[213.76px] w-[231.446px]">
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[24.735px] text-white w-full">Dental Services</p>
            <Helper1 text="Private" text1="NHS" text2="Emergency" text3="Kids dental" text4="Ways to pay" additionalClassNames="gap-[7.067px]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[15.901px] h-[176.336px] items-start left-[1088.33px] top-[213.76px] w-[253.531px]">
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[24.735px] text-white w-full">Dental Insurance</p>
            <Helper2 text="Dental insurance home" text1="Single cover" text2="Business cover" text3="Make A claim" text4="Ways to pay" additionalClassNames="gap-[7.067px]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[15.901px] h-[120.767px] items-start left-[1409.88px] top-[213.76px] w-[256.181px]">
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[24.735px] text-white w-full">Dental Professionals</p>
            <Helper3 text="Professionals home" text1="Referrals" text2="Careers" additionalClassNames="gap-[7.067px]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[21.201px] h-[154.606px] items-start left-[189.93px] top-[213.76px] w-[231.446px]">
            <div className="content-stretch flex flex-col gap-[14.134px] items-start relative shrink-0 w-full">
              <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[24.735px] text-white w-full">{`Bupa Dental Care `}</p>
              <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal gap-[7.067px] items-start leading-[1.35] relative shrink-0 text-[17.668px] text-white w-full">
                <p className="relative shrink-0 w-full">Dental home</p>
                <p className="relative shrink-0 w-full">Find a dental practice</p>
              </div>
            </div>
            <div className="h-[49.469px] relative rounded-[7.067px] shrink-0" data-name="buttonSecondary">
              <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[14.134px] py-0 relative rounded-[inherit]">
                <div className="content-stretch flex items-start px-[7.067px] py-0 relative shrink-0" data-name="Label">
                  <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0079c8] text-[14.134px] text-center text-nowrap">
                    <p className="leading-[21.201px]">Book an appointment</p>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#0079c8] border-[1.767px] border-solid inset-0 pointer-events-none rounded-[7.067px]" />
            </div>
          </div>
        </div>
        <div className="absolute contents left-0 top-[184px]">
          <div className="absolute bg-[#0079c8] h-[360px] left-0 top-[184px] w-[1818px]" />
          <div className="absolute content-stretch flex flex-col gap-[15.901px] items-start left-[489.39px] top-[217.31px] w-[231.446px]">
            <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[1.35] relative shrink-0 text-[15.901px] text-white w-full">Dental Treatment</p>
            <Helper text="Prevention" text1="General" text2="Cosmetic" text3="Straighter teeth" additionalClassNames="gap-[14.134px]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[15.901px] items-start left-[788.86px] top-[217.31px] w-[231.446px]">
            <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[1.35] relative shrink-0 text-[15.901px] text-white w-full">Dental Services</p>
            <Helper1 text="Private" text1="NHS" text2="Emergency" text3="Kids dental" text4="Ways to pay" additionalClassNames="gap-[14.134px]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[15.901px] items-start left-[1088.33px] top-[217.31px] w-[253.531px]">
            <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[1.35] relative shrink-0 text-[15.901px] text-white w-full">Dental Insurance</p>
            <Helper2 text="Dental insurance home" text1="Single cover" text2="Business cover" text3="Make A claim" text4="Ways to pay" additionalClassNames="gap-[14.134px]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[15.901px] items-start left-[1409.88px] top-[217.31px] w-[256.181px]">
            <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[1.35] relative shrink-0 text-[15.901px] text-white w-full">Dental Professionals</p>
            <Helper3 text="Professionals home" text1="Referrals" text2="Careers" additionalClassNames="gap-[14.134px]" />
          </div>
          <div className="absolute content-stretch flex flex-col gap-[21.201px] items-start left-[189.93px] top-[217.31px] w-[231.446px]">
            <div className="content-stretch flex flex-col gap-[14.134px] items-start relative shrink-0 w-full">
              <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[1.35] relative shrink-0 text-[15.901px] text-white w-full">{`Bupa Dental Care `}</p>
              <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal gap-[14.134px] items-start leading-[1.35] relative shrink-0 text-[17.668px] text-white w-full">
                <p className="relative shrink-0 w-full">Dental home</p>
                <p className="relative shrink-0 w-full">Dental home</p>
                <p className="relative shrink-0 w-full">Find a dental practice</p>
              </div>
            </div>
            <div className="h-[49.469px] relative rounded-[7.067px] shrink-0" data-name="buttonSecondary">
              <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[14.134px] py-0 relative rounded-[inherit]">
                <div className="content-stretch flex items-start px-[7.067px] py-0 relative shrink-0" data-name="Label">
                  <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14.134px] text-center text-nowrap text-white">
                    <p className="leading-[21.201px]">Book an appointment</p>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[1.767px] border-solid border-white inset-0 pointer-events-none rounded-[7.067px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[62px] top-[789px]">
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
              <LTextText text="Correct grouping and alignment of content" />
            </div>
          </Comment>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[533.033px]" data-name="Comment">
          <Comment>
            <div className="content-stretch flex gap-[10.503px] items-start relative shrink-0 w-full" data-name="l-content">
              <IndicatorText text="2" />
              <LTextText text="Bolder text to show category titles" />
            </div>
          </Comment>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[233px] items-center left-[207px] px-0 py-[45.171px] rounded-[11.293px] top-[352px] w-[201px]" data-name="zone">
        <div className="content-stretch flex items-center justify-end pl-0 pr-[30.114px] py-0 relative shrink-0 size-[60.228px]" data-name="l-offeset">
          <IndicatorText1 text="1" />
        </div>
      </div>
      <div className="absolute h-[48px] left-[512px] rounded-[11.293px] top-[387px] w-[238px]" data-name="zone">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-0 py-[45.171px] relative size-full">
            <div className="content-stretch flex items-center justify-end pl-0 pr-[30.114px] py-0 relative shrink-0 size-[60.228px]" data-name="l-offeset">
              <IndicatorText1 text="2" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#d02670] content-stretch flex items-center justify-center left-[65px] p-[17.135px] rounded-[45px] top-[74px] w-[155px]">
        <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-nowrap text-white uppercase">
          <p className="leading-[normal]">After</p>
        </div>
      </div>
    </div>
  );
}