import { FullList } from "../model/FullList";

export interface DOMList{
    ul: HTMLUListElement;
    clear(): void;
    render(fullList: FullList): void;
};

export default class ListTemplate implements DOMList{
    _ul: HTMLUListElement;
    static instance: ListTemplate = new ListTemplate();

    constructor(){
        this._ul = document.getElementById('listItems') as HTMLUListElement
    };

    clear(): void {
        this._ul.innerHTML = '';
    };

    render(fullList: FullList): void {
        this.clear();

        fullList.list.forEach(item=> {
            const newLI = document.createElement('li') as HTMLLIElement;
            newLI.className = 'item'

            const newCheckbox = document.createElement('input') as HTMLInputElement;
            newCheckbox.type = 'checkbox'
            newCheckbox.id = item.id;
            newCheckbox.checked = item.checked;
            newLI.appendChild(newCheckbox);

            newCheckbox.addEventListener('change', () => {
                item.checked = !item.checked;
                //fullList.save()
            })

            const newLabel = document.createElement('label') as HTMLLabelElement;
            newLabel.textContent = item.item
            newLabel.htmlFor =item.id 
            newLI.appendChild(newLabel);    

            const newButton = document.createElement('button') as HTMLButtonElement;
            newButton.className = 'button';
            newButton.innerHTML = 'X';
            newLI.appendChild(newButton);
            newButton.addEventListener('click', ()=>{
                fullList.removeItem(item.id);
                this.render(fullList);
            })

            
            this._ul.appendChild(newLI);
        })
    }   
}