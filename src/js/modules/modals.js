import calcScroll from "./calcScroll";

const modals = () => {

    let scroll = calcScroll();
    
    function openModal(selector) {
        selector.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    }

    function closeModal(selector) {
        selector.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    }

    function bindModal(trigerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(trigerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('data-modal');

              trigger.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();

                    windows.forEach(item => {
                        closeModal(item);
                    });

                    openModal(modal);
                });
              });

              close.addEventListener('click', () => {
                windows.forEach(item => {
                    closeModal(item);
                });
                closeModal(modal);
              });

              modal.addEventListener('click', (e) => {
                if(e.target === modal) {
                    windows.forEach(item => {
                        closeModal(item);
                    });
                    closeModal(modal);
                }
              });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            const modal = document.querySelector(selector);
            openModal(modal);
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000);

};

export default modals;