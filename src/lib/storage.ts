abstract class Storage {
    abstract set<todo>(key: string, value: todo): void;
    abstract get<todo>(key: string): todo | null;
    abstract has(key: string): boolean;
}
export { Storage };
