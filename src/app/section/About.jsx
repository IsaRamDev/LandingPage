function About() {
  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-rose-400  mb-8">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <p className="mb-6">
              Hello, I'm Isabel Ramirez. I've always had a passion for
              technology and creativity. As a full-stack developer, I've had the
              opportunity to work on several innovative projects and to
              collaborate with exceptional developers and designers.
            </p>
            <p>
              When I'm not coding, I love to indulge in my love for cats, and
              explore the latest trends in front-end design and innovation. I
              believe in creating technology that is user-friendly, intuitive,
              and visually appealing.
            </p>
          </div>
          {/* Image Section (Optional based on design) */}
          <div className="animate-fade-right">
            <img
              src="/cat.jpeg"
              alt="Isabel working"
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
