const topLinks = ['Agentic AI Apps', 'Agent Platform', 'Agent Marketplace', 'More'];
const cards = [
  {
    title: 'Pre-built Applications',
    desc: 'Use applications for Banking, Healthcare, Retail, HR, IT, and Recruiting today.',
  },
  {
    title: 'Application Accelerators',
    desc: 'Leverage our Marketplace of pre-built AI agents, templates, and integrations.',
  },
  {
    title: 'Tailored Applications',
    desc: 'Design / build applications on our Agent Platform across all enterprise usecases.',
  },
];

export default function App() {
  return (
    <div className="hero-page">
      <header className="top-nav">
        <div className="logo">kore<span>.ai</span></div>
        <nav>
          {topLinks.map((item) => (
            <a key={item} href="#">{item} <small>⌄</small></a>
          ))}
        </nav>
        <div className="actions">
          <a href="#" className="signin">Sign in</a>
          <button className="btn black">GET IN TOUCH</button>
        </div>
      </header>

      <section className="hero-shell">
        <div className="announcement">
          <p>Kore.ai launches Agent Management Platform to bring governance and control to enterprise AI</p>
          <span className="new-pill">NEW</span>
          <button className="btn clear">READ MORE</button>
        </div>

        <div className="hero-main">
          <h1>Agentic AI applications<br />for the enterprise</h1>
          <p>Built on the industry-leading, analyst-recognized agent platform.</p>
          <div className="cta-row">
            <button className="btn black">GET A DEMO •</button>
            <button className="btn outline">ANALYST REPORTS •</button>
          </div>
        </div>

        <div className="card-row">
          {cards.map((card) => (
            <article className="app-card" key={card.title}>
              <div className="card-top"><h3>{card.title}</h3><span>➜</span></div>
              <p>{card.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
