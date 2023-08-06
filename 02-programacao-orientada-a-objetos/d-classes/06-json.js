//O Java script provê o método JSON.stringfy, que converte o objeto para o formato JSON (string)

let student = {
    name: 'Rodrigo',
    age: 34,
    isAdmin: false,
    courses: ['html', 'css', 'js', 'C#'],
    wife: null
};

let json = JSON.stringify(student);
console.log("JSON: " + json);