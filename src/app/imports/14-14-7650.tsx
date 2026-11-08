import svgPaths from "./svg-5wge6sv194";
import imgRectangle1 from "figma:asset/ffb19e5d717a8c06d589d97c7080a86f62717167.png";
import imgImage from "figma:asset/9f21c4a8288b7f2e16d6d54c16550d40c35f4290.png";
import imgImage1 from "figma:asset/8793d0203c69e7f4eba6a8ad4df923fd1e36c795.png";
import imgImage2 from "figma:asset/2d593686cd4893fbc862ad3bdb42a312d8f24664.png";
import imgIPhone16ProBlackTitaniumPortrait from "figma:asset/85a8d4cb5dd8334894f69f8c4156fea900e1fc9a.png";
import imgRectangle2 from "figma:asset/c1d72ab01bb844e545432b7d58feed8bb2257836.png";
import imgRectangle3 from "figma:asset/2d9029c37fb24adab218bf6c75503ea28abd2318.png";
import imgExamplesNotificationsIPhone from "figma:asset/b750d7a7a2b0bc37bf3ad2b692dcff8c2ddbf1fc.png";
import imgImage153 from "figma:asset/e2345481df84d88c6865c9c098906048fad2db3f.png";

function Bell() {
  return (
    <div className="relative shrink-0 size-[17.604px]" data-name="Bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Bell">
          <g id="Vector">
            <path d={svgPaths.p3337ef00} fill="var(--fill-0, #4B5158)" />
            <path d={svgPaths.p29cd45c0} fill="var(--fill-0, #4B5158)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon1() {
  return (
    <div className="bg-[#ebeef2] box-border content-stretch flex h-[29.339px] items-center justify-center overflow-clip p-[5.868px] relative rounded-[29.339px] shrink-0" data-name="buttonIcon">
      <Bell />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="content-stretch flex gap-[5.868px] items-start justify-end relative shrink-0" data-name="Action buttons">
      <ButtonIcon1 />
    </div>
  );
}

function TopBarStandard() {
  return (
    <div className="absolute bg-[#f3f5f8] box-border content-stretch flex gap-[14.67px] h-[52.811px] items-center left-0 p-[11.736px] top-[-0.15px] w-[294.86px]" data-name="Top bar / Standard">
      <p className="basis-0 font-['Montserrat:SemiBold',_sans-serif] grow h-[19.804px] leading-[20.537px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[14.67px] text-center">&nbsp;</p>
      <ActionButtons />
    </div>
  );
}

function Media() {
  return (
    <div className="overflow-clip relative shrink-0 size-[46.943px]" data-name="media">
      <div className="absolute left-0 rounded-[7334px] size-[46.943px] top-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7334px]">
          <img alt="" className="absolute h-[112.38%] left-[-29.39%] max-w-none top-[-1.49%] w-[166.98%]" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function Trophy() {
  return (
    <div className="relative shrink-0 size-[14.909px]" data-name="trophy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="trophy">
          <path d={svgPaths.p31934d80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2db6cc00} fill="var(--fill-0, black)" id="Vector_2" />
          <g id="Group">
            <path d={svgPaths.p3f9ae500} fill="var(--fill-0, #F1EFEB)" id="Vector_3" />
            <path d={svgPaths.p2d7c7480} fill="var(--fill-0, black)" id="Vector_4" />
          </g>
          <path d={svgPaths.p2a60e00} fill="var(--fill-0, #F1EFEB)" id="Vector_5" />
          <path d={svgPaths.p3fd03200} fill="var(--fill-0, black)" id="Vector_6" />
          <g id="Group_2">
            <path d={svgPaths.p23718b00} fill="var(--fill-0, #0079C8)" id="Vector_7" />
            <path d={svgPaths.p88ff80} fill="var(--fill-0, black)" id="Vector_8" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p1c981480} fill="var(--fill-0, #0079C8)" id="Vector_9" />
            <path d={svgPaths.p37de4e80} fill="var(--fill-0, black)" id="Vector_10" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p1620d400} fill="var(--fill-0, white)" id="Vector_11" />
            <path d={svgPaths.p23fe4580} fill="var(--fill-0, black)" id="Vector_12" />
          </g>
          <path d={svgPaths.p2b9f1d10} fill="var(--fill-0, black)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000005018() {
  return (
    <div className="content-stretch flex gap-[3.313px] items-center relative shrink-0">
      <Trophy />
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[13.203px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.736px] text-nowrap whitespace-pre">Bronze league</p>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex gap-[5.868px] items-center relative shrink-0 w-full" data-name="textContainer">
      <Frame1000005018 />
      <p className="basis-0 font-['Montserrat:SemiBold',_sans-serif] grow leading-[13.203px] max-h-[52.811px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#0074bf] text-[11.736px] text-right">650/1400</p>
    </div>
  );
}

function Scrubber() {
  return (
    <div className="box-border content-stretch flex isolate items-center justify-center pl-0 pr-[1.467px] py-0 relative shrink-0 w-full" data-name="Scrubber">
      <div className="bg-[#0074bf] h-[8.802px] mr-[-1.467px] rounded-bl-[14.67px] rounded-tl-[14.67px] shrink-0 w-[66.747px] z-[3]" data-name="Preview bar - filled" />
      <div className="bg-[#0074bf] h-[8.802px] mr-[-1.467px] shrink-0 w-[51.344px] z-[2]" data-name="Preview bar - filled" />
      <div className="bg-[#dde1e6] h-[8.802px] mr-[-1.467px] rounded-br-[14.67px] rounded-tr-[14.67px] shrink-0 w-[74.082px] z-[1]" data-name="Preview bar - filled" />
    </div>
  );
}

function Slider() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Slider">
      <Scrubber />
    </div>
  );
}

function Frame1000005000() {
  return (
    <div className="content-stretch flex flex-col gap-[5.868px] items-start relative shrink-0">
      <Slider />
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[10.269px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[10.269px] text-nowrap whitespace-pre">
        <span>{`Next: `}</span>
        <span className="font-['Montserrat:Medium',_sans-serif]">Silver league</span>
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.868px] grow items-start min-h-px min-w-px relative shrink-0" data-name="content">
      <TextContainer />
      <Frame1000005000 />
    </div>
  );
}

function Frame1000825() {
  return (
    <div className="content-stretch flex gap-[11.736px] items-start relative shrink-0 w-full">
      <Media />
      <Content />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[12.5%_21.89%_15.37%_24.99%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 17">
        <g id="Group">
          <path d={svgPaths.pbbb8800} fill="var(--fill-0, #0079C8)" id="Vector" />
          <path d={svgPaths.pb6b300} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function AvoidConfrontation01() {
  return (
    <div className="bg-[#ddedf8] overflow-clip relative rounded-[2.934px] shrink-0 size-[23.471px]" data-name="avoid-confrontation-01">
      <Group4 />
    </div>
  );
}

function Frame1000005001() {
  return (
    <div className="content-stretch flex flex-col gap-[2.934px] items-start justify-center leading-[10.269px] not-italic relative shrink-0 text-[#21272a] text-nowrap whitespace-pre">
      <p className="font-['Montserrat:SemiBold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[11.736px]">3</p>
      <p className="font-['Montserrat:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[10.269px]">Streak</p>
    </div>
  );
}

function Frame1000005002() {
  return (
    <div className="content-stretch flex gap-[5.868px] items-center relative shrink-0">
      <AvoidConfrontation01 />
      <Frame1000005001 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[49.99%_21.86%_9.16%_44.31%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
        <g id="Group">
          <path d={svgPaths.pbf4b6f2} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2ec89e00} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-[9.16%] left-[21.79%] right-[44.39%] top-1/2" data-name="Group">
      <div className="absolute bottom-0 left-[-0.01%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <g id="Group">
            <path d={svgPaths.p3a9aed00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p18e03000} fill="var(--fill-0, black)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[49.99%_21.86%_9.16%_21.79%]" data-name="Group">
      <Group5 />
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[8.84%_19.59%_30.28%_19.53%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Group">
          <path d={svgPaths.p3d460140} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p372ab900} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[22.86%_33.81%_45.94%_33.77%]" data-name="Group">
      <div className="absolute bottom-0 left-0 right-[-0.01%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <g id="Group">
            <path d={svgPaths.p12d50e00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p12e21970} fill="var(--fill-0, black)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Brave() {
  return (
    <div className="bg-[#ddedf8] overflow-clip relative rounded-[2.934px] shrink-0 size-[23.471px]" data-name="brave">
      <Group7 />
      <Group8 />
      <div className="absolute inset-[15.57%_26.32%_37%_26.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p3c654540} fill="var(--fill-0, #0079C8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[14.58%_25.31%_36%_25.27%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path d={svgPaths.p943df80} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <Group9 />
    </div>
  );
}

function Frame1000005013() {
  return (
    <div className="content-stretch flex flex-col gap-[2.934px] items-start justify-center leading-[10.269px] not-italic relative shrink-0 text-[#21272a] text-nowrap whitespace-pre">
      <p className="font-['Montserrat:SemiBold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[11.736px]">45</p>
      <p className="font-['Montserrat:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[10.269px]">Rank</p>
    </div>
  );
}

function Frame1000005003() {
  return (
    <div className="content-stretch flex gap-[5.868px] items-center relative shrink-0">
      <Brave />
      <Frame1000005013 />
    </div>
  );
}

function Network() {
  return (
    <div className="relative shrink-0 size-[23.471px]" data-name="network">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="network">
          <rect fill="var(--fill-0, #DDEDF8)" height="23.4714" rx="2.93393" width="23.4714" />
          <path d={svgPaths.p12765000} fill="var(--fill-0, #0079C8)" id="Vector 3" />
          <path d={svgPaths.p3ec1a300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p4655480} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pc758400} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p5d84f00} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000005016() {
  return (
    <div className="content-stretch flex flex-col gap-[2.934px] items-start justify-center leading-[10.269px] not-italic relative shrink-0 text-[#21272a] text-nowrap whitespace-pre">
      <p className="font-['Montserrat:SemiBold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[11.736px]">4.50k</p>
      <p className="font-['Montserrat:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[10.269px]">Total XP</p>
    </div>
  );
}

function Frame1000005004() {
  return (
    <div className="content-stretch flex gap-[5.868px] items-center relative shrink-0">
      <Network />
      <Frame1000005016 />
    </div>
  );
}

function Frame1000823() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame1000005002 />
      <Frame1000005003 />
      <Frame1000005004 />
    </div>
  );
}

function MediaCard() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[17.604px] items-start overflow-clip p-[11.736px] relative rounded-[5.868px] shrink-0 w-[271.388px]" data-name="🚀 Media card">
      <Frame1000825 />
      <Frame1000823 />
    </div>
  );
}

function Dates() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['Montserrat:SemiBold',_sans-serif] items-center justify-center leading-[normal] left-[13.2px] not-italic pb-[1.467px] pt-0 px-0 text-[#21272a] text-center text-nowrap top-[7.33px] whitespace-pre" data-name="Dates">
      <p className="relative shrink-0 text-[19.071px]">04</p>
      <p className="relative shrink-0 text-[10.562px] uppercase">Oct</p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="absolute contents left-[13.2px] top-[7.33px]" data-name="Calendar">
      <Dates />
    </div>
  );
}

function Frame1000722() {
  return (
    <div className="absolute content-stretch flex gap-[5.868px] items-center justify-center left-0 top-0">
      <div className="bg-[#ddedf8] rounded-[5.868px] shrink-0 size-[52.811px]" data-name="Background" />
      <Calendar />
    </div>
  );
}

function Media1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[61.612px]" data-name="media">
      <Frame1000722 />
    </div>
  );
}

function Time() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Time">
          <g id="Vector">
            <path d={svgPaths.p3675af80} fill="var(--fill-0, #4B5158)" />
            <path d={svgPaths.p23217e00} fill="var(--fill-0, #4B5158)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1000004999() {
  return (
    <div className="content-stretch flex gap-[7.335px] items-center justify-center relative shrink-0">
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[11.736px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.802px] text-nowrap whitespace-pre">10am - 10:30am</p>
    </div>
  );
}

function StatusIndicator() {
  return (
    <div className="relative shrink-0 size-[2.934px]" data-name="Status indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
        <g id="Status indicator">
          <circle cx="1.46696" cy="1.46696" fill="var(--fill-0, #6B717A)" id="Ellipse 1" r="1.28359" stroke="var(--stroke-0, #DDE1E6)" strokeWidth="0.366741" />
        </g>
      </svg>
    </div>
  );
}

function Video() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Video">
          <path d={svgPaths.p28a01480} fill="var(--fill-0, #4B5158)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000004998() {
  return (
    <div className="content-stretch flex gap-[2.934px] items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[11.736px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.802px] text-nowrap whitespace-pre">Video call</p>
    </div>
  );
}

function Frame1000818() {
  return (
    <div className="content-stretch flex gap-[2.934px] items-center relative shrink-0">
      <Time />
      <Frame1000004999 />
      <StatusIndicator />
      <Video />
      <Frame1000004998 />
    </div>
  );
}

function Frame1000824() {
  return (
    <div className="content-stretch flex flex-col gap-[5.868px] items-start relative shrink-0">
      <Frame1000818 />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[5.868px] items-start relative shrink-0" data-name="textContainer">
      <p className="[white-space-collapse:collapse] font-['Montserrat:SemiBold',_sans-serif] h-[15.403px] leading-[17.604px] max-h-[52.811px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.736px] text-nowrap w-[165.033px]">Remote GP appointment</p>
      <Frame1000824 />
      <p className="font-['Montserrat:Medium',_sans-serif] leading-[11.736px] max-h-[73.348px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.802px] text-nowrap whitespace-pre">Dr Emily Khan</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[11.736px] grow items-start min-h-px min-w-px relative shrink-0" data-name="content">
      <TextContainer1 />
    </div>
  );
}

function Frame1000826() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Media1 />
      <Content1 />
    </div>
  );
}

function Label() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[2.934px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.269px] text-center text-nowrap text-white">
        <p className="leading-[14.67px] whitespace-pre">Join session</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Container">
      <Label />
    </div>
  );
}

function ButtonV2() {
  return (
    <div className="basis-0 bg-[#0074bf] grow min-h-px min-w-px relative rounded-[5.946px] shrink-0" data-name="🚀 Button [V2]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[12px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[133.494px]" data-name="Button group">
      <ButtonV2 />
    </div>
  );
}

function Label1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0074bf] text-[10.269px] text-center text-nowrap">
        <p className="leading-[14.67px] whitespace-pre">Add to calendar</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Container">
      <Label1 />
    </div>
  );
}

function ButtonV3() {
  return (
    <div className="relative rounded-[5.946px] shrink-0" data-name="🚀 Button [V2]">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0074bf] border-solid inset-0 pointer-events-none rounded-[5.946px]" />
    </div>
  );
}

function ButtonGroup1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative rounded-[5.946px] shrink-0" data-name="Button group">
      <ButtonV3 />
    </div>
  );
}

function Frame1000827() {
  return (
    <div className="content-stretch flex gap-[5.868px] items-center relative shrink-0 w-full">
      <ButtonGroup />
      <ButtonGroup1 />
    </div>
  );
}

function MediaCard1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[5.868px] items-start overflow-clip px-[11.736px] py-[8.802px] relative rounded-[5.868px] shrink-0 w-[271.388px]" data-name="🚀 Media card">
      <Frame1000826 />
      <Frame1000827 />
    </div>
  );
}

function Dates1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['Montserrat:SemiBold',_sans-serif] items-center justify-center leading-[normal] left-[13.2px] not-italic pb-[1.467px] pt-0 px-0 text-[#21272a] text-center text-nowrap top-[7.33px] whitespace-pre" data-name="Dates">
      <p className="relative shrink-0 text-[19.071px]">08</p>
      <p className="relative shrink-0 text-[10.562px] uppercase">Oct</p>
    </div>
  );
}

