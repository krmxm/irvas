const tabs = (parentSelector, tabSelector, contentSelector, activeClass) => {
    const parent = document.querySelector(parentSelector),
          tabs = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i=0) {
        content[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    parent.addEventListener('click', (e) => {
       const target = e.target;
       
       if(target && target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
        tabs.forEach((item, i) => {
            if(item === target || item === target.parentNode) {
                hideTabContent();
                showTabContent(i);
                console.log(item);
            }
        });
       }
    });
};

export default tabs;