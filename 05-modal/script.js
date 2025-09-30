'use strict';

// modal element
const modalEl = document.querySelector ('.modal');

// overlay modal
const overlayEl = document.querySelector('.overlay');

// close modal
const btnCloseModalEl = document.querySelector('.close-modal');

// open modal
const btnsOpenModalEl = document.querySelector('.show-modal');

console.log('Open buttons: ', btnsOpenModalEl.length);

const openModal = function () {
    // remove hidded classname modal
    modalEl.classList.remove('hidden');

    //remove the hidded keyword classname in overlay
    overlayEl.classList.remove('hidden');

    modalEl.focus();
    lastFocusedButton = document.activeElement;
};

let lastFocusedButton = null;
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

const closeModal = function () {
    modalEl.classList.add('hidden');

    overlayEl.classList.add('hidden');
    if(lastFocusedButton){
        lastFocusedButton.focus();
    }
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
if(e.key === 'Escape' && ! modalEl.classList.contains('hidden')) {
    closeModal();
}   
});

modalEl.setAttritube('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');

btnCloseModalEl.setAttribute('aria-label', 'Close-modal');

