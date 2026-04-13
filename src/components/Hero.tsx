// creates the Hero part which is the banner
// pretty basic but will continue to work on it
export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 flex gap-12 items-center">
      <img
        src="/your-photo.jpg"
        alt="Ash"
        className="w-36 h-36 rounded-full object-cover shrink-0"
      />
      <div>
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Some stuff about me I guess. This is a work in progress.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/..." className="text-sm font-medium underline underline-offset-4">GitHub</a>
          <a href="https://linkedin.com/..." className="text-sm font-medium underline underline-offset-4">LinkedIn</a>
          <a href="mailto:you@email.com" className="text-sm font-medium underline underline-offset-4">Email</a>
        </div>
      </div>
    </section>
  )
}
