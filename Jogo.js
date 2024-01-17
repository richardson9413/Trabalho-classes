class heroi{
    constructor(tipo, arma){
       this.tipo = tipo
       this.arma = arma
    }
    

}
let personagem= new heroi("Mago","Cajado")
console.log(`O ${personagem.tipo} atacou usando ${personagem.arma}`)