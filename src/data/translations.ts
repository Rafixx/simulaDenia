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
        title: "Sección RCP",
        description: "Cursos de Reanimación Cardiopulmonar básica y avanzada"
      },
      acreditados: {
        title: "Talleres Acreditados",
        description: "Talleres especializados acreditados por organismos oficiales"
      },
      talleres: {
        title: "Talleres",
        description: "Talleres de formación complementaria y especializada"
      },
      enfermeria: {
        title: "Talleres Enfermería",
        description: "Formación especializada dirigida al personal de enfermería"
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
      singular: "curso",
      plural: "cursos"
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
        title: "Secció RCP",
        description: "Cursos de Reanimació Cardiopulmonar bàsica i avançada"
      },
      acreditados: {
        title: "Tallers Acreditats",
        description: "Tallers especialitzats acreditats per organismes oficials"
      },
      talleres: {
        title: "Tallers",
        description: "Tallers de formació complementària i especialitzada"
      },
      enfermeria: {
        title: "Tallers Infermeria",
        description: "Formació especialitzada dirigida al personal d'infermeria"
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
    
    noCourses: "No hi ha cursos disponibles en aquest moment.",
    courseCount: {
      singular: "curs",
      plural: "cursos"
    },
    
    courseLabels: {
      title: "Curs",
      for: "Dirigit a:",
      date: "Data:"
    }
  }
};