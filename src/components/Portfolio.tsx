const projects = [
  {
    title: "Modern Kitchen Transformation",
    location: "Palo Alto, CA",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    title: "Complete Home Renovation",
    location: "San Francisco, CA",
    category: "Whole Home",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Luxury Bathroom Remodel",
    location: "San Mateo, CA",
    category: "Bathroom",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
  {
    title: "Victorian Home Restoration",
    location: "San Francisco, CA",
    category: "Whole Home",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    title: "Contemporary Bedroom Suite",
    location: "Mountain View, CA",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
  },
  {
    title: "Cedar Fence & Exterior Paint",
    location: "Fremont, CA",
    category: "Fence & Paint",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-amber-600 text-sm font-semibold tracking-wider uppercase mb-4">
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Recent Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Browse our latest renovation projects across the Bay Area. Each one
            reflects our commitment to quality and attention to detail.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-lg font-bold">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
