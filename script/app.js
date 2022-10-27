let tl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
});

tl.set('#Shadow', {
    transformOrigin: '50% 100%',
})
    .fromTo(
        '#Robot',
        {
            y: 2.5,
        },
        {
            y: -2.5,
        }
    )
    .to(
        '#Shadow',
        {
            scale: 0.75,
        },
        '-=.75'
    );



document.querySelector('.js-fast').addEventListener('click', () => {
    console.log('fast');
    tl.timeScale(6);
});
document.querySelector('.js-normal').addEventListener('click', () => {
    console.log('normal');
    tl.timeScale(2);
});
document.querySelector('.js-slow').addEventListener('click', () => {
    console.log('slow');
    tl.timeScale(0.5);
});

document.querySelector('.js-pause').addEventListener('click', () => {
    console.log('pause');
    if (!tl.paused()) {
        tl.pause();
        document.querySelector('.c-play-icon--play').style.display = 'block';
        document.querySelector('.c-play-icon--pause').style.display = 'none';
    } else {
        tl.play();
        document.querySelector('.c-play-icon--pause').style.display = 'block';
        document.querySelector('.c-play-icon--play').style.display = 'none';
    }
});