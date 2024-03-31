let nightmode = document.querySelector(".nightmode");
let portfolio = document.querySelector(".portfolio");
nightmode.addEventListener("click",() => {
    portfolio.classList.toggle("night");
})

var typed = new Typed('#text', {
    strings: ['Coder.', 'Designer.', 'Developer.', 'Programmer.', 'Suhani.'],
    loop: true,
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000
  });