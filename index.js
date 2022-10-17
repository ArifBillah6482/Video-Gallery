const mainVideo = document.querySelector(".mainVideo");
const vid = document.querySelectorAll(".vid");
const mainVideoTitle = document.querySelector(".mainVideoTitle");
const videoChange = document.querySelector(".videoChange");
//////////////////
function changeVideo(aa, bb, cc) {
  function a(callback) {
    for (let i = 0; i < vid.length; i++) {
      vid[i].classList.remove("active");
    }
    callback();
  }
  function b() {
    const active = document.querySelector(`.${cc}`);
    active.classList.add("active");
    mainVideo.src = aa;
    mainVideoTitle.textContent = bb;
  }
  a(() => {
    b();
  });
}
