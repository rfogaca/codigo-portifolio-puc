//O Javascript provê o método JSON.parse para converter uma string no formato JSON em um objeto

let user = '{ "name": "Rodrigo", "age": 35, "isAdmin": false, "friends": ["Maria","José","Carol","Ricardo"] }';
user = JSON.parse(user);

console.log("Nome: " + user.name)

console.log(user.name + " tem " + user.friends.length + " amigos.");

console.log("Os amigo são:")

user.friends.forEach(element => {
    console.log(element)
});