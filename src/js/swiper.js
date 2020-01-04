(() => {
    const arr_description = [
        ['akjdkal', 'ksdfsj', 'dskflkj'],
        ['jhfs', 'sa', 'sd']
    ];
    
    const arr_name_project = ['Lenoma.ru (website)', 'Five in row (game)'];
    
    const arr_link_img = ['img/logo.png', 'img/five.png'];
    
    const arr_paths = ['lenoma_project/index.html', 'five_in_row/index.html'];

    const project = document.querySelector('.project__wrap');
    const ul = document.querySelector('.example__descriptionWrap__list');
    const linkForProject = document.querySelector('.project__link__OnProject');
    const img = document.querySelector('.example__imgWrap__img');

    let startX, endX, startY, endY;
    let counter = 0;

    addAttributeForLink(arr_paths[counter], arr_name_project[counter]);
    addAttributeForImg(arr_link_img[counter], arr_name_project[counter])
    creatList(arr_description[counter], ul);

    project.addEventListener('touchstart', (event) => {
        startX = event.touches[0].pageX;
        startY = event.touches[0].pageY;        
    });

    project.addEventListener('touchend', (event) => {
        endX = event.changedTouches[0].pageX;
        endY = event.changedTouches[0].pageY;

        let resultX = parseInt((startX - endX).toFixed(0));
        let resultY = Math.abs(parseInt((startY - endY).toFixed(0)));

        if (resultY > 40 || Math.abs(resultX) < 10) return;
        
        if (resultX < 0) {
            counter++;

            if (counter > arr_name_project.length - 1) {
                counter = 0;
            }

            addAttributeForLink(arr_paths[counter], arr_name_project[counter]);
            addAttributeForImg(arr_link_img[counter], arr_name_project[counter])
            creatList(arr_description[counter], ul);

        } else {
            counter--;

            if (counter < 0) {
                counter = arr_name_project.length - 1;
            }

            addAttributeForLink(arr_paths[counter], arr_name_project[counter]);
            addAttributeForImg(arr_link_img[counter], arr_name_project[counter])
            creatList(arr_description[counter], ul);

        }


    });


    function creatList(arr, parent) {
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