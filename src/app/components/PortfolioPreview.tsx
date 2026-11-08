export function PortfolioPreview() {
  return (
    <main className="relative h-[1200px] w-[1600px] overflow-hidden bg-[#EAE8E2] text-[#171717]">
      <div className="absolute -left-24 -top-36 h-[520px] w-[520px] rounded-full bg-[#CFE3FF] blur-[92px]" />
      <div className="absolute -bottom-40 right-[-60px] h-[600px] w-[600px] rounded-full bg-[#FFE29B] blur-[108px]" />

      <div className="relative grid h-full grid-cols-[380px_1fr] gap-16 p-20">
        <section className="flex flex-col justify-between py-3">
          <div>
            <div className="mb-12 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-[15px] font-semibold uppercase tracking-[0.16em] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#3155FF]" />
              Product design portfolio
            </div>
            <h1 className="text-[72px] font-semibold leading-[0.98] tracking-[-0.055em]">
              Damilola
              <br />
              Odulesi
            </h1>
            <p className="mt-8 max-w-[320px] text-[21px] leading-[1.5] text-[#565653]">
              Designing digital experiences that feel effortless and deliver measurable growth.
            </p>
          </div>

          <div className="border-t border-black/15 pt-7">
            <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[#6E6E69]">Selected impact</p>
            <div className="mt-5 grid grid-cols-2 gap-5">
              <div>
                <p className="text-[35px] font-semibold tracking-[-0.04em]">112%</p>
                <p className="mt-1 text-[14px] leading-[1.35] text-[#6E6E69]">increase in daily engagement</p>
              </div>
              <div>
                <p className="text-[35px] font-semibold tracking-[-0.04em]">35%</p>
                <p className="mt-1 text-[14px] leading-[1.35] text-[#6E6E69]">customer acquisition growth</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex items-center">
          <div className="absolute right-[-28px] top-[12px] h-[1040px] w-[1020px] rotate-[1.5deg] rounded-[38px] bg-[#171717]/10" />
          <div className="relative h-[1040px] w-[1020px] overflow-hidden rounded-[34px] border border-black/10 bg-[#FBFBFA] shadow-[0_36px_90px_rgba(37,34,27,0.18)]">
            <header className="flex h-[92px] items-center justify-between border-b border-black/10 px-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#A4CCFF] text-[15px] font-bold">DO</div>
                <span className="text-[14px] font-semibold uppercase tracking-[0.12em]">Damilola Odulesi</span>
              </div>
              <nav className="flex items-center gap-8 text-[14px] text-[#62625F]">
                <span>About</span>
                <span>Projects</span>
                <span>Resume</span>
                <span className="rounded-full bg-[#171717] px-5 py-2.5 font-semibold text-white">Let's talk</span>
              </nav>
            </header>

            <div className="relative h-[430px] overflow-hidden border-b border-black/10 px-12 pt-16">
              <div className="absolute left-[120px] top-[70px] h-52 w-52 rounded-full bg-[#BEDBFF]/80 blur-[56px]" />
              <div className="absolute right-[170px] top-[115px] h-64 w-64 rounded-full bg-[#FEE685]/70 blur-[62px]" />
              <div className="relative">
                <p className="mb-6 text-[17px] font-medium text-[#5F5F5B]">Hello there 👋🏽, I'm Dami.</p>
                <h2 className="max-w-[840px] text-[52px] font-semibold leading-[1.13] tracking-[-0.045em]">
                  I design experiences that feel easy to use, yet drive business outcomes.
                </h2>
                <p className="mt-7 text-[20px] font-medium">
                  Senior Product Designer at <span className="text-[#3155FF]">Sky</span>
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="relative h-[325px] overflow-hidden rounded-[20px] bg-[#DDEEF8]">
                <div className="absolute left-12 top-10 h-[285px] w-[172px] rotate-[-5deg] rounded-[28px] border-[6px] border-[#173C6B] bg-white shadow-xl">
                  <div className="mx-auto mt-3 h-2 w-14 rounded-full bg-[#173C6B]" />
                  <div className="mx-4 mt-7 h-16 rounded-xl bg-[#DFF5EC] p-3">
                    <div className="h-2 w-16 rounded-full bg-[#5CA98B]" />
                    <div className="mt-3 h-5 w-24 rounded-md bg-white" />
                  </div>
                  <div className="mx-4 mt-4 grid grid-cols-2 gap-2">
                    <div className="h-14 rounded-lg bg-[#EEF2F8]" />
                    <div className="h-14 rounded-lg bg-[#FFF0C9]" />
                  </div>
                  <div className="mx-4 mt-4 h-2 rounded-full bg-[#D7DEE8]" />
                  <div className="mx-4 mt-2 h-2 w-20 rounded-full bg-[#D7DEE8]" />
                </div>
                <div className="absolute bottom-[-24px] left-[205px] h-[300px] w-[182px] rotate-[4deg] rounded-[30px] border-[6px] border-[#173C6B] bg-white shadow-xl">
                  <div className="mx-auto mt-3 h-2 w-14 rounded-full bg-[#173C6B]" />
                  <div className="mx-5 mt-8 flex h-24 items-center justify-center rounded-full border-[13px] border-[#F2C75C]">
                    <span className="text-xl font-bold text-[#173C6B]">7</span>
                  </div>
                  <div className="mx-5 mt-5 h-3 rounded-full bg-[#D7DEE8]" />
                  <div className="mx-5 mt-3 h-12 rounded-xl bg-[#E8F4FF]" />
                </div>
                <div className="absolute right-10 top-9 w-[500px]">
                  <div className="mb-6 inline-flex rounded-full bg-white/70 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-[#315A82]">
                    MyBupa · Mobile experience
                  </div>
                  <p className="text-[36px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#173C6B]">
                    Better wellbeing,
                    <br />
                    one small win at a time.
                  </p>
                  <div className="mt-7 grid grid-cols-3 gap-3">
                    {['Streaks', 'Leagues', 'Insights'].map((label) => (
                      <div key={label} className="rounded-xl border border-[#173C6B]/10 bg-white/55 px-4 py-3 text-[13px] font-semibold text-[#315A82]">
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[170px_1fr] gap-8 pt-7">
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.1em]">MyBupa</p>
                  <p className="mt-2 text-[13px] text-[#73736F]">Senior Product Designer</p>
                </div>
                <div>
                  <h3 className="text-[27px] font-semibold leading-[1.2] tracking-[-0.025em]">Improving wellbeing engagement through gamification</h3>
                  <p className="mt-3 text-[14px] leading-[1.5] text-[#666662]">
                    Personalised health insights, gamification and clearer pathways that lifted daily engagement by 112%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
