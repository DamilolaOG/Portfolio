import clsx from "clsx";
import imgImage3 from "figma:asset/e3528bccdf864d126ab85ff84ce8a95eb209f093.png";
type Component16ImageProps = {
  additionalClassNames?: string;
};

function Component16Image({ children, additionalClassNames = "" }: React.PropsWithChildren<Component16ImageProps>) {
  return (
    <div className={clsx("absolute h-[287.414px] top-[259px]", additionalClassNames)}>
      <div className="absolute inset-0 opacity-25 overflow-hidden pointer-events-none">{children}</div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="16">
      <Component16Image additionalClassNames="left-[1110.6px] w-[174.188px]">
        <img alt="" className="absolute h-[114.66%] left-[-269.72%] max-w-none top-[-14.66%] w-[369.72%]" src={imgImage3} />
      </Component16Image>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.28] left-[calc(50%-125px)] not-italic text-[#18b6cc] text-[60px] text-nowrap top-[calc(50%+42px)] tracking-[-0.6px]">Design</p>
      <Component16Image additionalClassNames="left-[638px] w-[333.166px]">
        <img alt="" className="absolute h-[114.66%] left-0 max-w-none top-[-14.66%] w-[193.3%]" src={imgImage3} />
      </Component16Image>
      <div className="absolute h-[287.414px] left-[960px] top-[259px] w-[150.959px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.66%] left-[-211.27%] max-w-none top-[-14.66%] w-[426.61%]" src={imgImage3} />
        </div>
      </div>
    </div>
  );
}