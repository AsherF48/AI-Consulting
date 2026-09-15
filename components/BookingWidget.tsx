/* TODO: replace this with a Cal.com (or similar) embed once the account is
   set up — just swap the contents of this component, nothing else on the
   site needs to change. */

const CONTACT_EMAIL = "asherforman4@gmail.com";

export default function BookingWidget() {
  return (
    <section className="border border-line px-8 py-14 text-center md:px-16 md:py-20">
      <h2 className="font-serif text-3xl text-ink md:text-4xl">
        Book a call
      </h2>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
        Tell us what you&apos;re trying to automate or build. We&apos;ll
        reply within a day to set up a short call.
      </p>
      <a
        href={`mailto:${CONTACT_EMAIL}?subject=Let's talk about AI at our company`}
        className="mt-8 inline-block border border-blue bg-blue px-8 py-3 text-sm text-paper transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-blue-dark hover:bg-blue-dark hover:shadow-lg"
      >
        Email us to get started
      </a>
    </section>
  );
}
