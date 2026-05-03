import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

// creates the Hero part which is the banner
// pretty basic but will continue to work on it
export default function Hero() {
  return (
    <header className="max-w-4xl mx-auto px-6 py-24 flex gap-12 items-center">
      <img
        src="/me.jpg"
        alt="photo of me"
        className="w-36 h-36 rounded-full object-cover shrink-0"
      />
      <section>
        <h1 className="font-lora text-5xl font-bold mb-4">Ashley Perez</h1>
        <p className="font-lora text-gray-600 text-lg leading-relaxed mb-6">
          Software developer, game designer, and educator based in the Bay Area!
          Love learning about new technologies and tech stacks :)
        </p>
        <nav className="flex gap-4">
          <a href="https://x.com/wingedgrenade" className="text-2xl pr-4">
            <BsTwitterX />
          </a>
					{ /* not ready yet 
          <a href="https://instagram.com" className="text-2xl pr-4">
            <BsInstagram />
          </a>
				   */ }
          <a
            href="https://www.linkedin.com/in/ashley-perezzz/"
            className="text-2xl pr-4"
          >
            <BsLinkedin />
          </a>
        </nav>
      </section>
    </header>
  );
}
