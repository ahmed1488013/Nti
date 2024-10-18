//  Hide and show the NavBar
let disp=document.querySelector('.header-conent .nav');
let btn=document.querySelector('.header-icon');
btn.addEventListener('click',function(){
    if(btn.classList.contains('closeit')){
        disp.style.animation=' hide 3s forwards linear'
        if(disp.style.animation==' hide 3s forwards linear'){
            disp.style.animation=null;
        }
        btn.classList.remove('closeit')
    }else{
        disp.style.display="flex";
        disp.style.animation='disp 3s forwards linear'
        btn.classList.add('closeit')
    }
})
// =======
// make the showing of the home page more smothly
window.onload=function(){
    var homeCont=document.querySelector(".home-content");
    homeCont.style.top='20%'
    homeCont.style.opacity='1'
}
// =========
// show sections when scrolling
function sectioScrolling(){
    var scrolvalue=window.scrollY;
    const mynav=document.querySelector('.header');
    mynav.style.paddingBottom="0px";
    mynav.classList.add('scrolbg');
    if(scrolvalue<=150){
        mynav.style.top="0px"
        mynav.classList.remove('scrolbg');
     }
    //  ===================
     const about=document.querySelector('.About');
     const aboutContent=document.querySelector('.about-content');
    if(window.scrollY >= about.offsetTop -600){
        aboutContent.style.top="0px";
    }
    // =================
    let theservice=document.querySelector('.Services');
    const myServiceshead=document.querySelector('.Services .section-hedear');
    const myServicescont=document.querySelector('.serv-animation');
    if(window.scrollY >= theservice.offsetTop -400){
        myServiceshead.style.top="0px";
        myServiceshead.style.opacity="1";
        myServicescont.style.top="0px";
        myServicescont.style.opacity="1";
    }
    // =======================
    const myport=document.querySelector('.Portoflio');
    const myporthead=document.querySelector('.Portoflio .container .section-hedear');
    const myportitem=document.querySelectorAll('.port-item');
    const myportrotate=document.querySelectorAll('.port-rotate');
    if(window.scrollY >= myport.offsetTop -600){
        myporthead.style.top='0px'
        myporthead.style.opacity='1';
    }
    myportitem.forEach((item)=>{
        if(window.scrollY >= item.offsetTop -600){
            myportrotate.forEach((el)=>{
                el.style.transform='rotateY(0deg)';
                el.style.opacity='1';
            })
        }
    })
    // =========================
    const mytest=document.querySelector('.Testimonial');
    const mytesthead=document.querySelector('.Testimonial .section-hedear');
    const mytestcontent=document.querySelector('.test-content');
    const mytestitem=document.querySelectorAll('.test-item');
    if(window.scrollY >= mytest.offsetTop -600){
        mytesthead.style.top="0px";
        mytesthead.style.opacity="1";
    }
    if(window.scrollY >= mytestcontent.offsetTop -600){
        mytestitem.forEach((item)=>{
            item.style.top="0px";
            item.style.opacity="1";
        })
    }
    // =============
    const myblog=document.querySelector('.blog');
    const mybloghead=document.querySelector('.blog .section-hedear');
    const myblogcontent=document.querySelector('.blog-content');
    const myblogitem=document.querySelectorAll('.blog-item');
    if(window.scrollY >= myblog.offsetTop -600){
        mybloghead.style.top="0px";
        mybloghead.style.opacity="1";
    }
    if(window.scrollY >= myblog.offsetTop){
        myblogitem.forEach((elem)=>{
                    elem.style.top="0px";
                    elem.style.opacity="1";
                })
    }
    // ==================================
    const myprice=document.querySelector('.price');
    const mypricecontent=document.querySelector('.price .price-content'); 
    const mypriceitem=document.querySelectorAll('.price .price-item'); 
    const mypriceheader=document.querySelector('.price .section-hedear');
    if(window.scrollY >= myprice.offsetTop -600){
        mypriceheader.style.top="0px";
        mypriceheader.style.opacity="1";
    }
    if(window.scrollY >= mypricecontent.offsetTop -600){
        mypriceitem.forEach((item)=>{
            item.style.top="0px";
            item.style.opacity="1";
        })
    }
    if(scrolvalue=0){
        mynav.style.top="0px"
    }
}
// ===========
// incress numbers in counter
window.onscroll=function(){
    var one=document.querySelector(".delay-one");
    var tow=document.querySelector(".delay-tow");
    var three=document.querySelector(".delay-three");
    let nums=document.querySelectorAll(".num");
    let startsection=document.querySelector(".counter");
    if(window.scrollY >= startsection.offsetTop -600){
        let started=false;
        one.style.top='0px';
        one.style.opacity='1';
        tow.style.top='0px';
        tow.style.opacity='1';
        three.style.top='0px'
        three.style.opacity='1'
        if(!started){
            nums.forEach((items)=>startCount(items))
        }
        started=true;
    }
}
function startCount(el){
    let goal=el.dataset.goal;
    let ccounter=setInterval(()=>{
            if(el.textContent == goal){
                el.textContent=goal;
                clearInterval(ccounter);
            }else{
                el.textContent++;
            }
        },2000/ goal)
    }

// =======================================
// change text daynmaicly
window.addEventListener('scroll',sectioScrolling)
let myText=document.querySelector(".text");
const myarr=["A Web Designer_","A Devolper_","I Love Designer","I Love To Develope"];
let indexele=0;
function change(){
    myText.textContent=myarr[indexele];
    indexele=(indexele+1)%myarr.length;
}
sectioScrolling();
setInterval(change,7000);
// ===================================

// upload image daynmaicly
let port=document.querySelectorAll(".port-rotate");
let imgArray=[`url(../imges/Portfolio/project-1.jpg.webp)`,
    `url(../imges/Portfolio/project-2.jpg.webp)`,
    `url(../imges/Portfolio/project-3.jpg.webp)`,
    `url(../imges/Portfolio/project-4.jpg.webp)`,
    `url(../imges/Portfolio/project-5.jpg.webp)`,
    `url(../imges/Portfolio/project-6.jpg.webp)`
]
let currentindex=0;
port.forEach((item)=>{
    item.style.backgroundImage=imgArray[currentindex];
    currentindex=(currentindex+1)%imgArray.length
})

// ====================
// upload image daynmaicly
let blog=document.querySelectorAll(".blog-box-img");
let blogimgArray=[`url(../imges/blog/image_1.jpg.webp)`,
    `url(../imges/blog/image_2.jpg.webp)`,
    `url(../imges/blog/image_3.jpg.webp)`,
    `url(../imges/blog/image_4.jpg.webp)`,
    `url(../imges/blog/image_5.jpg.webp)`,
    `url(../imges/blog/image_6.jpg.webp)`
]
let index=0;
blog.forEach((element)=>{
    element.style.backgroundImage=blogimgArray[index];
    index=(index+1)%blogimgArray.length
})
// ==============================
// mahe height of map is daynamic
var he=document.querySelector(".map-info").offsetHeight;
var map=document.querySelector(".mymap")
map.style.height=`${he}px`;
// map.style.height=he;
// ================
