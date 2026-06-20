import Image from "next/image";
import myData from "../constants/data";

const SKILL_COLORS = {
  "JavaScript":              "bg-yellow-500",
  "TypeScript":              "bg-blue-600",
  "HTML/CSS":                "bg-orange-500",
  "Python":                  "bg-blue-500",
  "PHP":                     "bg-indigo-500",
  "C++":                     "bg-slate-600",
  "React.js":                "bg-blue-500",
  "Next.js":                 "bg-gray-900",
  "React Server Components": "bg-blue-700",
  "Angular":                 "bg-red-600",
  "React Native":            "bg-blue-400",
  "Vite.js":                 "bg-violet-500",
  "Express.js":              "bg-gray-600",
  "Storybook":               "bg-pink-500",
  "Makeswift":               "bg-rose-500",
  "Tailwind CSS":            "bg-teal-500",
  "SASS":                    "bg-pink-400",
  "Bootstrap":               "bg-purple-600",
  "Node.js":                 "bg-green-600",
  "MongoDB":                 "bg-green-700",
  "MySQL":                   "bg-blue-700",
  "SQL Server":              "bg-red-700",
  "AWS":                     "bg-orange-600",
  "Docker":                  "bg-sky-500",
  "Git/GitHub":              "bg-red-500",
  "Figma":                   "bg-pink-400",
  "Vercel":                  "bg-gray-700",
  "Turborepo":               "bg-gray-800",
  "BigCommerce":             "bg-blue-800",
  "Shopify":                 "bg-green-500",
  "Postman":                 "bg-orange-500",
  "Twilio":                  "bg-red-500",
  "Webflow":                 "bg-blue-500",
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
          <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: "#D6ECB9" }}>
            <span className="text-3xl font-black text-gray-600">4+</span>
            <p className="text-gray-600 text-sm mt-1">Years Experience</p>
          </div>
          <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: "#FFC196" }}>
            <span className="text-3xl font-black text-gray-600">12</span>
            <p className="text-gray-600 text-sm mt-1">Projects Built</p>
          </div>
          <div className="text-center p-4 rounded-2xl" style={{ backgroundColor: "#C4BEF1" }}>
            <span className="text-3xl font-black text-gray-600">M.S.</span>
            <p className="text-gray-600 text-sm mt-1">Computer Science</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              I&apos;m a Frontend Developer with 4+ years of experience building scalable, 
              high-performance web applications. 
              I&apos;ve worked at BigCommerce contributing to composable storefronts used by 
              enterprise ecommerce brands, 
              and at Technologent integrating AI-driven chat solutions. 
              I specialize in React, Next.js, and Tailwind, and I care deeply about the 
              intersection of clean code and great user experience. 
              Currently open to new opportunities —&gt; remote preferred.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Passionate about UI/UX, bridging the gap between clean, functional code
              and intuitive user experiences that feel as good as they work.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
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
                <p className="text-gray-700 text-sm mt-0.5">Moroleón, Gto., México</p>
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
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Languages</p>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((s) => <SkillChip key={s} name={s} />)}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Frameworks & Libraries</p>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((s) => <SkillChip key={s} name={s} />)}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Styling</p>
              <div className="flex flex-wrap gap-2">
                {skills.styling.map((s) => <SkillChip key={s} name={s} />)}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Databases & Tools</p>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((s) => <SkillChip key={s} name={s} />)}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