function Calendar1() {
  return (
    <div className="absolute contents left-[13.2px] top-[7.33px]" data-name="Calendar">
      <Dates1 />
    </div>
  );
}

function Frame1000723() {
  return (
    <div className="absolute content-stretch flex gap-[5.868px] items-center justify-center left-0 top-0">
      <div className="bg-[#ddedf8] rounded-[5.868px] shrink-0 size-[52.811px]" data-name="Background" />
      <Calendar1 />
    </div>
  );
}

function Media2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[61.612px]" data-name="media">
      <Frame1000723 />
    </div>
  );
}

function Time1() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Time">
          <g id="Vector">
            <path d={svgPaths.p3675af80} fill="var(--fill-0, #4B5158)" />
            <path d={svgPaths.p23217e00} fill="var(--fill-0, #4B5158)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1000005024() {
  return (
    <div className="content-stretch flex gap-[7.335px] items-center justify-center relative shrink-0">
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[11.736px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.802px] text-nowrap whitespace-pre">3:30pm - 4pm</p>
    </div>
  );
}

function StatusIndicator1() {
  return (
    <div className="relative shrink-0 size-[2.934px]" data-name="Status indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
        <g id="Status indicator">
          <circle cx="1.46696" cy="1.46696" fill="var(--fill-0, #6B717A)" id="Ellipse 1" r="1.28359" stroke="var(--stroke-0, #DDE1E6)" strokeWidth="0.366741" />
        </g>
      </svg>
    </div>
  );
}

function Mic() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Mic">
          <path d={svgPaths.p332a1100} fill="var(--fill-0, #4B5158)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000005025() {
  return (
    <div className="content-stretch flex gap-[2.934px] items-center relative shrink-0">
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[11.736px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.802px] text-nowrap whitespace-pre">Audio call</p>
    </div>
  );
}

function Frame1000828() {
  return (
    <div className="content-stretch flex gap-[2.934px] items-center relative shrink-0">
      <Time1 />
      <Frame1000005024 />
      <StatusIndicator1 />
      <Mic />
      <Frame1000005025 />
    </div>
  );
}

function Frame1000829() {
  return (
    <div className="content-stretch flex flex-col gap-[5.868px] items-start relative shrink-0">
      <Frame1000828 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[5.868px] items-start relative shrink-0" data-name="textContainer">
      <p className="[white-space-collapse:collapse] font-['Montserrat:SemiBold',_sans-serif] h-[15.403px] leading-[17.604px] max-h-[52.811px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.736px] text-nowrap w-[165.033px]">Physio appointment</p>
      <Frame1000829 />
      <p className="font-['Montserrat:Medium',_sans-serif] leading-[11.736px] max-h-[73.348px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.802px] text-nowrap whitespace-pre">Dr Emily Khan</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[11.736px] grow items-start min-h-px min-w-px relative shrink-0" data-name="content">
      <TextContainer2 />
    </div>
  );
}

function Frame1000830() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Media2 />
      <Content2 />
    </div>
  );
}

function Label2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[2.934px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10.269px] text-center text-nowrap text-white">
        <p className="leading-[14.67px] whitespace-pre">Join session</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="Container">
      <Label2 />
    </div>
  );
}

function ButtonV4() {
  return (
    <div className="basis-0 bg-[#0074bf] grow min-h-px min-w-px relative rounded-[5.946px] shrink-0" data-name="🚀 Button [V2]">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[12px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function ButtonGroup2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[133.494px]" data-name="Button group">
      <ButtonV4 />
    </div>
  );
}

function Label3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0074bf] text-[10.269px] text-center text-nowrap">
        <p className="leading-[14.67px] whitespace-pre">Add to calendar</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Container">
      <Label3 />
    </div>
  );
}

function ButtonV5() {
  return (
    <div className="relative rounded-[5.946px] shrink-0" data-name="🚀 Button [V2]">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[12px] relative rounded-[inherit]">
        <Container3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0074bf] border-solid inset-0 pointer-events-none rounded-[5.946px]" />
    </div>
  );
}

function ButtonGroup3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative rounded-[5.946px] shrink-0" data-name="Button group">
      <ButtonV5 />
    </div>
  );
}

function Frame1000831() {
  return (
    <div className="content-stretch flex gap-[5.868px] items-center relative shrink-0 w-full">
      <ButtonGroup2 />
      <ButtonGroup3 />
    </div>
  );
}

function MediaCard2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[5.868px] items-start overflow-clip px-[11.736px] py-[8.802px] relative rounded-[5.868px] shrink-0 w-[271.388px]" data-name="🚀 Media card">
      <Frame1000830 />
      <Frame1000831 />
    </div>
  );
}

function Frame1000004987() {
  return (
    <div className="content-stretch flex gap-[10.269px] items-start relative shrink-0 w-full">
      <MediaCard1 />
      <MediaCard2 />
    </div>
  );
}

function Dot() {
  return (
    <div className="bg-[#0074bf] relative rounded-[7.878px] shrink-0 size-[4.727px]" data-name=".Dot">
      <div className="size-full">
        <div className="size-[4.727px]" />
      </div>
    </div>
  );
}

function Dot1() {
  return <div className="bg-[#bdc3c9] rounded-[4012.94px] shrink-0 size-[4.727px]" data-name=".Dot" />;
}

function DotPagination() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center px-0 py-[8px] relative shrink-0" data-name="🚀 Dot pagination">
      <Dot />
      <Dot1 />
    </div>
  );
}

function Frame1000819() {
  return (
    <div className="content-stretch flex flex-col gap-[2.934px] items-center justify-center relative shrink-0 w-full">
      <Frame1000004987 />
      <DotPagination />
    </div>
  );
}

function Frame1000820() {
  return (
    <div className="content-stretch flex flex-col gap-[5.868px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[17.604px] not-italic relative shrink-0 text-[#21272a] text-[10.269px] text-nowrap whitespace-pre">Upcoming appointments</p>
      <Frame1000819 />
    </div>
  );
}

function Cover() {
  return (
    <div className="relative shrink-0 size-[17.604px]" data-name="Cover">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Cover">
          <path d={svgPaths.p1077e200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftAccesory() {
  return (
    <div className="bg-[#0c2364] box-border content-stretch flex items-center justify-center p-[5.868px] relative rounded-[5.868px] shrink-0 size-[29.339px]" data-name="Left accesory">
      <Cover />
    </div>
  );
}

function Frame1000235() {
  return (
    <div className="box-border content-stretch flex gap-[5.868px] items-start px-0 py-[5.134px] relative shrink-0">
      <LeftAccesory />
    </div>
  );
}

function LeftAccesory1() {
  return (
    <div className="bg-[#d9d9d9] box-border content-stretch flex items-center justify-center p-[5.868px] relative rounded-[5.868px] shrink-0 size-[29.339px]" data-name="Left accesory">
      <Frame1000235 />
    </div>
  );
}

function Frame1000237() {
  return (
    <div className="box-border content-stretch flex gap-[5.868px] items-start px-0 py-[1.467px] relative shrink-0">
      <LeftAccesory1 />
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex gap-[5.868px] items-center relative shrink-0 w-full" data-name="Header content">
      <p className="basis-0 font-['Montserrat:SemiBold',_sans-serif] grow leading-[17.604px] min-h-px min-w-px not-italic relative shrink-0 text-[#21272a] text-[11.736px]">Sleep meditations</p>
    </div>
  );
}

function Frame1000821() {
  return (
    <div className="bg-[#f3f5f8] box-border content-stretch flex gap-[7.335px] items-center justify-center px-[4.401px] py-0 relative rounded-[8.802px] shrink-0">
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[14.67px] not-italic relative shrink-0 text-[#4b5158] text-[10.269px] text-nowrap whitespace-pre">Session 3/8</p>
    </div>
  );
}

function Subtitle() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subtitle">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-0 pr-[23.471px] py-0 relative w-full">
          <Frame1000821 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <HeaderContent />
      <Subtitle />
    </div>
  );
}

function NewIconsKeylineChevronRight() {
  return (
    <div className="absolute left-0 size-[17.604px] top-0" data-name="New Icons/Keyline/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="New Icons/Keyline/chevron-right">
          <path d={svgPaths.p4821f00} fill="var(--fill-0, #4B5158)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconFrame2() {
  return (
    <div className="relative shrink-0 size-[17.604px]" data-name="Icon frame">
      <NewIconsKeylineChevronRight />
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame2 />
    </div>
  );
}

function SmallCard() {
  return (
    <div className="bg-white relative rounded-[8.802px] shrink-0 w-full" data-name="Small card">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[11.736px] items-center px-[11.736px] py-[8.802px] relative w-full">
          <Frame1000237 />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Text />
          </div>
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function NewIconsFilledAppointment() {
  return (
    <div className="relative shrink-0 size-[17.604px]" data-name="New Icons/Filled/appointment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="New Icons/Filled/appointment">
          <path d={svgPaths.pcf37600} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2a710a00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function LeftAccesory2() {
  return (
    <div className="bg-[#0c2364] box-border content-stretch flex items-center justify-center p-[5.868px] relative rounded-[5.868px] shrink-0 size-[29.339px]" data-name="Left accesory">
      <NewIconsFilledAppointment />
    </div>
  );
}

function Frame1000238() {
  return (
    <div className="box-border content-stretch flex gap-[5.868px] items-start px-0 py-[5.134px] relative shrink-0">
      <LeftAccesory2 />
    </div>
  );
}

function LeftAccesory3() {
  return (
    <div className="bg-[#d9d9d9] box-border content-stretch flex items-center justify-center p-[5.868px] relative rounded-[5.868px] shrink-0 size-[29.339px]" data-name="Left accesory">
      <Frame1000238 />
    </div>
  );
}

function Frame1000236() {
  return (
    <div className="box-border content-stretch flex gap-[5.868px] items-start px-0 py-[1.467px] relative shrink-0">
      <LeftAccesory3 />
    </div>
  );
}

function HeaderContent1() {
  return (
    <div className="content-stretch flex gap-[5.868px] items-center relative shrink-0 w-full" data-name="Header content">
      <p className="basis-0 font-['Montserrat:SemiBold',_sans-serif] grow leading-[17.604px] min-h-px min-w-px not-italic relative shrink-0 text-[#21272a] text-[11.736px]">Book an appointment</p>
    </div>
  );
}

function Frame1000832() {
  return (
    <div className="bg-[#f3f5f8] box-border content-stretch flex gap-[7.335px] items-center justify-center px-[4.401px] py-0 relative rounded-[8.802px] shrink-0">
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[14.67px] not-italic relative shrink-0 text-[#4b5158] text-[10.269px] text-nowrap whitespace-pre">Step 4/7</p>
    </div>
  );
}

function Subtitle1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Subtitle">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pl-0 pr-[23.471px] py-0 relative w-full">
          <Frame1000832 />
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <HeaderContent1 />
      <Subtitle1 />
    </div>
  );
}

function NewIconsKeylineChevronRight1() {
  return (
    <div className="absolute left-0 size-[17.604px] top-0" data-name="New Icons/Keyline/chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="New Icons/Keyline/chevron-right">
          <path d={svgPaths.p4821f00} fill="var(--fill-0, #4B5158)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconFrame5() {
  return (
    <div className="relative shrink-0 size-[17.604px]" data-name="Icon frame">
      <NewIconsKeylineChevronRight1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame5 />
    </div>
  );
}

function SmallCard1() {
  return (
    <div className="bg-white relative rounded-[8.802px] shrink-0 w-full" data-name="Small card">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[11.736px] items-center px-[11.736px] py-[8.802px] relative w-full">
          <Frame1000236 />
          <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
            <Text1 />
          </div>
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Frame1000004997() {
  return (
    <div className="content-stretch flex flex-col gap-[11.736px] items-start relative shrink-0 w-full">
      <SmallCard />
      <SmallCard1 />
    </div>
  );
}

function Frame1000822() {
  return (
    <div className="content-stretch flex flex-col gap-[5.868px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[17.604px] not-italic relative shrink-0 text-[#21272a] text-[10.269px] text-nowrap whitespace-pre">{`Pick up where you left `}</p>
      <Frame1000004997 />
    </div>
  );
}

function NewIconsFilledAppointment1() {
  return (
    <div className="relative shrink-0 size-[22.004px]" data-name="New Icons/Filled/appointment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="New Icons/Filled/appointment">
          <path d={svgPaths.p1568c80} fill="var(--fill-0, #DDEDF8)" />
          <path d={svgPaths.p3d8da380} fill="var(--fill-0, #0074BF)" id="Vector" />
          <path d={svgPaths.p388e0900} fill="var(--fill-0, #0074BF)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function HeaderContent2() {
  return (
    <div className="content-stretch flex gap-[5.868px] items-center relative shrink-0" data-name="Header content">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[14.67px] not-italic relative shrink-0 text-[#21272a] text-[8.802px] text-center w-[60.145px]">Book appointment</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <HeaderContent2 />
    </div>
  );
}

function Frame1000004990() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[5.868px] shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[2.934px] items-center p-[5.868px] relative w-full">
          <NewIconsFilledAppointment1 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function NewIconsFilledAppointment2() {
  return (
    <div className="relative shrink-0 size-[22.004px]" data-name="New Icons/Filled/appointment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="New Icons/Filled/appointment">
          <path d={svgPaths.p1568c80} fill="var(--fill-0, #DDEDF8)" />
          <path clipRule="evenodd" d={svgPaths.p32937500} fill="var(--fill-0, #0074BF)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeaderContent3() {
  return (
    <div className="content-stretch flex gap-[5.868px] items-center relative shrink-0" data-name="Header content">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[14.67px] not-italic relative shrink-0 text-[#21272a] text-[8.802px] text-center w-[60.145px]">Anytime healthline</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <HeaderContent3 />
    </div>
  );
}

function Frame1000004993() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[5.868px] shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[2.934px] items-center p-[5.868px] relative w-full">
          <NewIconsFilledAppointment2 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function NewIconsFilledAppointment3() {
  return (
    <div className="relative shrink-0 size-[22.004px]" data-name="New Icons/Filled/appointment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="New Icons/Filled/appointment">
          <path d={svgPaths.p1568c80} fill="var(--fill-0, #DDEDF8)" />
          <path d={svgPaths.p2e823b00} fill="var(--fill-0, #0074BF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function HeaderContent4() {
  return (
    <div className="content-stretch flex gap-[5.868px] items-center relative shrink-0" data-name="Header content">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[14.67px] not-italic relative shrink-0 text-[#21272a] text-[8.802px] text-center w-[60.145px]">Health programmes</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Text">
      <HeaderContent4 />
    </div>
  );
}

function Frame1000004994() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[5.868px] shrink-0">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[2.934px] items-center p-[5.868px] relative w-full">
          <NewIconsFilledAppointment3 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function SmallCard2() {
  return (
    <div className="content-stretch flex gap-[8.802px] items-center relative rounded-[8.802px] shrink-0 w-full" data-name="Small card">
      <Frame1000004990 />
      <Frame1000004993 />
      <Frame1000004994 />
    </div>
  );
}

function Frame1000833() {
  return (
    <div className="content-stretch flex flex-col gap-[5.868px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[17.604px] not-italic relative shrink-0 text-[#21272a] text-[10.269px] text-nowrap whitespace-pre">Quick actions</p>
      <SmallCard2 />
    </div>
  );
}

function Video1() {
  return (
    <div className="absolute left-0 size-[11.736px] top-0" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Video">
          <path d={svgPaths.p35bab00} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Icon">
      <Video1 />
    </div>
  );
}

function ButtonIcon2() {
  return (
    <div className="bg-white relative rounded-[29.339px] shrink-0 size-[17.604px]" data-name="buttonIcon">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[5.868px] relative rounded-[inherit] size-[17.604px]">
        <Icon6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.733px] border-solid inset-0 pointer-events-none rounded-[29.339px]" />
    </div>
  );
}

function MediaIcon() {
  return (
    <div className="absolute bottom-[5.96px] content-stretch flex flex-col gap-[2.934px] items-center left-[5.87px]" data-name="Media icon">
      <ButtonIcon2 />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[68.214px] relative rounded-tl-[8.802px] rounded-tr-[8.802px] shrink-0 w-[126.892px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8.802px] rounded-tr-[8.802px] size-full" src={imgImage} />
      <MediaIcon />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[2.934px] items-start relative shrink-0 w-full" data-name="Heading">
      <div className="-webkit-box css-4647io flex-col font-['Montserrat:SemiBold',_sans-serif] justify-end leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.736px] w-full">
        <p className="leading-[17.604px]">Morning yoga for beginners</p>
      </div>
    </div>
  );
}

function Lozenge() {
  return (
    <div className="bg-[#f3f5f8] box-border content-stretch flex gap-[7.335px] items-center justify-center max-w-[123.225px] px-[2.934px] py-[1.467px] relative rounded-[2.934px] shrink-0" data-name="Lozenge">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[1.35] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.802px] text-nowrap whitespace-pre">Fitness class</p>
    </div>
  );
}

function Lozenges() {
  return (
    <div className="content-start flex flex-wrap gap-[5.868px] items-start relative shrink-0 w-full" data-name="Lozenges">
      <Lozenge />
    </div>
  );
}

function Appointment() {
  return (
    <div className="absolute left-0 size-[11.736px] top-0" data-name="Appointment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Appointment">
          <path d={svgPaths.p17e1070} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Icon">
      <Appointment />
    </div>
  );
}

function Label4() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.934px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">22 Oct 24</p>
      </div>
    </div>
  );
}

function BadgeS() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.736px] shrink-0" data-name="🚀 Badge / S">
      <Icon7 />
      <Label4 />
    </div>
  );
}

function Timer() {
  return (
    <div className="absolute left-0 size-[11.736px] top-0" data-name="Timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7886)" id="Timer">
          <path d={svgPaths.paf9ea00} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7886">
            <rect fill="white" height="11.7357" width="11.7357" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Icon">
      <Timer />
    </div>
  );
}

function Label5() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.934px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">16 mins</p>
      </div>
    </div>
  );
}

function BadgeS1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.736px] shrink-0" data-name="🚀 Badge / S">
      <Icon8 />
      <Label5 />
    </div>
  );
}

function LevelBeginner() {
  return (
    <div className="absolute left-0 size-[11.736px] top-0" data-name="Level-beginner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7951)" id="Level-beginner">
          <path d={svgPaths.p23112b00} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7951">
            <rect fill="white" height="11.7357" width="11.7357" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Icon">
      <LevelBeginner />
    </div>
  );
}

function Label6() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.934px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">Beginner</p>
      </div>
    </div>
  );
}

function BadgeS2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.736px] shrink-0" data-name="🚀 Badge / S">
      <Icon9 />
      <Label6 />
    </div>
  );
}

