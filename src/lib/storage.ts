abstract class Storage {
    abstract set<T>(key: string, value: T): void;
    abstract get<T>(key: string): T | null;
    abstract has(key: string): boolean;
}
export { Storage };
