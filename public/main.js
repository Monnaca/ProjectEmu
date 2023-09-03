const firstsec = document.getElementById('section-1');
const secondsec = document.getElementById('section-2');
let lastScrollTop = 0;
window.onscroll = () => {
   let st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
      secondsec.scrollIntoView({behavior: "smooth"});
   } else {
      firstsec.scrollIntoView({behavior: "smooth"});
   }
   lastScrollTop = st <= 0 ? 0 : st; 
} 