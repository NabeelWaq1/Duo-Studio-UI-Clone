function scroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
scroll();


let cursor = document.querySelector('.cursor');
let main = document.getElementById('main');

main.addEventListener('mousemove' , (dets)=>{
cursor.style.left = dets.x + 20+ 'px';
cursor.style.top = dets.y + 20 +'px';
})

let tl = gsap.timeline({
    scrollTrigger:{
    trigger : '#page1 h1',
    scroller : '#main',
    start : 'top 32%',
    end : 'top 0%',
    scrub : 3,}
})


tl.to('#page1 h1',{
x : -100,
duration : 1, 
},'anime')
tl.to('#page1 h2',{
x : 100,
duration : 1,
},'anime')
tl.to('#page2 video',{
width : '90%',
duration : 1,
},'anime')


let tl2 = gsap.timeline({
  scrollTrigger:{
  trigger : '#page1 h1',
  scroller : '#main',
  start : 'top -132%',
  end : 'top -120%',
  scrub : 3,}
})
tl2.to('#main',{
  backgroundColor : 'white',
})



let tl3 = gsap.timeline({
  scrollTrigger:{
  trigger : '#page1 h1',
  scroller : '#main',
  start : 'bottom -450%',
  end : 'bottom -560%',
  scrub : 3,}
})
tl3.to('#main',{
  backgroundColor:'#0F0D0D',
})


let boxes = document.querySelectorAll('.box');
boxes.forEach(function(elem){
 let image = elem.getAttribute('data-image');
elem.addEventListener('mouseenter', ()=>{
 cursor.style.width = '400px';
 cursor.style.height = '300px';
cursor.style.backgroundImage = `url(${image})`;
cursor.style.borderRadius = '0';
})
elem.addEventListener('mouseleave', ()=>{
  cursor.style.width = '20px';
  cursor.style.height = '20px';
 cursor.style.backgroundImage = `none`;
 cursor.style.borderRadius = '50%';
 })
})


