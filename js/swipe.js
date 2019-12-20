(function() {

    let ul = document.querySelector('.mobile__description');
    let link = document.querySelector('.mobile__link');
    let img = document.querySelector('.mobile__link__img');

    let startX, endX, startY, endY;
    let counter = 0;

    link.href = arr_paths[counter];
    img.src = arr_link_img[counter];
    img.alt = arr_name_project[counter];

    creatList(arr_description[counter], ul);

    link.addEventListener('touchstart', (event) => {
        startX = event.touches[0].pageX;
        startY = event.touches[0].pageY;        
    });

    link.addEventListener('touchend', (event) => {
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

            ul.innerHTML = '';
            
            link.href = arr_paths[counter];
            img.src = arr_link_img[counter];
            img.alt = arr_name_project[counter];

            creatList(arr_description[counter], ul);

        } else {
            counter--;

            if (counter < 0) {
                counter = arr_name_project.length - 1;
            }

            ul.innerHTML = '';

            link.href = arr_paths[counter];
            img.src = arr_link_img[counter];
            img.alt = arr_name_project[counter];

            creatList(arr_description[counter], ul);

        }


    });


    function creatList(arr, parent) {
        for (let elem of arr) {
            let li = document.createElement('li');
                li.innerHTML = elem;
                parent.appendChild(li);
        }
    }
})();