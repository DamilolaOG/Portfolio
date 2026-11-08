type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[20px] text-black w-full">
        <p className="leading-[1.35]">{text}</p>
      </div>
    </div>
  );
}
type HeaderTextProps = {
  text: string;
};

function HeaderText({ text }: HeaderTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#979797] text-[16px] text-nowrap">
        <p className="leading-[1.35]">{text}</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="11">
      <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[70px] top-[140px] w-[534px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label ⇵ Content">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[443px]" data-name="Headline ⇵ Text">
              <div className="content-stretch flex flex-col items-start relative shrink-0">
                <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.35] relative shrink-0 text-[44px] text-black w-[483px]">{`Card Sort `}</p>
              </div>
            </div>
          </div>
          <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[1.4] relative shrink-0 text-[18px] text-black w-full">Conducted A card sorting exercise with 20 participants (7 Bupa customers, 7 users with competitor insurances, 6 users with no insurance). The aim of this was to:</p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <HeaderText text="01" />
            <Text text="Understand thoughts / expectations for each of the topics / categories" />
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <HeaderText text="02" />
            <Text text="Understand what they found the hardest / easiest to sort" />
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <HeaderText text="03" />
            <Text text="Understand what terms need re-wording" />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f3f5f8] content-stretch flex flex-col gap-[10px] items-center justify-center left-[70px] p-[16px] rounded-[10px] text-[#4f4f4f] text-[20px] top-[579px] w-[661px]">
        <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 w-full">Insights from card sort</p>
        <ul className="block font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 w-full">
          <li className="leading-[30px] ms-[30px]">
            <span>{`Roughly `}</span>
            <span className="font-['Montserrat:Bold',sans-serif] font-bold">40%</span>
            <span>
              {` of participants failed to group correctly. Which translates to the fact that, more users are likely to drop off due to lack of clarity in navigation, loosing potential revenue to our competitors.`}
              <br aria-hidden="true" />
            </span>
            <span className="font-['Montserrat:Bold',sans-serif] font-bold">This was the validation I needed to come up with an optimised design.</span>
          </li>
        </ul>
      </div>
      <div className="absolute contents left-[822px] top-[72px]">
        <div className="absolute bg-[#f3f5f8] h-[801.458px] left-[822px] rounded-[11.759px] top-[72px] w-[981px]" />
        <div className="absolute bg-[#007d79] h-[52.498px] left-[880.67px] top-[117.29px] w-[93.674px]" />
        <div className="absolute bg-[rgba(0,125,121,0.24)] h-[52.498px] left-[882.73px] top-[664.92px] w-[93.674px]" />
        <div className="absolute bg-[rgba(0,125,121,0.24)] h-[52.498px] left-[880.67px] top-[253.17px] w-[93.674px]" />
        <div className="absolute bg-[rgba(0,125,121,0.24)] h-[52.498px] left-[880.67px] top-[320.08px] w-[93.674px]" />
        <div className="absolute bg-[rgba(0,125,121,0.24)] h-[52.498px] left-[880.67px] top-[186.26px] w-[93.674px]" />
        <div className="absolute bg-[rgba(0,125,121,0.24)] h-[52.498px] left-[882.73px] top-[733.89px] w-[93.674px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[901.26px] not-italic text-[7.404px] text-black top-[685.51px] w-[63.672px]">Get a quote</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[893.03px] not-italic text-[7.404px] text-black top-[754.48px] w-[63.672px]">Get treatment</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[888.91px] not-italic text-[7.404px] text-black top-[269.64px] w-[57.749px]">Policy benefits</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[890.97px] not-italic text-[7.404px] text-black top-[333.46px] w-[58.49px]">Understanding Health Insurance</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[888.91px] not-italic text-[7.404px] text-black top-[200.67px] w-[73.297px]">Compare cover</p>
        <div className="absolute bg-[rgba(0,125,121,0.24)] h-[52.498px] left-[881.7px] top-[386.99px] w-[93.674px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[889.94px] not-italic text-[7.404px] text-black top-[401.4px] w-[61.451px]">{`Leaving company scheme `}</p>
        <div className="absolute bg-[rgba(208,38,112,0.2)] h-[52.498px] left-[1039.2px] top-[186.26px] w-[92.644px]" />
        <div className="absolute bg-[rgba(208,38,112,0.2)] h-[52.498px] left-[1039.2px] top-[324.2px] w-[92.644px]" />
        <div className="absolute bg-[rgba(208,38,112,0.2)] h-[52.498px] left-[1039.2px] top-[393.17px] w-[92.644px]" />
        <div className="absolute bg-[rgba(208,38,112,0.2)] h-[52.498px] left-[1039.2px] top-[468.31px] w-[92.644px]" />
        <div className="absolute bg-[rgba(208,38,112,0.2)] h-[52.498px] left-[1039.2px] top-[255.23px] w-[92.644px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1049.49px] not-italic text-[7.404px] text-black top-[198.61px] w-[54.048px]">Find a dental practice</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1050.52px] not-italic text-[7.404px] text-black top-[270.67px] w-[57.749px]">Dental Treatment</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1045.38px] not-italic text-[7.404px] text-black top-[345.82px] w-[57.009px]">Dental Services</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1050.52px] not-italic text-[7.404px] text-black top-[408.61px] w-[48.865px]">Dental Insurance</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1047.44px] not-italic text-[7.404px] text-black top-[482.72px] w-[51.086px]">{`Dental Professionals `}</p>
        <div className="absolute bg-[rgba(0,121,200,0.23)] h-[52.498px] left-[1197.72px] top-[186.26px] w-[92.644px]" />
        <div className="absolute bg-[rgba(0,121,200,0.23)] h-[52.498px] left-[1197.72px] top-[324.2px] w-[92.644px]" />
        <div className="absolute bg-[rgba(0,121,200,0.23)] h-[52.498px] left-[1197.72px] top-[393.17px] w-[92.644px]" />
        <div className="absolute bg-[rgba(0,121,200,0.23)] h-[52.498px] left-[1197.72px] top-[468.31px] w-[92.644px]" />
        <div className="absolute bg-[rgba(0,121,200,0.23)] h-[52.498px] left-[1197.72px] top-[255.23px] w-[92.644px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1205.96px] not-italic text-[7.404px] text-black top-[199.64px] w-[54.788px]">Where do I start?</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1204.93px] not-italic text-[7.404px] text-black top-[272.73px] w-[57.749px]">Types of care</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1203.9px] not-italic text-[7.404px] text-black top-[338.61px] w-[57.749px]">Care home by region</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1203.9px] not-italic text-[7.404px] text-black top-[406.55px] w-[54.048px]">{`Care home News & Events`}</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1205.96px] not-italic text-[7.404px] text-black top-[482.72px] w-[51.826px]">Care Home Careers</p>
        <div className="absolute bg-[rgba(208,38,112,0.2)] h-[52.498px] left-[1037.14px] top-[543.46px] w-[92.644px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1049.49px] not-italic text-[7.404px] text-black top-[561.99px] w-[51.086px]">Ways to pay</p>
        <div className="absolute bg-[rgba(0,121,200,0.23)] h-[52.498px] left-[1197.72px] top-[537.28px] w-[92.644px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1205.96px] not-italic text-[7.404px] text-black top-[551.69px] w-[51.826px]">Find a Care Home</p>
        <div className="absolute bg-[rgba(138,63,245,0.2)] h-[52.498px] left-[1357.28px] top-[186.26px] w-[93.674px]" />
        <div className="absolute bg-[rgba(138,63,245,0.2)] h-[83.38px] left-[1357.28px] top-[255.23px] w-[113.232px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1365.51px] not-italic text-[7.404px] text-black top-[198.61px] w-[54.788px]">Health Assessments</p>
        <div className="absolute bg-[rgba(236,137,56,0.16)] h-[52.498px] left-[1517.86px] top-[186.26px] w-[92.644px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1532.27px] not-italic text-[7.404px] text-black top-[206.85px] w-[54.788px]">Health A-Z</p>
        <div className="absolute bg-[rgba(236,137,56,0.16)] h-[52.498px] left-[1516.83px] top-[255.23px] w-[92.644px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1523.01px] not-italic text-[7.404px] text-black top-[267.58px] w-[62.932px]">Health Tools and Calculators</p>
        <div className="absolute bg-[rgba(236,137,56,0.16)] h-[52.498px] left-[1517.86px] top-[324.2px] w-[92.644px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1521.98px] not-italic text-[7.404px] text-black top-[344.79px] w-[54.788px]">Health blogs</p>
        <div className="absolute bg-[rgba(236,137,56,0.16)] h-[52.498px] left-[1520.95px] top-[402.43px] w-[92.644px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1533.3px] not-italic text-[7.404px] text-black top-[416.84px] w-[54.788px]">Browse by health topic</p>
        <div className="absolute bg-[rgba(236,137,56,0.16)] h-[52.498px] left-[1520.95px] top-[466.25px] w-[92.644px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1529.18px] not-italic text-[7.404px] text-black top-[482.72px] w-[54.788px]">Specific health conditions</p>
        <div className="absolute bg-[rgba(219,57,7,0.18)] h-[52.498px] left-[1653.74px] top-[189.35px] w-[92.644px]" />
        <div className="absolute bg-[rgba(219,57,7,0.18)] h-[52.498px] left-[1653.74px] top-[332.43px] w-[92.644px]" />
        <div className="absolute bg-[rgba(219,57,7,0.18)] h-[52.498px] left-[1653.74px] top-[403.46px] w-[92.644px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1669.18px] not-italic text-[7.404px] text-black top-[212px] w-[54.788px]">Contact Us</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1682.56px] not-italic text-[7.404px] text-black top-[351.99px] w-[54.048px]">FAQs</p>
        <div className="absolute bg-[rgba(219,57,7,0.18)] h-[52.498px] left-[1653.74px] top-[261.41px] w-[92.644px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1658.89px] not-italic text-[7.404px] text-black top-[279.93px] w-[60.711px]">Help and support</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1661.97px] not-italic text-[7.404px] text-black top-[424.05px] w-[60.711px]">{`Members login `}</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1368.6px] not-italic text-[7.404px] text-black top-[268.61px] w-[69.595px]">Specialist Services (i.e. earwax, menopause plan, prostate checks)</p>
        <div className="absolute bg-[rgba(138,63,245,0.2)] h-[52.498px] left-[1358.31px] top-[363.31px] w-[93.674px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1367.57px] not-italic text-[7.404px] text-black top-[371.55px] w-[51.826px]">Book an appointment</p>
        <div className="absolute bg-[rgba(138,63,245,0.2)] h-[52.498px] left-[1359.34px] top-[430.22px] w-[92.644px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1374.78px] not-italic text-[7.404px] text-black top-[444.64px] w-[51.826px]">Private GP appointments</p>
        <div className="absolute bg-[rgba(208,38,112,0.2)] h-[52.498px] left-[1037.14px] top-[612.42px] w-[92.644px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1046.4px] not-italic text-[7.404px] text-black top-[620.66px] w-[51.086px]">Book an appointment</p>
        <div className="absolute bg-[#d02670] h-[52.498px] left-[1038.17px] top-[117.29px] w-[92.644px]" />
        <div className="absolute bg-[#0079c8] h-[52.498px] left-[1197.72px] top-[117.29px] w-[92.644px]" />
        <div className="absolute bg-[#8a3ff5] h-[52.498px] left-[1357.28px] top-[117.29px] w-[93.674px]" />
        <div className="absolute bg-[#ec8938] h-[52.498px] left-[1507.57px] top-[117.29px] w-[106.026px]" />
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[893.03px] not-italic text-[#f7f7f7] text-[7.404px] top-[130.67px] w-[60.711px]">Health Insurance</p>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[1060.82px] not-italic text-[#f7f7f7] text-[7.404px] top-[137.88px] w-[33.317px]">Dental</p>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[8.885px] leading-[normal] left-[1211.11px] not-italic text-[7.404px] text-white top-[136.85px] w-[48.865px]">Care homes</p>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[8.885px] leading-[normal] left-[1368.6px] not-italic text-[7.404px] text-white top-[132.73px] w-[53.307px]">Pay as you go</p>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[8.885px] leading-[normal] left-[1527.13px] not-italic text-[7.404px] text-white top-[132.73px] w-[65.894px]">Health information</p>
        <div className="absolute bg-[#b72900] h-[52.498px] left-[1653.74px] top-[119.35px] w-[106.026px]" />
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold h-[8.885px] leading-[normal] left-[1673.3px] not-italic text-[7.404px] text-white top-[134.79px] w-[52.567px]">[OPEN CATEGORY]</p>
        <div className="absolute bg-[rgba(0,125,121,0.24)] h-[52.498px] left-[937.29px] top-[798.74px] w-[93.674px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[944.5px] not-italic text-[7.404px] text-black top-[815.21px] w-[63.672px]">Chose by Cover Type</p>
        <div className="absolute bg-[rgba(0,125,121,0.24)] h-[52.498px] left-[990.82px] top-[733.89px] w-[93.674px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[1001.11px] not-italic text-[7.404px] text-black top-[748.3px] w-[62.932px]">Chose by Cover Package</p>
        <div className="absolute bg-[rgba(0,125,121,0.24)] h-[52.498px] left-[880.67px] top-[455.96px] w-[93.674px]" />
        <div className="absolute bg-[rgba(0,125,121,0.24)] h-[52.498px] left-[883.76px] top-[526.99px] w-[93.674px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[887.88px] not-italic text-[7.404px] text-black top-[470.37px] w-[58.49px]">Member support</p>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[899.2px] not-italic text-[7.404px] text-black top-[541.4px] w-[73.297px]">Why health insurance?</p>
        <div className="absolute bg-[rgba(0,125,121,0.24)] h-[52.498px] left-[883.76px] top-[598.01px] w-[93.674px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[888.91px] not-italic text-[7.404px] text-black top-[618.6px] w-[73.297px]">Why chose Bupa?</p>
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[39.487px] left-[1294.49px] not-italic text-[14.808px] text-black text-nowrap top-[72px]">Categories</p>
        <div className="absolute flex h-[45.16px] items-center justify-center left-[826.63px] top-[472.72px] w-[41.032px]" style={{ "--transform-inner-width": "41.96875", "--transform-inner-height": "39.484375" } as React.CSSProperties}>
          <div className="flex-none rotate-[268.648deg]">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[39.487px] not-italic relative text-[14.808px] text-black w-[44.228px]">Cards</p>
          </div>
        </div>
      </div>
    </div>
  );
}