// Classe base: Bolo simples
class Bolo {
    getDescricao() {
      return "Bolo simples";
    }
  
    getCusto() {
      return 30; // Custo base do bolo
    }
  }
  
  // Decorator base
  class BoloDecorator {
    constructor(bolo) {
      this.bolo = bolo;
    }
  
    getDescricao() {
      return this.bolo.getDescricao();
    }
  
    getCusto() {
      return this.bolo.getCusto();
    }
  }
  
  // Decorador: Adiciona cobertura de chocolate
  class CoberturaDeChocolate extends BoloDecorator {
    getDescricao() {
      return `${this.bolo.getDescricao()} com cobertura de chocolate`;
    }
  
    getCusto() {
      return this.bolo.getCusto() + 10; // Adiciona o custo da cobertura
    }
  }
  
  // Decorador: Adiciona morangos
  class Morangos extends BoloDecorator {
    getDescricao() {
      return `${this.bolo.getDescricao()} com morangos`;
    }
  
    getCusto() {
      return this.bolo.getCusto() + 10; // Adiciona o custo dos morangos
    }
  }
  
  // Decorador: Adiciona chantilly
  class Chantilly extends BoloDecorator {
    getDescricao() {
      return `${this.bolo.getDescricao()} com chantilly`;
    }
  
    getCusto() {
      return this.bolo.getCusto() + 10;
    }
  }
  
  // Usando os Decorators
  let meuBolo = new Bolo(); 
  console.log(meuBolo.getDescricao());
  console.log(`Custo: R$${meuBolo.getCusto()}`);
  
  meuBolo = new CoberturaDeChocolate(meuBolo);
  console.log(meuBolo.getDescricao());
  console.log(`Custo: R$${meuBolo.getCusto()}`);
  
  meuBolo = new Morangos(meuBolo);
  console.log(meuBolo.getDescricao());
  console.log(`Custo: R$${meuBolo.getCusto()}`);
  
  meuBolo = new Chantilly(meuBolo);
  console.log(meuBolo.getDescricao()); 
  console.log(`Custo: R$${meuBolo.getCusto()}`);