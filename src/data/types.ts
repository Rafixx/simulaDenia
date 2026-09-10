export type CourseItem = {
  Title: string;
  For: string;
  Date: string;   // NO parsees a Date, render literal
  Link: string;
};

export type SectionFlat = {
  Descripción: string;
  cursos: CourseItem[];
};

export type SectionWithGroups = {
  Descripción: string;
  [key: string]: CourseItem[] | string;
};

export type CoursesData = {
  "SECCIÓN RCP": SectionFlat;
  "SECCIÓN TRAUMA GRAVE": SectionWithGroups;
  "SECCIÓN TALLERES ACREDITADOS": SectionWithGroups;
  "SECCIÓN TALLERES": SectionFlat;
  "SECCIÓN TALLERES ENFERMERÍA": SectionWithGroups;
  "SECCIÓN VÍA AÉREA URGENCIAS": SectionWithGroups;
};

export type SectionMeta = {
  key: "rcp" | "traumaGrave" | "acreditados" | "talleres" | "enfermeria" | "viaAereaURG" | "info";
  title: string;
  description: string;
  imageUrl: string;
  dataKey?: keyof CoursesData; // ausente en "info"
  icon: string; // nombre del icono lucide o id de SVG inline
};