function Tags() {
  return (
    <div className="content-start flex flex-wrap gap-[5.868px] items-start relative shrink-0 w-full" data-name="Tags">
      <BadgeS />
      <BadgeS1 />
      <BadgeS2 />
    </div>
  );
}

function PromoCardContent() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.868px] items-start px-[4.401px] py-[5.868px] relative rounded-[8.802px] shrink-0 w-[126.892px]" data-name=".Promo card content">
      <Heading />
      <Lozenges />
      <Tags />
    </div>
  );
}

function RailCard() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[178.97px] items-start relative rounded-bl-[8.802px] rounded-br-[8.802px] rounded-tl-[2.934px] rounded-tr-[2.934px] shrink-0 w-[126.892px]" data-name="Rail card">
      <Image />
      <PromoCardContent />
    </div>
  );
}

function RailCardFitnessClass() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Rail card / Fitness class">
      <RailCard />
    </div>
  );
}

function Video2() {
  return (
    <div className="absolute left-0 size-[11.736px] top-0" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Video">
          <path d={svgPaths.p35bab00} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Icon">
      <Video2 />
    </div>
  );
}

function ButtonIcon3() {
  return (
    <div className="bg-white relative rounded-[29.339px] shrink-0 size-[17.604px]" data-name="buttonIcon">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[5.868px] relative rounded-[inherit] size-[17.604px]">
        <Icon10 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.733px] border-solid inset-0 pointer-events-none rounded-[29.339px]" />
    </div>
  );
}

function MediaIcon1() {
  return (
    <div className="absolute bottom-[5.96px] content-stretch flex flex-col gap-[2.934px] items-center left-[5.87px]" data-name="Media icon">
      <ButtonIcon3 />
    </div>
  );
}

function Image1() {
  return (
    <div className="h-[68.214px] relative rounded-tl-[8.802px] rounded-tr-[8.802px] shrink-0 w-[126.892px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8.802px] rounded-tr-[8.802px] size-full" src={imgImage1} />
      <MediaIcon1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col gap-[2.934px] items-start relative shrink-0 w-full" data-name="Heading">
      <div className="-webkit-box css-4647io flex-col font-['Montserrat:SemiBold',_sans-serif] justify-end leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.736px] w-full">
        <p className="leading-[17.604px]">Bodyweight strength training</p>
      </div>
    </div>
  );
}

function Lozenge1() {
  return (
    <div className="bg-[#f3f5f8] box-border content-stretch flex gap-[7.335px] items-center justify-center max-w-[123.225px] px-[2.934px] py-[1.467px] relative rounded-[2.934px] shrink-0" data-name="Lozenge">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[1.35] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.802px] text-nowrap whitespace-pre">Fitness class</p>
    </div>
  );
}

function Lozenges1() {
  return (
    <div className="content-start flex flex-wrap gap-[5.868px] items-start relative shrink-0 w-full" data-name="Lozenges">
      <Lozenge1 />
    </div>
  );
}

function Appointment1() {
  return (
    <div className="absolute left-0 size-[11.736px] top-0" data-name="Appointment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Appointment">
          <path d={svgPaths.p17e1070} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Icon">
      <Appointment1 />
    </div>
  );
}

function Label7() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.934px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">10 Jun 24</p>
      </div>
    </div>
  );
}

function BadgeS3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.736px] shrink-0" data-name="🚀 Badge / S">
      <Icon11 />
      <Label7 />
    </div>
  );
}

function Timer1() {
  return (
    <div className="absolute left-0 size-[11.736px] top-0" data-name="Timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7886)" id="Timer">
          <path d={svgPaths.paf9ea00} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7886">
            <rect fill="white" height="11.7357" width="11.7357" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Icon">
      <Timer1 />
    </div>
  );
}

function Label8() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.934px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">12 mins</p>
      </div>
    </div>
  );
}

function BadgeS4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.736px] shrink-0" data-name="🚀 Badge / S">
      <Icon12 />
      <Label8 />
    </div>
  );
}

function LevelBeginner1() {
  return (
    <div className="absolute left-0 size-[11.736px] top-0" data-name="Level-beginner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7951)" id="Level-beginner">
          <path d={svgPaths.p23112b00} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7951">
            <rect fill="white" height="11.7357" width="11.7357" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Icon">
      <LevelBeginner1 />
    </div>
  );
}

function Label9() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.934px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">Beginner</p>
      </div>
    </div>
  );
}

function BadgeS5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.736px] shrink-0" data-name="🚀 Badge / S">
      <Icon13 />
      <Label9 />
    </div>
  );
}

function Tags1() {
  return (
    <div className="content-start flex flex-wrap gap-[5.868px] items-start relative shrink-0 w-full" data-name="Tags">
      <BadgeS3 />
      <BadgeS4 />
      <BadgeS5 />
    </div>
  );
}

function PromoCardContent1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.868px] items-start px-[4.401px] py-[5.868px] relative rounded-[8.802px] shrink-0 w-[126.892px]" data-name=".Promo card content">
      <Heading1 />
      <Lozenges1 />
      <Tags1 />
    </div>
  );
}

function RailCard1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[178.97px] items-start relative rounded-bl-[8.802px] rounded-br-[8.802px] rounded-tl-[2.934px] rounded-tr-[2.934px] shrink-0 w-[126.892px]" data-name="Rail card">
      <Image1 />
      <PromoCardContent1 />
    </div>
  );
}

function RailCardFitnessClass1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Rail card / Fitness class">
      <RailCard1 />
    </div>
  );
}

function Video3() {
  return (
    <div className="absolute left-0 size-[11.736px] top-0" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Video">
          <path d={svgPaths.p35bab00} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Icon">
      <Video3 />
    </div>
  );
}

function ButtonIcon4() {
  return (
    <div className="bg-white relative rounded-[29.339px] shrink-0 size-[17.604px]" data-name="buttonIcon">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[5.868px] relative rounded-[inherit] size-[17.604px]">
        <Icon14 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.733px] border-solid inset-0 pointer-events-none rounded-[29.339px]" />
    </div>
  );
}

function MediaIcon2() {
  return (
    <div className="absolute bottom-[5.96px] content-stretch flex flex-col gap-[2.934px] items-center left-[5.87px]" data-name="Media icon">
      <ButtonIcon4 />
    </div>
  );
}

function Image2() {
  return (
    <div className="h-[68.214px] relative rounded-tl-[8.802px] rounded-tr-[8.802px] shrink-0 w-[126.892px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8.802px] rounded-tr-[8.802px] size-full" src={imgImage2} />
      <MediaIcon2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col gap-[2.934px] items-start relative shrink-0 w-full" data-name="Heading">
      <div className="-webkit-box css-4647io flex-col font-['Montserrat:SemiBold',_sans-serif] justify-end leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.736px] w-full">
        <p className="leading-[17.604px]">Pilates beginners</p>
      </div>
    </div>
  );
}

function Lozenge2() {
  return (
    <div className="bg-[#f3f5f8] box-border content-stretch flex gap-[7.335px] items-center justify-center max-w-[123.225px] px-[2.934px] py-[1.467px] relative rounded-[2.934px] shrink-0" data-name="Lozenge">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[1.35] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.802px] text-nowrap whitespace-pre">Fitness class</p>
    </div>
  );
}

function Lozenges2() {
  return (
    <div className="content-start flex flex-wrap gap-[5.868px] items-start relative shrink-0 w-full" data-name="Lozenges">
      <Lozenge2 />
    </div>
  );
}

function Appointment2() {
  return (
    <div className="absolute left-0 size-[11.736px] top-0" data-name="Appointment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Appointment">
          <path d={svgPaths.p17e1070} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Icon">
      <Appointment2 />
    </div>
  );
}

function Label10() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.934px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">28 Mar 24</p>
      </div>
    </div>
  );
}

function BadgeS6() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.736px] shrink-0" data-name="🚀 Badge / S">
      <Icon15 />
      <Label10 />
    </div>
  );
}

function Timer2() {
  return (
    <div className="absolute left-0 size-[11.736px] top-0" data-name="Timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7886)" id="Timer">
          <path d={svgPaths.paf9ea00} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7886">
            <rect fill="white" height="11.7357" width="11.7357" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Icon">
      <Timer2 />
    </div>
  );
}

function Label11() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.934px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">27 mins</p>
      </div>
    </div>
  );
}

function BadgeS7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.736px] shrink-0" data-name="🚀 Badge / S">
      <Icon16 />
      <Label11 />
    </div>
  );
}

function LevelBeginner2() {
  return (
    <div className="absolute left-0 size-[11.736px] top-0" data-name="Level-beginner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7951)" id="Level-beginner">
          <path d={svgPaths.p23112b00} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7951">
            <rect fill="white" height="11.7357" width="11.7357" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[11.736px]" data-name="Icon">
      <LevelBeginner2 />
    </div>
  );
}

function Label12() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.934px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">Beginner</p>
      </div>
    </div>
  );
}

function BadgeS8() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.736px] shrink-0" data-name="🚀 Badge / S">
      <Icon17 />
      <Label12 />
    </div>
  );
}

function Tags2() {
  return (
    <div className="content-start flex flex-wrap gap-[5.868px] items-start relative shrink-0 w-full" data-name="Tags">
      <BadgeS6 />
      <BadgeS7 />
      <BadgeS8 />
    </div>
  );
}

function PromoCardContent2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.868px] items-start px-[4.401px] py-[5.868px] relative rounded-[8.802px] shrink-0 w-[126.892px]" data-name=".Promo card content">
      <Heading2 />
      <Lozenges2 />
      <Tags2 />
    </div>
  );
}

function RailCard2() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[178.97px] items-start relative rounded-bl-[8.802px] rounded-br-[8.802px] rounded-tl-[2.934px] rounded-tr-[2.934px] shrink-0 w-[126.892px]" data-name="Rail card">
      <Image2 />
      <PromoCardContent2 />
    </div>
  );
}

function RailCardFitnessClass2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Rail card / Fitness class">
      <RailCard2 />
    </div>
  );
}

function Frame1000004985() {
  return (
    <div className="content-stretch flex gap-[8.802px] items-start relative shrink-0 w-full">
      <RailCardFitnessClass />
      <RailCardFitnessClass1 />
      <RailCardFitnessClass2 />
      <RailCardFitnessClass />
    </div>
  );
}

function Frame1000004989() {
  return (
    <div className="content-stretch flex flex-col gap-[5.868px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[17.604px] not-italic relative shrink-0 text-[#21272a] text-[10.269px] w-full">{`Recommended programmes `}</p>
      <Frame1000004985 />
    </div>
  );
}

function Frame1000004995() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14.67px] items-start left-[11.74px] top-[52.66px] w-[271.388px]">
      <MediaCard />
      <Frame1000820 />
      <Frame1000822 />
      <Frame1000833 />
      <Frame1000004989 />
    </div>
  );
}

function Frame1000004996() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13.936px] items-start left-[11.74px] top-[18.19px] w-[271.388px]">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[20.537px] not-italic relative shrink-0 text-[#21272a] text-[14.67px] w-full">Welcome, Damilola</p>
    </div>
  );
}

function ProtoFrame() {
  return (
    <div className="absolute bg-[#f3f5f8] h-[586.406px] left-0 overflow-x-clip overflow-y-auto top-[39.76px] w-[294.86px]" data-name="Proto frame">
      <TopBarStandard />
      <Frame1000004995 />
      <Frame1000004996 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute left-0 size-[17.604px] top-0" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Home">
          <path d={svgPaths.p94ecd00} fill="var(--fill-0, #0074BF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconFrame6() {
  return (
    <div className="relative shrink-0 size-[17.604px]" data-name="Icon frame">
      <Home />
    </div>
  );
}

function Icon22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame6 />
    </div>
  );
}

function BottomNavigationSegment() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2.934px] items-center pb-0 pt-[5.868px] px-[5.868px] relative shrink-0" data-name=".Bottom Navigation/Segment">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.733px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Icon22 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#0079c8] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Treatment() {
  return (
    <div className="absolute left-0 size-[17.604px] top-0" data-name="Treatment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Treatment">
          <g id="Union">
            <mask fill="white" id="path-1-inside-1_14_7760">
              <path clipRule="evenodd" d={svgPaths.p1d86b000} fillRule="evenodd" />
            </mask>
            <path d={svgPaths.p17592470} fill="var(--stroke-0, #4B5158)" mask="url(#path-1-inside-1_14_7760)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconFrame7() {
  return (
    <div className="relative shrink-0 size-[17.604px]" data-name="Icon frame">
      <Treatment />
    </div>
  );
}

function Icon23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame7 />
    </div>
  );
}

function BottomNavigationSegment1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2.934px] items-center pb-0 pt-[5.868px] px-[5.868px] relative shrink-0" data-name=".Bottom Navigation/Segment">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.733px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Icon23 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#4b5158] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">Treatment</p>
      </div>
    </div>
  );
}

function Heart() {
  return (
    <div className="absolute left-0 size-[17.604px] top-0" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Heart">
          <path d={svgPaths.paddc280} fill="var(--fill-0, #21272A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconFrame8() {
  return (
    <div className="relative shrink-0 size-[17.604px]" data-name="Icon frame">
      <Heart />
    </div>
  );
}

function Icon24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame8 />
    </div>
  );
}

