export default function Hero() {
  return (
    <section className="relative pt-20 bg-gray-900 overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-44">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full" />
            <span className="text-amber-300 text-sm font-medium">
              Serving the San Francisco Bay Area
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Transform Your Home
            <br />
            <span className="text-amber-400">With Expert Craftsmanship</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            From complete home renovations to kitchen remodels, roofing, and
            custom finishes &mdash; we bring decades of experience to every
            project in the Bay Area.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Get a Free Estimate
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              View Our Work
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Licensed &amp; Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">500+ Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
