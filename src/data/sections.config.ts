import type { SectionMeta } from './types';
import { useTranslations } from '../utils/languageStore';

export function getSections(): SectionMeta[] {
  const t = useTranslations();
  
  return [
    {
      key: "rcp",
      title: t.sections.rcp.title,
      description: t.sections.rcp.description,
      imageUrl: "/1.webp",
      dataKey: "SECCIÓN RCP",
      icon: "heart"
    },
    {
      key: "acreditados",
      title: t.sections.acreditados.title,
      description: t.sections.acreditados.description,
      imageUrl: "/2.webp",
      dataKey: "SECCIÓN TALLERES ACREDITADOS",
      icon: "award"
    },
    {
      key: "talleres",
      title: t.sections.talleres.title,
      description: t.sections.talleres.description,
      imageUrl: "/7.webp",
      dataKey: "SECCIÓN TALLERES",
      icon: "book"
    },
    {
      key: "enfermeria",
      title: t.sections.enfermeria.title,
      description: t.sections.enfermeria.description,
      imageUrl: "/4.webp",
      dataKey: "SECCIÓN TALLERES ENFERMERÍA",
      icon: "user"
    }
  ];
}