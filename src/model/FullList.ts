import ListItem from "./listItems";

interface List {
    list: ListItem;
    load(): void;
    save(): void;
    clearList(): void;
    addItem(itemObj: ListItem): void;
    removeItem(id: string): void;
}