const videoBoxes = document.querySelectorAll(".about-page__video-box");

videoBoxes.forEach((videoBox) => {
  const mediaBtn = videoBox.querySelector(".video-btn");
  const media = videoBox.querySelector("video");
  videoBox.addEventListener("click", (e) => {
    if (media.paused) {
      media.play();
      mediaBtn.style.display = "none";
    } else {
      media.pause();
      mediaBtn.style.display = "block";
    }
  });
});
