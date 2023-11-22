import Container from "../components/Container";

export default function Projects() {
  return (
    <Container>
      <div class="">
        <object
          data="/isaCV2.pdf"
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