function BottomNavigationSegment2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2.934px] items-center pb-0 pt-[5.868px] px-[5.868px] relative shrink-0" data-name=".Bottom Navigation/Segment">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.733px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Icon24 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#4b5158] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">Wellbeing</p>
      </div>
    </div>
  );
}

function Person() {
  return (
    <div className="absolute left-0 size-[17.604px] top-0" data-name="Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Person">
          <g id="Vector">
            <path d={svgPaths.p17859700} fill="var(--fill-0, #4B5158)" />
            <path d={svgPaths.p1b4bb300} fill="var(--fill-0, #4B5158)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconFrame9() {
  return (
    <div className="relative shrink-0 size-[17.604px]" data-name="Icon frame">
      <Person />
    </div>
  );
}

function Icon25() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame9 />
    </div>
  );
}

function BottomNavigationSegment3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2.934px] items-center pb-0 pt-[5.868px] px-[5.868px] relative shrink-0" data-name=".Bottom Navigation/Segment">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.733px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Icon25 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#4b5158] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">Account</p>
      </div>
    </div>
  );
}

function Items() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.733px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[11.736px] py-0 relative w-full">
          <BottomNavigationSegment />
          <BottomNavigationSegment1 />
          <BottomNavigationSegment2 />
          <BottomNavigationSegment3 />
        </div>
      </div>
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7.085px] h-[30.11px] items-center justify-end pb-[7.085px] pt-0 px-0 relative shrink-0 w-full" data-name="Home indicator">
      <div className="bg-[#111c24] h-[4.428px] rounded-[4.428px] shrink-0 w-[119.552px]" data-name="Bar" />
    </div>
  );
}

function BottomNavigation() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[63.776px] items-center left-0 rounded-bl-[33.13px] rounded-br-[33.13px] top-[578.95px] w-[294.86px]" data-name="🚀 Bottom Navigation">
      <Items />
      <HomeIndicator />
    </div>
  );
}

function ExamplesSheetsModalsIPhone() {
  return (
    <div className="absolute bg-white h-[621.193px] left-0 rounded-[35.207px] top-[-1.66px] w-[294.86px]" data-name="Examples/Sheets (Modals) - iPhone">
      <BottomNavigation />
      <ProtoFrame />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute contents right-[23.89px] top-[calc(50%+1.907px)] translate-y-[-50%]" data-name="Battery">
      <div className="absolute h-[9.535px] opacity-[0.35] right-[25.53px] rounded-[3.154px] top-[calc(50%+1.907px)] translate-y-[-50%] w-[18.337px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-[0.733px] border-black border-solid inset-0 pointer-events-none rounded-[3.154px]" />
      </div>
      <div className="absolute h-[2.934px] right-[23.89px] top-[calc(50%+2.03px)] translate-y-[-50%] w-[0.974px]" data-name="Cap">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
          <path d={svgPaths.p1eeff100} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bg-black h-[6.601px] right-[27.14px] rounded-[1.834px] top-[calc(50%+1.907px)] translate-y-[-50%] w-[15.403px]" data-name="Capacity" />
    </div>
  );
}

function Time2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.335px] items-center justify-center left-0 pl-[11.736px] pr-[4.401px] py-0 top-[16.87px] w-[101.955px]" data-name="Time">
      <p className="font-['SF_Pro:Semibold',_sans-serif] font-[590] leading-[16.137px] relative shrink-0 text-[12.469px] text-black text-center text-nowrap whitespace-pre">9:41</p>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute bg-[#f3f5f8] h-[38.875px] left-0 right-0 top-0" data-name="Status Bar">
      <Battery />
      <div className="absolute h-[8.876px] right-[49.26px] top-[calc(50%+2.017px)] translate-y-[-50%] w-[12.573px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
          <path d={svgPaths.p34fe59f0} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute h-[8.802px] right-[67.33px] top-[calc(50%+1.907px)] translate-y-[-50%] w-[14.084px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9">
          <path d={svgPaths.p2e658900} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <Time2 />
    </div>
  );
}

function LockScreen() {
  return (
    <div className="absolute bottom-[21.54px] left-0 overflow-clip right-0 rounded-[35.208px] top-[-0.83px]" data-name="Lock Screen">
      <div className="absolute bg-[#111c24] h-[4.141px] left-[91.11px] rounded-[4.141px] top-[630.3px] w-[111.815px]" data-name="Bar" />
      <div className="absolute backdrop-blur-[10.966px] backdrop-filter bg-white h-[1.711px] opacity-[0.35] right-[35.06px] rounded-[0.856px] top-[32.13px] w-[35.208px]" data-name="Swipe down indicator" />
      <StatusBar />
    </div>
  );
}

function Bezel() {
  return (
    <div className="absolute h-[641.071px] left-0 top-0 w-[294.863px]" data-name="Bezel">
      <div className="absolute h-[674.812px] left-[-17.6px] top-[-16.87px] w-[330.071px]" data-name="iPhone 16 Pro - Black Titanium - Portrait">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIPhone16ProBlackTitaniumPortrait} />
      </div>
    </div>
  );
}

function ExamplesNotificationsIPhone() {
  return (
    <div className="h-[641.071px] relative rounded-[23.472px] shrink-0 w-[294.863px]" data-name="Examples/Notifications - iPhone">
      <ExamplesSheetsModalsIPhone />
      <LockScreen />
      <Bezel />
    </div>
  );
}

function NewIconsKeylineChevronLeft1() {
  return (
    <div className="relative shrink-0 size-[17.664px]" data-name="New Icons/Keyline/chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="New Icons/Keyline/chevron-left">
          <path d={svgPaths.p968b280} fill="var(--fill-0, #4B5158)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon6() {
  return (
    <div className="bg-[#ebeef2] box-border content-stretch flex h-[29.44px] items-center justify-center overflow-clip p-[5.888px] relative rounded-[29.44px] shrink-0" data-name="buttonIcon">
      <NewIconsKeylineChevronLeft1 />
    </div>
  );
}

function Bell1() {
  return (
    <div className="relative shrink-0 size-[17.664px]" data-name="Bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Bell">
          <g id="Vector">
            <path d={svgPaths.p9ee7380} fill="var(--fill-0, #4B5158)" />
            <path d={svgPaths.p19572b00} fill="var(--fill-0, #4B5158)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonIcon7() {
  return (
    <div className="bg-[#ebeef2] box-border content-stretch flex h-[29.44px] items-center justify-center overflow-clip p-[5.888px] relative rounded-[29.44px] shrink-0" data-name="buttonIcon">
      <Bell1 />
    </div>
  );
}

function ActionButtons1() {
  return (
    <div className="content-stretch flex gap-[5.888px] items-start justify-end relative shrink-0" data-name="Action buttons">
      <ButtonIcon7 />
    </div>
  );
}

function TopBarStandard1() {
  return (
    <div className="absolute bg-[#f3f5f8] box-border content-stretch flex gap-[14.72px] h-[52.992px] items-center left-0 p-[11.776px] top-[-0.01px] w-[295.87px]" data-name="Top bar / Standard">
      <ButtonIcon6 />
      <p className="basis-0 font-['Montserrat:SemiBold',_sans-serif] grow h-[19.872px] leading-[20.608px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[14.72px] text-center">&nbsp;</p>
      <ActionButtons1 />
    </div>
  );
}

function Media3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[47.104px]" data-name="media">
      <div className="absolute left-0 rounded-[7359.13px] size-[47.104px] top-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7359.13px]">
          <img alt="" className="absolute h-[112.38%] left-[-29.39%] max-w-none top-[-1.49%] w-[166.98%]" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function Trophy1() {
  return (
    <div className="relative shrink-0 size-[14.72px]" data-name="trophy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="trophy">
          <path d={svgPaths.p1751f7f0} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2259df40} fill="var(--fill-0, black)" id="Vector_2" />
          <g id="Group">
            <path d={svgPaths.p5155df0} fill="var(--fill-0, #F1EFEB)" id="Vector_3" />
            <path d={svgPaths.p11964e00} fill="var(--fill-0, black)" id="Vector_4" />
          </g>
          <path d={svgPaths.p19fc2d00} fill="var(--fill-0, #F1EFEB)" id="Vector_5" />
          <path d={svgPaths.p17abb00} fill="var(--fill-0, black)" id="Vector_6" />
          <g id="Group_2">
            <path d={svgPaths.p333a7dc0} fill="var(--fill-0, #0079C8)" id="Vector_7" />
            <path d={svgPaths.p1fe5700} fill="var(--fill-0, black)" id="Vector_8" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p3dc00c00} fill="var(--fill-0, #0079C8)" id="Vector_9" />
            <path d={svgPaths.p350d2900} fill="var(--fill-0, black)" id="Vector_10" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p26fda400} fill="var(--fill-0, white)" id="Vector_11" />
            <path d={svgPaths.p35b98e00} fill="var(--fill-0, black)" id="Vector_12" />
          </g>
          <path d={svgPaths.p2e048b80} fill="var(--fill-0, black)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000005017() {
  return (
    <div className="content-stretch flex gap-[2.944px] items-center relative shrink-0">
      <Trophy1 />
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[13.248px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">Bronze league</p>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex gap-[5.888px] items-center relative shrink-0 w-full" data-name="textContainer">
      <Frame1000005017 />
      <p className="basis-0 font-['Montserrat:SemiBold',_sans-serif] grow leading-[13.248px] max-h-[52.992px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#0074bf] text-[11.776px] text-right">650/1400</p>
    </div>
  );
}

function Scrubber1() {
  return (
    <div className="box-border content-stretch flex isolate items-center justify-center pl-0 pr-[1.472px] py-0 relative shrink-0 w-full" data-name="Scrubber">
      <div className="bg-[#0074bf] h-[8.832px] mr-[-1.472px] rounded-bl-[14.72px] rounded-tl-[14.72px] shrink-0 w-[66.976px] z-[3]" data-name="Preview bar - filled" />
      <div className="bg-[#0074bf] h-[8.832px] mr-[-1.472px] shrink-0 w-[51.52px] z-[2]" data-name="Preview bar - filled" />
      <div className="bg-[#dde1e6] h-[8.832px] mr-[-1.472px] rounded-br-[14.72px] rounded-tr-[14.72px] shrink-0 w-[74.336px] z-[1]" data-name="Preview bar - filled" />
    </div>
  );
}

function Slider1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Slider">
      <Scrubber1 />
    </div>
  );
}

function Frame1000005026() {
  return (
    <div className="content-stretch flex flex-col gap-[5.888px] items-start relative shrink-0">
      <Slider1 />
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[10.304px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[10.304px] text-nowrap whitespace-pre">
        <span>{`Next: `}</span>
        <span className="font-['Montserrat:Medium',_sans-serif]">Silver league</span>
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.888px] grow items-start min-h-px min-w-px relative shrink-0" data-name="content">
      <TextContainer3 />
      <Frame1000005026 />
    </div>
  );
}

function Frame1000834() {
  return (
    <div className="content-stretch flex gap-[11.776px] items-start relative shrink-0 w-full">
      <Media3 />
      <Content3 />
    </div>
  );
}

function MediaCard3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[17.664px] items-start overflow-clip p-[11.776px] relative rounded-[5.888px] shrink-0 w-[272.318px]" data-name="🚀 Media card">
      <Frame1000834 />
    </div>
  );
}

function Frame1000005027() {
  return (
    <div className="content-stretch flex flex-col gap-[14.72px] items-start relative shrink-0 w-full">
      <MediaCard3 />
    </div>
  );
}

function Frame1000005005() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.888px] items-center justify-center p-[5.888px] relative rounded-[3.68px] shrink-0">
      <div className="relative shrink-0 size-[14.72px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.35996" cy="7.35996" fill="var(--fill-0, #1B883C)" id="Ellipse 1" r="7.35996" />
        </svg>
      </div>
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[13.248px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">M</p>
    </div>
  );
}

function Frame1000005006() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.888px] items-center justify-center p-[5.888px] relative rounded-[3.68px] shrink-0">
      <div className="relative shrink-0 size-[14.72px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.35996" cy="7.35996" fill="var(--fill-0, #1B883C)" id="Ellipse 1" r="7.35996" />
        </svg>
      </div>
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[13.248px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">T</p>
    </div>
  );
}

function Frame1000005007() {
  return (
    <div className="bg-[#ddedf8] box-border content-stretch flex flex-col gap-[5.888px] items-center justify-center p-[5.888px] relative rounded-[3.68px] shrink-0">
      <div className="relative shrink-0 size-[14.72px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.35996" cy="7.35996" fill="var(--fill-0, #1B883C)" id="Ellipse 1" r="7.35996" />
        </svg>
      </div>
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[13.248px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">W</p>
    </div>
  );
}

function Frame1000005008() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.888px] items-center justify-center p-[5.888px] relative rounded-[3.68px] shrink-0">
      <div className="relative shrink-0 size-[14.72px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.35996" cy="7.35996" fill="var(--fill-0, #D9D9D9)" id="Ellipse 4" r="7.35996" />
        </svg>
      </div>
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[13.248px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">T</p>
    </div>
  );
}

function Frame1000005009() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.888px] items-center justify-center p-[5.888px] relative rounded-[3.68px] shrink-0">
      <div className="relative shrink-0 size-[14.72px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.35996" cy="7.35996" fill="var(--fill-0, #D9D9D9)" id="Ellipse 4" r="7.35996" />
        </svg>
      </div>
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[13.248px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">F</p>
    </div>
  );
}

function Frame1000005010() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.888px] items-center justify-center p-[5.888px] relative rounded-[3.68px] shrink-0">
      <div className="relative shrink-0 size-[14.72px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.35996" cy="7.35996" fill="var(--fill-0, #D9D9D9)" id="Ellipse 4" r="7.35996" />
        </svg>
      </div>
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[13.248px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">S</p>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="textContainer">
      <Frame1000005005 />
      <Frame1000005006 />
      <Frame1000005007 />
      <Frame1000005008 />
      <Frame1000005009 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame1000005010 key={i} />
      ))}
    </div>
  );
}

function Frame1000005028() {
  return (
    <div className="content-stretch flex flex-col gap-[5.888px] items-start relative shrink-0">
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[10.304px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[10.304px] text-nowrap whitespace-pre">⚡️ You are on a 3 days streak!</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[5.888px] grow items-start min-h-px min-w-px relative shrink-0" data-name="content">
      <TextContainer4 />
      <Frame1000005028 />
    </div>
  );
}

function Frame1000835() {
  return (
    <div className="content-stretch flex gap-[11.776px] items-start relative shrink-0 w-full">
      <Content4 />
    </div>
  );
}

function MediaCard4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[17.664px] items-start overflow-clip px-[11.776px] py-[8.832px] relative rounded-[5.888px] shrink-0 w-[272.318px]" data-name="🚀 Media card">
      <Frame1000835 />
    </div>
  );
}

