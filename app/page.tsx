export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For engineering managers &amp; remote teams
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Turn Slack Chaos into<br />
          <span className="text-[#58a6ff]">Clear Daily Standups</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          StandupSync connects to your Slack workspace, reads team conversations, and delivers AI-generated standup summaries with progress and blockers — straight to your inbox every morning.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Free Trial — $15/mo
        </a>
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[
            ["5 min", "Setup time"],
            ["100%", "Async-friendly"],
            ["AI-powered", "Summaries"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-xl">{val}</div>
              <div className="text-[#8b949e] text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect unlimited Slack channels",
              "Daily AI standup summaries",
              "Blocker &amp; progress extraction",
              "Email digest every morning",
              "Team member activity insights",
              "Cancel anytime"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-[#8b949e] text-xs mt-3">7-day free trial. No credit card required upfront.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does StandupSync access my Slack messages?",
              a: "StandupSync uses Slack's official OAuth integration. You authorize access to specific channels only — we never read private DMs or channels you haven't selected."
            },
            {
              q: "What does the AI summary actually include?",
              a: "Each daily summary includes: what each team member worked on, any blockers or issues raised, key decisions made, and links to important threads — all extracted automatically from your chosen channels."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. Cancel anytime from your account dashboard. You'll retain access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>&copy; {new Date().getFullYear()} StandupSync. Built for async-first teams.</p>
      </footer>
    </main>
  );
}
