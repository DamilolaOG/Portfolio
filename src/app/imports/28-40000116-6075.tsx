import svgPaths from "./svg-96h7ii785e";
import imgScreenshot20240614At1817151 from "figma:asset/27db993a14042a60791719c388d59c916e39fedd.png";

function LeftIcon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[21.85px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8499 21.8499">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#0d1846] content-stretch flex gap-[8.42px] h-[46.311px] items-center justify-center px-[21.051px] py-[12.63px] relative shrink-0">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[14.046px] text-center text-nowrap text-white">{children}</p>
    </div>
  );
}
type NavItemTextProps = {
  text: string;
};

function NavItemText({ text }: NavItemTextProps) {
  return <Wrapper>{text}</Wrapper>;
}

export default function Component() {
  return (
    <div className="bg-[#efefef] relative size-full" data-name="28">
      <div className="absolute contents left-[68px] top-[166px]">
        <div className="absolute contents left-[68px] top-[225.6px]">
          <div className="absolute h-[562.398px] left-[68px] top-[225.6px] w-[1684px]" data-name="Screenshot 2024-06-14 at 18.17.15 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[199.01%] left-0 max-w-none top-[-34.83%] w-[102.82%]" src={imgScreenshot20240614At1817151} />
            </div>
          </div>
          <div className="absolute bg-white h-[36.108px] left-[794.33px] top-[225.6px] w-[161.356px]" />
        </div>
        <div className="absolute bg-[#0d1846] content-stretch flex h-[59.697px] items-center justify-between left-[68px] top-[166px] w-[1684px]" data-name="🦖 Top navigation">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Left">
            <Wrapper key="nav-individuals">{`Individuals & families`}</Wrapper>
            <NavItemText key="nav-business" text="Business" />
            <NavItemText key="nav-intermediaries" text="Intermediaries" />
            <NavItemText key="nav-healthcare" text="Healthcare professionals" />
            <NavItemText key="nav-find" text="Find a healthcare professional or service" />
          </div>
          <div className="content-stretch flex items-center relative shrink-0 w-[633.625px]" data-name="Right">
            <div className="absolute bg-[#0079c8] content-stretch flex gap-[8.42px] h-[59.307px] items-center justify-center left-[488.09px] px-[21.051px] py-[12.63px] top-[-6.3px] w-[145.536px]" data-name="_Nav item">
              <div className="relative shrink-0 size-[21.051px]" data-name="Left icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0507 21.0508">
                  <g id="Left icon">
                    <path clipRule="evenodd" d={svgPaths.p3cef7f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                  </g>
                </svg>
              </div>
              <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[14.046px] text-center text-nowrap text-white">Sign in</p>
              <div className="relative shrink-0 size-[16.841px]" data-name="Right icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8405 16.8405">
                  <g clipPath="url(#clip0_40000116_6195)" id="Right icon">
                    <path d={svgPaths.p8b89700} fill="var(--fill-0, white)" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="clip0_40000116_6195">
                      <rect fill="white" height="16.8405" width="16.8405" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute content-stretch flex items-center left-[-29.68px] top-[-1.23px]">
              <div className="bg-[#0d1846] content-stretch flex gap-[8.42px] h-[46.311px] items-center justify-center px-[21.051px] py-[12.63px] relative shrink-0" data-name="_Nav item">
                <LeftIcon>
                  <g clipPath="url(#clip0_40000116_6192)" id="Left icon">
                    <path clipRule="evenodd" d={svgPaths.p3ea43600} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="clip0_40000116_6192">
                      <rect fill="white" height="21.8499" width="21.8499" />
                    </clipPath>
                  </defs>
                </LeftIcon>
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[14.046px] text-center text-nowrap text-white">{`Help & support`}</p>
              </div>
              <div className="bg-[#0d1846] content-stretch flex gap-[8.42px] h-[46.469px] items-center justify-center px-[21.051px] py-[12.63px] relative shrink-0 w-[139.407px]" data-name="_Nav item">
                <div className="relative shrink-0 size-[21.85px]" data-name="Left icon">
                  <div className="absolute inset-[-0.01%_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8499 21.8516">
                      <g id="Left icon">
                        <path clipRule="evenodd" d={svgPaths.p1f145200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[14.046px] text-center text-nowrap text-white">Contact us</p>
              </div>
              <div className="bg-white content-stretch flex gap-[8.42px] h-[48.49px] items-center justify-center pl-[21.051px] pr-[31.994px] py-[12.63px] relative rounded-[4.292px] shrink-0 w-[180.825px]" data-name="_Nav item">
                <LeftIcon>
                  <g clipPath="url(#clip0_40000116_6186)" id="Left icon">
                    <path clipRule="evenodd" d={svgPaths.p333fbe80} fill="var(--fill-0, #0079C8)" fillRule="evenodd" id="Vector" />
                  </g>
                  <defs>
                    <clipPath id="clip0_40000116_6186">
                      <rect fill="white" height="21.8499" width="21.8499" />
                    </clipPath>
                  </defs>
                </LeftIcon>
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[#0079c8] text-[14.046px] text-center text-nowrap">Search Bupa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[1066px] top-[820px]">
        <div className="content-stretch flex items-center relative rounded-[7.877px] shrink-0 w-[530.407px]" data-name="l-column">
          <div className="content-stretch flex items-start relative shrink-0" data-name="l-item">
            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b883c] text-[21.006px] text-nowrap">
              <p className="leading-[31.509px]">UX optimisations</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[635px]" data-name="Comment">
          <div className="bg-[#e7fff8] relative rounded-[7.877px] shrink-0 w-full" data-name="_comment">
            <div aria-hidden="true" className="absolute border-[#1b883c] border-[1.313px] border-solid inset-0 pointer-events-none rounded-[7.877px]" />
            <div className="content-stretch flex flex-col items-start p-[21.006px] relative w-full">
              <div className="content-stretch flex gap-[10.503px] items-start relative shrink-0 w-full" data-name="l-content">
                <div className="bg-[#1b883c] relative rounded-[13128.9px] shrink-0 size-[31.509px]" data-name="indicator">
                  <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[18.38px] text-center text-white">
                    <p className="leading-[normal]">1</p>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[5.252px] grow items-start min-h-px min-w-px relative shrink-0" data-name="l-text">
                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b883c] text-[21.006px] w-full">
                    <p className="leading-[31.509px]">{`increasing the size of the first level navigation boosts visibility and clicks. Also, changing the search button  colour creates a distinction, serving as a prompt.`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[99px] items-center left-[1500px] px-0 py-[45.13px] rounded-[11.283px] top-[86px] w-[250px]" data-name="zone">
        <div className="content-stretch flex items-center justify-end pl-0 pr-[30.087px] py-0 relative shrink-0 size-[60.174px]" data-name="l-offeset">
          <div className="bg-[#1b883c] relative rounded-[18804.3px] shrink-0 size-[45.13px]" data-name="indicator">
            <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[12.5%] justify-center leading-[0] not-italic text-[26.326px] text-center text-white">
              <p className="leading-[normal]">1</p>
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