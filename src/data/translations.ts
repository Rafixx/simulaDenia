export type Language = 'es' | 'va';

export interface Translation {
  // Header principal
  mainTitle: string;
  mainSubtitle: string;
  siteDescription: string;
  
  // Navegación y botones
  viewCoursesButton: string;
  enrollButton: string;
  
  // Secciones
  sections: {
    rcp: {
      title: string;
      description: string;
    };
    acreditados: {
      title: string;
      description: string;
    };
    talleres: {
      title: string;
      description: string;
    };
    enfermeria: {
      title: string;
      description: string;
    };
    info: {
      title: string;
      description: string;
    };
  };
  
  // Información general
  generalInfo: {
    title: string;
    welcome: string;
    features: string[];
    contact: string;
  };
  
  // Mensajes de estado
  noCourses: string;
  courseCount: {
    singular: string;
    plural: string;
  };
  
  // Labels de cursos
  courseLabels: {
    title: string;
    for: string;
    date: string;
  };
}

export const translations: Record<Language, Translation> = {
  es: {
    mainTitle: "Urgencias Hospital de Denia",
    mainSubtitle: "Formación especializada para profesionales de la salud",
    siteDescription: "Formación especializada para profesionales de la salud en Urgències Hospital de Dénia",
    
    viewCoursesButton: "Ver cursos disponibles",
    enrollButton: "Inscribirme",
    
    sections: {
      rcp: {
        title: "ENTRENAMIENTO DE EQUIPOS EN RCP",
        description: "Aprende con tu equipo la RCP con casos simulados"
      },
      acreditados: {
        title: "1ª EDICIÓN TALLERES MULTIDISCIPLINARES DE HABILIDADES EN ATENCIÓN PACIENTE GRAVE",
        description: "Aprende con tu equipo y consigue tus créditos oficiales"
      },
      talleres: {
        title: "ECOGRAFÍA EN URGENCIAS",
        description: "Mejorando nuestras competencias en ecografía"
      },
      enfermeria: {
        title: "TALLERES ESPECÍFICOS TCAEs y ENFERMERÍA",
        description: "Aprende, repasa y mejora tus técnicas de enfermería"
      },
      info: {
        title: "Información",
        description: "Información general sobre nuestros cursos y servicios"
      }
    },
    
    generalInfo: {
      title: "Información General",
      welcome: "Bienvenido a nuestra plataforma de cursos de formación médica. Ofrecemos una amplia gama de programas formativos diseñados para profesionales de la salud, desde cursos básicos de RCP hasta talleres especializados acreditados.",
      features: [
        "Formación impartida por profesionales cualificados",
        "Certificaciones oficiales reconocidas",
        "Metodología práctica y actualizada",
        "Grupos reducidos para mejor aprendizaje"
      ],
      contact: "Para más información sobre nuestros cursos, no dudes en contactarnos."
    },
    
    noCourses: "No hay cursos disponibles en este momento.",
    courseCount: {
      singular: "edición",
      plural: "ediciones"
    },
    
    courseLabels: {
      title: "Curso",
      for: "Dirigido a:",
      date: "Fecha:"
    }
  },
  
  va: {
    mainTitle: "Urgències Hospital de Dénia",
    mainSubtitle: "Formació especialitzada per a professionals de la salut",
    siteDescription: "Formació especialitzada per a professionals de la salut en Urgències Hospital de Dénia",
    
    viewCoursesButton: "Veure cursos disponibles",
    enrollButton: "Inscriure'm",
    
    sections: {
      rcp: {
        title: "ENTRENAMENT D'EQUIPS EN RCP",
        description: "Aprén amb el teu equip la RCP amb casos simulats"
      },
      acreditados: {
        title: "1a EDICIÓ TALLERS MULTIDISCIPLINARS D'HABILITATS EN ATENCIÓ PACIENT GREU",
        description: "Aprén amb el teu equip i aconseguix els teus crèdits oficials"
      },
      talleres: {
        title: "ECOGRAFIA EN URGÈNCIES",
        description: "Millorant les nostres competències en ecografia"
      },
      enfermeria: {
        title: "TALLERS ESPECÍFICS TCAEs i INFERMERIA",
        description: "Aprén, repassa i millora les teues tècniques d'infermeria"
      },
      info: {
        title: "Informació",
        description: "Informació general sobre els nostres cursos i serveis"
      }
    },
    
    generalInfo: {
      title: "Informació General",
      welcome: "Benvingut a la nostra plataforma de cursos de formació mèdica. Oferim una àmplia gamma de programes formatius dissenyats per a professionals de la salut, des de cursos bàsics de RCP fins a tallers especialitzats acreditats.",
      features: [
        "Formació impartida per professionals qualificats",
        "Certificacions oficials reconegudes",
        "Metodologia pràctica i actualitzada",
        "Grups reduïts per a millor aprenentatge"
      ],
      contact: "Per a més informació sobre els nostres cursos, no dubtes en contactar-nos."
    },
    
    noCourses: "No hi ha cursos disponibles en este moment.",
    courseCount: {
      singular: "edició",
      plural: "edicions"
    },
    
    courseLabels: {
      title: "Curs",
      for: "Dirigit a:",
      date: "Data:"
    }
  }
};