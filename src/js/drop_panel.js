(() => {
   const svg = document.querySelector('.education__svg__arrow');
   const education = document.querySelector('.content__education');
   let scroll;

   window.addEventListener('scroll', function() {
      scroll = pageYOffset;
    });
   
   svg.addEventListener('click', () => {

      if (svg.classList.contains('education__svg__arrow--up')) {
         addAnimation('roll');
         document.documentElement.scrollTop = scroll;
      } else {
         addAnimation('unfold');
         document.documentElement.scrollTop = scroll;
      }

   });

   function addAnimation(nameAnim) {

      education.style.cssText = 'animation:' + ' ' + nameAnim + ' ' + '2s 1 forwards;';
      svg.classList.toggle('education__svg__arrow--up');

   }
})();