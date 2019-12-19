(function() {
    let arr_description = [
                            ['akjdkal', 'ksdfsj', 'dskflkj'],
                            ['jhfs', 'sa', 'sd']
                        ];
    let arr_name_project = ['Five in row (game)', 'lenoma.ru'];
    let arr_link_img = ['img/five.png', 'img/lenoma.png'];

    let ul = document.querySelector('.mobile__description');
    let link = document.querySelector('.mobile__link');
    let counter = 0;

    creatList(arr_description[counter], ul);
    createLinkImg(arr_link_img[counter], arr_name_project[counter], link, 'mobile__link__img');


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
})();