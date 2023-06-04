function avaliaParidade(limiteSUperior){
    for(let i=0; i<limiteSUperior; i++ ){
        if(i%2==1)
            console.log(i + " é um nro IMPAR")
        else
            console.log(i + " é um nro PAR")
    }
}

avaliaParidade(10)