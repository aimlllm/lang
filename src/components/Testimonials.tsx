const testimonials = [
  {
    name: "Sarah M.",
    location: "Palo Alto, CA",
    text: "They completely transformed our 1960s kitchen into a modern masterpiece. The attention to detail was incredible, and the project was completed on time and within budget. Couldn't be happier!",
    rating: 5,
  },
  {
    name: "David & Lisa Chen",
    location: "San Francisco, CA",
    text: "We hired them for a complete home renovation and the results exceeded our expectations. Professional, communicative, and truly skilled craftsmen. Our Victorian home has never looked better.",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "San Mateo, CA",
    text: "Outstanding roofing work and exterior painting. They were thorough in their assessment, provided a clear quote, and delivered exceptional quality. Highly recommend to anyone in the Bay Area.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-amber-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Don&apos;t just take our word for it &mdash; hear from homeowners
            across the Bay Area who trusted us with their renovation projects.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
            >
              <Stars count={testimonial.rating} />
              <p className="mt-4 text-gray-300 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
