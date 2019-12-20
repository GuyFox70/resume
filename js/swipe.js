(function() {
    let arr_description = [
                            ['akjdkal', 'ksdfsj', 'dskflkj'],
                            ['jhfs', 'sa', 'sd']
                        ];
    let arr_name_project = ['Five in row (game)', 'lenoma.ru'];
    let arr_link_img = ['img/five.png', 'img/lenoma.png'];

    let ul = document.querySelector('.mobile__description');
    let link = document.querySelector('.mobile__link');

    let startX, endX, startY, endY;
    let counter = 0;

    creatList(arr_description[counter], ul);
    createLinkImg(arr_link_img[counter], arr_name_project[counter], link, 'mobile__link__img');

    link.addEventListener('touchstart', (event) => {
        startX = event.touches[0].pageX;
        startY = event.touches[0].pageY;        
    });

    link.addEventListener('touchend', (event) => {
        endX = event.changedTouches[0].pageX;
        endY = event.changedTouches[0].pageY;

        let resultX = parseInt((startX - endX).toFixed(0));
        let resultY = Math.abs(parseInt((startY - endY).toFixed(0)));

        if (resultY > 40) return;
        
        if (resultX < 0) {
            counter++;

            if (counter > arr_name_project.length - 1) {
                counter = 0;
            }

            clearElements([ul, link]);

            creatList(arr_description[counter], ul);
            createLinkImg(arr_link_img[counter], arr_name_project[counter], link, 'mobile__link__img');
        } else {
            counter--;

            if (counter < 0) {
                counter = arr_name_project.length - 1;
            }

            clearElements([ul, link]);

            creatList(arr_description[counter], ul);
            createLinkImg(arr_link_img[counter], arr_name_project[counter], link, 'mobile__link__img');
        }


    });


    function creatList(arr, parent) {
        for (let elem of arr) {
            let li = document.createElement('li');
                li.innerHTML = elem;
                parent.appendChild(li);
        }
    }

    function createLinkImg(path, call, parent, elemClass) {    
        let img = document.createElement('img');
            img.src = path;
            img.alt = call;
            img.className = elemClass;
    
        parent.appendChild(img);
    }

    function clearElements(arr) {
        for (let elem of arr) {
            elem.innerHTML = '';
        }
    }
})();