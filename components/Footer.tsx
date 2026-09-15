const CONTACT_EMAIL = "asherforman4@gmail.com";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between md:px-10">
        <div>
          <p className="font-serif text-lg text-ink">Perficere</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            AI systems for mid-size companies that want their teams to
            actually use them.
          </p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-muted">
              Site
            </span>
            <a href="#top" className="text-sm text-ink transition-colors duration-300 hover:text-blue">
              Home
            </a>
            <a href="#services" className="text-sm text-ink transition-colors duration-300 hover:text-blue">
              Services
            </a>
            <a href="#about" className="text-sm text-ink transition-colors duration-300 hover:text-blue">
              About
            </a>
            <a href="#contact" className="text-sm text-ink transition-colors duration-300 hover:text-blue">
              Book a Call
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-muted">
              Contact
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-ink transition-colors duration-300 hover:text-blue"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line px-6 py-6 md:px-10">
        <p className="text-xs text-muted">
          &copy; {year} Perficere. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
