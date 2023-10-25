class classes {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
     }
     //metodo de ataque
    attack(){
        let ataqueType = ""

        switch(this.type){
            case "guerreiro":
                ataqueType = "espadas"
                break
            case "mago":
                ataqueType = "magia"
                break
            case "monge":
                ataqueType = "Artes marciais"
                break
            case "ninja":
                ataqueType = "shuriken"
                break 
            default:
                ataqueType = "Erro Fatal"
                break  
        }
        console.log (`${this.name} tem ${this.age} anos de idade e é da classe ${this.type} atacou usando ${ataqueType}!`)
    }
}

    let tipoMago = new classes("Hugo","54","mago")
    let tipoGuerreiro = new classes("Hugod","35","guerreiro")
    let tipoMonge = new classes("Higor","9","monge")
    let tipoNinja = new classes("Higor","10","ninja")

// chamar tipo desejado .... saida
    tipoMonge.attack()
    tipoNinja.attack()