function Frame1000005029() {
  return (
    <div className="content-stretch flex flex-col gap-[14.72px] items-start relative shrink-0 w-full">
      <MediaCard4 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute bottom-[15.37%] left-1/4 right-[21.88%] top-[12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 27">
        <g id="Group">
          <path d={svgPaths.p1ff13180} fill="var(--fill-0, #0079C8)" id="Vector" />
          <path d={svgPaths.p15155c00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function AvoidConfrontation2() {
  return (
    <div className="bg-[#ddedf8] overflow-clip relative rounded-[2.944px] shrink-0 size-[36.8px]" data-name="avoid-confrontation-01">
      <Group14 />
    </div>
  );
}

function Frame1000005030() {
  return (
    <div className="content-stretch flex flex-col gap-[5.888px] items-center justify-center leading-[10.304px] not-italic relative shrink-0 text-[#21272a] text-nowrap whitespace-pre">
      <p className="font-['Montserrat:SemiBold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[11.776px]">3</p>
      <p className="font-['Montserrat:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[10.304px]">DAY STREAK</p>
    </div>
  );
}

function Frame1000005031() {
  return (
    <div className="basis-0 bg-[#ddedf8] grow h-[92.736px] min-h-px min-w-px relative rounded-[5.888px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#0074bf] border-[1.104px] border-solid inset-0 pointer-events-none rounded-[5.888px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8.832px] h-[92.736px] items-center justify-center p-[23.552px] relative w-full">
          <AvoidConfrontation2 />
          <Frame1000005030 />
        </div>
      </div>
    </div>
  );
}

function Network1() {
  return (
    <div className="relative shrink-0 size-[36.8px]" data-name="network">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="network">
          <rect fill="var(--fill-0, #DDEDF8)" height="36.7998" rx="2.94398" width="36.7998" />
          <path d={svgPaths.p32ecb400} fill="var(--fill-0, #0079C8)" id="Vector 3" />
          <path d={svgPaths.p10552000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2b73ab00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1f4a5900} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p245480} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000005032() {
  return (
    <div className="content-stretch flex flex-col gap-[5.888px] items-center justify-center leading-[10.304px] not-italic relative shrink-0 text-[#21272a] text-nowrap whitespace-pre">
      <p className="font-['Montserrat:SemiBold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[11.776px]">4.50</p>
      <p className="font-['Montserrat:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[10.304px]">TOTAL XP</p>
    </div>
  );
}

function Frame1000005033() {
  return (
    <div className="basis-0 bg-[#ddedf8] grow h-[92.736px] min-h-px min-w-px relative rounded-[5.888px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#0074bf] border-[1.104px] border-solid inset-0 pointer-events-none rounded-[5.888px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8.832px] h-[92.736px] items-center justify-center p-[23.552px] relative w-full">
          <Network1 />
          <Frame1000005032 />
        </div>
      </div>
    </div>
  );
}

function Frame1000005014() {
  return (
    <div className="content-stretch flex gap-[20.608px] items-center relative shrink-0 w-full">
      <Frame1000005031 />
      <Frame1000005033 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[49.99%_21.85%_9.16%_44.32%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 16">
        <g id="Group">
          <path d={svgPaths.p1575e340} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1c313d80} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute bottom-[9.16%] left-[21.79%] right-[44.38%] top-1/2" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 16">
        <g id="Group">
          <path d={svgPaths.p3ec78c00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p107c9400} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[49.99%_21.85%_9.16%_21.79%]" data-name="Group">
      <Group15 />
      <Group16 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute inset-[8.84%_19.59%_30.28%_19.53%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="Group">
          <path d={svgPaths.p15b7f6a0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p19a92100} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[22.86%_33.81%_45.94%_33.77%]" data-name="Group">
      <div className="absolute bottom-0 left-[-0.01%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Group">
            <path d={svgPaths.p9f85180} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p19159300} fill="var(--fill-0, black)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Brave1() {
  return (
    <div className="bg-[#ddedf8] overflow-clip relative rounded-[2.944px] shrink-0 size-[36.8px]" data-name="brave">
      <Group17 />
      <Group18 />
      <div className="absolute inset-[15.57%_26.32%_37%_26.25%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p69aa740} fill="var(--fill-0, #0079C8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[14.58%_25.31%_36%_25.27%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <path d={svgPaths.p301f1100} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <Group19 />
    </div>
  );
}

function Frame1000005034() {
  return (
    <div className="content-stretch flex flex-col gap-[5.888px] items-center justify-center leading-[10.304px] not-italic relative shrink-0 text-[#21272a] text-nowrap whitespace-pre">
      <p className="font-['Montserrat:SemiBold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[11.776px]">45</p>
      <p className="font-['Montserrat:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[10.304px]">Rank</p>
    </div>
  );
}

function Frame1000005035() {
  return (
    <div className="basis-0 bg-[#ddedf8] grow h-[92.736px] min-h-px min-w-px relative rounded-[5.888px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#0074bf] border-[1.104px] border-solid inset-0 pointer-events-none rounded-[5.888px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8.832px] h-[92.736px] items-center justify-center p-[23.552px] relative w-full">
          <Brave1 />
          <Frame1000005034 />
        </div>
      </div>
    </div>
  );
}

function Trophy2() {
  return (
    <div className="relative shrink-0 size-[36.8px]" data-name="trophy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="trophy">
          <path d={svgPaths.p27f48880} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p163ef080} fill="var(--fill-0, black)" id="Vector_2" />
          <g id="Group">
            <path d={svgPaths.p3023fc00} fill="var(--fill-0, #F1EFEB)" id="Vector_3" />
            <path d={svgPaths.p14d545b9} fill="var(--fill-0, black)" id="Vector_4" />
          </g>
          <path d={svgPaths.p3b838980} fill="var(--fill-0, #F1EFEB)" id="Vector_5" />
          <path d={svgPaths.p2056f00} fill="var(--fill-0, black)" id="Vector_6" />
          <g id="Group_2">
            <path d={svgPaths.p3d48b600} fill="var(--fill-0, #0079C8)" id="Vector_7" />
            <path d={svgPaths.p28fc3f00} fill="var(--fill-0, black)" id="Vector_8" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p2e510ef} fill="var(--fill-0, #0079C8)" id="Vector_9" />
            <path d={svgPaths.p11bfc300} fill="var(--fill-0, black)" id="Vector_10" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p7d1580} fill="var(--fill-0, white)" id="Vector_11" />
            <path d={svgPaths.p1ed9dc80} fill="var(--fill-0, black)" id="Vector_12" />
          </g>
          <path d={svgPaths.p11511e00} fill="var(--fill-0, black)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000005036() {
  return (
    <div className="content-stretch flex flex-col gap-[5.888px] items-center justify-center leading-[10.304px] not-italic relative shrink-0 text-[#21272a] text-nowrap whitespace-pre">
      <p className="font-['Montserrat:SemiBold',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[11.776px]">Bronze</p>
      <p className="font-['Montserrat:Regular',_sans-serif] overflow-ellipsis overflow-hidden relative shrink-0 text-[10.304px]">LEAGUE</p>
    </div>
  );
}

function Frame1000005037() {
  return (
    <div className="basis-0 bg-[#ddedf8] grow h-[92.736px] min-h-px min-w-px relative rounded-[5.888px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#0074bf] border-[1.104px] border-solid inset-0 pointer-events-none rounded-[5.888px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8.832px] h-[92.736px] items-center justify-center p-[23.552px] relative w-full">
          <Trophy2 />
          <Frame1000005036 />
        </div>
      </div>
    </div>
  );
}

function Frame1000005015() {
  return (
    <div className="content-stretch flex gap-[20.608px] items-center relative shrink-0 w-full">
      <Frame1000005035 />
      <Frame1000005037 />
    </div>
  );
}

function Frame1000836() {
  return (
    <div className="content-stretch flex flex-col gap-[11.776px] items-start relative shrink-0 w-full">
      <Frame1000005014 />
      <Frame1000005015 />
    </div>
  );
}

function Video5() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Video">
          <path d={svgPaths.p43dc540} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Video5 />
    </div>
  );
}

function ButtonIcon8() {
  return (
    <div className="bg-white relative rounded-[29.44px] shrink-0 size-[17.664px]" data-name="buttonIcon">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[5.888px] relative rounded-[inherit] size-[17.664px]">
        <Icon27 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.736px] border-solid inset-0 pointer-events-none rounded-[29.44px]" />
    </div>
  );
}

function MediaIcon4() {
  return (
    <div className="absolute bottom-[6.22px] content-stretch flex flex-col gap-[2.944px] items-center left-[5.89px]" data-name="Media icon">
      <ButtonIcon8 />
    </div>
  );
}

function Image4() {
  return (
    <div className="h-[68.448px] relative rounded-tl-[8.832px] rounded-tr-[8.832px] shrink-0 w-[127.327px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8.832px] rounded-tr-[8.832px] size-full" src={imgImage} />
      <MediaIcon4 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col gap-[2.944px] items-start relative shrink-0 w-full" data-name="Heading">
      <div className="-webkit-box css-4647io flex-col font-['Montserrat:SemiBold',_sans-serif] justify-end leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] w-full">
        <p className="leading-[17.664px]">Morning yoga for beginners</p>
      </div>
    </div>
  );
}

function Lozenge4() {
  return (
    <div className="bg-[#f3f5f8] box-border content-stretch flex gap-[7.36px] items-center justify-center max-w-[123.647px] px-[2.944px] py-[1.472px] relative rounded-[2.944px] shrink-0" data-name="Lozenge">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[1.35] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.832px] text-nowrap whitespace-pre">Fitness class</p>
    </div>
  );
}

function Lozenges4() {
  return (
    <div className="content-start flex flex-wrap gap-[5.888px] items-start relative shrink-0 w-full" data-name="Lozenges">
      <Lozenge4 />
    </div>
  );
}

function Appointment4() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Appointment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Appointment">
          <path d={svgPaths.p243e2300} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Appointment4 />
    </div>
  );
}

function Label16() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">22 Oct 24</p>
      </div>
    </div>
  );
}

function BadgeS12() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon28 />
      <Label16 />
    </div>
  );
}

function Timer4() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7765)" id="Timer">
          <path d={svgPaths.p3d4e6370} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7765">
            <rect fill="white" height="11.7759" width="11.7759" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Timer4 />
    </div>
  );
}

function Label17() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">16 mins</p>
      </div>
    </div>
  );
}

function BadgeS13() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon29 />
      <Label17 />
    </div>
  );
}

function LevelBeginner4() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Level-beginner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7929)" id="Level-beginner">
          <path d={svgPaths.p1b6bb200} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7929">
            <rect fill="white" height="11.7759" width="11.7759" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <LevelBeginner4 />
    </div>
  );
}

function Label18() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">Beginner</p>
      </div>
    </div>
  );
}

function BadgeS14() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon30 />
      <Label18 />
    </div>
  );
}

function Tags4() {
  return (
    <div className="content-start flex flex-wrap gap-[5.888px] items-start relative shrink-0 w-full" data-name="Tags">
      <BadgeS12 />
      <BadgeS13 />
      <BadgeS14 />
    </div>
  );
}

function PromoCardContent4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.888px] items-start px-[4.416px] py-[5.888px] relative rounded-[8.832px] shrink-0 w-[127.327px]" data-name=".Promo card content">
      <Heading4 />
      <Lozenges4 />
      <Tags4 />
    </div>
  );
}

function RailCard4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[179.583px] items-start relative rounded-bl-[8.832px] rounded-br-[8.832px] rounded-tl-[2.944px] rounded-tr-[2.944px] shrink-0 w-[127.327px]" data-name="Rail card">
      <Image4 />
      <PromoCardContent4 />
    </div>
  );
}

function RailCardFitnessClass4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Rail card / Fitness class">
      <RailCard4 />
    </div>
  );
}

function Video6() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Video">
          <path d={svgPaths.p43dc540} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Video6 />
    </div>
  );
}

function ButtonIcon9() {
  return (
    <div className="bg-white relative rounded-[29.44px] shrink-0 size-[17.664px]" data-name="buttonIcon">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[5.888px] relative rounded-[inherit] size-[17.664px]">
        <Icon31 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.736px] border-solid inset-0 pointer-events-none rounded-[29.44px]" />
    </div>
  );
}

function MediaIcon5() {
  return (
    <div className="absolute bottom-[6.22px] content-stretch flex flex-col gap-[2.944px] items-center left-[5.89px]" data-name="Media icon">
      <ButtonIcon9 />
    </div>
  );
}

function Image5() {
  return (
    <div className="h-[68.448px] relative rounded-tl-[8.832px] rounded-tr-[8.832px] shrink-0 w-[127.327px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8.832px] rounded-tr-[8.832px] size-full" src={imgImage1} />
      <MediaIcon5 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col gap-[2.944px] items-start relative shrink-0 w-full" data-name="Heading">
      <div className="-webkit-box css-4647io flex-col font-['Montserrat:SemiBold',_sans-serif] justify-end leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] w-full">
        <p className="leading-[17.664px]">Bodyweight strength training</p>
      </div>
    </div>
  );
}

function Lozenge5() {
  return (
    <div className="bg-[#f3f5f8] box-border content-stretch flex gap-[7.36px] items-center justify-center max-w-[123.647px] px-[2.944px] py-[1.472px] relative rounded-[2.944px] shrink-0" data-name="Lozenge">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[1.35] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.832px] text-nowrap whitespace-pre">Fitness class</p>
    </div>
  );
}

function Lozenges5() {
  return (
    <div className="content-start flex flex-wrap gap-[5.888px] items-start relative shrink-0 w-full" data-name="Lozenges">
      <Lozenge5 />
    </div>
  );
}

function Appointment5() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Appointment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Appointment">
          <path d={svgPaths.p243e2300} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Appointment5 />
    </div>
  );
}

function Label19() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">10 Jun 24</p>
      </div>
    </div>
  );
}

function BadgeS15() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon32 />
      <Label19 />
    </div>
  );
}

function Timer5() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7765)" id="Timer">
          <path d={svgPaths.p3d4e6370} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7765">
            <rect fill="white" height="11.7759" width="11.7759" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Timer5 />
    </div>
  );
}

function Label20() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">12 mins</p>
      </div>
    </div>
  );
}

function BadgeS16() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon33 />
      <Label20 />
    </div>
  );
}

function LevelBeginner5() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Level-beginner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7929)" id="Level-beginner">
          <path d={svgPaths.p1b6bb200} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7929">
            <rect fill="white" height="11.7759" width="11.7759" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <LevelBeginner5 />
    </div>
  );
}

function Label21() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">Beginner</p>
      </div>
    </div>
  );
}

function BadgeS17() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon34 />
      <Label21 />
    </div>
  );
}

function Tags5() {
  return (
    <div className="content-start flex flex-wrap gap-[5.888px] items-start relative shrink-0 w-full" data-name="Tags">
      <BadgeS15 />
      <BadgeS16 />
      <BadgeS17 />
    </div>
  );
}

function PromoCardContent5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.888px] items-start px-[4.416px] py-[5.888px] relative rounded-[8.832px] shrink-0 w-[127.327px]" data-name=".Promo card content">
      <Heading5 />
      <Lozenges5 />
      <Tags5 />
    </div>
  );
}

function RailCard5() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[179.583px] items-start relative rounded-bl-[8.832px] rounded-br-[8.832px] rounded-tl-[2.944px] rounded-tr-[2.944px] shrink-0 w-[127.327px]" data-name="Rail card">
      <Image5 />
      <PromoCardContent5 />
    </div>
  );
}

function RailCardFitnessClass5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Rail card / Fitness class">
      <RailCard5 />
    </div>
  );
}

function Video7() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Video">
          <path d={svgPaths.p43dc540} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Video7 />
    </div>
  );
}

function ButtonIcon10() {
  return (
    <div className="bg-white relative rounded-[29.44px] shrink-0 size-[17.664px]" data-name="buttonIcon">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[5.888px] relative rounded-[inherit] size-[17.664px]">
        <Icon35 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.736px] border-solid inset-0 pointer-events-none rounded-[29.44px]" />
    </div>
  );
}

function MediaIcon6() {
  return (
    <div className="absolute bottom-[6.22px] content-stretch flex flex-col gap-[2.944px] items-center left-[5.89px]" data-name="Media icon">
      <ButtonIcon10 />
    </div>
  );
}

function Image6() {
  return (
    <div className="h-[68.448px] relative rounded-tl-[8.832px] rounded-tr-[8.832px] shrink-0 w-[127.327px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8.832px] rounded-tr-[8.832px] size-full" src={imgImage2} />
      <MediaIcon6 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col gap-[2.944px] items-start relative shrink-0 w-full" data-name="Heading">
      <div className="-webkit-box css-4647io flex-col font-['Montserrat:SemiBold',_sans-serif] justify-end leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] w-full">
        <p className="leading-[17.664px]">Pilates beginners</p>
      </div>
    </div>
  );
}

