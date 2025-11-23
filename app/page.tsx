export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-black text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold">Spite</h1>
        <p className="mt-2 text-zinc-400">the world&apos;s most underrated reasoning engine</p>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Democratize Righteous Malice
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
          Do you have an ingrained sense of being wronged, but are too busy to bend the world to your will? Now offering <span className="font-bold text-white">Spite as a Service</span>, available in three dose sizes, for all price points
        </p>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Plans for everybody</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Essential Plan */}
          <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700 hover:border-zinc-600 transition-colors flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Essential</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Suitable for low level enemies
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$50</span>
                <span className="text-zinc-400">/mo</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Barrage of 1 star reviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Personal spam calls</span>
              </li>
            </ul>
            <a href="https://tylerjrichards.com" className="w-full h-12 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-auto flex items-center justify-center">
              Start Free Trial
            </a>
          </div>

          {/* Intermediate Plan */}
          <div className="bg-zinc-800 rounded-lg p-8 border-2 border-yellow-500 hover:border-yellow-400 transition-colors relative flex flex-col">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                SAVE 30%
              </span>
            </div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Intermediate</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Suitable for deep seeded resentment
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$500</span>
                <span className="text-zinc-400">/mo</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Barrage of 1 star reviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Will ensure personal tax audits</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Guarantee the wild success of their nemesis</span>
              </li>
            </ul>
            <a href="https://tylerjrichards.com" className="w-full h-12 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg transition-colors mt-auto flex items-center justify-center">
              Start Free Trial
            </a>
          </div>

          {/* Expert Plan */}
          <div className="bg-zinc-800 rounded-lg p-8 border border-zinc-700 hover:border-zinc-600 transition-colors flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Expert</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Suitable for teams size of 50+ people
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$5,000</span>
                <span className="text-zinc-400">/mo</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Barrage of 1 star reviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Will start a competitive business at a loss until bankruptcy</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Will enforce their HOA&apos;s strictest rules</span>
              </li>
            </ul>
            <a href="https://tylerjrichards.com" className="w-full h-12 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors mt-auto flex items-center justify-center">
              Start Free Trial
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-zinc-400 text-sm">
          <p>Free trial • Cancel anytime • Money back guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-zinc-800">
        <p className="text-center text-zinc-500 text-sm mb-6">
          Used by the world&apos;s most incredible teams
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-60 hover:opacity-100 transition-opacity">
          {/* Rippling Logo */}
          <a href="https://en.wikipedia.org/wiki/Parker_Conrad" target="_blank" rel="noopener noreferrer" className="text-zinc-500 text-sm hover:text-zinc-400 transition-colors">
            Rippling
          </a>
          {/* Latte Larry's Logo */}
          <a href="https://www.youtube.com/watch?v=DnFAJw9BnWI" target="_blank" rel="noopener noreferrer" className="text-zinc-500 text-sm hover:text-zinc-400 transition-colors">
            Latte Larry&apos;s
          </a>
        </div>
      </footer>
    </div>
  );
}
