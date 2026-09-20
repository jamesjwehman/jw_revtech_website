import Image from "next/image";

const services = [
  "AI strategy and implementation",
  "Automation for operations and support",
  "Custom technology solutions",
  "Modern web and digital presence",
];

const trustPoints = [
  "Professional consulting for growing businesses",
  "Clear communication and reliable delivery",
  "Practical solutions focused on measurable results",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,116,255,0.25),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(0,217,255,0.16),_transparent_25%),linear-gradient(180deg,#050816_0%,#081226_55%,#050816_100%)]" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
          <header className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/80">
                  JW RevTech
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-white/55">
                  Artificial Intelligence and Technology Solutions
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20"
            >
              Contact
            </a>
          </header>

          <div className="mx-auto mt-5 flex w-full max-w-7xl justify-center">
            <div className="relative h-64 w-full max-w-4xl overflow-hidden rounded-3xl sm:h-72 lg:h-80">
              <Image
                src="/jw_revtech_branding_transparent.png"
                alt="JW RevTech logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="grid items-start gap-7 py-7 lg:grid-cols-[1.15fr_0.85fr] lg:py-10">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-100/90 backdrop-blur">
                Trusted AI and tech partner for modern businesses
              </p>
              <h1 className="mt-8 text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                A credible digital presence for a real AI and technology firm.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                JW RevTech helps businesses modernize with practical AI,
                automation, and technology solutions delivered with a polished,
                professional approach.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore services
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Start a conversation
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 backdrop-blur"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
                      Company profile
                    </p>
                    <p className="mt-2 text-2xl font-semibold">JW RevTech</p>
                  </div>
                  <div className="h-12 w-12 rounded-full border border-cyan-300/40 bg-cyan-300/10" />
                </div>

                <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-[#081226] p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/70">
                    Core focus
                  </p>
                  <p className="mt-3 text-xl leading-8 text-slate-100">
                    Building trustworthy AI and technology systems that help
                    businesses look established, work efficiently, and scale
                    confidently.
                  </p>
                </div>

                <div className="mt-6 grid gap-4">
                  {services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <span className="text-sm text-slate-200">{service}</span>
                      <span className="text-cyan-300">↗</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/10 bg-[#040812]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 pt-20 pb-10 sm:px-10 lg:grid-cols-3 lg:px-10">
          <div className="lg:col-span-1">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              A clean, confident presentation of what you do.
            </h2>
          </div>
          <div className="grid gap-5 lg:col-span-2 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-lg font-medium text-white">{service}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Designed to help clients understand your capabilities quickly
                  and trust your business at first glance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#050816]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-white/5 p-8 sm:p-12">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">
              Contact
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a
                href="mailto:jameswehman@gmail.com"
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                jameswehman@gmail.com
              </a>
              <a
                href="tel:+13057886909"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                (305) 788-6909
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
