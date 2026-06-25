export type CustomTableDataType = Partial<{
  id: string;
  title: string;
  description: string;
  techStack: string;
  githubUrl: string;
  liveUrl: string;
  [key: string]: string | number | undefined;
}>;
