(function () {
    
    let description_heading = document.querySelector('.description__about__heading');
    let ul = document.querySelector('.description__about__list');
    let link = document.querySelector('.description__link');
    let img = document.querySelector('.description__link__img');

    let arrow_left = document.querySelector('.project__slider__leftArrow');
    let arrow_right = document.querySelector('.project__slider__rightArrow');
    let counter = 0;

    link.href = arr_paths[counter];
    img.src = arr_link_img[counter];
    img.alt = arr_name_project[counter];

    addTextHeading(arr_name_project[counter]);
    creatList(arr_description[counter], ul);

    arrow_left.addEventListener('mousedown', () => {
        arrow_left.firstElementChild.classList.remove('project__slider__leftArrow--up');
        arrow_left.firstElementChild.classList.add('project__slider__leftArrow--down');              
    });
  
    arrow_left.addEventListener('mouseup', () => {
        arrow_left.firstElementChild.classList.remove('project__slider__leftArrow--down'); 
        arrow_left.firstElementChild.classList.add('project__slider__leftArrow--up');

        counter++;
            
        if (counter > arr_link_img.length - 1) {
            counter = 0;
        }
        
        clearElements([description_heading, ul]);

        link.href = arr_paths[counter];
        img.src = arr_link_img[counter];
        img.alt = arr_name_project[counter];
            
        addTextHeading(arr_name_project[counter]);
        creatList(arr_description[counter], ul);
                
    });



    arrow_right.addEventListener('mousedown', () => {
        arrow_right.firstElementChild.classList.remove('project__slider__rightArrow--up');
        arrow_right.firstElementChild.classList.add('project__slider__rightArrow--down');              
    });
  
    arrow_right.addEventListener('mouseup', () => {
        arrow_right.firstElementChild.classList.remove('project__slider__rightArrow--down'); 
        arrow_right.firstElementChild.classList.add('project__slider__rightArrow--up');

        counter--;
            
        if (counter < 0) {
            counter = arr_link_img.length - 1;
        }
            
        clearElements([description_heading, ul]);

        link.href = arr_paths[counter];
        img.src = arr_link_img[counter];
        img.alt = arr_name_project[counter];
            
        addTextHeading(arr_name_project[counter]);
        creatList(arr_description[counter], ul);
                
    });






    function creatList(arr, parent) {
        for (let elem of arr) {
            let li = document.createElement('li');
                li.innerHTML = elem;
                parent.appendChild(li);
        }
    }

    function addTextHeading(text) {
        description_heading.innerHTML = text;
    }

    function clearElements(arr) {
        for (let elem of arr) {
            elem.innerHTML = '';
        }
    }
    
})();