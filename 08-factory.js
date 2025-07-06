// Factory para criar diferentes tipos de usuários
function UserFactory(type) {
  switch (type) {
    case "admin":
      return { role: "admin", permissions: ["read", "write", "delete"] };
    case "guest":
      return { role: "guest", permissions: ["read"] };
    case "user":
      return { role: "user", permissions: ["read", "write"] };
    default:
      return { error: "Tipo de usuário inválido" };
  }

}

// Criando usuários com a Factory
const admin = UserFactory("admin");
const guest = UserFactory("guest");
const user = UserFactory("user");
const invalido = UserFactory("invalido");

console.log(admin);
console.log(guest);
console.log(user);
console.log(invalido);
