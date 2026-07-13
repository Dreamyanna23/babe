
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (playing) {

        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";
        playing = false;

    } else {

        music.play();
        musicBtn.innerHTML = "⏸ Pause Music";
        playing = true;

    }

});
const sections = document.querySelectorAll(".section");

const revealSection = () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 120){

            section.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);



// ========================================
// Photo Lightbox
// ========================================

const photos = document.querySelectorAll(".photo img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        lightbox.classList.add("active");
        lightboxImg.src = photo.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e)=>{

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});



// ========================================
// Gift Surprise
// ========================================

const gift = document.getElementById("giftBox");
const message = document.getElementById("message");

gift.addEventListener("click", ()=>{

    gift.innerHTML = "💖";
    gift.style.animation = "none";

    message.classList.add("show");

    createConfetti();

});



// ========================================
// Floating Hearts Explosion
// ========================================

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.bottom = "-40px";
    heart.style.fontSize = (20 + Math.random()*30) + "px";
    heart.style.color = "#ff6b9a";
    heart.style.opacity = "0.9";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let position = -40;

    const speed = 2 + Math.random()*3;

    const interval = setInterval(()=>{

        position += speed;

        heart.style.bottom = position + "px";

        heart.style.transform =
            `translateX(${Math.sin(position/40)*30}px)
             rotate(${position}deg)`;

        heart.style.opacity = 1 - position/900;

        if(position > window.innerHeight + 100){

            clearInterval(interval);
            heart.remove();

        }

    },20);

}



// ========================================
// Create Hearts after opening gift
// ========================================

function startHeartExplosion(){

    let count = 0;

    const timer = setInterval(()=>{

        createHeart();

        count++;

        if(count > 80){

            clearInterval(timer);

        }

    },120);

}



// ========================================
// Simple Confetti
// ========================================

function createConfetti(){

    startHeartExplosion();

    for(let i=0;i<150;i++){

        const confetti = document.createElement("span");

        confetti.style.position="fixed";
        confetti.style.top="-20px";
        confetti.style.left=Math.random()*100+"vw";

        confetti.style.width="8px";
        confetti.style.height="14px";

        confetti.style.background=
        randomColor();

        confetti.style.opacity=".9";

        confetti.style.pointerEvents="none";

        confetti.style.zIndex="999";

        document.body.appendChild(confetti);

        let top=-20;

        let rotate=0;

        const speed=2+Math.random()*5;

        const drift=Math.random()*4-2;

        const fall=setInterval(()=>{

            top+=speed;

            rotate+=8;

            confetti.style.top=top+"px";

            confetti.style.left=
            parseFloat(confetti.style.left)+drift+"px";

            confetti.style.transform=
            `rotate(${rotate}deg)`;

            if(top>window.innerHeight+30){

                clearInterval(fall);

                confetti.remove();

            }

        },20);

    }

}



// ========================================
// Confetti Colors
// ========================================

function randomColor(){

    const colors=[

        "#ff6b9a",
        "#ffd166",
        "#ffffff",
        "#ff8ec5",
        "#ffc2d9",
        "#ffe082"

    ];

    return colors[
        Math.floor(Math.random()*colors.length)
    ];

}



// ========================================
// Smooth Button Ripple
// ========================================

const button = document.querySelector(".btn");

button.addEventListener("mousemove",(e)=>{

    const x = e.offsetX;
    const y = e.offsetY;

    button.style.background =
    `radial-gradient(circle at ${x}px ${y}px,
    #ffb3ce,
    #ff5f95)`;

});

button.addEventListener("mouseleave",()=>{

    button.style.background =
    "linear-gradient(135deg,#ff7aa2,#ff5f95)";

});



// ========================================
// Hero Text Fade
// ========================================

window.addEventListener("load",()=>{

    document.querySelector(".hero-content").style.opacity="0";

    setTimeout(()=>{

        document.querySelector(".hero-content").style.transition="2s";
        document.querySelector(".hero-content").style.opacity="1";

    },200);

});



// ========================================
// Random Sparkles
// ========================================

setInterval(()=>{

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.fontSize="18px";

    sparkle.style.opacity="1";

    sparkle.style.pointerEvents="none";

    sparkle.style.zIndex="-1";

    document.body.appendChild(sparkle);

    sparkle.animate(

        [

            {opacity:0,transform:"scale(.5)"},

            {opacity:1,transform:"scale(1.2)"},

            {opacity:0,transform:"scale(.5)"}

        ],

        {

            duration:1800

        }

    );

    setTimeout(()=>{

        sparkle.remove();

    },1800);

},500);


