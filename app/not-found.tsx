import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="accent-serif text-8xl text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">This page flew away</h1>
      <p className="mt-3 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-8 flex justify-center">
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
    </Container>
  );
}
