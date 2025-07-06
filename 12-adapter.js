class Pessoa {
    listaDados() {
      return { nome: 'João', sobrenome: 'Silva', idade: 30 }; // Formato antigo
    }
  }
  
  // Adaptador que converte o formato antigo para o novo
  class PessoaAdapter {
    constructor(pessoa) {
      this.pessoa = pessoa;
    }
  
    listaDados(dataNascimento, endereco) {
      const dadosPessoa = this.pessoa.listaDados();
      return {
        nomeCompleto: `${dadosPessoa.nome} ${dadosPessoa.sobrenome}`, // Adicionando nova propriedade
        dataNascimento, // Adicionando nova propriedade
        endereco, // Adicionando nova propriedade
      }; // Formato novo
    }
  }

  
  const pessoa = new Pessoa();
  console.log("Formato antigo: ", pessoa.listaDados());
  const adapter = new PessoaAdapter(pessoa);
  const adaptedData = adapter.listaDados('01/01/1995', 'Rua A, 123');
  console.log("Formato novo: ", adaptedData);