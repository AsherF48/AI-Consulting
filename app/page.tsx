import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import BookingWidget from "@/components/BookingWidget";
import { services } from "@/lib/services";

const founders = [
  {
    image: "/founders/founder-1.png",
    name: "Asher Forman",
    title: "Co-Founder",
    bio: "Asher is an investment banking analyst at Truist Securities, working with financial sponsors on M&A and leveraged buyouts. Before Truist, he was the third full-time hire at CrowdVolt (YC W24), leading product and growth for the festival resale marketplace, and worked at Metis (YC S25, acquired by DoorDash), building datasets used to train AI models on financial reasoning.",
  },
  {
    image: "/founders/founder-2.png",
    name: "Ashwin Dev",
    title: "Co-Founder",
    bio: "Ashwin is a performance analyst at Callan, running investment analytics and due diligence for pension funds and endowments. He previously worked as a data analyst at Multiplier Holdings, an AI-native accounting startup backed by Lightspeed Venture Partners and Ribbit Capital, where he built data products and pricing models for the finance team.",
  },
];

export default function Home() {
  return (
    <>
      <section id="top" className="mx-auto max-w-content scroll-mt-24 px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-8">
            <FadeIn>
              <h1 className="font-serif text-4xl leading-[1.1] text-ink md:text-6xl">
                We build the AI systems your team actually uses.
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Perficere works with mid-size companies to automate the
                manual parts of daily operations — and build the internal
                tools that make the rest of the team faster. Not a platform.
                Not a plugin. A system scoped to your workflow.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-9">
                <a
                  href="#contact"
                  className="inline-block border border-blue bg-blue px-8 py-3 text-sm text-paper transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-blue-dark hover:bg-blue-dark hover:shadow-lg"
                >
                  Book a call
                </a>
              </div>
            </FadeIn>
          </div>
          <div className="hidden md:col-span-4 md:flex md:items-end">
            <div className="h-full w-full border-l border-line pl-6">
              <p className="text-sm leading-relaxed text-muted">
                Process automation. Internal tools. Rollout and training.
                Built for teams that don&apos;t have time to babysit a new
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
          <FadeIn>
            <p className="text-sm uppercase tracking-wide text-muted">
              What we do
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2">
            {services.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.05}>
                <div className="border-t border-line pt-6 transition-colors duration-300 hover:border-ink">
                  <h3 className="font-serif text-2xl text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    {service.summary}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.15}>
            <p className="mt-12 text-sm text-muted">
              Pricing depends on scope — most engagements are quoted after a
              short call.
            </p>
          </FadeIn>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
          <FadeIn>
            <p className="text-sm uppercase tracking-wide text-muted">
              Who we are
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-16">
            {founders.map((founder, i) => (
              <FadeIn key={founder.name} delay={i * 0.1}>
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="group relative h-44 w-44 shrink-0 overflow-hidden border border-line bg-line/40">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                      sizes="176px"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ink">
                      {founder.name}
                    </h3>
                    <p className="mt-1 text-sm text-blue">{founder.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
          <FadeIn>
            <BookingWidget />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
