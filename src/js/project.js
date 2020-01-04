(() => {
    const parent = document.querySelector('.project__example');
    const imgWrap = document.querySelector('.example__imgWrap');

    parent.addEventListener('click', () => {

        if (parent.classList.contains('anim')) {
            parent.classList.toggle('anim');
            imgWrap.style.cssText = 'animation: img2 2s 1 forwards;';
        } else {
            imgWrap.style.cssText = 'animation: img1 2s 1 forwards;';
            parent.classList.toggle('anim');
        }

    });

})();