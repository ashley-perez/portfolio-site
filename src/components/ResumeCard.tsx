export type ResumeInfo = {
  id: number; // order
  name: string;
  position: string;
  time: string;
  location: string;
  bullets: string[];
  github?: string; // optional link to github
  liveUrl?: string; // optional link to site or whatever
};

// basically based off of ProjectCard
export default function ResumeCard({ info }: { info: ResumeInfo }) {
  return (
    <div className="border-gray-400 overflow-hidden bg-white flex flex-col">

      <div className="p-6 gap-6">

        <h2 className="font-lora text-xl font-bold">
          {info.position}{" "}
          <span className="font-lora text-xl text-gray-600 font-normal">
            {" | "} {info.name}
          </span>
        </h2>

        <h3 className="font-lora text-gray-500 text-sm pb-1">
          {info.location}
          {" | "}
          {info.time}
        </h3>

        {/* bulletpoints */}
        <ul className="list-disc pl-5 space-y-1">
          {info.bullets.map((bullet, index) => (
            <li key={index} className="font-lora text-gray-600 text-sm">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
