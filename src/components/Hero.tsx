// creates the Hero part which is the banner
// pretty basic but will continue to work on it
export default function Hero() {
  return (
    <header className="max-w-4xl mx-auto px-6 py-24 flex gap-12 items-center">
      <img
        src="/edelgard.png"
        alt="photo of me"
        className="w-36 h-36 rounded-full object-cover shrink-0"
      />
      <section>
        <h1 className="text-5xl font-bold mb-4">Ashley Perez</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Some stuff about me I guess. This is a work in progress.
        </p>
		{ /* TODO: add some images instead of the names later */ } 
        <nav className="flex gap-4">
          <a href="https://x.com" className="text-sm font-medium underline underline-offset-4">X</a>
          <a href="https://instagram.com" className="text-sm font-medium underline underline-offset-4">Instagram</a>
          <a href="https://linkedin.com/..." className="text-sm font-medium underline underline-offset-4">LinkedIn</a>
          <a href="mailto:test@mail.com" className="text-sm font-medium underline underline-offset-4">Email</a>
        </nav>
      </section>
    </header>
  )
}
