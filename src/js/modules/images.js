import calcScroll from "./calcScroll";

const images = () => {
    const popupImg = document.createElement('div');
    const parentImg = document.querySelector('.works');
    const bigImg = document.createElement('img'),
    scroll = calcScroll();

    popupImg.classList.add('popup');
    parentImg.appendChild(popupImg);

    popupImg.style.justifyContent = 'center';
    popupImg.style.alignContent = 'center';
    popupImg.style.display = 'none';

    popupImg.appendChild(bigImg);

    parentImg.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if(target && target.classList.contains('preview')) {
            popupImg.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }

        if(target && target.classList.contains('popup')) {
            popupImg.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });
};

export default images;