import { useState } from "react";

export type Project = {
  id: number; // order
  name: string;
  tags: string[];
  bullets: string[];
  description: string;
  mainMedia: string; // path to media
  mediaType: "image" | "youtube"; // specify the type
  extraImages: string[]; // array of imgs
  github?: string; // optional link to github
  liveUrl?: string; // optional link to site or whatever
  toLearnMore: true | false;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // outer div for the actual card
    <div className=" overflow-hidden bg-white flex flex-col">
      {/* holds left and right columns side by side so that things are actually where i want */}
      <div className="flex flex-row p-6 gap-6">
        {/* LEFT COLUMN */}
        {/* more divs to help break up content the way i want */}
        <section className="flex flex-col gap-3 flex-1">
          {/* title text */}
          <h2 className="font-lora text-xl font-bold">{project.name}</h2>

          {/* tags row — flex-row so tags sit side by side */}
          {/* this is a row INSIDE the left column */}
          <div className="flex flex-row flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 px-2 py-1 rounded font-lora text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* bullets stack naturally since ul is a block element */}
          <ul className="list-disc pl-5 space-y-1">
            {project.bullets.map((bullet, index) => (
              <li key={index} className="font-lora text-gray-600 text-sm">
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        {/* RIGHT COLUMNNNNNNNNNN only an img or gif or vid */}
        {/* something visual */}
        <div className="w-72 h-48 shrink-0 overflow-hidden bg-gray-100">
          {/* based on what is passed embed a video or render an img */}
          {project.mediaType === "youtube" ? (
            <iframe // use a link to youtube
              src={project.mainMedia}
              className="w-full h-full"
              allowFullScreen
              title={project.name}
            />
          ) : (
            <img // or just render an img
              src={project.mainMedia}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* ENDDDDDDDDDDDDDDDDDDD of main row, only button is below */}
      {/* EXPANDED SECTIONNNNNNNNNNNNNNNN,,, only renders when isExpanded is true */}
      {/* TODO: add a better animation??? kinda jarring and isnt fluid */}
      {isExpanded && (
        <div className="px-6 pb-4 flex flex-col gap-4 border-t border-gray-200 pt-4">
          {/* show a more detialed description of the project */}
          <p className="font-lora text-gray-600 leading-relaxed">
            {project.description}
          </p>
          {/* render the extra imgs in the array */}
          {/* doesnt matter if array is empty there is a length check */}
          {project.extraImages.length > 0 && (
            <div className="flex gap-4 flex-wrap">
              {project.extraImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.name} detail ${index + 1}`}
                  className="h-48 object-cover"
                />
              ))}
            </div>
          )}
          {/* optional links for git or live project */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                className="font-lora text-sm font-medium underline underline-offset-4"
              >
                GitHub →
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="font-lora text-sm font-medium underline underline-offset-4"
              >
                Live project →
              </a>
            )}
          </div>
        </div>
      )}

      {/* EXPAND BUTTON!!!!!!!!!!!!!!!*/}
      {/* will only render if i want it to (var set to true or false) */}
      {project.toLearnMore && (
        <button
          // set true or false based on the button click
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-lora w-full py-3 text-sm font-medium bg-white text-gray-500 border-t border-gray-100 hover:bg-gray-50"
        >
          {isExpanded ? "hide ↑" : "learn more ↓"}
        </button>
      )}
    </div>
  );
}