function Lozenge6() {
  return (
    <div className="bg-[#f3f5f8] box-border content-stretch flex gap-[7.36px] items-center justify-center max-w-[123.647px] px-[2.944px] py-[1.472px] relative rounded-[2.944px] shrink-0" data-name="Lozenge">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[1.35] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.832px] text-nowrap whitespace-pre">Fitness class</p>
    </div>
  );
}

function Lozenges6() {
  return (
    <div className="content-start flex flex-wrap gap-[5.888px] items-start relative shrink-0 w-full" data-name="Lozenges">
      <Lozenge6 />
    </div>
  );
}

function Appointment6() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Appointment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Appointment">
          <path d={svgPaths.p243e2300} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Appointment6 />
    </div>
  );
}

function Label22() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">28 Mar 24</p>
      </div>
    </div>
  );
}

function BadgeS18() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon36 />
      <Label22 />
    </div>
  );
}

function Timer6() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7765)" id="Timer">
          <path d={svgPaths.p3d4e6370} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7765">
            <rect fill="white" height="11.7759" width="11.7759" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Timer6 />
    </div>
  );
}

function Label23() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">27 mins</p>
      </div>
    </div>
  );
}

function BadgeS19() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon37 />
      <Label23 />
    </div>
  );
}

function LevelBeginner6() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Level-beginner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7929)" id="Level-beginner">
          <path d={svgPaths.p1b6bb200} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7929">
            <rect fill="white" height="11.7759" width="11.7759" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <LevelBeginner6 />
    </div>
  );
}

function Label24() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">Beginner</p>
      </div>
    </div>
  );
}

function BadgeS20() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon38 />
      <Label24 />
    </div>
  );
}

function Tags6() {
  return (
    <div className="content-start flex flex-wrap gap-[5.888px] items-start relative shrink-0 w-full" data-name="Tags">
      <BadgeS18 />
      <BadgeS19 />
      <BadgeS20 />
    </div>
  );
}

function PromoCardContent6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.888px] items-start px-[4.416px] py-[5.888px] relative rounded-[8.832px] shrink-0 w-[127.327px]" data-name=".Promo card content">
      <Heading6 />
      <Lozenges6 />
      <Tags6 />
    </div>
  );
}

function RailCard6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[179.583px] items-start relative rounded-bl-[8.832px] rounded-br-[8.832px] rounded-tl-[2.944px] rounded-tr-[2.944px] shrink-0 w-[127.327px]" data-name="Rail card">
      <Image6 />
      <PromoCardContent6 />
    </div>
  );
}

function RailCardFitnessClass6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Rail card / Fitness class">
      <RailCard6 />
    </div>
  );
}

function Frame1000004986() {
  return (
    <div className="content-stretch flex gap-[8.832px] items-start relative shrink-0 w-full">
      <RailCardFitnessClass4 />
      <RailCardFitnessClass5 />
      <RailCardFitnessClass6 />
      <RailCardFitnessClass4 />
    </div>
  );
}

function Frame1000004991() {
  return (
    <div className="content-stretch flex flex-col gap-[5.888px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[17.664px] not-italic relative shrink-0 text-[#21272a] text-[10.304px] w-full">{`Ongoing programmes `}</p>
      <Frame1000004986 />
    </div>
  );
}

function Frame1000005038() {
  return (
    <div className="content-stretch flex font-['Montserrat:SemiBold',_sans-serif] items-start justify-between leading-[10.304px] not-italic relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap w-full whitespace-pre">
      <p className="overflow-ellipsis overflow-hidden relative shrink-0">Rank #45</p>
      <p className="overflow-ellipsis overflow-hidden relative shrink-0">Top 10%</p>
    </div>
  );
}

function Frame1000005020() {
  return (
    <div className="content-stretch flex gap-[5.888px] items-center relative shrink-0 w-[133.583px]">
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[10.304px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">#44</p>
      <div className="relative rounded-[7359.13px] shrink-0 size-[17.664px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7359.13px] size-full" src={imgRectangle2} />
      </div>
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[10.304px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">Patricia</p>
    </div>
  );
}

function Frame1000005039() {
  return (
    <div className="content-stretch flex items-center justify-between opacity-30 relative shrink-0 w-full">
      <Frame1000005020 />
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[10.304px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">650</p>
    </div>
  );
}

function Frame1000005040() {
  return (
    <div className="content-stretch flex gap-[5.888px] items-center relative shrink-0 w-[133.583px]">
      <p className="font-['Montserrat:Medium',_sans-serif] leading-[10.304px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">#45</p>
      <div className="relative rounded-[7359.13px] shrink-0 size-[17.664px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7359.13px]">
          <img alt="" className="absolute h-[112.38%] left-[-29.39%] max-w-none top-[-1.49%] w-[166.98%]" src={imgRectangle1} />
        </div>
      </div>
      <p className="font-['Montserrat:Medium',_sans-serif] leading-[10.304px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">Damilola</p>
    </div>
  );
}

function Frame1000005041() {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[2.944px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#21272a] border-[0.368px_0px] border-solid inset-0 pointer-events-none" />
      <Frame1000005040 />
      <p className="font-['Montserrat:Medium',_sans-serif] leading-[10.304px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">650</p>
    </div>
  );
}

function Frame1000005042() {
  return (
    <div className="content-stretch flex gap-[5.888px] items-center relative shrink-0 w-[133.583px]">
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[10.304px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">#46</p>
      <div className="relative rounded-[7359.13px] shrink-0 size-[17.664px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[7359.13px] size-full" src={imgRectangle3} />
      </div>
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[10.304px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">Emmanuel</p>
    </div>
  );
}

function Frame1000005043() {
  return (
    <div className="content-stretch flex items-center justify-between opacity-30 relative shrink-0 w-full">
      <Frame1000005042 />
      <p className="font-['Montserrat:Regular',_sans-serif] leading-[10.304px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] text-nowrap whitespace-pre">650</p>
    </div>
  );
}

function Frame1000005021() {
  return (
    <div className="content-stretch flex flex-col gap-[5.888px] items-start relative shrink-0 w-full">
      <Frame1000005039 />
      <Frame1000005041 />
      <Frame1000005043 />
    </div>
  );
}

function Frame1000005022() {
  return (
    <div className="content-stretch flex flex-col gap-[8.832px] items-start relative shrink-0 w-full">
      <Frame1000005021 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[11.776px] items-start relative shrink-0 w-full" data-name="content">
      <Frame1000005038 />
      <Frame1000005022 />
    </div>
  );
}

function MediaCard5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[11.776px] items-start overflow-clip p-[8.832px] relative rounded-[5.888px] shrink-0 w-[272.318px]" data-name="🚀 Media card">
      <Content5 />
    </div>
  );
}

function Frame1000005044() {
  return (
    <div className="content-stretch flex flex-col gap-[7.36px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[17.664px] min-w-full not-italic relative shrink-0 text-[#21272a] text-[10.304px] w-[min-content]">Leaderboard</p>
      <MediaCard5 />
    </div>
  );
}

function Frame1000005019() {
  return (
    <div className="content-stretch flex font-['Montserrat:SemiBold',_sans-serif] items-start justify-between leading-[17.664px] not-italic relative shrink-0 text-[10.304px] text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0 text-[#21272a]">{`Explore more programmes `}</p>
      <p className="relative shrink-0 text-[#0074bf]">View</p>
    </div>
  );
}

function Video9() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Video">
          <path d={svgPaths.p4218a00} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Video9 />
    </div>
  );
}

function ButtonIcon12() {
  return (
    <div className="bg-white relative rounded-[29.44px] shrink-0 size-[17.664px]" data-name="buttonIcon">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[5.888px] relative rounded-[inherit] size-[17.664px]">
        <Icon43 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.736px] border-solid inset-0 pointer-events-none rounded-[29.44px]" />
    </div>
  );
}

function MediaIcon8() {
  return (
    <div className="absolute bottom-[6.22px] content-stretch flex flex-col gap-[2.944px] items-center left-[5.89px]" data-name="Media icon">
      <ButtonIcon12 />
    </div>
  );
}

function Image8() {
  return (
    <div className="h-[68.448px] relative rounded-tl-[8.832px] rounded-tr-[8.832px] shrink-0 w-[127.327px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8.832px] rounded-tr-[8.832px] size-full" src={imgImage1} />
      <MediaIcon8 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col gap-[2.944px] items-start relative shrink-0 w-full" data-name="Heading">
      <div className="-webkit-box css-4647io flex-col font-['Montserrat:SemiBold',_sans-serif] justify-end leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] w-full">
        <p className="leading-[17.664px]">Bodyweight strength training</p>
      </div>
    </div>
  );
}

function Lozenge8() {
  return (
    <div className="bg-[#f3f5f8] box-border content-stretch flex gap-[7.36px] items-center justify-center max-w-[123.647px] px-[2.944px] py-[1.472px] relative rounded-[2.944px] shrink-0" data-name="Lozenge">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[1.35] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.832px] text-nowrap whitespace-pre">Fitness class</p>
    </div>
  );
}

function Lozenges8() {
  return (
    <div className="content-start flex flex-wrap gap-[5.888px] items-start relative shrink-0 w-full" data-name="Lozenges">
      <Lozenge8 />
    </div>
  );
}

function Appointment8() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Appointment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Appointment">
          <path d={svgPaths.pbc77a80} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Appointment8 />
    </div>
  );
}

function Label28() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">10 Jun 24</p>
      </div>
    </div>
  );
}

function BadgeS24() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon44 />
      <Label28 />
    </div>
  );
}

function Timer8() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7744)" id="Timer">
          <path d={svgPaths.p3d99000} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7744">
            <rect fill="white" height="11.7759" width="11.7759" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Timer8 />
    </div>
  );
}

function Label29() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">12 mins</p>
      </div>
    </div>
  );
}

function BadgeS25() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon45 />
      <Label29 />
    </div>
  );
}

function LevelBeginner8() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Level-beginner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7929)" id="Level-beginner">
          <path d={svgPaths.p1b6bb200} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7929">
            <rect fill="white" height="11.7759" width="11.7759" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <LevelBeginner8 />
    </div>
  );
}

function Label30() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">Beginner</p>
      </div>
    </div>
  );
}

function BadgeS26() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon46 />
      <Label30 />
    </div>
  );
}

function Tags8() {
  return (
    <div className="content-start flex flex-wrap gap-[5.888px] items-start relative shrink-0 w-full" data-name="Tags">
      <BadgeS24 />
      <BadgeS25 />
      <BadgeS26 />
    </div>
  );
}

function PromoCardContent8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.888px] items-start px-[4.416px] py-[5.888px] relative rounded-[8.832px] shrink-0 w-[127.327px]" data-name=".Promo card content">
      <Heading8 />
      <Lozenges8 />
      <Tags8 />
    </div>
  );
}

function RailCard8() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[179.583px] items-start relative rounded-bl-[8.832px] rounded-br-[8.832px] rounded-tl-[2.944px] rounded-tr-[2.944px] shrink-0 w-[127.327px]" data-name="Rail card">
      <Image8 />
      <PromoCardContent8 />
    </div>
  );
}

function RailCardFitnessClass8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Rail card / Fitness class">
      <RailCard8 />
    </div>
  );
}

function Video10() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Video">
          <path d={svgPaths.p4218a00} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Video10 />
    </div>
  );
}

function ButtonIcon13() {
  return (
    <div className="bg-white relative rounded-[29.44px] shrink-0 size-[17.664px]" data-name="buttonIcon">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[5.888px] relative rounded-[inherit] size-[17.664px]">
        <Icon47 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.736px] border-solid inset-0 pointer-events-none rounded-[29.44px]" />
    </div>
  );
}

function MediaIcon9() {
  return (
    <div className="absolute bottom-[6.22px] content-stretch flex flex-col gap-[2.944px] items-center left-[5.89px]" data-name="Media icon">
      <ButtonIcon13 />
    </div>
  );
}

function Image9() {
  return (
    <div className="h-[68.448px] relative rounded-tl-[8.832px] rounded-tr-[8.832px] shrink-0 w-[127.327px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8.832px] rounded-tr-[8.832px] size-full" src={imgImage} />
      <MediaIcon9 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col gap-[2.944px] items-start relative shrink-0 w-full" data-name="Heading">
      <div className="-webkit-box css-4647io flex-col font-['Montserrat:SemiBold',_sans-serif] justify-end leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] w-full">
        <p className="leading-[17.664px]">Morning yoga for beginners</p>
      </div>
    </div>
  );
}

function Lozenge9() {
  return (
    <div className="bg-[#f3f5f8] box-border content-stretch flex gap-[7.36px] items-center justify-center max-w-[123.647px] px-[2.944px] py-[1.472px] relative rounded-[2.944px] shrink-0" data-name="Lozenge">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[1.35] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.832px] text-nowrap whitespace-pre">Fitness class</p>
    </div>
  );
}

function Lozenges9() {
  return (
    <div className="content-start flex flex-wrap gap-[5.888px] items-start relative shrink-0 w-full" data-name="Lozenges">
      <Lozenge9 />
    </div>
  );
}

function Appointment9() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Appointment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Appointment">
          <path d={svgPaths.pbc77a80} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Appointment9 />
    </div>
  );
}

function Label31() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">22 Oct 24</p>
      </div>
    </div>
  );
}

function BadgeS27() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon48 />
      <Label31 />
    </div>
  );
}

function Timer9() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7744)" id="Timer">
          <path d={svgPaths.p3d99000} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7744">
            <rect fill="white" height="11.7759" width="11.7759" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Timer9 />
    </div>
  );
}

function Label32() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">16 mins</p>
      </div>
    </div>
  );
}

function BadgeS28() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon49 />
      <Label32 />
    </div>
  );
}

function LevelBeginner9() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Level-beginner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7929)" id="Level-beginner">
          <path d={svgPaths.p1b6bb200} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7929">
            <rect fill="white" height="11.7759" width="11.7759" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <LevelBeginner9 />
    </div>
  );
}

function Label33() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">Beginner</p>
      </div>
    </div>
  );
}

function BadgeS29() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon50 />
      <Label33 />
    </div>
  );
}

function Tags9() {
  return (
    <div className="content-start flex flex-wrap gap-[5.888px] items-start relative shrink-0 w-full" data-name="Tags">
      <BadgeS27 />
      <BadgeS28 />
      <BadgeS29 />
    </div>
  );
}

function PromoCardContent9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.888px] items-start px-[4.416px] py-[5.888px] relative rounded-[8.832px] shrink-0 w-[127.327px]" data-name=".Promo card content">
      <Heading9 />
      <Lozenges9 />
      <Tags9 />
    </div>
  );
}

function RailCard9() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[179.583px] items-start relative rounded-bl-[8.832px] rounded-br-[8.832px] rounded-tl-[2.944px] rounded-tr-[2.944px] shrink-0 w-[127.327px]" data-name="Rail card">
      <Image9 />
      <PromoCardContent9 />
    </div>
  );
}

function RailCardFitnessClass9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Rail card / Fitness class">
      <RailCard9 />
    </div>
  );
}

function Video11() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Video">
          <path d={svgPaths.p4218a00} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Video11 />
    </div>
  );
}

function ButtonIcon14() {
  return (
    <div className="bg-white relative rounded-[29.44px] shrink-0 size-[17.664px]" data-name="buttonIcon">
      <div className="box-border content-stretch flex items-center justify-center overflow-clip p-[5.888px] relative rounded-[inherit] size-[17.664px]">
        <Icon51 />
      </div>
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.736px] border-solid inset-0 pointer-events-none rounded-[29.44px]" />
    </div>
  );
}

function MediaIcon10() {
  return (
    <div className="absolute bottom-[6.22px] content-stretch flex flex-col gap-[2.944px] items-center left-[5.89px]" data-name="Media icon">
      <ButtonIcon14 />
    </div>
  );
}

