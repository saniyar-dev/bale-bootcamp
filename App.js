import { addButton, setEventHandlers as addButtonSetup } from "./components/Buttons/addButton.js";
import { createItems, itemsContainer } from "./components/items/itemContainer.js"

const startNum = 50;

const createApp = (root) => {
    // add items container with js:
    root.appendChild(itemsContainer)

    // add button with js:
    root.appendChild(addButton);
    addButtonSetup();

    // add items with js:
    createItems(startNum);
}

export {
    createApp,
}