fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('meu-header').innerHTML = data;

    // Pegando os elementos
    const abrirContato = document.getElementById("abrir-contato");
    const janelaContato = document.getElementById("janela-contato");
    const fecharjanela = document.getElementById("fechar-janela");
    const formularioContato = document.querySelector(".formulario-contato");
    
    // Abre a janela quando clicar no botão "Contato"
    abrirContato.addEventListener("click", (e) => {
      e.preventDefault(); // impede navegação
      formularioContato.reset()
      janelaContato.style.display = "flex";
;
    });

    // Enviar o formulário
    formularioContato.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Mensagem enviada com sucesso!");
      janelaContato.style.display = "none";

      formularioContato.reset();  // Limpa todos os campos do formulário
    });

    // Fecha a janela quando clicar no "X"
    fecharjanela.addEventListener("click", () => {
      janelaContato.style.display = "none";
    });

    // Fecha a janela se clicar fora da caixa do formulário
    window.addEventListener("click", (e) => {
      if (e.target === janelaContato) {
        janelaContato.style.display = "none";
      }
    });
  });