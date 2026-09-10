import type { SectionMeta } from './types';
import { useTranslations } from '../utils/languageStore';

export function getSections(): SectionMeta[] {
  const t = useTranslations();
  
  return [
    {
      key: "rcp",
      title: t.sections.rcp.title,
      description: t.sections.rcp.description,
      imageUrl: "/1-original.webp",
      dataKey: "SECCIÓN RCP",
      icon: "heart",
      schedule: "laboral"
    },
    {
      key: "traumaGrave",
      title: t.sections.traumaGrave.title,
      description: t.sections.traumaGrave.description,
      imageUrl: "/10.webp",
      dataKey: "SECCIÓN TRAUMA GRAVE",
      icon: "activity",
      schedule: "laboral"
    },
    {
      key: "acreditados",
      title: t.sections.acreditados.title,
      description: t.sections.acreditados.description,
      imageUrl: "/2.webp",
      dataKey: "SECCIÓN TALLERES ACREDITADOS",
      icon: "award",
      schedule: "fueraLaboral"
    },
    {
      key: "talleres",
      title: t.sections.talleres.title,
      description: t.sections.talleres.description,
      imageUrl: "/7.webp",
      dataKey: "SECCIÓN TALLERES",
      icon: "book",
      schedule: "fueraLaboral"
    },
    {
      key: "enfermeria",
      title: t.sections.enfermeria.title,
      description: t.sections.enfermeria.description,
      imageUrl: "/8.webp",
      dataKey: "SECCIÓN TALLERES ENFERMERÍA",
      icon: "user",
      schedule: "fueraLaboral"
    },
    {
      key: "viaAereaURG",
      title: t.sections.viaAereaURG.title,
      description: t.sections.viaAereaURG.description,
      imageUrl: "/11.webp",
      dataKey: "SECCIÓN VÍA AÉREA URGENCIAS",
      icon: "wind",
      schedule: "fueraLaboral"
    }
  ];
}