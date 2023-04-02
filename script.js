function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


    document.getElementById('vid').play();

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 40,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


      document.querySelectorAll(".nav-items").forEach((ele) =>
  ele.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelectorAll(".nav-items")
      .forEach((ele) => ele.classList.remove("active"));
    this.classList.add("active")
  })
);
    