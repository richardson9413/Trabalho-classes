 class caracteristicas{
 
    constructor(nome,idade,tipo,arma){
         this.nome= nome
         this.idade= idade
         this.tipo = tipo
         this.arma= arma
    }
 }
 
class heroi{
    constructor(caracteristicas){
        this.tipo= caracteristicas.tipo;
        this.arma= caracteristicas.arma;
        switch(this.tipo){
            case "Guerreiro":
                this.habilidade= "habilidade flagelo estelar"
            break;
           
                case "Mago":
                      this.habilidade= "habilidade definhar"
                         break;                       

                        case "Monge":
                             this.habilidade= "habilidade soco cardiaco"
                              break;
                                
                                 case "Ninja":
                             this.habilidade= "habilidade usou a acido"
                              break;
                                    default:this.habilidade= "nao funcionou"
       }
       switch(this.arma){
            case "Espada":
              this.acao=  "deu um golpe de espada"
            break;
                case "Cajado":
                    this.acao=  "Utilizou o cajado "
                break;
                    case "Soqueiras":
                    this.acao=  "deu um soco"
                    break;
                        case "shuriken":
                        this.acao=  "Lançou uma shuriken "
                        break;
                            default: this.acao= "consegiu puxar"
        }
    }    
  }
  let golpe= new caracteristicas("Carlos Magno", 16, "Guerreiro","Espada")    
let personagem= new heroi(golpe)
console.log(`O herói ${golpe.nome} tem ${golpe.idade} anos e é da classe ${golpe.tipo}. Ele ${personagem.acao} utilizando a ${personagem.habilidade}`)