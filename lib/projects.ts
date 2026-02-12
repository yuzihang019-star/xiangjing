import projectsData from '@/content/projects.json';

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  coverImage?: string;
};

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}
