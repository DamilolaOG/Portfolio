import clsx from "clsx";
import imgScreenshot20190206At1536 from "figma:asset/b6a3fee5793dc1dfdb3c8bbb86c1069116be5b1c.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute content-stretch flex items-center justify-center left-[144px] p-[10px]", additionalClassNames)}>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[48px] text-nowrap text-white">{children}</div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#0f2460] relative size-full" data-name="23">
      <div className="absolute left-[1699px] size-[120px] top-[860px]" data-name="Screenshot 2019-02-06 at 15.36">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[698.21%] left-[-798.2%] max-w-none top-[-557.14%] w-[938.74%]" src={imgScreenshot20190206At1536} />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] left-[100px] text-[64px] text-nowrap text-white top-[117px] translate-y-[-50%]">
        <p className="leading-[1.35]">Web</p>
      </div>
      <div className="absolute border-[#f1c22d] border-[6px] border-solid h-[129px] left-[93px] rounded-[30px] top-[504px] w-[1186px]" />
      <Wrapper additionalClassNames="top-[274px]">
        <ol className="list-decimal" start="1">
          <li className="ms-[72px]">
            <span className="leading-[1.35]">Information architecture</span>
          </li>
        </ol>
      </Wrapper>
      <Wrapper additionalClassNames="top-[394px]">
        <ol className="list-decimal" start="2">
          <li className="ms-[72px]">
            <span className="leading-[1.35]">Background color</span>
          </li>
        </ol>
      </Wrapper>
      <div className="absolute content-stretch flex items-center justify-center left-[144px] p-[10px] top-[526px]">
        <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[48px] text-nowrap text-white">
          <ol className="list-decimal" start="3">
            <li className="ms-[72px]">
              <span className="leading-[1.35]">Nav scroll behaviour</span>
            </li>
          </ol>
        </div>
      </div>
      <Wrapper additionalClassNames="top-[658px]">
        <ol className="list-decimal" start="4">
          <li className="ms-[72px]">
            <span className="leading-[1.35]">Search bar</span>
          </li>
        </ol>
      </Wrapper>
    </div>
  );
}