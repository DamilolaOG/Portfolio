import imgImage20 from "figma:asset/b77fd23c8866ae28395655173075e60725543d67.png";
import imgImage18 from "figma:asset/975f7d34beb1070da40c95b72d1837ef742a09f3.png";
import imgImage17 from "figma:asset/4ca4d4867cf14defa4d8344ec9e1b71a7c92d092.png";
import imgImage21 from "figma:asset/b08f6a41cdba6a2c1757547677fbf8c44f4d04bf.png";

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="12">
      <div className="absolute content-stretch flex flex-col items-start left-[70px] top-[140px] w-[534px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label ⇵ Content">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[443px]" data-name="Headline ⇵ Text">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[44px] text-black w-[483px]">Competitor Analysis</p>
              </div>
            </div>
          </div>
          <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[18px] text-black w-full">Carried out a competitor analysis looking at top brands like Aviva, axa, vitality and the NHS to help identify best practices, uncover gaps in our offering, and inform strategic design decisions for improving user experience.</p>
        </div>
      </div>
      <div className="absolute bg-[#f3f5f8] content-stretch flex flex-col gap-[10px] items-center justify-center left-[70px] p-[16px] rounded-[10px] text-[#4f4f4f] text-[20px] top-[407px] w-[599px]">
        <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 w-full">Insights from comp. analysis</p>
        <ul className="block font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full">
          <li className="mb-0 ms-[30px]">
            <span className="leading-[30px]">Avoid Overwhelming users with too many options - can we take out irrelevant options to reduce cognitive overload?</span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[30px]">Use clear titles that explain what the category of products</span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[30px]">Avoid Unclear or ambiguous links, make sure links say where exactly customers would land on.</span>
          </li>
        </ul>
      </div>
      <div className="absolute bg-[#ebeef2] h-[610px] left-[699px] overflow-clip rounded-[10px] top-[140px] w-[1192px]">
        <div className="absolute h-[224.826px] left-[620.26px] top-[62px] w-[529.207px]" data-name="image 20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[111.44%] left-0 max-w-none top-0 w-full" src={imgImage20} />
          </div>
        </div>
        <div className="absolute h-[193.382px] left-[619.95px] top-[337px] w-[529.521px]" data-name="image 18">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[188.67%] left-0 max-w-none top-0 w-full" src={imgImage18} />
          </div>
        </div>
        <div className="absolute h-[224.826px] left-[42.63px] top-[62px] w-[529.207px]" data-name="image 17">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[109.69%] left-0 max-w-none top-0 w-full" src={imgImage17} />
          </div>
        </div>
        <div className="absolute h-[193.382px] left-[42px] top-[337px] w-[529.521px]" data-name="image 21">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[102.74%] left-0 max-w-none top-0 w-full" src={imgImage21} />
          </div>
        </div>
      </div>
    </div>
  );
}