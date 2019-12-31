(() => {

    let svg = document.querySelector('.mobile__svg');
    let ul = document.querySelector('.mobile__description');
    let link = document.querySelector('.mobile__link');

    svg.addEventListener('touchend', (event) => {
        if (svg.classList.contains('mobile__svg--black')) {

            svg.classList.remove('mobile__svg--black');
            svg.classList.add('mobile__svg--white');

            link.classList.add('elem--hidden');
            ul.classList.remove('elem--hidden');

        } else {

            svg.classList.add('mobile__svg--black');
            svg.classList.remove('mobile__svg--white');

            link.classList.remove('elem--hidden');
            ul.classList.add('elem--hidden');

        }
    });
})();