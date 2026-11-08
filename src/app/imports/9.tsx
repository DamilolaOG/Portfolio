function TickLabels() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[18.527px] items-end justify-center leading-[normal] pb-[18.527px] pt-0 px-0 relative shrink-0 text-[#595959] text-nowrap whitespace-pre" data-name="tick labels">
      <p className="font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[32px]">100%</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal opacity-0 relative shrink-0 text-[32.422px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        90%
      </p>
      <p className="font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[32px]">80%</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal opacity-0 relative shrink-0 text-[32.422px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        70%
      </p>
      <p className="font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[32px]">60%</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal opacity-0 relative shrink-0 text-[32.422px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        50%
      </p>
      <p className="font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[32px]">40%</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal opacity-0 relative shrink-0 text-[32.422px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        30%
      </p>
      <p className="font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[32px]">20%</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal opacity-0 relative shrink-0 text-[32.422px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        10%
      </p>
      <p className="font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[32px]">0%</p>
    </div>
  );
}

function YAxisTickMarks() {
  return (
    <div className="h-[41.686px] relative w-[648.45px]" data-name="y-axis tick marks">
      <div className="absolute bottom-0 left-0 right-[-0.36%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 651 42">
          <g filter="url(#filter0_d_9_3671)" id="y-axis tick marks">
            <rect fill="#FAFAFA" height="41.6861" width="648.45" />
            <line id="tick mark" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="38.2122" x2="38.2122" y1="4.63178" y2="41.6861" />
            <line id="tick mark_2" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="93.7936" x2="93.7936" y1="4.63178" y2="41.6861" />
            <line id="tick mark_3" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="149.375" x2="149.375" y1="4.63178" y2="41.6861" />
            <line id="tick mark_4" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="204.956" x2="204.956" y1="4.63178" y2="41.6861" />
            <line id="tick mark_5" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="260.538" x2="260.538" y1="4.63178" y2="41.6861" />
            <line id="tick mark_6" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="316.119" x2="316.119" y1="4.63178" y2="41.6861" />
            <line id="tick mark_7" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="371.701" x2="371.701" y1="4.63178" y2="41.6861" />
            <line id="tick mark_8" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="427.282" x2="427.282" y1="4.63178" y2="41.6861" />
            <line id="tick mark_9" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="482.864" x2="482.864" y1="4.63178" y2="41.6861" />
            <line id="tick mark_10" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="538.445" x2="538.445" y1="4.63178" y2="41.6861" />
            <line id="tick mark_11" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="594.026" x2="594.026" y1="4.63178" y2="41.6861" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="41.6861" id="filter0_d_9_3671" width="650.766" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2.31589" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.662745 0 0 0 0 0.662745 0 0 0 0 0.662745 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_9_3671" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_9_3671" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[18.527px] items-end relative shrink-0">
      <TickLabels />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "648.4375", "--transform-inner-height": "41.671875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <YAxisTickMarks />
        </div>
      </div>
    </div>
  );
}

function YAxis() {
  return (
    <div className="content-stretch flex gap-[18.527px] items-center relative shrink-0" data-name="y-axis">
      <Frame20 />
    </div>
  );
}

function XAxisTickMarks() {
  return (
    <div className="h-[37.054px] relative shrink-0 w-[555.895px]" data-name="x-axis tick marks">
      <div className="absolute bottom-0 left-0 right-[-0.4%] top-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 559 41">
          <g filter="url(#filter0_d_9_3663)" id="x-axis tick marks">
            <rect fill="#FAFAFA" height="37.0543" transform="translate(0 3)" width="555.895" />
            <line id="Line 1" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="112.321" x2="112.321" y1="3" y2="40.0543" />
            <line id="Line 2" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="260.538" x2="260.538" y1="3" y2="40.0543" />
            <line id="Line 3" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="408.755" x2="408.755" y1="3" y2="40.0543" />
            <line id="Line 4" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="556.972" x2="556.972" y1="3" y2="40.0543" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="39.3702" id="filter0_d_9_3663" width="558.13" x="0" y="0.684108">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="-2.31589" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.662745 0 0 0 0 0.662745 0 0 0 0 0.662745 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_9_3663" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_9_3663" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[2.316px] items-end relative shrink-0">
      <YAxis />
      <XAxisTickMarks />
    </div>
  );
}

function Axis() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9.264px] h-[648.45px] items-end left-[75px] top-[185px] w-[697px]" data-name="axis">
      <Frame21 />
    </div>
  );
}

function Unit10() {
  return (
    <div className="h-[53.266px] relative shrink-0 w-[74.109px]" data-name="unit">
      <div className="absolute bg-[#d8d8d8] inset-0 shadow-[0px_2.316px_0px_0px_#d8d8d8]" data-name="rectangle" />
    </div>
  );
}

function Unit13() {
  return (
    <div className="h-[53.266px] relative shrink-0 w-[74.109px]" data-name="unit">
      <div className="absolute bg-[#4bc769] inset-0 shadow-[0px_2.316px_0px_0px_#4bc769]" data-name="rectangle" />
    </div>
  );
}

function Unit19() {
  return (
    <div className="h-[53.266px] relative shrink-0 w-[74.109px]" data-name="unit">
      <div className="absolute bg-[#4bc769] inset-0 shadow-[0px_2.316px_0px_0px_rgba(242,242,242,0.1)]" data-name="rectangle" />
    </div>
  );
}

function Bar1() {
  return (
    <div className="content-stretch flex flex-col gap-[2.316px] items-start justify-end overflow-clip relative rounded-[4.632px] shrink-0" data-name="bar">
      {[...Array(3).keys()].map((_, i) => (
        <Unit10 key={i} />
      ))}
      {[...Array(6).keys()].map((_, i) => (
        <Unit13 key={i} />
      ))}
      <Unit19 />
    </div>
  );
}

function Bars() {
  return (
    <div className="absolute content-stretch flex gap-[74.109px] h-[553.549px] items-end justify-center left-[261.47px] top-[238.95px] w-[132.523px]" data-name="bars">
      <Bar1 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[15.582px] items-start relative shrink-0" data-name="label">
      <div className="relative shrink-0 size-[23.373px]" data-name="circle">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="11.6866" cy="11.6866" fill="var(--fill-0, #4BC769)" id="circle" r="11.6866" />
        </svg>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[111px] justify-center leading-[0] relative shrink-0 text-[#595959] text-[27.269px] w-[293px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[30px] not-italic">
          <span className="font-['Montserrat:Bold',_sans-serif]">71%</span>
          <span className="font-['Montserrat:Regular',_sans-serif]">{` Of user complaints were related to setting up their accounts. `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame1571() {
  return (
    <div className="absolute content-stretch flex gap-[92px] items-center left-[296.65px] top-[563px]">
      <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[32.422px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        71%
      </p>
      <Label />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[15.582px] items-start relative shrink-0" data-name="label">
      <div className="relative shrink-0 size-[23.373px]" data-name="circle">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="11.6866" cy="11.6866" fill="var(--fill-0, #BCBCBC)" id="circle" r="11.6866" />
        </svg>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[110px] justify-center leading-[0] relative shrink-0 text-[#595959] text-[27.269px] w-[287px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[30px] not-italic">
          <span className="font-['Montserrat:Bold',_sans-serif]">29%</span>
          <span className="font-['Montserrat:Regular',_sans-serif]">{` of user complaints were related to other issues `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame1572() {
  return (
    <div className="absolute content-stretch flex gap-[92px] items-center left-[296.65px] top-[303px]">
      <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#797979] text-[32.422px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        29%
      </p>
      <Label1 />
    </div>
  );
}

function Group10690() {
  return (
    <div className="absolute contents left-[261.47px] top-[238.95px]">
      <Bars />
      <Frame1571 />
      <Frame1572 />
    </div>
  );
}

function Graph() {
  return (
    <div className="absolute contents left-[75px] top-[185px]" data-name="graph">
      <Axis />
      <Group10690 />
    </div>
  );
}

function TickLabels1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[18.527px] items-end justify-center leading-[normal] pb-[18.527px] pt-0 px-0 relative shrink-0 text-[#595959] text-nowrap whitespace-pre" data-name="tick labels">
      <p className="font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[32px]">100%</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal opacity-0 relative shrink-0 text-[32.422px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        90%
      </p>
      <p className="font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[32px]">80%</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal opacity-0 relative shrink-0 text-[32.422px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        70%
      </p>
      <p className="font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[32px]">60%</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal opacity-0 relative shrink-0 text-[32.422px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        50%
      </p>
      <p className="font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[32px]">40%</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal opacity-0 relative shrink-0 text-[32.422px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        30%
      </p>
      <p className="font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[32px]">20%</p>
      <p className="font-['Roboto:Regular',_sans-serif] font-normal opacity-0 relative shrink-0 text-[32.422px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        10%
      </p>
      <p className="font-['Montserrat:Regular',_sans-serif] not-italic relative shrink-0 text-[32px]">0%</p>
    </div>
  );
}

function YAxisTickMarks1() {
  return (
    <div className="h-[41.686px] relative w-[648.45px]" data-name="y-axis tick marks">
      <div className="absolute bottom-0 left-0 right-[-0.36%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 651 42">
          <g filter="url(#filter0_d_9_3671)" id="y-axis tick marks">
            <rect fill="#FAFAFA" height="41.6861" width="648.45" />
            <line id="tick mark" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="38.2122" x2="38.2122" y1="4.63178" y2="41.6861" />
            <line id="tick mark_2" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="93.7936" x2="93.7936" y1="4.63178" y2="41.6861" />
            <line id="tick mark_3" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="149.375" x2="149.375" y1="4.63178" y2="41.6861" />
            <line id="tick mark_4" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="204.956" x2="204.956" y1="4.63178" y2="41.6861" />
            <line id="tick mark_5" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="260.538" x2="260.538" y1="4.63178" y2="41.6861" />
            <line id="tick mark_6" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="316.119" x2="316.119" y1="4.63178" y2="41.6861" />
            <line id="tick mark_7" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="371.701" x2="371.701" y1="4.63178" y2="41.6861" />
            <line id="tick mark_8" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="427.282" x2="427.282" y1="4.63178" y2="41.6861" />
            <line id="tick mark_9" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="482.864" x2="482.864" y1="4.63178" y2="41.6861" />
            <line id="tick mark_10" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="538.445" x2="538.445" y1="4.63178" y2="41.6861" />
            <line id="tick mark_11" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="594.026" x2="594.026" y1="4.63178" y2="41.6861" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="41.6861" id="filter0_d_9_3671" width="650.766" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="2.31589" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.662745 0 0 0 0 0.662745 0 0 0 0 0.662745 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_9_3671" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_9_3671" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[18.527px] items-end relative shrink-0">
      <TickLabels1 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "648.4375", "--transform-inner-height": "41.671875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <YAxisTickMarks1 />
        </div>
      </div>
    </div>
  );
}

function YAxis1() {
  return (
    <div className="content-stretch flex gap-[18.527px] items-center relative shrink-0" data-name="y-axis">
      <Frame22 />
    </div>
  );
}

function XAxisTickMarks1() {
  return (
    <div className="h-[37.054px] relative shrink-0 w-[555.895px]" data-name="x-axis tick marks">
      <div className="absolute bottom-0 left-0 right-[-0.4%] top-[-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 559 41">
          <g filter="url(#filter0_d_9_3663)" id="x-axis tick marks">
            <rect fill="#FAFAFA" height="37.0543" transform="translate(0 3)" width="555.895" />
            <line id="Line 1" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="112.321" x2="112.321" y1="3" y2="40.0543" />
            <line id="Line 2" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="260.538" x2="260.538" y1="3" y2="40.0543" />
            <line id="Line 3" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="408.755" x2="408.755" y1="3" y2="40.0543" />
            <line id="Line 4" stroke="var(--stroke-0, #A9A9A9)" strokeWidth="2.31589" x1="556.972" x2="556.972" y1="3" y2="40.0543" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="39.3702" id="filter0_d_9_3663" width="558.13" x="0" y="0.684108">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="-2.31589" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.662745 0 0 0 0 0.662745 0 0 0 0 0.662745 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_9_3663" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_9_3663" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[2.316px] items-end relative shrink-0">
      <YAxis1 />
      <XAxisTickMarks1 />
    </div>
  );
}

function Axis1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9.264px] h-[648.45px] items-end left-[1038px] top-[244px] w-[697px]" data-name="axis">
      <Frame23 />
    </div>
  );
}

function Unit30() {
  return (
    <div className="h-[53.266px] relative shrink-0 w-[74.109px]" data-name="unit">
      <div className="absolute bg-[#acfabf] inset-0 shadow-[0px_2.316px_0px_0px_rgba(242,242,242,0.1)]" data-name="rectangle" />
    </div>
  );
}

function Unit32() {
  return (
    <div className="h-[53.266px] relative shrink-0 w-[74.109px]" data-name="unit">
      <div className="absolute bg-[#4bc769] inset-0 shadow-[0px_2.316px_0px_0px_#4bc769]" data-name="rectangle" />
    </div>
  );
}

function Unit39() {
  return (
    <div className="h-[53.266px] relative shrink-0 w-[74.109px]" data-name="unit">
      <div className="absolute bg-[#4bc769] inset-0 shadow-[0px_2.316px_0px_0px_rgba(242,242,242,0.1)]" data-name="rectangle" />
    </div>
  );
}

function Bar3() {
  return (
    <div className="content-stretch flex flex-col gap-[2.316px] items-start justify-end overflow-clip relative rounded-[4.632px] shrink-0" data-name="bar">
      {[...Array(2).keys()].map((_, i) => (
        <Unit30 key={i} />
      ))}
      {[...Array(7).keys()].map((_, i) => (
        <Unit32 key={i} />
      ))}
      <Unit39 />
    </div>
  );
}

function Bars1() {
  return (
    <div className="absolute content-stretch flex gap-[74.109px] h-[553.549px] items-end justify-center left-[1224.47px] top-[297.95px] w-[132.523px]" data-name="bars">
      <Bar3 />
    </div>
  );
}

function Frame1573() {
  return <div className="absolute h-[38px] left-[1260px] top-[539px] w-[61px]" />;
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[15.582px] items-start relative shrink-0" data-name="label">
      <div className="relative shrink-0 size-[23.373px]" data-name="circle">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="11.6866" cy="11.6866" fill="var(--fill-0, #ACFABF)" id="circle" r="11.6866" />
        </svg>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[141px] justify-center leading-[0] relative shrink-0 text-[#595959] text-[27.269px] w-[347px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[30px] not-italic">
          <span className="font-['Montserrat:Bold',_sans-serif]">{`20% `}</span>
          <span className="font-['Montserrat:Regular',_sans-serif]">of</span>
          <span className="font-['Montserrat:Bold',_sans-serif]"> </span>
          <span className="font-['Montserrat:Regular',_sans-serif]">complaints related to setting up accounts, were concerns about data privacy and security</span>
        </p>
      </div>
    </div>
  );
}

function Frame1574() {
  return (
    <div className="absolute content-stretch flex gap-[92px] items-center left-[1260px] top-[309px]">
      <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#797979] text-[32.422px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        20%
      </p>
      <Label2 />
    </div>
  );
}

function Group10691() {
  return (
    <div className="absolute contents left-[1224.47px] top-[297.95px]">
      <div className="absolute bg-[#acfabf] h-[4px] left-[1253px] top-[351px] w-[75px]" />
      <Bars1 />
      <Frame1573 />
      <Frame1574 />
    </div>
  );
}

function Graph1() {
  return (
    <div className="absolute contents left-[1038px] top-[244px]" data-name="graph">
      <Axis1 />
      <Group10691 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[15.582px] items-start relative shrink-0" data-name="label">
      <div className="relative shrink-0 size-[23.373px]" data-name="circle">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="11.6866" cy="11.6866" fill="var(--fill-0, #4BC769)" id="circle" r="11.6866" />
        </svg>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',_sans-serif] font-normal h-[113px] justify-center leading-[0] relative shrink-0 text-[#595959] text-[27.269px] w-[348px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[30px] not-italic">
          <span className="font-['Montserrat:Bold',_sans-serif]">80%</span>
          <span className="font-['Montserrat:Regular',_sans-serif]">{` of complaints related to providing personal details when setting up accounts`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame1575() {
  return (
    <div className="absolute content-stretch flex gap-[92px] items-center left-[1260px] top-[584px]">
      <p className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#797979] text-[32.422px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        80%
      </p>
      <Label3 />
    </div>
  );
}

export default function Component9() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] size-full" data-name="9">
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[66px] left-[70px] not-italic text-[36px] text-black text-nowrap top-[85px] whitespace-pre">Insights from customer support data</p>
      <Graph />
      <Graph1 />
      <Frame1575 />
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[40px] left-[468px] not-italic text-[24px] text-black text-center top-[925px] translate-x-[-50%] w-[614px]">Graph showing the percentages of complaints related to user onboarding reported by customers.</p>
      <p className="absolute font-['Montserrat:Bold',_sans-serif] leading-[40px] left-[1459px] not-italic text-[24px] text-black text-center top-[925px] translate-x-[-50%] w-[570px] whitespace-pre-wrap">{`Graph showing the different issues within  the 71% of complaints related to user onboarding.`}</p>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[66px] left-[2179px] not-italic text-[36px] text-black text-nowrap top-[962px] whitespace-pre">Graph 2</p>
    </div>
  );
}