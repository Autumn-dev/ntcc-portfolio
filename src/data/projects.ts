export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  slug: string;
};
export const projects: Project[] = [
  {
    title: "WAM",
    description:
      "A web application that allows users to create and share their own music.",
    imageUrl: "/wam.png",
    imageAlt: "WAM Project Image",
    slug: "wam",
  },
  {
    title: "Project 2",
    description: "Another exciting project.",
    imageUrl: "/project2.png",
    imageAlt: "Project 2 Image",
    slug: "project2",
  },
];
