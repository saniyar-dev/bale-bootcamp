import { itemsContainer } from "./itemContainer.js";

const setEventHandlers = (el) => {
    el.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        el.classList.add('hidden');
    });
};

const createItem = (index) => {
    const el = document.createElement('div');
    el.setAttribute('id', index);
    el.classList.add('item')

    const image = document.createElement('img');
    image.setAttribute('data-src', `https://picsum.photos/id/${index}/400/200`);

    const text = document.createElement('p');
    text.innerHTML = `Picture ${index + 1}`;

    el.appendChild(image);
    el.appendChild(text);

    itemsContainer.appendChild(el);

    setEventHandlers(el);
}

export {
    createItem,
}