class classes{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
     }
    attack(){
        let ataqueType = ""

        switch(this.type){
            case "guerreiro":
                ataqueType = "espadas"
                break
            case "mago":
                ataqueType = "bola de fogo"
                break
            case "cavaleiro":
                ataqueType = "espada sagrada"
                break
            case "anão":
                ataqueType = "machado de guerra"
                break 
            default:
                ataqueType = "apenas suas mãos"
                break  
        }
        console.log (`${this.name} o ${this.hero} atacou usando ${ataqueType}`)
    }
}

    let tipoMago = new classes("Hugo","54","mago")
    let tipoGuerreiro = new classes("Hugod","35","guerreiro")
    let tipoMonge = new classes("higor","9","monge")
    let tipoNinja = new classes("Higor","10","ninja")

    