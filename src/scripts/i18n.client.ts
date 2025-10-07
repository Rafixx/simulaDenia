// Script del lado del cliente para manejar las traducciones dinámicas
// IMPORTA LAS TRADUCCIONES DESDE EL ARCHIVO CENTRALIZADO
import { translations, type Language } from '../data/translations.ts';

// Declaración para agregar i18n a window
declare global {
  interface Window {
    i18n: I18nClient;
  }
}

class I18nClient {
  private currentLanguage: Language;

  constructor() {
    this.currentLanguage = this.getStoredLanguage();
    this.init();
  }

  getStoredLanguage(): Language {
    const stored = localStorage.getItem('language');
    return (stored === 'es' || stored === 'va') ? stored : 'es';
  }

  setLanguage(lang: Language): void {
    this.currentLanguage = lang;
    localStorage.setItem('language', lang);
    this.updateUI();
  }

  toggleLanguage(): void {
    const newLang: Language = this.currentLanguage === 'es' ? 'va' : 'es';
    this.setLanguage(newLang);
  }

  getTranslation(key: string): any {
    const keys = key.split('.');
    let value: any = translations[this.currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  }

  updateUI() {
    
    // Actualizar elementos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    console.log('Elementos encontrados con data-i18n:', elements.length);
    
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (!key) return;
      const translation = this.getTranslation(key);
      
      if (translation) {
        console.log(`Traduciendo ${key}:`, translation);
        element.textContent = translation;
      }
    });

    // Actualizar las features de información general
    this.updateInfoFeatures();

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

  updateInfoFeatures() {
    const featuresContainer = document.getElementById('info-features');
    if (featuresContainer) {
      const features = this.getTranslation('generalInfo.features');
      if (Array.isArray(features)) {
        featuresContainer.innerHTML = features
          .map((feature) => `<li>${feature}</li>`)
          .join('');
      }
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
      const countStr = element.getAttribute('data-course-count');
      if (!countStr) return;
      const count = parseInt(countStr);
      const countText = count === 1 ? this.getTranslation('courseCount.singular') : this.getTranslation('courseCount.plural');
      element.textContent = `${count} ${countText}`;
    });

    // Actualizar mensajes de "no hay cursos"
    document.querySelectorAll('[data-i18n="noCourses"]').forEach(element => {
      element.textContent = this.getTranslation('noCourses');
    });
  }

  init() {
    // Si el DOM ya está listo, aplicar traducciones inmediatamente
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.updateUI();
      });
    } else {
      // DOM ya está listo, aplicar inmediatamente
      this.updateUI();
    }
  }
}

// Inicializar el sistema de internacionalización
window.i18n = new I18nClient();
