import Image from "next/image";
import myData from "../constants/data";

const SKILL_COLORS = {
  "React.js":    "bg-blue-500",
  "Next.js":     "bg-gray-900",
  "React Native":"bg-blue-600",
  "Vite.js":     "bg-violet-500",
  "TypeScript":  "bg-blue-600",
  "JavaScript":  "bg-yellow-500",
  "HTML":        "bg-orange-500",
  "CSS":         "bg-blue-400",
  "Tailwind CSS":"bg-teal-500",
  "SASS":        "bg-pink-500",
  "Bootstrap":   "bg-purple-600",
  "Node.js":     "bg-green-600",
  "GraphQL":     "bg-purple-500",
  "MySQL":       "bg-blue-700",
  "AWS":         "bg-orange-600",
  "Docker":      "bg-sky-500",
  "Git":         "bg-red-500",
  "Vercel":      "bg-gray-700",
  "Figma":       "bg-pink-400",
  "Shopify":     "bg-green-500",
  "React Query": "bg-pink-600",
};

function SkillChip({ name }) {
  const bg = SKILL_COLORS[name] || "bg-slate-500";
  return (
    <span className={`${bg} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
      {name}
    </span>
  );
}

function About() {
  const { skills, about } = myData;

  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-rose-400 mb-8">About Me</h2>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="text-center p-4 bg-rose-50 rounded-2xl">
            <span className="text-3xl font-black text-rose-500">4+</span>
            <p className="text-gray-500 text-sm mt-1">Years Experience</p>
          </div>
          <div className="text-center p-4 bg-rose-50 rounded-2xl">
            <span className="text-3xl font-black text-rose-500">12</span>
            <p className="text-gray-500 text-sm mt-1">Projects Built</p>
          </div>
          <div className="text-center p-4 bg-rose-50 rounded-2xl">
            <span className="text-3xl font-black text-rose-500">6</span>
            <p className="text-gray-500 text-sm mt-1">Companies</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              I&apos;m a mid-level front-end developer with 4+ years of experience building
              responsive, performant web apps and mobile applications for startups and
              enterprise companies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I&apos;ve worked with companies like <span className="font-semibold text-gray-800">BigCommerce</span>, <span className="font-semibold text-gray-800">Technologent</span>, and <span className="font-semibold text-gray-800">Scio Consulting</span> — contributing to products
              used by thousands of users, from AI chat solutions to large-scale
              e-commerce storefronts.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My stack centers on React, Next.js, TypeScript, and Tailwind CSS. I care
              deeply about performance, clean code, and experiences that feel effortless.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100 mt-4">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Education</span>
                <p className="text-gray-700 text-sm mt-0.5">{about.education}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Languages</span>
                <p className="text-gray-700 text-sm mt-0.5">{about.languages}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Currently at</span>
                <p className="text-gray-700 text-sm mt-0.5">{about.currentCompany}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Based in</span>
                <p className="text-gray-700 text-sm mt-0.5">México</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-right flex justify-center md:justify-start">
            <Image
              src="/cat.jpeg"
              alt="Isabel"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Tech Stack</h3>
          <div className="space-y-5">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Frontend</p>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((s) => <SkillChip key={s} name={s} />)}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Styling</p>
              <div className="flex flex-wrap gap-2">
                {skills.styling.map((s) => <SkillChip key={s} name={s} />)}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Backend & Tools</p>
              <div className="flex flex-wrap gap-2">
                {skills.backendAndTools.map((s) => <SkillChip key={s} name={s} />)}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
