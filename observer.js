import { itemsContainer } from "./components/items/itemContainer.js";

let imageObserver = null;
document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    lazyloadImages = itemsContainer.childNodes;
    imageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
        var image = entry.target;
        image.src = image.dataset.src;
        imageObserver.unobserve(image);
        }
    });
    });

    lazyloadImages.forEach(function(image) {
        imageObserver.observe(image.firstChild);
    });
})

const addObserver = (image) => {
    imageObserver.observe(image.firstChild)
}

export {
    addObserver,
}
