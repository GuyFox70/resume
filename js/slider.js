(function () {
    let arr_description = [
                            ['akjdkal', 'ksdfsj', 'dskflkj'],
                            ['jhfs', 'sa', 'sd']
                        ];
    let arr_name_project = ['Five in row (game)', 'lenoma.ru'];
    let arr_link_img = ['img/five.png', 'img/lenoma.png'];

    let description_heading = document.querySelector('.description__about__heading');
    let ul = document.querySelector('.description__about__list');
    let link = document.querySelector('.description__link');

    let arrow_left = document.querySelector('.project__slider__leftArrow');
    let arrow_right = document.querySelector('.project__slider__rightArrow');
    let counter = 0;

    addTextHeading(arr_name_project[counter]);
    creatList(arr_description[counter]);
    createLinkImg(arr_link_img[counter], counter);

    arrow_left.addEventListener('mousedown', () => {
        arrow_left.firstElementChild.classList.remove('project__slider__leftArrow--up');
        arrow_left.firstElementChild.classList.add('project__slider__leftArrow--down');              
    });
  
    arrow_left.addEventListener('mouseup', () => {
        arrow_left.firstElementChild.classList.remove('project__slider__leftArrow--down'); 
        arrow_left.firstElementChild.classList.add('project__slider__leftArrow--up');

        if (document.documentElement.clientWidth > 800) {
            counter++;
            
            if (counter > arr_link_img.length - 1) {
                counter = 0;
            }
        
            clearElements([description_heading, ul, link]);
            
            addTextHeading(arr_name_project[counter]);
            creatList(arr_description[counter]);
            createLinkImg(arr_link_img[counter], counter);
        }
                
    });



    arrow_right.addEventListener('mousedown', () => {
        arrow_right.firstElementChild.classList.remove('project__slider__rightArrow--up');
        arrow_right.firstElementChild.classList.add('project__slider__rightArrow--down');              
    });
  
    arrow_right.addEventListener('mouseup', () => {
        arrow_right.firstElementChild.classList.remove('project__slider__rightArrow--down'); 
        arrow_right.firstElementChild.classList.add('project__slider__rightArrow--up');

        if (document.documentElement.clientWidth > 800) {
            counter--;
            
            if (counter < 0) {
                counter = arr_link_img.length - 1;
            }
            
            clearElements([description_heading, ul, link]);
            
            addTextHeading(arr_name_project[counter]);
            creatList(arr_description[counter]);
            createLinkImg(arr_link_img[counter], counter);
        }
                
    });







    function creatList(arr) {
        for (let elem of arr) {
            let li = document.createElement('li');
                li.innerHTML = elem;
                ul.appendChild(li);
        }
    }

    function addTextHeading(text) {
        description_heading.innerHTML = text;
    }

    function createLinkImg(path, counter) {    
        let img = document.createElement('img');
            img.src = path;
            img.alt = arr_name_project[counter];
            img.className = 'description__link__img';
    
        link.appendChild(img);
    }

    function clearElements(arr) {
        for (let elem of arr) {
            elem.innerHTML = '';
        }
    }
    
})();