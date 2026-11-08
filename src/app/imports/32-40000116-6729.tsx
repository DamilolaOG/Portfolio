import svgPaths from "./svg-0fkoonipe2";
import clsx from "clsx";
import imgScreenshot20240709At0840131 from "figma:asset/eda06f9719e95dc5de6e7966d34f05a6e50b38e9.png";

function Comment({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#e7fff8] relative rounded-[7.877px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#1b883c] border-[1.313px] border-solid inset-0 pointer-events-none rounded-[7.877px]" />
      <div className="content-stretch flex flex-col items-start p-[21.006px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[4.587px] items-center px-[13.76px] py-[18.346px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[21.357px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3566 21.3566">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex gap-[6.868px] items-center px-[17.169px] py-[10.301px] relative size-full">{children}</div>
    </div>
  );
}

function NavItem({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#0074bf] h-[70.204px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.227px] border-solid border-white inset-0 pointer-events-none" />
      <Wrapper>{children}</Wrapper>
    </div>
  );
}

function DropdownSelect({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[60px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[20px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type IndicatorTextProps = {
  text: string;
};

function IndicatorText({ text }: IndicatorTextProps) {
  return (
    <div className="bg-[#1b883c] relative rounded-[18804.3px] shrink-0 size-[45.13px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[26.326px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("absolute bg-[#d02670] content-stretch flex items-center justify-center p-[17.135px] rounded-[45px] top-[74px] w-[155px]", additionalClassNames)}>
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-nowrap text-white uppercase">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

function Chevron1() {
  return (
    <Wrapper1>
      <g clipPath="url(#clip0_40000116_6756)" id="Chevron">
        <path d={svgPaths.p17800c80} fill="var(--fill-0, #21272A)" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_40000116_6756">
          <rect fill="white" height="21.3566" width="21.3566" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}

function Chevron() {
  return (
    <Wrapper1>
      <g clipPath="url(#clip0_40000116_6769)" id="Chevron">
        <path d={svgPaths.p1b53a600} fill="var(--fill-0, #21272A)" id="Vector" />
      </g>
      <defs>
        <clipPath id="clip0_40000116_6769">
          <rect fill="white" height="21.3566" width="21.3566" />
        </clipPath>
      </defs>
    </Wrapper1>
  );
}
type CopyContentTextProps = {
  text: string;
};

function CopyContentText({ text }: CopyContentTextProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[#21272a] text-[16px] w-full">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[2.395px] h-full items-center justify-center p-[7.665px] relative shrink-0">
      <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#21272a] text-[16px] text-nowrap">
        <p className="leading-[1.35]">{text}</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#efefef] relative size-full" data-name="32">
      <div className="absolute h-[937px] left-[1419px] top-[156px] w-[430px]">
        <div className="absolute h-[210.612px] left-0 top-[665px] w-[430px]" data-name="sticky footer">
          <div className="absolute bottom-0 h-[210.6123046875px] left-0 pointer-events-none top-0">
            <div className="content-stretch flex flex-col items-start pointer-events-auto sticky top-0 w-[430px]">
              <NavItem>
                <div className="relative shrink-0 size-[21.379px]" data-name="Left icon">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3788 21.3788">
                    <g id="Left icon">
                      <path clipRule="evenodd" d={svgPaths.p47df700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[17.199px] text-center text-nowrap text-white">Sign In</p>
              </NavItem>
              <NavItem>
                <Wrapper1>
                  <g clipPath="url(#clip0_40000116_6784)" id="Left icon">
                    <path clipRule="evenodd" d={svgPaths.p25de9700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="clip0_40000116_6784">
                      <rect fill="white" height="21.3566" width="21.3566" />
                    </clipPath>
                  </defs>
                </Wrapper1>
                <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[17.199px] text-center text-nowrap text-white">{`Help & support`}</p>
              </NavItem>
              <div className="bg-[#0074bf] h-[70.204px] relative shrink-0 w-full" data-name="_Nav item">
                <Wrapper>
                  <div className="relative shrink-0 size-[21.357px]" data-name="Left icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3566 21.3567">
                      <g id="Left icon">
                        <path clipRule="evenodd" d={svgPaths.p3fdec580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[1.35] relative shrink-0 text-[17.199px] text-center text-nowrap text-white">Contact us</p>
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex flex-col h-[811px] items-start left-1/2 overflow-clip pb-0 pt-[28px] px-0 top-[calc(50%-63px)] translate-x-[-50%] translate-y-[-50%]" data-name="Drawer">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="List">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center pl-[13.76px] pr-0 py-0 relative size-full">
                  <div className="content-stretch flex gap-[11.36px] h-[21px] items-center relative shrink-0" data-name="Content">
                    <div className="content-stretch flex items-start px-0 py-[13.76px] relative shrink-0" data-name="Close">
                      <div className="relative shrink-0 size-[27.519px]" data-name="Icon">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5193 27.5193">
                          <g id="Icon">
                            <path d={svgPaths.p27fd0380} fill="var(--fill-0, #21272A)" id="Vector" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#21272a] text-[17.2px] text-nowrap">
                      <p className="leading-[1.35]">Menu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f3f5f8] content-stretch flex gap-[8px] h-[52px] items-center overflow-x-auto overflow-y-clip p-[2px] relative shrink-0 w-[430px]" data-name="tab">
              <div className="bg-[#0079c8] content-stretch flex gap-[2px] h-full items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0">
                <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
                  <p className="leading-[1.35]">{`Individuals & Families `}</p>
                </div>
              </div>
              <Text text="Businesses" />
              <Text text="Intermediaries" />
              <div className="bg-[#ebeef2] content-stretch flex gap-[2.395px] h-full items-center justify-center p-[7.665px] relative shrink-0">
                <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#21272a] text-[18.134px] text-nowrap">
                  <p className="leading-[1.35]">Healthcare professionals</p>
                </div>
              </div>
              <div className="bg-[#ebeef2] content-stretch flex gap-[2.395px] h-full items-center justify-center p-[7.665px] relative shrink-0">
                <div className="flex flex-col font-['Montserrat:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#21272a] text-[18.134px] text-nowrap">
                  <p className="leading-[1.35]">Find a healthcare professional or service</p>
                </div>
                <div className="relative shrink-0 size-[19.164px]" data-name="ri:external-link-line">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1636 19.1636">
                    <g id="ri:external-link-line">
                      <path d={svgPaths.p24822480} fill="var(--fill-0, black)" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start relative shadow-[0px_2.293px_4.587px_0px_rgba(33,39,42,0.2)] shrink-0 w-full" data-name="Dropdown">
            <DropdownSelect>
              <CopyContentText text="Health insurance" />
              <Chevron />
            </DropdownSelect>
            <DropdownSelect>
              <CopyContentText text="Dental" />
              <Chevron1 />
            </DropdownSelect>
            <DropdownSelect>
              <CopyContentText text="Care homes" />
              <Wrapper1>
                <g clipPath="url(#clip0_40000116_6744)" id="Chevron">
                  <path d={svgPaths.p12ccf580} fill="var(--fill-0, #21272A)" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_40000116_6744">
                    <rect fill="white" height="21.3566" width="21.3566" />
                  </clipPath>
                </defs>
              </Wrapper1>
            </DropdownSelect>
            <DropdownSelect>
              <CopyContentText text="Pay as you go" />
              <Chevron />
            </DropdownSelect>
            <DropdownSelect>
              <CopyContentText text="Subscriptions" />
              <Chevron1 />
            </DropdownSelect>
            <DropdownSelect>
              <CopyContentText text="Health information" />
              <Wrapper1>
                <g clipPath="url(#clip0_40000116_6741)" id="Chevron">
                  <path d={svgPaths.p12ccf580} fill="var(--fill-0, #21272A)" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_40000116_6741">
                    <rect fill="white" height="21.3566" width="21.3566" />
                  </clipPath>
                </defs>
              </Wrapper1>
            </DropdownSelect>
          </div>
          <div className="h-[467.459px] relative shrink-0 w-full">
            <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[430px]" data-name="bottom">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <div className="bg-white h-[64.212px] relative shrink-0 w-full" data-name="dropdown select">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[13.76px] py-[18.346px] size-full" />
                  </div>
                </div>
                {[...Array(2).keys()].map((_, i) => (
                  <div className="bg-white h-[64.212px] relative shrink-0 w-full" data-name="dropdown select">
                    <Wrapper2>
                      <div className="absolute h-[23.174px] left-[13.76px] top-[20.52px] w-[402.566px]" data-name="Copy content" />
                    </Wrapper2>
                  </div>
                ))}
                <div className="bg-white h-[64.212px] relative shrink-0 w-full" data-name="dropdown select">
                  <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0px_0px_1.147px] border-solid inset-0 pointer-events-none" />
                  <Wrapper2>
                    <div className="absolute h-[23.174px] left-[13.76px] top-[20.52px] w-[402.566px]" data-name="Copy content" />
                  </Wrapper2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[559px] top-[189px]">
        <div className="content-stretch flex items-center relative rounded-[7.877px] shrink-0 w-[530.407px]" data-name="l-column">
          <div className="content-stretch flex gap-[13.129px] items-start relative shrink-0" data-name="l-item">
            <div className="bg-[#db3907] rounded-[13128.9px] shrink-0 size-[31.509px]" data-name="indicator" />
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#db3907] text-[21.006px] text-nowrap">
              <p className="leading-[31.509px]">Idea</p>
            </div>
          </div>
        </div>
        <div className="bg-[#ffe4ee] relative rounded-[7.877px] shrink-0 w-full" data-name="_comment">
          <div aria-hidden="true" className="absolute border-[#db3907] border-[1.313px] border-solid inset-0 pointer-events-none rounded-[7.877px]" />
          <div className="content-stretch flex flex-col items-start p-[21.006px] relative w-full">
            <div className="content-stretch flex gap-[10.503px] items-start relative shrink-0 w-full" data-name="l-content">
              <div className="bg-[#db3907] relative rounded-[13128.9px] shrink-0 size-[31.509px]" data-name="indicator">
                <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%_12.51%_12.5%_12.49%] justify-center leading-[0] not-italic text-[14px] text-center text-white">
                  <p className="leading-[normal]">1</p>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-[5.252px] grow items-start min-h-px min-w-px relative shrink-0" data-name="l-text">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#db3907] text-[21.006px] w-full">
                  <p className="leading-[31.509px]">{`Incorrect content Hierarchy.  Items under each main category should be grouped together.`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[793.051px] left-[60px] top-[189px] w-[464px]" data-name="Screenshot 2024-07-09 at 08.40.13 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[126.25%] left-[-17.17%] max-w-none top-[-13.03%] w-[383.63%]" src={imgScreenshot20240709At0840131} />
        </div>
      </div>
      <div className="absolute content-stretch flex h-[499px] items-center left-[201px] px-0 py-[40.874px] rounded-[10.219px] top-[245px] w-[275px]" data-name="zone">
        <div className="content-stretch flex items-center justify-end pl-0 pr-[27.25px] py-0 relative shrink-0 size-[54.499px]" data-name="l-offeset">
          <div className="bg-[#db3907] relative rounded-[17030.9px] shrink-0 size-[40.874px]" data-name="indicator">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[23.843px] text-center text-white">
              <p className="leading-[normal]">1</p>
            </div>
          </div>
        </div>
      </div>
      <Text1 text="Before" additionalClassNames="left-[60px]" />
      <Text1 text="After" additionalClassNames="left-[1419px]" />
      <div className="absolute h-[55px] left-[1385px] rounded-[11.283px] top-[243px] w-[475px]" data-name="zone">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-0 py-[45.13px] relative size-full">
            <div className="content-stretch flex items-center justify-end pl-0 pr-[30.087px] py-0 relative shrink-0 size-[60.174px]" data-name="l-offeset">
              <IndicatorText text="1" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[474px] items-center left-[1384px] px-0 py-[45.13px] rounded-[11.283px] top-[255px]" data-name="zone">
        <div className="content-stretch flex items-center justify-end pl-0 pr-[30.087px] py-0 relative shrink-0 size-[60.174px]" data-name="l-offeset">
          <IndicatorText text="2" />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[814px] top-[482px]">
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
              <div className="bg-[#1b883c] relative rounded-[13128.9px] shrink-0 size-[31.509px]" data-name="indicator">
                <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[18.38px] text-center text-white">
                  <p className="leading-[normal]">1</p>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-[5.252px] grow items-start min-h-px min-w-px relative shrink-0" data-name="l-text">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b883c] text-[21.006px] w-full">
                  <p className="leading-[31.509px]">Group top-level navigation items first, employing a tab switch structure for easy switching between categories. More mobile users, should optimise easy findability</p>
                </div>
              </div>
            </div>
          </Comment>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[533.033px]" data-name="Comment">
          <Comment>
            <div className="content-stretch flex gap-[10.503px] items-start relative shrink-0 w-full" data-name="l-content">
              <div className="bg-[#1b883c] relative rounded-[13128.9px] shrink-0 size-[31.509px]" data-name="indicator">
                <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%_12.51%_12.5%_12.49%] justify-center leading-[0] not-italic text-[18.38px] text-center text-white">
                  <p className="leading-[normal]">2</p>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-[5.252px] grow items-start min-h-px min-w-px relative shrink-0" data-name="l-text">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[31.509px] not-italic relative shrink-0 text-[#1b883c] text-[21.006px] w-full">
                  <p className="mb-[10.503105163574219px]">{`Nest subcategories under each selected category, making it easier for users to understand the hierarchy and quickly find what they're looking for. `}</p>
                  <p>Drop down items underneath each sub- category also to clearer hierarchy.</p>
                </div>
              </div>
            </div>
          </Comment>
        </div>
      </div>
    </div>
  );
}