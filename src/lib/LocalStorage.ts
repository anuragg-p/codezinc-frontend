import { Storage } from "./storage";

class LocalStorage extends Storage {
    set<todo>(key: string, value: todo): void {
        // Save the item to localStorage after stringifying the value
        localStorage.setItem(key, JSON.stringify(value));
    }

    get<todo>(key: string): todo | null {
        const item = localStorage.getItem(key);
        if (!item) {
            return null; // If the item doesn't exist, return null
        }

        try {
            // Parse the item and return it as the expected type
            return JSON.parse(item) as todo;
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
