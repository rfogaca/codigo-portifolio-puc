//JSON.parse utilizando datas

var json = '{ "name":"Rodrigo Fogaça", "birth":"2023-08-06T12:00:00.000Z", "city":"Porto Alegre"}'
var obj = JSON.parse(json, function (key, value) {
    if (key == "birth") {
        return new Date(value);
    }
    return value;
});

console.log("Nome: " + obj.name);
console.log("Data Nascimento: " + obj.birth);