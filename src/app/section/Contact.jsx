import myData from "../constants/data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 border-t border-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-block bg-rose-400 text-white text-xs font-bold px-4 py-2.5 rounded-full uppercase tracking-widest mb-10">
          Available for work
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Let&apos;s Work Together
        </h2>
        <p className="text-gray-500 mb-10 text-base leading-relaxed">
          Open to full-time roles, freelance projects, and collaborations.
          <br className="hidden md:block" />
          If you have something in mind, let&apos;s talk.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${myData.email}`}
            className="flex items-center justify-center gap-2 bg-rose-200 hover:bg-rose-400 text-gray-800 font-bold px-6 py-3 rounded-xl transition-colors"
          >
            <HiMail className="text-xl" />
            Send an Email
          </a>
          <a
            href={myData.socialLinks.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-rose-400 text-gray-700 hover:text-rose-400 font-bold px-6 py-3 rounded-xl transition-colors"
          >
            <BsLinkedin className="text-xl" />
            LinkedIn
          </a>
          <a
            href={myData.socialLinks.Github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-rose-400 text-gray-700 hover:text-rose-400 font-bold px-6 py-3 rounded-xl transition-colors"
          >
            <BsGithub className="text-xl" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
