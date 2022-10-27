// gsap.to('#Robot', { duration: 1, x: 50 });
// gsap.from('#Robot', { duration: 1, x: 50 });
// gsap.set('#Robot', { duration: 1, x: 50 });
// gsap.fromTo('#Robot', { x: -50 }, { duration: 1, x: 50 })

// gsap.to('#Robot', {
//     duration: 6,
//     ease: 'elastic.out(2.5,0.1)',
//     x: 50,
// })



// let tl = gsap.timeline()

// tl.fromTo('#Robot', {
//     y: 2.5,
// }, {
//     duration: .75,
//     y: -2.5,
// }).to('#Shadow', {
//     duration: .75,
//     scale: 0.75,
// })


btnPause = document.querySelector('.c-play-icon--pause');
btnPlay = document.querySelector('.c-play-icon--play');
btnFast = document.querySelector('.js-fast');
btnNormal = document.querySelector('.js-normal');
btnSlow = document.querySelector('.js-slow');




let tl = gsap.timeline({
    defaults: {
        duration: .75,
        ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
})

tl.set('#Shadow', {
    transformOrigin: '50% 100%',
})

tl.fromTo('#Robot', {
    y: 2.5,
}, {
    y: -2.5,
}).to('#Shadow', {
    scale: 0.75,
},
'<',
)

//pause and hide play button
btnPause.onclick = () => {
    tl.pause(!tl.paused());
    btnPause.classList.toggle('is-paused');
}


// //play and hide pause button
btnPlay.onclick = () => {
    tl.play();
}


//fast
btnFast.onclick = () => {
    tl.timeScale(5);
}
//normal
btnNormal.onclick = () => {
    tl.timeScale(2);
}
//slow
btnSlow.onclick = () => {
    tl.timeScale(0.5);
}