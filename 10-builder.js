// Classe do Produto Final
class Burger {
  tipoPao = ''
  tipoQueijo = '';
  bacon = false;
  salada = false;
}

// Builder
class BurgerBuilder {
  constructor() {
     this.burger = new Burger();
  }

  escolheTipoPao(tipoPao) {
      this.burger.tipoPao = tipoPao;
      return this;
    }

  escolheTipoQueijo(tipoQueijo) {
    this.burger.tipoQueijo = tipoQueijo;
    return this;
  }

  addBacon(bacon) {
    this.burger.bacon = bacon;
    return this;
  }

  addSalada(salada) {
    this.burger.salada = salada;
    return this;
  }

  build() {
    return this.burger;
  }
}

// Usando o Builder
const burger = new BurgerBuilder()
  .escolheTipoPao('Pão com gergelim')
  .escolheTipoQueijo('Cheddar')
  .addBacon(true)
  .addSalada(true)
  .build();

console.log(burger);