//TDD - Test Driven Development
var novoMapa = new Map();

class HistoryMap {

}

// 11/11/2011 as 11 da noite
novoMapa.set('11/11/2011 - 21:30 - URL', {title: 'Titulo do site', url: 'url sozinha'});
novoMapa.set('11/11/2011 - 21:31', {});

var resultado = novoMapa.get('11/11/2011 - 21:30 - URL');
console.log(resultado)