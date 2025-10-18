// Exibir alerta ao clicar no botão "Assistir"
function assistir() {
    alert("Assistindo...");
}

// Exibir detalhes do jogador ao clicar no link
  const params = new URLSearchParams(window.location.search);
  const jogadorID = params.get('jogador');

  if (jogadorID) {
    document.querySelectorAll('.player-detail').forEach(div => {
      div.classList.remove('active');
    });

    const jogadorSelecionado = document.getElementById(jogadorID);
    if (jogadorSelecionado) {
      jogadorSelecionado.classList.add('active');
    } 
  }
