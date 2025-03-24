export interface Item {
    id: string,
    item: string,
    checked: boolean;
};

export default class ListItem implements Item{
    private _id: string;
    private _item: string;
    private _checked: boolean;
    constructor(id: string, item: string, checked: boolean = false){
        this._id = id;
        this._item = item;
        this._checked = checked
    };

    get id(): string {
        return this._id;
    };

    get item(): string {
        return this._item;
    };

    get checked(): boolean {
        return this._checked;
    };

    set id(id: string){
        this._id = id
    };

    set item(item: string){
        this._item = item
    };

    set checked(checked: boolean){
        this._checked = checked
    };

    public serialize(): Item {
        return {
          id: this._id,
          item: this._item,
          checked: this._checked,
        };
      }
    
    // Deserialize method (static method to create an instance from an object)
    public static deserialize(data: Item): ListItem {
    return new ListItem(data.id, data.item, data.checked);
    }
}

