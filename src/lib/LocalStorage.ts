import { Storage } from "./storage";

class LocalStorage extends Storage {
    set<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    get<T>(key: string): T | null {
      const item = localStorage.getItem(key);
      if (!item) {
          return null; 
      }

      try {
          return JSON.parse(item) as T;
      } catch (error) {
          console.error(`Error parsing value for key "${key}":`, error);
          return null;
      }
    }

    has(key: string): boolean {
        return localStorage.getItem(key) !== null;
    }
}

export {LocalStorage};
