let parentSvg = document.querySelector('.education__svg');
let svg = parentSvg.querySelector('.education__svg__arrow');
let education = document.querySelector('.content__education');

parentSvg.addEventListener('mousedown', () => {

   if (svg.classList.contains('education__svg__arrow--up')) {
      education.style.cssText = 'animation: roll 2s 1 forwards;';
   } else {
      education.style.cssText = 'animation: unfold 2s 1 forwards;';
   }
});

parentSvg.addEventListener('mouseup', () => {

     if (svg.classList.contains('education__svg__arrow--up')) {
        svg.classList.remove('education__svg__arrow--up');
     } else {
        svg.classList.add('education__svg__arrow--up');
     }
});