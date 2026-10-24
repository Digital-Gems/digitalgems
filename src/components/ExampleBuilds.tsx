import { useScrollReveal } from "@/hooks/useScrollReveal";

const brokerFeatures = [
  { title: "Quote Comparison", text: "Upload two documents, get an automated coverage comparison." },
  { title: "Claims Administration", text: "Drop in a client email and documents. The claim is extracted, filled in, classified and assigned." },
  { title: "Policy Document Assistant", text: "Ask a question about a policy and get an answer straight from the document." },
];

const examples = [
  { img: "/example-salon.webp", alt: "Salon booking screen showing service choices", title: "Salon booking", desc: "Service, specialist, date and time, confirmed.", span: "lg:col-span-2", h: 689 },
  { img: "/example-restaurant.webp", alt: "Restaurant page with table booking button and opening hours", title: "Restaurant table booking", desc: "A table-booking page with hours and contact details.", span: "lg:col-span-2", h: 688 },
  { img: "/example-medical.webp", alt: "Doctor booking screen showing a choice of doctors", title: "Doctor booking", desc: "Patients choose a doctor, pick a slot and confirm.", span: "lg:col-span-2", h: 693 },
  { img: "/example-dental.webp", alt: "Dental practice booking screen showing treatment options", title: "Dental booking", desc: "Treatment booking with appointment lengths built in.", span: "lg:col-span-3", h: 683 },
  { img: "/example-social.webp", alt: "Social media post generator with a topic box", title: "Social media posts", desc: "Type a topic, get an AI-written post and optional image.", span: "lg:col-span-3", h: 684 },
];

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid hsl(170 100% 45% / 0.12)",
};

const ExampleBuilds = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id="examples" className="bg-dg-bg2 px-4 md:px-10 lg:px-[60px] py-12 md:py-[100px]">
      <div className="text-[0.62rem] md:text-[0.72rem] font-bold tracking-[0.12em] uppercase text-dg-teal mb-3">Example Builds</div>
      <h2 className="font-syne font-head font-extrabold mb-3 md:mb-4 text-dg-white" style={{ fontSize: "clamp(1.15rem, 2.8vw, 2.4rem)" }}>
        See what I've built
      </h2>
      <p className="text-dg-grey text-[0.82rem] md:text-[1.05rem] max-w-[560px] leading-[1.7] font-light">
        Screenshots of things I've built.
      </p>

      {/* Featured: Broker Flow */}
      <div
        className="rounded-[14px] p-4 md:p-6 mt-8 md:mt-[60px] grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-5 md:gap-8 items-center"
        style={{ ...cardStyle, border: "1px solid hsl(170 100% 45% / 0.35)" }}
      >
        <img
          src="/example-broker-flow.webp"
          alt="Broker Flow quote comparison screen with two upload boxes"
          width={1400}
          height={687}
          loading="lazy"
          className="w-full h-auto rounded-lg"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        />
        <div>
          <h3 className="text-[1.1rem] md:text-[1.4rem] text-dg-white mb-4 md:mb-5" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, lineHeight: "1.4" }}>
            Broker Flow
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {brokerFeatures.map((f) => (
              <div key={f.title}>
                <div className="text-[0.85rem] md:text-[0.95rem] text-dg-white mb-1.5" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, lineHeight: "1.4" }}>
                  {f.title}
                </div>
                <p className="text-[0.75rem] md:text-[0.875rem] text-dg-grey leading-[1.65]">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other examples */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 mt-4 md:mt-6">
        {examples.map((e) => (
          <div key={e.title} className={`rounded-[14px] p-4 md:p-5 ${e.span}`} style={cardStyle}>
            <img
              src={e.img}
              alt={e.alt}
              width={1400}
              height={e.h}
              loading="lazy"
              className="w-full h-auto rounded-lg mb-4"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            />
            <div className="text-[0.85rem] md:text-[1rem] mb-1.5 text-dg-white" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, lineHeight: "1.4" }}>
              {e.title}
            </div>
            <p className="text-[0.75rem] md:text-[0.875rem] text-dg-grey leading-[1.65]">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExampleBuilds;
