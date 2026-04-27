const metrics = [
  "Event-driven rewards",
  "Supabase RPC",
  "Idempotent XP",
  "Production debugging",
];

const problems = [
  "Duplicate XP awards",
  "Client-only progress trust",
  "Auth/session race conditions",
  "Reward logic blocking navigation",
];

const fixes = [
  "Designed stable reward event keys",
  "Added atomic Supabase reward RPC",
  "Moved rewards into background processing",
  "Fixed quiz score conflict handling",
  "Resolved sidebar overlay click blocking",
  "Gated analytics to remove console noise",
];

export default function RewardEngineCaseStudy() {
  return (
    <main className="case-study">
  <section className="hero section">
  <div className="hero-grid">
    <div>
      <p className="eyebrow">CodeHerWay Case Study</p>
<h1>
  <span className="gradient">Production ready reward engine</span>
</h1>
      <p className="hero-copy">
  Built an event-driven reward system using React and Supabase to ensure
  consistent progress tracking and eliminate duplicate XP.
</p>
      

      <div className="hero-actions">
        <a href="#architecture">View Architecture</a>
        <a href="#debugging" className="secondary">Debugging Journey</a>
      </div>
    </div>

  </div>

  <div className="metric-grid">
    {metrics.map((metric) => (
      <div className="metric-card" key={metric}>
        {metric}
      </div>
    ))}
  </div>
</section>
       

      <section className="section intro-grid">
  <div>
    <p className="eyebrow">The Product</p>
    <h2>CodeHerWay is a guided frontend learning platform.</h2>
    <p>
      The platform teaches beginners through structured lessons, quizzes,
      progress tracking, and momentum-based learning.
    </p>
  </div>

  <div className="showcase">
    <img
      src="/platform-ui.png"
      alt="CodeHerWay lesson interface"
    />
  </div>
</section>

      <section className="section">
        <p className="eyebrow">The Challenge</p>
        <h2>Progress tracking was easy. Making it reliable was the hard part.</h2>
        <div className="card-grid">
          {problems.map((problem) => (
            <article className="glass-card danger" key={problem}>
              <span>Problem</span>
              <h3>{problem}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section architecture" id="architecture">
        <p className="eyebrow">Architecture</p>
        <h2>The system I designed</h2>
        <div className="flow">
          {[
            "User Action",
            "Reward Event",
            "Runtime",
            "Supabase RPC",
            "Database",
            "UI Update",
          ].map((step, index) => (
            <div className="flow-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Backend Trust Layer</p>
          <h2>Rewards became database-backed events.</h2>
          <p>
            Each reward is stored as a unique event. The backend uses a
            Supabase RPC to award XP atomically, skip duplicates, and protect
            progress integrity.
          </p>
        </div>

        <div className="code-card">
          <p>Database constraint</p>
          <pre>{`unique(user_id, event_key)`}</pre>
          <span>One learner. One event. One reward.</span>
        </div>
      </section>

      <section className="section" id="debugging">
        <p className="eyebrow">Debugging Journey</p>
        <h2>Production issues I solved</h2>
        <div className="timeline">
          {fixes.map((fix, index) => (
            <article className="timeline-item" key={fix}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{fix}</p>
            </article>
          ))}
        </div>
        <div className="showcase">
  <img
    src="/debug-logs.png"
    alt="Backend reward logs"
  />
</div>
      </section>

      <section className="section results">
        <p className="eyebrow">Outcome</p>
        <h2>The final system is stable, backend-backed, and production-tested.</h2>

        <div className="result-grid">
          <div>
            <strong>No duplicate XP</strong>
            <p>Reward events are processed once and skipped safely after that.</p>
          </div>
          <div>
            <strong>Backend persistence</strong>
            <p>Supabase records reward activity through a secure RPC flow.</p>
          </div>
          <div>
            <strong>Responsive UI</strong>
            <p>Navigation no longer waits for reward processing.</p>
          </div>
          <div>
            <strong>Debuggable system</strong>
            <p>Safe diagnostics helped isolate production issues quickly.</p>
          </div>
        </div>

        <img
          src="/reward-events.png"
          alt="Supabase reward events table showing production reward records"
          className="proof-image"
        />
      </section>

      <section className="section reflection">
        <p className="eyebrow">Reflection</p>
        <h2>What I learned</h2>
        <p>
          This project taught me that reliable products are designed around
          failure cases, not just happy paths. Auth timing, backend constraints,
          local state, UI layers, and network behavior all shape the user
          experience.
        </p>
        <blockquote>
          The biggest win was turning a fragile client-side progress system into
          a trustworthy, backend-backed learning engine.
        </blockquote>
      </section>
      <footer className="footer">
  <p className="eyebrow">CodeHerWay Case Study</p>

  <div className="footer-content">
    <div>
      <h2>Production-ready learning systems, built with intention.</h2>
      <p>
        A frontend case study focused on reward architecture, backend trust,
        product reliability, and user-centered learning experiences.
      </p>
    </div>

    <div className="footer-links">
      <a href="#architecture">Architecture</a>
      <a href="#debugging">Debugging</a>
      <a
  href="https://github.com/itcodegirl/codeherway-reward-engine-case-study"
  target="_blank"
  rel="noreferrer"
  className="primary-link"
>
  View Code on GitHub
</a>
    </div>
  </div>
</footer>
    </main>
  );
}