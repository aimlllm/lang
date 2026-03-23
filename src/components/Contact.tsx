export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <div className="inline-block text-amber-600 text-sm font-semibold tracking-wider uppercase mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Start Your
              <br />
              Renovation Project?
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Contact us today for a free consultation and estimate. We&apos;ll
              discuss your vision, provide expert recommendations, and deliver a
              transparent quote &mdash; no obligation.
            </p>

            <div className="mt-10 space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Phone</div>
                  <a
                    href="tel:+14155551234"
                    className="text-lg font-semibold text-gray-900 hover:text-amber-600 transition-colors"
                  >
                    (415) 555-1234
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Email</div>
                  <a
                    href="mailto:info@bayarearenovation.com"
                    className="text-lg font-semibold text-gray-900 hover:text-amber-600 transition-colors"
                  >
                    info@bayarearenovation.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">
                    Service Area
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    San Francisco Bay Area
                  </div>
                </div>
              </div>
            </div>

            {/* Service areas */}
            <div className="mt-10 p-6 bg-gray-50 rounded-2xl">
              <div className="text-sm font-semibold text-gray-900 mb-3">
                Areas We Serve
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "San Francisco",
                  "Palo Alto",
                  "San Mateo",
                  "Mountain View",
                  "Fremont",
                  "Oakland",
                  "Berkeley",
                  "San Jose",
                  "Sunnyvale",
                  "Redwood City",
                  "Daly City",
                  "Cupertino",
                ].map((city) => (
                  <span
                    key={city}
                    className="bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Request a Free Estimate
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors text-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors text-sm"
                  placeholder="(415) 555-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors text-sm text-gray-700"
                >
                  <option value="">Select a service</option>
                  <option value="whole-home">Whole-Home Renovation</option>
                  <option value="kitchen">Kitchen Remodeling</option>
                  <option value="bathroom">Bathroom Renovation</option>
                  <option value="roofing">Roofing Services</option>
                  <option value="bedroom">Bedroom Remodeling</option>
                  <option value="fence-paint">Fence &amp; Painting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors text-sm resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3.5 rounded-lg transition-colors text-sm"
              >
                Send Request
              </button>
              <p className="text-xs text-gray-500 text-center">
                We typically respond within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
