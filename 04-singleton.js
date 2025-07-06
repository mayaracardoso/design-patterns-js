const AppConfig = (function() {
    let instance;
  
    function createInstance() {
      return {
        theme: "dark",
        language: "pt-BR"
      };
    }
  
    return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  // Exemplo de uso
  const config1 = AppConfig.getInstance();
  const config2 = AppConfig.getInstance();
  
  console.log(config1 === config2);
  