/* Add custom Js styles below */ 
document.addEventListener("DOMContentLoaded", function() {
   const header = document.querySelector("body.index header.store-header");
if (header) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("video-wrapper");

    const video = document.createElement("video");
    video.classList.add("custom-video");
    video.src = "https://raw.githubusercontent.com/Alzohari/video/main/IMG_3267.mp4"; // رابط مباشر
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    wrapper.appendChild(video);

    header.parentNode.insertBefore(wrapper, header.nextSibling);
}




});
document.addEventListener('DOMContentLoaded', function() {
    let logo = document.querySelector('.navbar-brand');
    let footerBox = document.querySelector('footer > div.store-footer__inner > div > div.lg\\:col-span-2.rtl\\:lg\\:pl-20.ltr\\:lg\\:pr-20 a.flex.items-center.m-0');

    if (logo && footerBox) {
        // تصغير h3
        let h3 = footerBox.querySelector('a > h3');
        if (h3)
            h3.style.fontSize = '0';

        // نسخ الشعار
        let clone = logo.cloneNode(true);
        footerBox.appendChild(clone);
    }

    console.log(logo);
    console.log(footerBox);
});
document.addEventListener('DOMContentLoaded', function() {
  // إنشاء عنصر جديد يحتوي على النجوم
const starsContainer = document.createElement('div');
starsContainer.classList.add('startall');
starsContainer.innerHTML = `
  <div class="star lg"></div>
  <div class="star"></div>
  <div class="star sm"></div>
  <div class="star"></div>
  <div class="star lg"></div>
  <div class="star sm"></div>
  <div class="star"></div>
  <div class="star"></div>
  <div class="star sm"></div>
  <div class="star"></div>
  <div class="star lg"></div>
  <div class="star sm"></div>



<style>
  /* خلفية السماء */
  :root { --h: 100vh; }
  html,body{height:100%;}
  /*body{
    margin:0;
    height:var(--h);
    background:
      radial-gradient(1200px 200px at 50% 105%, rgba(120,0,120,.15), transparent 60%),
      linear-gradient(#0f0f10 0%, #000 35%, #000 100%);
    overflow:hidden;
  }
*/
  /* مكوّن النجمة */
  .star{
    position:absolute;
    width:18px;               /* حجم النجمة */
    height:18px;
    pointer-events:none;
    animation: twinkle 2.4s ease-in-out infinite alternate;
  }
  /* وهج مركزي دائري */
  .star{
    background:
      radial-gradient(circle at 50% 50%,
        rgba(255,255,255,.95) 0 3px,
        rgba(255,255,255,.45) 4px,
        transparent 8px);
    filter: drop-shadow(0 0 6px rgba(255,255,255,.65));
  }
  /* أشعة ✦ بنهايات متدرجة (ليست مربعة) */
  .star::before,
  .star::after{
    content:"";
    position:absolute;
    top:50%; left:50%;
    width:42px;               /* طول الشعاع */
    height:3px;               /* سماكة الشعاع */
    transform-origin:center;
    /* تدرّج من شفاف -> أبيض -> شفاف ليظهر الطرف مدبّب */
    background: linear-gradient(90deg,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,.9) 50%,
      rgba(255,255,255,0) 100%);
    filter: blur(.4px);
  }
  .star::before{ transform: translate(-50%,-50%) rotate(45deg); }
  .star::after { transform: translate(-50%,-50%) rotate(-45deg); }

  /* تلألؤ لطيف + نبض بسيط */
  @keyframes twinkle{
    0%   { opacity:.35; transform: scale(.85) translateY(0); }
    100% { opacity:1;   transform: scale(1.15) translateY(-2px); }
  }

  /* أحجام إضافية لبعض النجوم للتنوع */
  .sm{ width:12px; height:12px; }
  .sm::before,.sm::after{ width:30px; height:2px; }
  .lg{ width:24px; height:24px; }
  .lg::before,.lg::after{ width:54px; height:3.5px; }

  /* أماكن النجوم + تفاوت السرعة */
  .star:nth-child(1){ top:10%;  left:5%; animation-duration:2s;   }
  .star:nth-child(2){ top:12%; left:72%; animation-duration:2.6s; }
  .star:nth-child(3){ top:22%; left:50%; animation-duration:2.2s; }
  .star:nth-child(4){ top:33%; left:28%; animation-duration:2.8s; }
  .star:nth-child(5){ top:40%; left:82%; animation-duration:2.3s; }
  .star:nth-child(6){ top:58%; left:12%; animation-duration:2.7s; }
  .star:nth-child(7){ top:66%; left:38%; animation-duration:2.1s; }
  .star:nth-child(8){ top:73%; left:89%; animation-duration:2.9s; }
  .star:nth-child(9){ top:15%; left:90%; animation-duration:2.4s; }
  .star:nth-child(10){top:82%; left:9%;  animation-duration:3.1s; }
  .star:nth-child(11){top:8%;  left:42%; animation-duration:2.3s; }
  .star:nth-child(12){top:48%; left:6%;  animation-duration:2.6s; }
  salla-products-list{position: relative;} 
   .startall {width: 100%;
    height: 100%;
    position: absolute;    left: 0;
    right: 0;}
  .startall div{position:absolute;z-index:2;}
</style>
`;

// تحديد عنصر salla-products-list
const productsList = document.querySelector('salla-products-list');

// التأكد من وجود العنصر ثم إدخال النجوم قبله
if (productsList) {
  productsList.parentNode.insertBefore(starsContainer, productsList);
}

});