class PagamentoCartao {
  pagar(valor) {
    if (valor > 100) {
      const valorComTaxa = valor  * 1.05; // 5% de taxa
      console.log(`Pagando R$${valorComTaxa} com cartão com 5% de taxa.`);
      return;
    }
    console.log(`Pagando R$${valor} com cartão.`);
  }
}

class PagamentoPix {
  pagar(valor) {
    const valorComDesconto = valor * 0.9;
    console.log(`Pagando R$${valorComDesconto} com Pix com 10% de desconto.`);
  }
}

class PagamentoBoleto {
  pagar(valor) {
    console.log(`Pagando R$${valor} com boleto.`);
  }
}

class ProcessadorDePagamento {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  processar(valor) {
    this.strategy.pagar(valor);
  }
}

const processador = new ProcessadorDePagamento();
processador.setStrategy(new PagamentoCartao());
processador.processar(200);

processador.setStrategy(new PagamentoPix());
processador.processar(50);

processador.setStrategy(new PagamentoBoleto());
processador.processar(30);