// Funções para criar tipos de usuário
function createAdmin() {
    return { role: "admin", permissions: ["read", "write", "delete"] };
  }
  
  function createGuest() {
    return { role: "guest", permissions: ["read"] };
  }
  
  function createUser() {
    return { role: "user", permissions: ["read", "write"] };
  }
  
  // Criando usuários manualmente
  const admin = createAdmin();
  const guest = createGuest();
  const user = createUser();
  
  console.log(admin);
  console.log(guest);
  console.log(user);