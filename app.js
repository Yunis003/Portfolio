window.addEventListener("scroll", function () {
    let myBox = document.querySelector('.background-circle');
    let triggerPoint = 350;
    if (window.scrollY > triggerPoint) {
      myBox.classList.add("shadow");
    } else {
      myBox.classList.remove("shadow");
    }
  });
  