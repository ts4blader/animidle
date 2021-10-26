import { gsap } from "gsap";

export const completeLoading = (soundPlay, screenWidth) => {
  const tl = gsap.timeline();

  tl.to(".loader .text p", {
    duration: 0.5,
    y: "-100%",
    ease: "Back.easeOut(1.5)",
    onComplete: soundPlay,
  })
    .to(
      ".loader .bar",
      {
        duration: 0.5,
        opacity: 1,
        left: "0",
        width: "50%",
        ease: "Back.easeOut(1.5)",
      },
      0.25
    )
    .to(".loader", {
      duration: 1,
    });

  if (screenWidth >= 768) {
    tl.to(".loader", {
      duration: 1,
      width: "0",
      ease: "Expo.easeOut",
    });
  } else {
    tl.to(".loader", {
      duration: 1,
      height: "0",
      ease: "Expo.easeOut",
    });
  }
};

const floatBG = () => {
  let tl = gsap.timeline({ repeat: -1, yoyo: true });

  tl.to(".loader__overlay", {
    duration: 30,
    objectPosition: "80% 0",
  });
};

export const Loading = (soundPlay, screenWidth) => {
  // Main timeline
  const tl = gsap.timeline();

  // Logo timeline
  const loading = gsap.timeline({ repeat: -1, yoyo: true });

  loading.to(".loader .loading-text", {
    duration: 1,
    opacity: 0,
  });

  //   Main timeline
  // BG Move
  tl.to(".loader__bg", {
    duration: 2,
    backgroundPosition: "30% 40%",
  }).to(".loader__bg", {
    duration: 0,
    width: 0,
    onComplete: soundPlay,
  });

  // Sword Draw
  if (screenWidth >= 768) {
    tl.to(".loader__overlay", {
      duration: 0.4,
      right: "80%",
      objectPosition: "0% 0%",
      width: "30vw",
      ease: "Expo.easeOut",
    }).to(".loader__overlay", {
      duration: 0.3,
      right: "50%",
      filter: "invert(0%)",
      objectPosition: "30% 0",
      ease: "Back.easeOut(1.5)",
      onComplete: () => {
        floatBG();
      },
    });
  } else {
    tl.to(".loader__overlay", {
      duration: 0.4,
      bottom: "80%",
      objectPosition: "0% 0%",
      height: "30vh",
      ease: "Expo.easeOut",
    }).to(".loader__overlay", {
      duration: 0.3,
      bottom: "50%",
      filter: "invert(0%)",
      objectPosition: "0% 30%",
      ease: "Back.easeOut(1.5)",
      onComplete: () => {
        floatBG();
      },
    });
  }
};
