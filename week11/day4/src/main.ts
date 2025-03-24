import { FullList } from './model/FullList';
import ListItem from './model/ListItem';
import ListTemplate from './view/ListTemplates';
import {v4 as uuidv4} from 'uuid';

const initApp = (): void => {
    const fullList = FullList.instance;
    const template = ListTemplate.instance;

    const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement;
    itemEntryForm.addEventListener('submit', (e: SubmitEvent): void => {
        e.preventDefault();
        const input = document.getElementById('newItem') as HTMLInputElement;
        const inputValue: string = input.value.trim();
        if(!inputValue) return;

        const newItem = new ListItem( uuidv4(), inputValue);
        fullList.addItem(newItem);
        template.render(fullList);
    });

    const clearButton = document.getElementById('clearItemsButton') as HTMLButtonElement;
    clearButton.addEventListener('click', () => {
        fullList.clearList();
        template.clear();
    });
    fullList.load()
    template.render(fullList);

};

document.addEventListener('DOMContentLoaded', initApp);