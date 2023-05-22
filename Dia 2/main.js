function verificarDados(event) {
    event.preventDefault(); // Evita que o formulário seja enviado
  
    let nome = document.getElementById("userName").value;
    let idade = document.getElementById("userAge").value;
    let linguagem = document.getElementById("userLanguage").value;
  
    let respostaUsuario = document.getElementById("userResposta");
  
    respostaUsuario.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
  
    document.querySelector(".userOptional").style.display = "block";
  
    let mensagem = document.querySelector("#userMensagem");
  
    mensagem.innerHTML = `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO`;
  }
  
  function respostaOpcao(opcao) {
    let respostaSim = document.getElementById("respostaSim");
    let respostaNao = document.getElementById("respostaNao");
    let optionNo = document.getElementById("optionNo");
    let optionYes = document.getElementById("optionYes");
  
    if (opcao) {
      respostaSim.innerHTML = "Muito bom! Continue estudando e você terá muito sucesso.";
      respostaNao.innerHTML = "";
      optionNo.checked = false;
    } else {
      respostaNao.innerHTML = "Ahh que pena... Já tentou aprender outras linguagens?";
      respostaSim.innerHTML = "";
      optionYes.checked = false;
    }
  }
  