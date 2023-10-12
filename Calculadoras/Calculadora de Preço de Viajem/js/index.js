function CalcPrice() {
    const resultadoDiv = document.getElementById("resultado");
    const nomeViagem = document.getElementById("nomeViagem").value;
    const kmPercorridos = parseFloat(
      document.getElementById("kmPercorridos").value
    );
    const litrosCombustivel = parseFloat(
      document.getElementById("litrosCombustivel").value
    );
    const valorLitroCombustivel = parseFloat(
      document.getElementById("valorLitroCombustivel").value
    );

    if ((kmPercorridos, litrosCombustivel, valorLitroCombustivel)) {
      const autonomia = kmPercorridos / litrosCombustivel;
      const valorViagem = litrosCombustivel * valorLitroCombustivel;
      const valorPorKm = valorViagem / kmPercorridos;
      resultadoDiv.innerHTML = `
         <h3>Resumo da viagem:</h3>
         <p>Em sua viajem para ${nomeViagem}, você percorreu ${kmPercorridos}Km e gastou ${litrosCombustivel} litros de combustível.</p>
         <p>Nesta viajem seu carro fez ${autonomia.toFixed(
           2
         )}Km/L e ela teve um custo de R$${valorViagem.toFixed(
        2
      )}, sendo R$${valorPorKm.toFixed(2)}/L</p>`;
    } else {
      window.alert(
        "Nem todos os campos estão preenchidos, por favor preencha todos os campos corretamente"
      );
    }
  }