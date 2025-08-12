// app/project/page.js (Server Component)
import { Suspense } from "react";
import ProjectClient from "../components/ProjectClient";

export default function ProjectPage() {
  return (
    <Suspense fallback={<p>Loading projects...</p>}>
      <ProjectClient />
    </Suspense>
  );
}
