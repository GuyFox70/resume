(() => {
    const arr_description = [
        ['akjdkal', 'ksdfsj', 'dskflkj'],
        ['jhfs', 'sa', 'sd']
    ];
    
    const arr_name_project = ['Lenoma.ru (website)', 'Five in row (game)'];
    
    const arr_link_img = ['img/logo.png', 'img/five.png'];
    
    const arr_paths = ['lenoma_project/index.html', 'five_in_row/index.html'];

    const projectWrap = document.querySelector('.project__wrap');
    const arrows = document.querySelectorAll('.project__wrap__arrowLeft, .project__wrap__arrowRight');
    const linkForProject = document.querySelector('.project__link__OnProject');
    const img = document.querySelector('.example__imgWrap__img');
    const list = document.querySelector('.example__descriptionWrap__list');
    let count = 0;
    let size = window.innerWidth;

    addAttributeForImg(arr_link_img[count], arr_name_project[count])
    addAttributeForLink(arr_paths[count], arr_name_project[count]);
    createList(arr_description[count], list);

    window.addEventListener('resize', () => {
        size = window.innerWidth;
    });

    projectWrap.addEventListener('mouseover', () => {
        if (size < 1024) return;

        for (let elem of arrows) {
            elem.classList.remove('project__wrap__arrow--hide');
        }
    });

    projectWrap.addEventListener('mouseout', () => {
        if (size < 1024) return;
        
        for (let elem of arrows) {
            elem.classList.add('project__wrap__arrow--hide');
        }
    });

    for (let elem of arrows) {
        elem.addEventListener('click', slider);
    }

    function slider() {
        if (this.dataset.dir == 'right') {
            count++;

            if (count > arr_link_img.length - 1) count = 0;

            addAttributeForImg(arr_link_img[count], arr_name_project[count])
            addAttributeForLink(arr_paths[count], arr_name_project[count]);
            createList(arr_description[count], list);
        } else {
            count--;

            if (count < 0) count = arr_link_img.length - 1;

            addAttributeForImg(arr_link_img[count], arr_name_project[count])
            addAttributeForLink(arr_paths[count], arr_name_project[count]);
            createList(arr_description[count], list);
        }
    }

    function createList(arr, parent) {
        parent.innerHTML = '';

        for (let elem of arr) {
            let li = document.createElement('li');
                li.innerHTML = elem;
            parent.appendChild(li);
        }
    }

    function addAttributeForLink(href, text) {
        linkForProject.setAttribute('href', href);
        linkForProject.innerHTML = text;
    }

    function addAttributeForImg(src, alt) {
        img.setAttribute('src', src);
        img.setAttribute('alt', alt);
    }
})();