let prevScrollpos = window.pageYOffset;
let element = document.getElementsByClassName("header--fixed")[0];

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos) {
        element.style.transform = "translate(0,50px)";
    } else {
        element.style.transform = "translate(0, -50px)";
    }
    
    prevScrollpos = currentScrollPos;
}

// register service work

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
      console.log('Yey!', reg);
    }).catch(function(err) {
      console.log('Boo!', err);
    });
  }