import type { Language, Translation } from '../data/translations';
import { translations } from '../data/translations';

// Store simple para el idioma usando localStorage
class LanguageStore {
  private currentLanguage: Language = 'es';
  private listeners: Set<(lang: Language) => void> = new Set();

  constructor() {
    // Intentar cargar el idioma desde localStorage si estamos en el browser
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved && (saved === 'es' || saved === 'va')) {
        this.currentLanguage = saved;
      }
    }
  }

  getLanguage(): Language {
    return this.currentLanguage;
  }

  setLanguage(lang: Language): void {
    this.currentLanguage = lang;
    
    // Guardar en localStorage si estamos en el browser
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
    
    // Notificar a los listeners
    this.listeners.forEach(listener => listener(lang));
  }

  getTranslations(): Translation {
    return translations[this.currentLanguage];
  }

  toggleLanguage(): void {
    const newLang: Language = this.currentLanguage === 'es' ? 'va' : 'es';
    this.setLanguage(newLang);
  }

  subscribe(listener: (lang: Language) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

// Singleton instance
export const languageStore = new LanguageStore();

// Helper function para componentes
export function useTranslations(): Translation {
  return languageStore.getTranslations();
}

// Helper function para obtener el idioma actual
export function getCurrentLanguage(): Language {
  return languageStore.getLanguage();
}