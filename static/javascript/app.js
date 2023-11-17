window.CustomSubstackWidget = {
  substackUrl: "viewportui.substack.com",
  placeholder: "Seu melhor e-mail",
  buttonText: "Assinar",
  theme: "custom",
  colors: {
    primary: "#252525",
    input: "#171717",
    email: "#FFFFFF",
    text: "#FFFFFF",
  },
};


//Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Menu mobile

const aside = document.querySelector("#aside");
const menuButton = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

menuButton.addEventListener('click', function (e) {
  e.preventDefault();

  aside.classList.toggle("menuOpened");
});

closeMenu.addEventListener('click', function(e) {
  e.preventDefault();

  aside.classList.remove("menuOpened");
});