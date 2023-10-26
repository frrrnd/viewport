// register service work

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      console.log('Yey!', reg);
    }).catch(function(err) {
      console.log('Boo!', err);
    });
  }

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
  // Go to substackapi.com to unlock custom redirect
};

// Shortcuts

document.addEventListener("keydown", function(event) {
  if (event.key === "1") {
    window.location = "/"
  }

  if (event.key === "2") {
    window.open("https://twitter.com/intent/tweet?text=@ViewportUI%20", "_blank")
  }

  if (event.key === "3") {
    window.location = "/sobre"
  }

  if (event.key === "4") {
    window.open("https://x.com/ViewportUI", "_blank")
  }
})

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});