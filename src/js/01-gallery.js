import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryItemsMarkup = galleryItems.reduce(
    (acc, { preview, original, description }) =>
    acc +
    `<li class="gallery__item">
            <a class="gallery__link" href="${original}">          
            <img class="gallery__image"
            src="${preview}"            
            alt="${description}"/>     
            </a>
    </li>`, ``
);
gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
gallery.addEventListener(`click`, onGalleryClick);
function onGalleryClick(event) {
    event.preventDefault();
    const target = event.target;
    if (target.nodeName !== `IMG`) {
    return;
    }

    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,    
    });
    lightbox.open();
}
// console.log(galleryItems);
