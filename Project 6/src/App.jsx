const navLinks = ['Agent Platform', 'Agent Marketplace', 'AI for Work', 'Developers', 'Resources'];

function Navbar() {
  return (
    <header className="nav-wrap">
      <div className="container nav">
        <p className="brand">kore.ai</p>
        <nav className="links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>
        <button className="btn btn-dark">GET STARTED</button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="container section hero">
      <p className="hero-chip">Conversational AI for enterprise</p>
      <h1>
        Agentic AI applications
        <br />
        for the enterprise
      </h1>
      <p className="hero-text">
        Build and manage AI agents that automate customer service, employee productivity, and business workflows.
      </p>
      <div className="hero-actions">
        <button className="btn btn-dark">GET A DEMO</button>
        <button className="btn btn-light">WATCH VIDEO</button>
      </div>
      <div className="hero-cards">
        <article className="card"><h3>Pre-built applications</h3><p>Launch AI use cases quickly with templates.</p></article>
        <article className="card"><h3>Application accelerators</h3><p>Create tailored solutions in less time.</p></article>
        <article className="card"><h3>Trusted experiences</h3><p>Secure, govern, and scale confidently.</p></article>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
