let user = {};

console.log(user.address ? user.address.street : undefined);

//optional chaining
console.log(user?.address?.street);

//??
console.log(user?.address?.street ?? "Not Found User");

//?.()
let userAdmin = {
  admin() {
    alert("I am Lita");
  },
};

let userGuest = {};

userAdmin.admin();
userGuest.admin?.();