function Image10() {
  return (
    <div className="h-[68.448px] relative rounded-tl-[8.832px] rounded-tr-[8.832px] shrink-0 w-[127.327px]" data-name="image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[8.832px] rounded-tr-[8.832px] size-full" src={imgImage2} />
      <MediaIcon10 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col gap-[2.944px] items-start relative shrink-0 w-full" data-name="Heading">
      <div className="-webkit-box css-4647io flex-col font-['Montserrat:SemiBold',_sans-serif] justify-end leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[11.776px] w-full">
        <p className="leading-[17.664px]">Pilates beginners</p>
      </div>
    </div>
  );
}

function Lozenge10() {
  return (
    <div className="bg-[#f3f5f8] box-border content-stretch flex gap-[7.36px] items-center justify-center max-w-[123.647px] px-[2.944px] py-[1.472px] relative rounded-[2.944px] shrink-0" data-name="Lozenge">
      <p className="font-['Montserrat:SemiBold',_sans-serif] leading-[1.35] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#21272a] text-[8.832px] text-nowrap whitespace-pre">Fitness class</p>
    </div>
  );
}

function Lozenges10() {
  return (
    <div className="content-start flex flex-wrap gap-[5.888px] items-start relative shrink-0 w-full" data-name="Lozenges">
      <Lozenge10 />
    </div>
  );
}

function Appointment10() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Appointment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Appointment">
          <path d={svgPaths.pbc77a80} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Appointment10 />
    </div>
  );
}

function Label34() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">28 Mar 24</p>
      </div>
    </div>
  );
}

function BadgeS30() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon52 />
      <Label34 />
    </div>
  );
}

function Timer10() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7744)" id="Timer">
          <path d={svgPaths.p3d99000} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7744">
            <rect fill="white" height="11.7759" width="11.7759" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <Timer10 />
    </div>
  );
}

function Label35() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">27 mins</p>
      </div>
    </div>
  );
}

function BadgeS31() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon53 />
      <Label35 />
    </div>
  );
}

function LevelBeginner10() {
  return (
    <div className="absolute left-0 size-[11.776px] top-0" data-name="Level-beginner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_14_7929)" id="Level-beginner">
          <path d={svgPaths.p1b6bb200} fill="var(--fill-0, #0652AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_14_7929">
            <rect fill="white" height="11.7759" width="11.7759" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon54() {
  return (
    <div className="relative shrink-0 size-[11.776px]" data-name="Icon">
      <LevelBeginner10 />
    </div>
  );
}

function Label36() {
  return (
    <div className="box-border content-stretch flex items-start px-[2.944px] py-0 relative shrink-0" data-name="Label">
      <div className="flex flex-col font-['Montserrat:SemiBold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#21272a] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">Beginner</p>
      </div>
    </div>
  );
}

function BadgeS32() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[11.776px] shrink-0" data-name="🚀 Badge / S">
      <Icon54 />
      <Label36 />
    </div>
  );
}

function Tags10() {
  return (
    <div className="content-start flex flex-wrap gap-[5.888px] items-start relative shrink-0 w-full" data-name="Tags">
      <BadgeS30 />
      <BadgeS31 />
      <BadgeS32 />
    </div>
  );
}

function PromoCardContent10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[5.888px] items-start px-[4.416px] py-[5.888px] relative rounded-[8.832px] shrink-0 w-[127.327px]" data-name=".Promo card content">
      <Heading10 />
      <Lozenges10 />
      <Tags10 />
    </div>
  );
}

function RailCard10() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[179.583px] items-start relative rounded-bl-[8.832px] rounded-br-[8.832px] rounded-tl-[2.944px] rounded-tr-[2.944px] shrink-0 w-[127.327px]" data-name="Rail card">
      <Image10 />
      <PromoCardContent10 />
    </div>
  );
}

function RailCardFitnessClass10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Rail card / Fitness class">
      <RailCard10 />
    </div>
  );
}

function Frame1000004988() {
  return (
    <div className="content-stretch flex gap-[8.832px] items-start relative shrink-0 w-full">
      <RailCardFitnessClass8 />
      <RailCardFitnessClass9 />
      <RailCardFitnessClass10 />
      <RailCardFitnessClass9 />
    </div>
  );
}

function Frame1000005045() {
  return (
    <div className="content-stretch flex flex-col gap-[5.888px] items-start relative shrink-0 w-full">
      <Frame1000005019 />
      <Frame1000004988 />
    </div>
  );
}

function Frame1000005012() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17.664px] items-start left-[11.78px] top-[52.98px] w-[272.318px]">
      <Frame1000005027 />
      <Frame1000005029 />
      <Frame1000836 />
      <Frame1000004991 />
      <Frame1000005044 />
      <Frame1000005045 />
    </div>
  );
}

function ProtoFrame1() {
  return (
    <div className="absolute bg-[#f3f5f8] h-[565.7px] left-0 overflow-x-clip overflow-y-auto top-[39.76px] w-[295.688px]" data-name="Proto frame">
      <TopBarStandard1 />
      <Frame1000005012 />
    </div>
  );
}

function Home1() {
  return (
    <div className="absolute left-0 size-[17.664px] top-0" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Home">
          <path d={svgPaths.p34e78100} fill="var(--fill-0, #0074BF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconFrame11() {
  return (
    <div className="relative shrink-0 size-[17.664px]" data-name="Icon frame">
      <Home1 />
    </div>
  );
}

function Icon59() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame11 />
    </div>
  );
}

function BottomNavigationSegment4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2.944px] items-center pb-0 pt-[5.888px] px-[5.888px] relative shrink-0" data-name=".Bottom Navigation/Segment">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.736px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Icon59 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#0079c8] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Treatment1() {
  return (
    <div className="absolute left-0 size-[17.664px] top-0" data-name="Treatment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Treatment">
          <g id="Union">
            <mask fill="white" id="path-1-inside-1_14_7922">
              <path clipRule="evenodd" d={svgPaths.p3f7e2c00} fillRule="evenodd" />
            </mask>
            <path d={svgPaths.p2c81180} fill="var(--stroke-0, #4B5158)" mask="url(#path-1-inside-1_14_7922)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconFrame12() {
  return (
    <div className="relative shrink-0 size-[17.664px]" data-name="Icon frame">
      <Treatment1 />
    </div>
  );
}

function Icon60() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame12 />
    </div>
  );
}

function BottomNavigationSegment5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2.944px] items-center pb-0 pt-[5.888px] px-[5.888px] relative shrink-0" data-name=".Bottom Navigation/Segment">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.736px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Icon60 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#4b5158] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">Treatment</p>
      </div>
    </div>
  );
}

function Heart1() {
  return (
    <div className="absolute left-0 size-[17.664px] top-0" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Heart">
          <path d={svgPaths.p36799500} fill="var(--fill-0, #21272A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconFrame13() {
  return (
    <div className="relative shrink-0 size-[17.664px]" data-name="Icon frame">
      <Heart1 />
    </div>
  );
}

function Icon61() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame13 />
    </div>
  );
}

function BottomNavigationSegment6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2.944px] items-center pb-0 pt-[5.888px] px-[5.888px] relative shrink-0" data-name=".Bottom Navigation/Segment">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.736px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Icon61 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#4b5158] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">Wellbeing</p>
      </div>
    </div>
  );
}

function Person1() {
  return (
    <div className="absolute left-0 size-[17.664px] top-0" data-name="Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Person">
          <g id="Vector">
            <path d={svgPaths.p24453d00} fill="var(--fill-0, #4B5158)" />
            <path d={svgPaths.p265e5a00} fill="var(--fill-0, #4B5158)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconFrame14() {
  return (
    <div className="relative shrink-0 size-[17.664px]" data-name="Icon frame">
      <Person1 />
    </div>
  );
}

function Icon62() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame14 />
    </div>
  );
}

function BottomNavigationSegment7() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2.944px] items-center pb-0 pt-[5.888px] px-[5.888px] relative shrink-0" data-name=".Bottom Navigation/Segment">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.736px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Icon62 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#4b5158] text-[8.832px] text-center text-nowrap">
        <p className="leading-[11.776px] whitespace-pre">Account</p>
      </div>
    </div>
  );
}

function Items1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.736px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[11.776px] py-0 relative w-full">
          <BottomNavigationSegment4 />
          <BottomNavigationSegment5 />
          <BottomNavigationSegment6 />
          <BottomNavigationSegment7 />
        </div>
      </div>
    </div>
  );
}

function BottomNavigation1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[63.776px] items-center left-0 rounded-bl-[41.413px] rounded-br-[41.413px] top-[580.61px] w-[295.688px]" data-name="🚀 Bottom Navigation">
      <Items1 />
    </div>
  );
}

function ExamplesSheetsModalsIPhone1() {
  return (
    <div className="absolute bg-white h-[626.991px] left-[-0.83px] rounded-[35.328px] top-[-2.48px] w-[295.688px]" data-name="Examples/Sheets (Modals) - iPhone">
      <BottomNavigation1 />
      <ProtoFrame1 />
    </div>
  );
}

function Home2() {
  return (
    <div className="absolute left-0 size-[17.604px] top-0" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Home">
          <path d={svgPaths.p94ecd00} fill="var(--fill-0, #0074BF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconFrame15() {
  return (
    <div className="relative shrink-0 size-[17.604px]" data-name="Icon frame">
      <Home2 />
    </div>
  );
}

function Icon63() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame15 />
    </div>
  );
}

function BottomNavigationSegment8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2.934px] items-center pb-0 pt-[5.868px] px-[5.868px] relative shrink-0" data-name=".Bottom Navigation/Segment">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.733px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Icon63 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#0079c8] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Treatment2() {
  return (
    <div className="absolute left-0 size-[17.604px] top-0" data-name="Treatment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Treatment">
          <g id="Union">
            <mask fill="white" id="path-1-inside-1_14_7760">
              <path clipRule="evenodd" d={svgPaths.p1d86b000} fillRule="evenodd" />
            </mask>
            <path d={svgPaths.p17592470} fill="var(--stroke-0, #4B5158)" mask="url(#path-1-inside-1_14_7760)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconFrame16() {
  return (
    <div className="relative shrink-0 size-[17.604px]" data-name="Icon frame">
      <Treatment2 />
    </div>
  );
}

function Icon64() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame16 />
    </div>
  );
}

function BottomNavigationSegment9() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2.934px] items-center pb-0 pt-[5.868px] px-[5.868px] relative shrink-0" data-name=".Bottom Navigation/Segment">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.733px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Icon64 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#4b5158] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">Treatment</p>
      </div>
    </div>
  );
}

function Heart2() {
  return (
    <div className="absolute left-0 size-[17.604px] top-0" data-name="Heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Heart">
          <path d={svgPaths.paddc280} fill="var(--fill-0, #21272A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconFrame17() {
  return (
    <div className="relative shrink-0 size-[17.604px]" data-name="Icon frame">
      <Heart2 />
    </div>
  );
}

function Icon65() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame17 />
    </div>
  );
}

function BottomNavigationSegment10() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2.934px] items-center pb-0 pt-[5.868px] px-[5.868px] relative shrink-0" data-name=".Bottom Navigation/Segment">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.733px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Icon65 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#4b5158] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">Wellbeing</p>
      </div>
    </div>
  );
}

function Person2() {
  return (
    <div className="absolute left-0 size-[17.604px] top-0" data-name="Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Person">
          <g id="Vector">
            <path d={svgPaths.p17859700} fill="var(--fill-0, #4B5158)" />
            <path d={svgPaths.p1b4bb300} fill="var(--fill-0, #4B5158)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconFrame18() {
  return (
    <div className="relative shrink-0 size-[17.604px]" data-name="Icon frame">
      <Person2 />
    </div>
  );
}

function Icon66() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
      <IconFrame18 />
    </div>
  );
}

function BottomNavigationSegment11() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[2.934px] items-center pb-0 pt-[5.868px] px-[5.868px] relative shrink-0" data-name=".Bottom Navigation/Segment">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.733px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Icon66 />
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#4b5158] text-[8.802px] text-center text-nowrap">
        <p className="leading-[11.736px] whitespace-pre">Account</p>
      </div>
    </div>
  );
}

function Items2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items">
      <div aria-hidden="true" className="absolute border-[#dde1e6] border-[0.733px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[11.736px] py-0 relative w-full">
          <BottomNavigationSegment8 />
          <BottomNavigationSegment9 />
          <BottomNavigationSegment10 />
          <BottomNavigationSegment11 />
        </div>
      </div>
    </div>
  );
}

function HomeIndicator1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7.085px] h-[30.11px] items-center justify-end pb-[7.085px] pt-0 px-0 relative shrink-0 w-full" data-name="Home indicator">
      <div className="bg-[#111c24] h-[4.428px] rounded-[4.428px] shrink-0 w-[119.552px]" data-name="Bar" />
    </div>
  );
}

function BottomNavigation2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[49.695px] items-center left-0 rounded-bl-[33.13px] rounded-br-[33.13px] top-[577.29px] w-[294.86px]" data-name="🚀 Bottom Navigation">
      <Items2 />
      <HomeIndicator1 />
    </div>
  );
}

function Battery1() {
  return (
    <div className="absolute contents right-[23.89px] top-[calc(50%+1.907px)] translate-y-[-50%]" data-name="Battery">
      <div className="absolute h-[9.535px] opacity-[0.35] right-[25.52px] rounded-[3.154px] top-[calc(50%+1.907px)] translate-y-[-50%] w-[18.337px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-[0.733px] border-black border-solid inset-0 pointer-events-none rounded-[3.154px]" />
      </div>
      <div className="absolute h-[2.934px] right-[23.89px] top-[calc(50%+2.03px)] translate-y-[-50%] w-[0.974px]" data-name="Cap">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
          <path d={svgPaths.p1eeff100} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bg-black h-[6.601px] right-[27.14px] rounded-[1.834px] top-[calc(50%+1.907px)] translate-y-[-50%] w-[15.403px]" data-name="Capacity" />
    </div>
  );
}

function Time3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.335px] items-center justify-center left-0 pl-[11.736px] pr-[4.401px] py-0 top-[16.87px] w-[101.955px]" data-name="Time">
      <p className="font-['SF_Pro:Semibold',_sans-serif] font-[590] leading-[16.137px] relative shrink-0 text-[12.469px] text-black text-center text-nowrap whitespace-pre">9:41</p>
    </div>
  );
}

function StatusBar1() {
  return (
    <div className="absolute bg-[#f3f5f8] h-[38.875px] left-0 right-0 top-0" data-name="Status Bar">
      <Battery1 />
      <div className="absolute h-[8.876px] right-[49.26px] top-[calc(50%+2.017px)] translate-y-[-50%] w-[12.573px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
          <path d={svgPaths.p21fda180} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute h-[8.802px] right-[67.33px] top-[calc(50%+1.907px)] translate-y-[-50%] w-[14.083px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9">
          <path d={svgPaths.p25852500} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <Time3 />
    </div>
  );
}

function LockScreen1() {
  return (
    <div className="absolute bottom-[21.54px] left-0 overflow-clip right-0 rounded-[35.208px] top-[-0.83px]" data-name="Lock Screen">
      <div className="absolute bg-[#111c24] h-[4.141px] left-[91.11px] rounded-[4.141px] top-[630.3px] w-[111.815px]" data-name="Bar" />
      <div className="absolute backdrop-blur-[10.966px] backdrop-filter bg-white h-[1.711px] opacity-[0.35] right-[35.05px] rounded-[0.856px] top-[32.13px] w-[35.208px]" data-name="Swipe down indicator" />
      <StatusBar1 />
    </div>
  );
}

function Bezel1() {
  return (
    <div className="absolute h-[641.071px] left-0 top-0 w-[294.863px]" data-name="Bezel">
      <div className="absolute h-[674.812px] left-[-17.6px] top-[-16.87px] w-[330.071px]" data-name="iPhone 16 Pro - Black Titanium - Portrait">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIPhone16ProBlackTitaniumPortrait} />
      </div>
    </div>
  );
}

function ExamplesNotificationsIPhone1() {
  return (
    <div className="h-[641.071px] relative rounded-[23.472px] shrink-0 w-[294.863px]" data-name="Examples/Notifications - iPhone">
      <ExamplesSheetsModalsIPhone1 />
      <BottomNavigation2 />
      <LockScreen1 />
      <Bezel1 />
    </div>
  );
}

