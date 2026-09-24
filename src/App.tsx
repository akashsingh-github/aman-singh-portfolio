import { content } from './content'
import './App.css'

const { contact } = content

const links = {
  whatsapp: `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`,
  instagram: `https://instagram.com/${contact.instagram}`,
  email: `mailto:${contact.email}`,
}

const icons = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.3 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.6-.1 1.2Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path d="m5 12 5 5 9-10" />
    </svg>
  ),
}

function ContactLinks({ showCity = false }: { showCity?: boolean }) {
  return (
    <ul className="contact">
      <li>
        {icons.whatsapp}
        <span className="contact-label">WhatsApp:</span>
        <a href={links.whatsapp} target="_blank" rel="noreferrer">
          {contact.whatsapp}
        </a>
      </li>
      <li>
        {icons.instagram}
        <a href={links.instagram} target="_blank" rel="noreferrer">
          @{contact.instagram}
        </a>
      </li>
      <li>
        {icons.email}
        <a href={links.email}>{contact.email}</a>
      </li>
      {showCity && (
        <li>
          {icons.location}
          <span className="contact-city">{contact.city}</span>
        </li>
      )}
    </ul>
  )
}

function SectionTitle({ children }: { children: string }) {
  return <h2 className="section-title">{children}</h2>
}

function App() {
  return (
    <>
      <header className="hero">
        <div className="container">
          <p className="eyebrow">{content.hero.role}</p>
          <h1>{content.hero.name}</h1>
          <p className="tagline">{content.hero.tagline}</p>
          <ContactLinks showCity />
        </div>
        <div className="accent-bar accent-bar--left" />
      </header>

      <main className="container">
        <section>
          <SectionTitle>About</SectionTitle>
          <p className="about">{content.about}</p>
        </section>

        <section>
          <SectionTitle>What I Do</SectionTitle>
          <div className="services">
            {content.services.map((s, i) => (
              <article className="card" key={s.title}>
                <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>Featured Work</SectionTitle>
          <ul className="work">
            {content.featuredWork.map((w) => (
              <li key={w.title}>
                <span className="play">{icons.play}</span>
                <div className="work-text">
                  <h3>{w.title}</h3>
                  <p>{w.description}</p>
                </div>
                {w.url ? (
                  <a className="work-link" href={w.url} target="_blank" rel="noreferrer">
                    ▶ Watch video
                  </a>
                ) : (
                  <span className="work-soon">Coming soon</span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <div className="two-col">
          <section>
            <SectionTitle>Tools &amp; Skills</SectionTitle>
            <ul className="chips">
              {content.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="software">
              Software: <strong>{content.software}</strong>
            </p>
          </section>

          <section>
            <SectionTitle>Why Work With Me</SectionTitle>
            <ul className="why">
              {content.whyMe.map((w) => (
                <li key={w.title}>
                  <span className="check">{icons.check}</span>
                  <p>
                    <strong>{w.title}</strong> {w.text}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {content.testimonials.length > 0 && (
          <section>
            <SectionTitle>What Clients Say</SectionTitle>
            <div className="quotes">
              {content.testimonials.map((t) => (
                <figure className="quote" key={t.quote}>
                  <span className="quote-mark">“</span>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>— {t.author}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="accent-bar accent-bar--right" />
        <div className="container">
          <h2>{content.footer.heading}</h2>
          <p className="availability">{content.footer.availability}</p>
          <ContactLinks />
          <p className="copyright">
            © {new Date().getFullYear()} {content.hero.name}
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
