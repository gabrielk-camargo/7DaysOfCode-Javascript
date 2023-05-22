function pularlinha(){
    document.write('<br><br>')
}
function escreva(frase){
    document.write(frase)
    pularlinha()
}

function area__de__escolha() {
  let frontEnd = document.querySelector(
    ".area__de__especialização__front__end:checked"
  );
  let backEnd = document.querySelector(
    ".area__de__especialização__back__end:checked"
  );

  if (frontEnd !== null) {
    document.querySelector("#front__end").style.display = "block";
    document.querySelector("#back__end").style.display = "none";
  } else if (backEnd !== null) {
    document.querySelector("#front__end").style.display = "none";
    document.querySelector("#back__end").style.display = "block";
  }
}
function tecnologia__de__escolha() {
  let react = document.querySelector(".front__end__react:checked");
  let vueJs = document.querySelector(".front__end__vue_js:checked");
  let java = document.querySelector('.back__end__java:checked')
  let cSharp = document.querySelector('.back__end__cSharp:checked')
  let outros = document.querySelector(".front__end__outros:checked");

  if (react !== null || java !== null) {
    document.querySelector("#full__stack").style.display = "block"
  } else if (vueJs !== null || cSharp != null) {
    document.querySelector("#full__stack").style.display = "block"
  } else if (outros !== null) {
    document.querySelector("#full__stack").style.display = "block"
  }
}
function full_stack() {
    document.querySelector('#outras__tecnologias').style.display = 'block';
  }
  function outras__tecnologias() {
    let linguagem = prompt("Escreva aqui: ");
  
    while (linguagem !== null) {
      escreva("Você digitou: " + linguagem);
  
      linguagem = prompt("Escreva aqui: ");
    }
  }
  

  