function Options() {
  return <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgExamplesNotificationsIPhone} />;
}

function Wallpaper() {
  return (
    <div className="absolute inset-0" data-name="Wallpaper">
      <Options />
    </div>
  );
}

function HomeIndicator2() {
  return (
    <div className="absolute bottom-0 h-[24.294px] left-0 right-0" data-name="Home Indicator">
      <div className="absolute bottom-[6.01px] flex h-[3.573px] items-center justify-center left-[calc(50%+0.38px)] translate-x-[-50%] w-[102.892px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-white h-[3.573px] rounded-[71.453px] w-[102.892px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

function CameraButton() {
  return (
    <div className="absolute bottom-[35.73px] right-[32.87px] size-[35.727px]" data-name="Camera Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <foreignObject height="132.841" width="132.841" x="-48.5574" y="-48.5574">
          <div style={{ backdropFilter: "blur(24.28px)", clipPath: "url(#bgblur_0_14_7726_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
        </foreignObject>
        <g data-figma-bg-blur-radius="48.5574" id="Camera Button">
          <rect fill="var(--fill-0, black)" fillOpacity="0.26" height="35.7265" rx="17.8633" width="35.7265" />
          <path clipRule="evenodd" d={svgPaths.p1b11000} fill="var(--fill-0, white)" fillRule="evenodd" id="Camera Icon" />
        </g>
        <defs>
          <clipPath id="bgblur_0_14_7726_clip_path" transform="translate(48.5574 48.5574)">
            <rect height="35.7265" rx="17.8633" width="35.7265" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FlashlightButton() {
  return (
    <div className="absolute bottom-[35.73px] left-[32.87px] size-[35.727px]" data-name="Flashlight Button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <foreignObject height="132.841" width="132.841" x="-48.5574" y="-48.5574">
          <div style={{ backdropFilter: "blur(24.28px)", clipPath: "url(#bgblur_0_14_7849_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
        </foreignObject>
        <g data-figma-bg-blur-radius="48.5574" id="Flashlight Button">
          <rect fill="var(--fill-0, black)" fillOpacity="0.26" height="35.7265" rx="17.8633" width="35.7265" />
          <path clipRule="evenodd" d={svgPaths.p25c72100} fill="var(--fill-0, white)" fillRule="evenodd" id="Flashlight Icon" />
        </g>
        <defs>
          <clipPath id="bgblur_0_14_7849_clip_path" transform="translate(48.5574 48.5574)">
            <rect height="35.7265" rx="17.8633" width="35.7265" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Battery2() {
  return (
    <div className="absolute contents right-[23.27px] top-[calc(50%+1.858px)] translate-y-[-50%]" data-name="Battery">
      <div className="absolute h-[9.289px] opacity-[0.35] right-[24.87px] rounded-[3.072px] top-[calc(50%+1.858px)] translate-y-[-50%] w-[17.863px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-[0.715px] border-solid border-white inset-0 pointer-events-none rounded-[3.072px]" />
      </div>
      <div className="absolute h-[2.858px] right-[23.27px] top-[calc(50%+1.977px)] translate-y-[-50%] w-[0.949px]" data-name="Cap">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
          <path d={svgPaths.p3ae14540} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute bg-white h-[6.431px] right-[26.44px] rounded-[1.786px] top-[calc(50%+1.858px)] translate-y-[-50%] w-[15.005px]" data-name="Capacity" />
    </div>
  );
}

function StatusBar2() {
  return (
    <div className="absolute h-[37.87px] left-0 right-0 top-0" data-name="Status Bar">
      <Battery2 />
      <div className="absolute h-[8.646px] right-[47.99px] top-[calc(50%+1.965px)] translate-y-[-50%] w-[12.248px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 9">
          <path d={svgPaths.p87ad080} fill="var(--fill-0, white)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute h-[8.574px] right-[65.59px] top-[calc(50%+1.858px)] translate-y-[-50%] w-[13.719px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 9">
          <path d={svgPaths.p1cf86a80} fill="var(--fill-0, white)" id="Cellular Connection" />
        </svg>
      </div>
    </div>
  );
}

function LockScreen2() {
  return (
    <div className="absolute bg-[rgba(128,128,128,0.3)] inset-0 overflow-clip rounded-[34.297px]" data-name="Lock Screen">
      <Wallpaper />
      <HomeIndicator2 />
      <CameraButton />
      <FlashlightButton />
      <div className="absolute h-[52.088px] left-[calc(50%-6px)] top-[85.27px] translate-x-[-50%] w-[122.335px]" data-name="Time">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123 53">
          <foreignObject height="109.25" width="179.497" x="-28.5812" y="-28.5812">
            <div style={{ backdropFilter: "blur(14.29px)", clipPath: "url(#bgblur_0_14_7724_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <g data-figma-bg-blur-radius="28.5812" id="Time">
            <path clipRule="evenodd" d={svgPaths.p1938d830} fill="var(--fill-0, #999999)" fillOpacity="0.8" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1938d830} fill="var(--fill-1, #707070)" fillRule="evenodd" style={{ mixBlendMode: "color-dodge" }} />
            <path clipRule="evenodd" d={svgPaths.p275a4900} fill="var(--fill-0, #999999)" fillOpacity="0.8" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p275a4900} fill="var(--fill-1, #707070)" fillRule="evenodd" style={{ mixBlendMode: "color-dodge" }} />
            <path clipRule="evenodd" d={svgPaths.p2cc95680} fill="var(--fill-0, #999999)" fillOpacity="0.8" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2cc95680} fill="var(--fill-1, #707070)" fillRule="evenodd" style={{ mixBlendMode: "color-dodge" }} />
            <path d={svgPaths.p3cfd0500} fill="var(--fill-0, #999999)" fillOpacity="0.8" />
            <path d={svgPaths.p3cfd0500} fill="var(--fill-1, #707070)" style={{ mixBlendMode: "color-dodge" }} />
          </g>
          <defs>
            <clipPath id="bgblur_0_14_7724_clip_path" transform="translate(28.5812 28.5812)">
              <path clipRule="evenodd" d={svgPaths.p1938d830} fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p275a4900} fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2cc95680} fillRule="evenodd" />
              <path d={svgPaths.p3cfd0500} />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="absolute font-['SF_Pro:Medium',_sans-serif] font-[510] leading-[normal] left-[calc(50%-0.358px)] text-[#707070] text-[15.72px] text-center top-[54.3px] translate-x-[-50%] w-[153.624px]">Monday, June 6</p>
      <div className="absolute backdrop-blur-[10.683px] backdrop-filter bg-white h-[1.667px] opacity-[0.35] right-[34.16px] rounded-[0.834px] top-[31.3px] w-[34.297px]" data-name="Swipe down indicator" />
      <StatusBar2 />
    </div>
  );
}

function Notification() {
  return (
    <div className="absolute h-[47.159px] left-0 right-0 rounded-[17.149px] top-0" data-name="Notification">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[17.149px]">
        <div className="absolute bg-[rgba(166,166,166,0.7)] inset-0 rounded-[17.149px]" />
        <div className="absolute bg-[#333333] inset-0 mix-blend-color-dodge rounded-[17.149px]" />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute backdrop-blur-[53.59px] backdrop-filter h-[47.159px] left-0 right-[-0.19px] top-0" data-name="Background">
      <Notification />
    </div>
  );
}

function AppIcon() {
  return (
    <div className="relative shrink-0 size-[27.152px]" data-name="App Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="App Icon">
          <g clipPath="url(#clip0_14_7829)">
            <g id="Vector">
              <path d={svgPaths.p23cfec40} fill="#0079C8" />
              <path d={svgPaths.p2661a200} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_14_7829">
            <rect fill="white" height="27.1521" rx="6.07351" width="27.1521" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time4() {
  return (
    <div className="relative self-stretch shrink-0 w-[36.441px]" data-name="Time">
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal leading-[14.291px] left-[36px] text-[#3d3d3d] text-[9.289px] text-nowrap text-right top-0 translate-x-[-100%] whitespace-pre">9:41 AM</p>
    </div>
  );
}

function TitleAndTime() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title and Time">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[11.432px] items-start pl-0 pr-[5.716px] py-0 relative w-full">
          <p className="basis-0 font-['SF_Pro:Semibold',_sans-serif] font-[590] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[15px] text-black tracking-[-0.23px]">Continue your streak 🔥</p>
          <Time4 />
        </div>
      </div>
    </div>
  );
}

function TitleTimeAndDescription() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[28.581px] items-start min-h-px min-w-px relative shrink-0" data-name="Title, Time and Description">
      <TitleAndTime />
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] text-black tracking-[-0.23px] w-[208.643px]">Jump back into your morning yoga for b...</p>
    </div>
  );
}

function NotificationCollapsed() {
  return (
    <div className="box-border content-stretch flex gap-[7.145px] items-center justify-center pb-[8.574px] pt-[10.003px] px-[10.003px] relative shrink-0 w-[275.809px]" data-name="Notification - Collapsed">
      <Background />
      <AppIcon />
      <TitleTimeAndDescription />
    </div>
  );
}

function Notification1() {
  return (
    <div className="absolute h-[47.159px] left-0 right-[-0.19px] rounded-[17.149px] top-0" data-name="Notification">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[17.149px]">
        <div className="absolute bg-[rgba(166,166,166,0.7)] inset-0 rounded-[17.149px]" />
        <div className="absolute bg-[#333333] inset-0 mix-blend-color-dodge rounded-[17.149px]" />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute backdrop-blur-[53.59px] backdrop-filter h-[47.159px] left-0 right-0 top-0" data-name="Background">
      <Notification1 />
    </div>
  );
}

function AppIcon1() {
  return (
    <div className="relative shrink-0 size-[27.152px]" data-name="App Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="App Icon">
          <g clipPath="url(#clip0_14_7829)">
            <g id="Vector">
              <path d={svgPaths.p23cfec40} fill="#0079C8" />
              <path d={svgPaths.p2661a200} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_14_7829">
            <rect fill="white" height="27.1521" rx="6.07351" width="27.1521" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time5() {
  return (
    <div className="h-[14.291px] relative shrink-0 w-[36.441px]" data-name="Time">
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal leading-[14.291px] left-[36px] text-[#3d3d3d] text-[9.289px] text-nowrap text-right top-0 translate-x-[-100%] whitespace-pre">8:25 AM</p>
    </div>
  );
}

function TitleAndTime1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title and Time">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[11.432px] items-start pl-0 pr-[5.716px] py-0 relative w-full">
          <p className="basis-0 font-['SF_Pro:Semibold',_sans-serif] font-[590] grow leading-[14.291px] min-h-px min-w-px relative shrink-0 text-[0px] text-[10.718px] text-black tracking-[-0.1643px]">
            <span>{`Upcoming appointment `}</span>
            <span className="font-['SF_Pro:Regular',_sans-serif] font-normal">📅</span>
          </p>
          <Time5 />
        </div>
      </div>
    </div>
  );
}

function TitleTimeAndDescription1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[28.581px] items-start min-h-px min-w-px relative shrink-0" data-name="Title, Time and Description">
      <TitleAndTime1 />
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[14.291px] relative shrink-0 text-[10.718px] text-black tracking-[-0.1643px] w-[208.643px]">You have an appointment today at 14:30...</p>
    </div>
  );
}

function NotificationCollapsed1() {
  return (
    <div className="box-border content-stretch flex gap-[7.145px] items-center justify-center pb-[8.574px] pt-[10.003px] px-[10.003px] relative shrink-0 w-[275.809px]" data-name="Notification - Collapsed">
      <Background1 />
      <AppIcon1 />
      <TitleTimeAndDescription1 />
    </div>
  );
}

function Notification2() {
  return (
    <div className="absolute h-[47.159px] left-0 right-0 rounded-[17.149px] top-0" data-name="Notification">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[17.149px]">
        <div className="absolute bg-[rgba(166,166,166,0.7)] inset-0 rounded-[17.149px]" />
        <div className="absolute bg-[#333333] inset-0 mix-blend-color-dodge rounded-[17.149px]" />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute backdrop-blur-[53.59px] backdrop-filter h-[47.159px] left-0 right-[-0.19px] top-0" data-name="Background">
      <Notification2 />
    </div>
  );
}

function AppIcon2() {
  return (
    <div className="relative shrink-0 size-[27.152px]" data-name="App Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="App Icon">
          <g clipPath="url(#clip0_14_7829)">
            <g id="Vector">
              <path d={svgPaths.p23cfec40} fill="#0079C8" />
              <path d={svgPaths.p2661a200} fill="var(--fill-0, white)" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_14_7829">
            <rect fill="white" height="27.1521" rx="6.07351" width="27.1521" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Time6() {
  return (
    <div className="relative self-stretch shrink-0 w-[36.441px]" data-name="Time">
      <p className="absolute font-['SF_Pro:Regular',_sans-serif] font-normal leading-[14.291px] left-[36px] text-[#3d3d3d] text-[9.289px] text-nowrap text-right top-0 translate-x-[-100%] whitespace-pre">Yesterday, 2:58 PM</p>
    </div>
  );
}

function TitleAndTime2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title and Time">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[11.432px] items-start pl-0 pr-[5.716px] py-0 relative w-full">
          <p className="basis-0 font-['SF_Pro:Semibold',_sans-serif] font-[590] grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[15px] text-black tracking-[-0.23px]">Was there a problem?</p>
          <Time6 />
        </div>
      </div>
    </div>
  );
}

function TitleTimeAndDescription2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[28.581px] items-start min-h-px min-w-px relative shrink-0" data-name="Title, Time and Description">
      <TitleAndTime2 />
      <p className="font-['SF_Pro:Regular',_sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] text-black tracking-[-0.23px] w-[208.643px]">Come back to finish booking your remot...</p>
    </div>
  );
}

function NotificationCollapsed2() {
  return (
    <div className="box-border content-stretch flex gap-[7.145px] items-center justify-center pb-[8.574px] pt-[10.003px] px-[10.003px] relative shrink-0 w-[275.809px]" data-name="Notification - Collapsed">
      <Background2 />
      <AppIcon2 />
      <TitleTimeAndDescription2 />
    </div>
  );
}

function Notifications() {
  return (
    <div className="absolute bottom-[132.19px] box-border content-stretch flex flex-col gap-[5.716px] h-[228.65px] items-center justify-end left-0 pb-[5.716px] pt-0 px-[5.716px] right-0" data-name="Notifications">
      <NotificationCollapsed />
      <NotificationCollapsed1 />
      <NotificationCollapsed2 />
    </div>
  );
}

function Bezel2() {
  return (
    <div className="absolute h-[624.499px] left-0 top-0 w-[287.241px]" data-name="Bezel">
      <div className="absolute h-[657.368px] left-[-17.15px] top-[-16.43px] w-[321.539px]" data-name="iPhone 16 Pro - Black Titanium - Portrait">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIPhone16ProBlackTitaniumPortrait} />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[624.499px] relative rounded-[22.865px] shrink-0 w-[287.241px]" data-name>
      <LockScreen2 />
      <Notifications />
      <Bezel2 />
    </div>
  );
}

function Frame1000005023() {
  return (
    <div className="absolute content-stretch flex gap-[34.016px] items-start left-[394px] top-[104px]">
      <ExamplesNotificationsIPhone />
      <ExamplesNotificationsIPhone1 />
      <Component />
    </div>
  );
}

export default function Component14() {
  return (
    <div className="bg-[#ddedf8] relative size-full" data-name="14">
      <div className="absolute left-[-3px] rounded-br-[137px] size-[429px] top-[-4px]" data-name="image 153">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.37] pointer-events-none rounded-br-[137px] size-full" src={imgImage153} />
      </div>
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[normal] left-[2179px] not-italic text-[#a8a8a8] text-[18px] text-nowrap text-right top-[1031px] translate-x-[-100%] whitespace-pre">#</p>
      <Frame1000005023 />
    </div>
  );
}