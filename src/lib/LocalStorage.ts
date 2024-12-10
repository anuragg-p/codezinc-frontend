import { Storage } from "./storage";

class LocalStorage extends Storage {
    // Save the value to localStorage as a string
    set<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // Retrieve the value from localStorage and deserialize it into the expected type
    get<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        if (!item) {
            return null; // If the item doesn't exist, return null
        }

        try {
            // Parse the item and return it as the expected type
            return JSON.parse(item) as T;
        } catch (error) {
            // In case of an error while parsing, log the error and return null
            console.error(`Error parsing value for key "${key}":`, error);
            return null;
        }
    }

    has(key: string): boolean {
        // Check if the item exists in localStorage
        return localStorage.getItem(key) !== null;
    }
}

export {LocalStorage};
