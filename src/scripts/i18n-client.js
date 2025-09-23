// Script del lado del cliente para manejar las traducciones dinámicas
const translations = {
  es: {
    mainTitle: "Urgències Hospital de Dénia",
    mainSubtitle: "Formación especializada para profesionales de la salud",
    siteDescription: "Formación especializada para profesionales de la salud en Urgències Hospital de Dénia",
    
    viewCoursesButton: "Ver cursos disponibles",
    enrollButton: "Inscribirme",
    
    sections: {
      rcp: {
        title: "Sección RCP",
        description: "Cursos de Reanimación Cardiopulmonar"
      },
      acreditados: {
        title: "Talleres Acreditados",
        description: "Talleres con certificación oficial"
      },
      talleres: {
        title: "Talleres Específicos",
        description: "Talleres especializados por áreas"
      },
      enfermeria: {
        title: "Enfermería",
        description: "Formación específica para profesionales de enfermería"
      },
      info: {
        title: "Información General",
        description: "Documentos y recursos informativos"
      }
    },
    
    generalInfo: {
      duration: "Duración",
      hours: "horas",
      location: "Lugar",
      requirements: "Requisitos",
      certification: "Certificación",
      contact: "Contacto"
    },
    
    noCourses: "No hay cursos disponibles en este momento.",
    
    courseCount: {
      singular: "curso",
      plural: "cursos"
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
        description: "Cursos de Reanimació Cardiopulmonar"
      },
      acreditados: {
        title: "Tallers Acreditats",
        description: "Tallers amb certificació oficial"
      },
      talleres: {
        title: "Tallers Específics",
        description: "Tallers especialitzats per àrees"
      },
      enfermeria: {
        title: "Infermeria",
        description: "Formació específica per a professionals d'infermeria"
      },
      info: {
        title: "Informació General",
        description: "Documents i recursos informatius"
      }
    },
    
    generalInfo: {
      duration: "Duració",
      hours: "hores",
      location: "Lloc",
      requirements: "Requisits",
      certification: "Certificació",
      contact: "Contacte"
    },
    
    noCourses: "No hi ha cursos disponibles en aquest moment.",
    
    courseCount: {
      singular: "curs",
      plural: "cursos"
    }
  }
};

class I18nClient {
  constructor() {
    this.currentLanguage = this.getStoredLanguage();
    this.init();
  }

  getStoredLanguage() {
    return localStorage.getItem('language') || 'es';
  }

  setLanguage(lang) {
    this.currentLanguage = lang;
    localStorage.setItem('language', lang);
    this.updateUI();
  }

  toggleLanguage() {
    const newLang = this.currentLanguage === 'es' ? 'va' : 'es';
    this.setLanguage(newLang);
  }

  getTranslation(key) {
    const keys = key.split('.');
    let value = translations[this.currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  }

  updateUI() {
    // Actualizar elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getTranslation(key);
      
      if (translation) {
        element.textContent = translation;
      }
    });

    // Actualizar elementos específicos del sidebar
    this.updateSidebar();

    // Actualizar contadores de cursos
    this.updateCourseCounts();

    // Actualizar el indicador de idioma actual
    const currentLangElement = document.getElementById('current-lang');
    if (currentLangElement) {
      currentLangElement.textContent = this.currentLanguage.toUpperCase();
    }

    // Actualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', this.getTranslation('siteDescription'));
    }

    // Actualizar title
    const titleElement = document.querySelector('title');
    if (titleElement) {
      titleElement.textContent = `Cursos de Formación - ${this.getTranslation('mainTitle')}`;
    }
  }

  updateSidebar() {
    // Actualizar títulos del sidebar
    const sidebarButtons = document.querySelectorAll('[data-section-key]');
    sidebarButtons.forEach(button => {
      const sectionKey = button.getAttribute('data-section-key');
      const titleElement = button.querySelector('.section-title');
      if (titleElement && sectionKey) {
        titleElement.textContent = this.getTranslation(`sections.${sectionKey}.title`);
      }
    });
  }

  updateCourseCounts() {
    // Actualizar contadores de cursos
    document.querySelectorAll('[data-course-count]').forEach(element => {
      const count = parseInt(element.getAttribute('data-course-count'));
      const countText = count === 1 ? this.getTranslation('courseCount.singular') : this.getTranslation('courseCount.plural');
      element.textContent = `${count} ${countText}`;
    });

    // Actualizar mensajes de "no hay cursos"
    document.querySelectorAll('[data-i18n="noCourses"]').forEach(element => {
      element.textContent = this.getTranslation('noCourses');
    });
  }

  init() {
    // Configurar el toggle button
    document.addEventListener('DOMContentLoaded', () => {
      const toggleBtn = document.getElementById('toggle-btn');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          this.toggleLanguage();
        });
      }

      // Aplicar traducciones iniciales
      this.updateUI();
    });
  }
}

// Inicializar el sistema de internacionalización
window.i18n = new I18nClient();