// Subsistemas complexos
class Cozinha {
  prepararComida(comida) {
    console.log(`Cozinha: Preparando ${comida}`);
  }
}

class Bar {
  prepararBebida(bebida) {
    console.log(`Bar: Preparando ${bebida}`);
  }
}

class Caixa {
  recebePagamento(conta) {
    console.log(`Caixa: Processando pagamento de R$${conta}`);
  }
}

// Facade: O Garçom
class Garcom {
  constructor() {
    this.cozinha = new Cozinha();
    this.bar = new Bar();
    this.caixa = new Caixa();
  }

  recebePedido(pedido) {
    console.log("Garçom: Recebendo o pedido...");
    if (pedido.comida) {
      this.cozinha.prepararComida(pedido.comida);
    }
    if (pedido.bebida) {
      this.bar.prepararBebida(pedido.bebida);
    }
    this.caixa.recebePagamento(pedido.conta);
    console.log("Garçom: Serviço concluído!");
  }
}

// Cliente interage apenas com o Garçom (Facade)
const garcom = new Garcom();
const pedido = {
  comida: "Feijoada",
  bebida: "Caipirinha",
  conta: 70,
};

garcom.recebePedido(pedido);