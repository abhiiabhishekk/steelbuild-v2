import Container from "@/components/layout/Container";
import StoryImage from "./StoryImage";
import StoryContent from "./StoryContent";

export default function CompanyStory() {
  return (
    
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Effects */}

      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary-blue/5 blur-3xl" />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <StoryImage />

          <StoryContent />
        </div>
      </Container>
    </section>
  );
}