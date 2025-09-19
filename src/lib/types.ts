export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
}

export interface IProjectCard {
  project: IProject;
}
