const botao = document.getElementById('menu--toggle')
const menu = document.querySelector('.nav--responsivo')
const img = document.getElementById('img')

botao.addEventListener('click', () => {
  if(botao.name === 'abrir') {
    img.setAttribute("src", "/img/fechar.png");
    menu.style.display = "block";
    botao.name = "fechar"
  } else if(botao.name === "fechar") {
    img.setAttribute("src", "/img/menu.png");
    menu.style.display = "none";
    botao.name = "abrir"
  }
})

window.addEventListener('resize', () => {
  var larguraDaTela = window.innerWidth;

  if(larguraDaTela > 950) {
    menu.style.display = "flex";
    botao.name = "fechar"
    img.setAttribute("src", "/img/fechar.png");
  } else {
    menu.style.display = "none";
    botao.name = "abrir"
    img.setAttribute("src", "/img/menu.png");
  }
});

