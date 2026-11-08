import clsx from "clsx";
import imgImage3 from "figma:asset/e3528bccdf864d126ab85ff84ce8a95eb209f093.png";
type Component13ImageProps = {
  additionalClassNames?: string;
};

function Component13Image({ children, additionalClassNames = "" }: React.PropsWithChildren<Component13ImageProps>) {
  return (
    <div className={clsx("absolute h-[287.414px] top-[259px]", additionalClassNames)}>
      <div className="absolute inset-0 opacity-25 overflow-hidden pointer-events-none">{children}</div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="13">
      <Component13Image additionalClassNames="left-[963.57px] w-[321.221px]">
        <img alt="" className="absolute h-[114.66%] left-[-100.49%] max-w-none top-[-14.66%] w-[200.49%]" src={imgImage3} />
      </Component13Image>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.28] left-[calc(50%-125px)] not-italic text-[#93bb48] text-[60px] text-nowrap top-[calc(50%+42px)] tracking-[-0.6px]">Define</p>
      <Component13Image additionalClassNames="left-[638px] w-[190.806px]">
        <img alt="" className="absolute h-[114.66%] left-0 max-w-none top-[-14.66%] w-[337.52%]" src={imgImage3} />
      </Component13Image>
      <div className="absolute h-[287.414px] left-[826.21px] top-[259px] w-[151.027px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.66%] left-[-124.62%] max-w-none top-[-14.66%] w-[426.41%]" src={imgImage3} />
        </div>
      </div>
    </div>
  );
}