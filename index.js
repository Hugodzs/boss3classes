class classes{
    constructor(nome,tipo,ataque){
        this.nome = nome
        this.tipo = tipo
        this.ataque = ataque
    }
    attack(){
        if(tipo = mago){this.ataque = "usou magia"}
        else if(tipo = guerreiro){this.ataque = "usou espada" }
        else if(tipo = monge){this.ataque = "usou artes marciais"}
        else if(tipo = ninja){this.ataque = "usou shuriken"}
        else("erro")
    }
}