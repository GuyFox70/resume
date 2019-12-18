(function() {
   let svg = document.querySelector('.education__svg__arrow');
   let education = document.querySelector('.content__education');
   
   svg.addEventListener('mousedown', () => {

      if (svg.classList.contains('education__svg__arrow--up')) {
         education.style.cssText = 'animation: roll 2s 1 forwards;';
      } else {
         education.style.cssText = 'animation: unfold 2s 1 forwards;';
      }
   });

   svg.addEventListener('mouseup', () => {

      if (svg.classList.contains('education__svg__arrow--up')) {
         svg.classList.remove('education__svg__arrow--up');
      } else {
         svg.classList.add('education__svg__arrow--up');
      }
   });
})();