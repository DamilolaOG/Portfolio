import svgPaths from "./svg-jw5nm5bsq6";

function Component({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.35] relative shrink-0 text-[#0074bf] text-[39.105px] text-nowrap">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[36.821px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.8206 36.8206">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[46.026px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.0257 46.0257">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#0d1846] content-stretch flex gap-[14.81px] h-[81.456px] items-center justify-center px-[37.026px] py-[22.215px] relative shrink-0">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[24.706px] text-center text-nowrap text-white">{children}</p>
    </div>
  );
}
type NavItemTextProps = {
  text: string;
};

function NavItemText({ text }: NavItemTextProps) {
  return <Wrapper>{text}</Wrapper>;
}
type MenuItemTextProps = {
  text: string;
};

function MenuItemText({ text }: MenuItemTextProps) {
  return (
    <div className="content-stretch flex h-[116.51px] items-center justify-center px-[43.691px] py-0 relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.35] relative shrink-0 text-[#21272a] text-[30.512px] text-nowrap">{text}</p>
    </div>
  );
}
type ComponentText1Props = {
  text: string;
};

function ComponentText1({ text }: ComponentText1Props) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.35] relative shrink-0 text-[#0074bf] text-[39.105px] text-nowrap">{text}</p>
    </div>
  );
}
type ComponentTextProps = {
  text: string;
};

function ComponentText({ text }: ComponentTextProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[58.657px] relative shrink-0 text-[#21272a] text-[39.105px] text-nowrap">{text}</p>
    </div>
  );
}

