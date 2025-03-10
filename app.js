window.addEventListener("scroll", function () {
    let myBox = document.querySelector('.background-circle');
    let experienceBox = this.document.querySelectorAll('.experience-box');
    let triggerPoint = 350;
    if (window.scrollY > triggerPoint) {
      myBox.classList.add("shadow");
      experienceBox.forEach((box)=>box.classList.add("boxes"));
    } else {
      myBox.classList.remove("shadow");
      experienceBox.forEach((box)=>box.classList.remove("boxes"));
    }
  });
  
window.addEventListener("scroll", function () {
    let icons = document.querySelectorAll('.icons');
    let triggerpoint2 = 800;
    if (window.scrollY > triggerpoint2) {
        icons.forEach((icon)=>icon.classList.add("seen"));
    } else {
        icons.forEach((icon)=>icon.classList.remove("seen"));
    }
});