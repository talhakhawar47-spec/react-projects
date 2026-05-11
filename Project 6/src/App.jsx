const navLinks = ['Agent Platform', 'Agent Marketplace', 'AI for Work', 'Developers', 'Resources'];

function Navbar() {
  return (
    <header className="nav-wrap">
      <div className="container nav">
        <p className="brand">kore.ai</p>
        <nav className="links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a href="#" key={link}>{link}</a>
          ))}
        </nav>
        <button className="btn btn-dark">GET STARTED</button>
      </div>
    </header>
  );
}

const featureCards = [
  ['Pre-built applications', 'Launch AI use cases quickly with templates.'],
  ['Application accelerators', 'Create tailored solutions in less time.'],
  ['Trusted experiences', 'Secure, govern, and scale confidently.'],
];

function App() {
  return (
    <>
      <Navbar />
      <main className="page container">
        <section className="hero section">
          <p className="hero-chip">Conversational AI for enterprise</p>
          <h1>Agentic AI applications<br />for the enterprise</h1>
          <p className="hero-text">Build and manage AI agents that automate customer service, employee productivity, and business workflows.</p>
          <div className="hero-actions">
            <button className="btn btn-dark">GET A DEMO</button>
            <button className="btn btn-light">WATCH VIDEO</button>
          </div>
          <div className="hero-cards">{featureCards.map(([t,d]) => <article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>
        </section>

        <section className="section enterprise">
          <div>
            <h2>We’ve built our business by serving global enterprises</h2>
            <p>Trusted by banks, credit unions, financial institutions, healthcare organizations and technology leaders.</p>
          </div>
          <div className="enterprise-media"><span>Banks, Credit Unions,<br/>Financial Institutions</span></div>
        </section>

        <section className="section outcomes">
          <h2>Agentic AI applications that drive faster business outcomes in customer service, employee productivity, and process automation</h2>
          <div className="outcome-grid">
            <article className="card"><h3>Customer Service</h3><p>Automate support and improve resolution quality.</p></article>
            <article className="card"><h3>Employee Productivity</h3><p>Give teams assistants for knowledge and actions.</p></article>
            <article className="card"><h3>Process Automation</h3><p>Orchestrate workflows across enterprise systems.</p></article>
          </div>
        </section>

        <section className="section testimonials">
          <h2>Customer testimonials</h2>
          <div className="testimonial-grid">{['Morgan Stanley','Pfizer','Hitachi','Microsoft'].map((x)=> <article className="quote" key={x}><h4>{x}</h4><p>“Kore.ai delivered measurable value through reliable AI experiences at enterprise scale.”</p></article>)}</div>
        </section>

        <section className="section partners">
          <h2>Strategic partners: Microsoft and AWS</h2>
          <div className="partner-grid">
            <div className="partner microsoft">Microsoft</div>
            <div className="partner aws">aws</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
