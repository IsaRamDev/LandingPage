import Container from "../components/Container";

export default function Projects() {
  return (
    <Container>
      <div>
      <a class="text-black text-2xl flex justify-center font-bold lg:hidden " href="/isaCV2026.pdf">Download Resume in PDF</a>
        <object
          data="/isaCV2026.pdf"
          type="application/pdf"
          class="min-h-[calc(100vh-2.5rem)]"
          style={{ height: "100%", width: "100%" }}
          width="100%"
          height="auto"
        />
      </div>
    </Container>
  );
}
