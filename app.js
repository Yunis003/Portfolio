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
  