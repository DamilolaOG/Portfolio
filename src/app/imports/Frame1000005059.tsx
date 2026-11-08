import imgImage2 from "figma:asset/78c21aca32a6d43a2967c87080f836280bab84c5.png";

export default function Frame() {
  return (
    <div className="content-stretch flex items-center p-[10px] relative size-full">
      <div className="relative shrink-0 size-[480px]" data-name="Image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}