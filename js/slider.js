(function () {
    let arrDescription = ['akjdkal', 'ksdfsj', 'dskflkj'];
    let arrNameProject = ['Five in row (game)'];

    let descriptionHeading = document.querySelector('.description__about__heading');
    let ul = document.querySelector('.description__about__list');
    
    for (let elem of arrDescription) {
        let li = document.createElement('li');
            li.innerHTML = elem;
            ul.appendChild(li);
    }

    descriptionHeading.innerHTML = arrNameProject[0];
})();