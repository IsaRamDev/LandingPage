import Container from "./components/Container";
import Hero from "./section/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-black">
      <Container>
        <Hero />
      </Container>
    </main>
  );
}