export default function Otg() {
  return (
    <div className="bg-[#dbe0ea] relative size-full" data-name="OTG">
      <div className="absolute bg-white content-stretch flex h-[129px] items-center justify-between left-[131px] px-[55.231px] py-[9.205px] rounded-tl-[23.723px] rounded-tr-[23.723px] shadow-[0px_11.548px_23.096px_0px_rgba(0,0,0,0.1)] top-[94px] w-[2897px]" data-name="Top Bar">
        <div className="content-stretch flex gap-[55.231px] items-center relative shrink-0" data-name="Left Buttons">
          <div className="h-[27.615px] relative shrink-0 w-[119.667px]" data-name="OS">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.667 27.6154">
              <g id="OS">
                <path clipRule="evenodd" d={svgPaths.pb43fd00} fill="var(--fill-0, #ED6A5E)" fillRule="evenodd" id="object" />
                <path clipRule="evenodd" d={svgPaths.p15933f80} fill="var(--fill-0, #F4BF4F)" fillRule="evenodd" id="object_2" />
                <path clipRule="evenodd" d={svgPaths.p3b387900} fill="var(--fill-0, #61C554)" fillRule="evenodd" id="object_3" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex gap-[27.615px] items-start relative shrink-0" data-name="Nav">
            <Wrapper1>
              <g id="Left">
                <path clipRule="evenodd" d={svgPaths.p47601c0} fill="var(--fill-0, #8C8C8C)" fillRule="evenodd" id="Vector" />
              </g>
            </Wrapper1>
            <Wrapper1>
              <g id="Right">
                <g id="Vector">
                  <path clipRule="evenodd" d={svgPaths.p291c7e00} fill="var(--fill-0, black)" fillOpacity="0.1" fillRule="evenodd" />
                  <path d={svgPaths.p3adef600} stroke="var(--stroke-0, black)" strokeOpacity="0.1" strokeWidth="0.14383" />
                </g>
              </g>
            </Wrapper1>
          </div>
        </div>
        <div className="bg-[#f1f1f1] content-stretch flex gap-[18.41px] h-[64.436px] items-center px-[18.41px] py-[9.205px] relative rounded-[18.41px] shrink-0 w-[1104.617px]" data-name="Address Bar">
          <div className="basis-0 content-stretch flex gap-[9.205px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Website Name">
            <Wrapper2>
              <g id="Icon Lock">
                <path d={svgPaths.p2617f400} fill="var(--fill-0, #8C8C8C)" id="Union" />
              </g>
            </Wrapper2>
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#151515] text-[29.917px] text-center text-nowrap">
              <p className="leading-[normal]">Bupa.co.uk</p>
            </div>
          </div>
          <Wrapper2>
            <g id="Icon Update">
              <path clipRule="evenodd" d={svgPaths.p19cac080} fill="var(--fill-0, #8C8C8C)" fillRule="evenodd" id="Vector" />
              <path clipRule="evenodd" d={svgPaths.p15bd7f00} fill="var(--fill-0, #8C8C8C)" fillRule="evenodd" id="Vector_2" />
            </g>
          </Wrapper2>
        </div>
        <div className="content-stretch flex gap-[46.026px] items-start relative shrink-0" data-name="Right Buttons">
          <Wrapper1>
            <g id="Share">
              <path clipRule="evenodd" d={svgPaths.p3fd00d00} fill="var(--fill-0, #8C8C8C)" fillRule="evenodd" id="Vector" />
              <path clipRule="evenodd" d={svgPaths.p357c4300} fill="var(--fill-0, #8C8C8C)" fillRule="evenodd" id="Vector_2" />
              <path clipRule="evenodd" d={svgPaths.pd028800} fill="var(--fill-0, #8C8C8C)" fillRule="evenodd" id="Vector_3" />
            </g>
          </Wrapper1>
          <Wrapper1>
            <g id="New Tab">
              <path d={svgPaths.p2451ec00} fill="var(--fill-0, #8C8C8C)" id="Vector" />
            </g>
          </Wrapper1>
        </div>
      </div>
      <div className="absolute bg-white h-[902.991px] left-[131px] overflow-clip top-[907.01px] w-[2378.687px]">
        <div className="absolute content-stretch flex flex-col gap-[52.93px] items-start left-[221.25px] top-[-93.16px] w-[2215.662px]">
          <div className="content-stretch flex gap-[52.93px] items-end relative shrink-0">
            <div className="bg-[rgba(233,237,240,0.5)] h-[365.219px] rounded-[21.172px] shrink-0 w-[841.592px]" />
            <div className="bg-[rgba(233,237,240,0.5)] h-[328.168px] rounded-[21.172px] shrink-0 w-[844.767px]" />
            <div className="bg-[rgba(233,237,240,0.5)] h-[351.457px] rounded-[21.172px] shrink-0 w-[401.212px]" />
          </div>
          <div className="content-stretch flex gap-[147.146px] items-center relative shrink-0 w-full">
            {[...Array(2).keys()].map((_, i) => (
              <div className="bg-[rgba(233,237,240,0.5)] h-[56.106px] rounded-[38.11px] shrink-0 w-[750.551px]" />
            ))}
            <div className="bg-[rgba(233,237,240,0.5)] h-[56.106px] rounded-[38.11px] shrink-0 w-[420.266px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[52.93px] items-start left-[221.25px] top-[388.99px] w-[2215.662px]">
          <div className="content-stretch flex gap-[52.93px] items-end relative shrink-0">
            <div className="bg-[#eaeef2] h-[365.219px] rounded-[21.172px] shrink-0 w-[841.592px]" />
            <div className="bg-[#eaeef2] h-[365px] rounded-[21.172px] shrink-0 w-[845px]" />
            <div className="bg-[#eaeef2] h-[365px] rounded-[21.172px] shrink-0 w-[401px]" />
          </div>
          <div className="content-stretch flex gap-[147.146px] items-center relative shrink-0 w-full">
            {[...Array(2).keys()].map((_, i) => (
              <div className="bg-[#eaeef2] h-[56.106px] rounded-[38.11px] shrink-0 w-[750.551px]" />
            ))}
            <div className="bg-[#eaeef2] h-[56.106px] rounded-[38.11px] shrink-0 w-[420.266px]" />
          </div>
        </div>
      </div>
      <div className="absolute h-[1145px] left-[131px] overflow-clip shadow-[0px_10px_20px_0px_rgba(0,0,0,0.1)] top-[206px] w-[2583px]" data-name="Component 1">
        <div className="absolute contents left-0 top-[211px]">
          <div className="absolute bg-white h-[1031px] left-0 top-[211px] w-[2625px]" />
          <div className="absolute content-stretch flex gap-[175.972px] items-start left-[329px] top-[319px] w-[2505.156px]">
            <div className="content-stretch flex flex-col gap-[50.079px] items-start relative shrink-0 w-[546.7px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[33.386px] items-start relative shrink-0 w-full">
                  <ComponentText text="Private health insurance" />
                  <ComponentText1 text="Health insurance" />
                  <ComponentText1 text="Health insurance benefits" />
                  <ComponentText1 text="Compare cover" />
                </div>
              </div>
              <div className="h-[116.852px] relative rounded-[16.693px] shrink-0" data-name="buttonSecondary">
                <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[33.386px] py-0 relative rounded-[inherit]">
                  <div className="content-stretch flex items-start px-[16.693px] py-0 relative shrink-0" data-name="Label">
                    <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0079c8] text-[33.386px] text-center text-nowrap">
                      <p className="leading-[50.079px]">Get a quote</p>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#0079c8] border-[4.173px] border-solid inset-0 pointer-events-none rounded-[16.693px]" />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[37.56px] items-start relative shrink-0 w-[546.7px]">
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Component 14">
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[34.217px] relative shrink-0 text-[#21272a] text-[38.983px] text-nowrap">Understanding insurance</p>
              </div>
              <div className="content-stretch flex flex-col gap-[33.386px] items-start relative shrink-0 w-full">
                <ComponentText1 text="What is health insurance?" />
                <Component>
                  <p className="mb-0">{`How much is health `}</p>
                  <p>insurance?</p>
                </Component>
                <Component>
                  <p className="mb-0">{`How to choose health `}</p>
                  <p>insurance</p>
                </Component>
                <Component>
                  <p className="mb-0">{`What does health `}</p>
                  <p>insurance cover?</p>
                </Component>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[37.56px] items-start relative shrink-0 w-[427.71px]">
              <ComponentText text="Existing members" />
              <div className="content-stretch flex flex-col gap-[33.386px] items-start relative shrink-0 w-full">
                <ComponentText1 text="Making a claim" />
                <ComponentText1 text="Get treatment" />
                <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.35] relative shrink-0 text-[#0074bf] text-[39.105px] text-nowrap">Bupa cash plan claims</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[37.56px] items-start relative shrink-0 w-[491.255px]">
              <ComponentText text="Business health insurance" />
              <div className="content-stretch flex flex-col gap-[33.386px] items-start relative shrink-0 w-full">
                <Component>
                  <p className="mb-0">{`Health insurance for `}</p>
                  <p>businesses</p>
                </Component>
                <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.35] relative shrink-0 text-[#0074bf] text-[39.105px] text-nowrap">Get a guide price</p>
                <div className="content-stretch flex items-center shrink-0" data-name="Component 5" />
                <div className="content-stretch flex items-center shrink-0" data-name="Component 6" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex flex-col isolate items-start left-[-81.03px] pb-0 pt-[14.564px] px-[418.709px] top-[105.93px] w-[2912.76px]" data-name="Top navigation">
          <div aria-hidden="true" className="absolute border-0 border-[#02df0a] border-solid inset-0 pointer-events-none shadow-[0px_2.383px_9.531px_0px_rgba(0,0,0,0.15)]" />
          <div className="content-stretch flex gap-[43.691px] h-[116.51px] items-center relative shrink-0 w-[2155.443px] z-[1]" data-name="Mega menu">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Logo container">
              <div className="relative shrink-0 size-[87.383px]" data-name="Bupa Logo">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.3826 87.3828">
                  <g id="Bupa Logo">
                    <path d={svgPaths.p2e788c00} fill="var(--fill-0, #0079C8)" id="Vector" />
                    <path d={svgPaths.p39eae3c0} fill="var(--fill-0, white)" id="Vector_2" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="content-stretch flex h-full items-center relative shrink-0" data-name="Menu items">
              <div className="content-stretch flex h-[116.51px] items-center justify-center px-[43.691px] py-0 relative shrink-0" data-name="_Menu item">
                <div aria-hidden="true" className="absolute border-[#0079c8] border-[0px_0px_5.461px] border-solid inset-[0_0_-2.731px_0] pointer-events-none" />
                <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[1.35] relative shrink-0 text-[#0079c8] text-[30.512px] text-nowrap">Health insurance</p>
              </div>
              <MenuItemText text="Health subscriptions" />
              <MenuItemText text="Dental" />
              <MenuItemText text="Care homes" />
              <MenuItemText text="Pay as you go" />
              <MenuItemText text="Health information" />
            </div>
          </div>
        </div>
        <div className="absolute bg-[#0d1846] content-stretch flex h-[105px] items-center justify-between left-[-0.01px] top-0 w-[2961.961px]" data-name="🦖 Top navigation">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Left">
            <Wrapper>{`Individuals & families`}</Wrapper>
            <NavItemText text="Business" />
            <NavItemText text="Intermediaries" />
            <NavItemText text="Healthcare professionals" />
            <div className="bg-[#0d1846] content-stretch flex gap-[3.702px] h-[81.456px] items-center justify-center px-[37.026px] py-[22.215px] relative shrink-0" data-name="_Nav item">
              <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[24.706px] text-center text-nowrap text-white">Find a healthcare professional or service</p>
              <div className="relative shrink-0 size-[25.917px]" data-name="ri:external-link-line">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9172 25.9172">
                  <g id="ri:external-link-line">
                    <g id="Vector">
                      <path d={svgPaths.pf9c2b00} fill="var(--fill-0, white)" />
                      <path d={svgPaths.pf9c2b00} stroke="var(--stroke-0, white)" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[1114.473px]" data-name="Right">
            <div className="absolute bg-[#0079c8] content-stretch flex gap-[14.81px] h-[104.314px] items-center justify-center left-[858.49px] px-[37.026px] py-[22.215px] top-[-11.08px] w-[255.98px]" data-name="_Nav item">
              <div className="relative shrink-0 size-[37.025px]" data-name="Left icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.0246 37.0248">
                  <g id="Left icon">
                    <path clipRule="evenodd" d={svgPaths.p16240500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                  </g>
                </svg>
              </div>
              <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[24.706px] text-center text-nowrap text-white">Sign in</p>
              <div className="relative shrink-0 size-[29.62px]" data-name="Right icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.6196 29.6196">
                  <g clipPath="url(#clip0_40000111_664)" id="Right icon">
                    <path d={svgPaths.p6a4c232} fill="var(--fill-0, white)" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="clip0_40000111_664">
                      <rect fill="white" height="29.6196" width="29.6196" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute content-stretch flex items-center left-[-52.2px] top-[-2.17px]">
              <div className="bg-[#0d1846] content-stretch flex gap-[14.81px] h-[81.456px] items-center justify-center px-[37.026px] py-[22.215px] relative shrink-0" data-name="_Nav item">
                <div className="relative shrink-0 size-[38.431px]" data-name="Left icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4314 38.4314">
                    <g clipPath="url(#clip0_40000111_661)" id="Left icon">
                      <path clipRule="evenodd" d={svgPaths.p2cd23d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_40000111_661">
                        <rect fill="white" height="38.4314" width="38.4314" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[24.706px] text-center text-nowrap text-white">{`Help & support`}</p>
              </div>
              <div className="bg-[#0d1846] content-stretch flex gap-[14.81px] h-[81.456px] items-center justify-center px-[37.026px] py-[22.215px] relative shrink-0" data-name="_Nav item">
                <div className="relative shrink-0 size-[38.431px]" data-name="Left icon">
                  <div className="absolute inset-[0_0_-0.02%_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.4314 38.4382">
                      <g id="Left icon">
                        <path clipRule="evenodd" d={svgPaths.p1ebf5a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[24.706px] text-center text-nowrap text-white">Contact us</p>
              </div>
              <div className="bg-white content-stretch flex gap-[14.81px] h-[85.098px] items-center justify-center pl-[37.026px] pr-[56.275px] py-[22.215px] relative rounded-[7.549px] shrink-0" data-name="_Nav item">
                <div className="relative shrink-0 size-[20.76px]" data-name="Left icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.76 20.76">
                    <g clipPath="url(#clip0_40000111_667)" id="Left icon">
                      <path clipRule="evenodd" d={svgPaths.p3eff4dc0} fill="var(--fill-0, #0079C8)" fillRule="evenodd" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_40000111_667">
                        <rect fill="white" height="20.76" width="20.76" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[#0079c8] text-[24.706px] text-center text-nowrap">Search Bupa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}