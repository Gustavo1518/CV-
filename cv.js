const main = new Vue({
el: '#main',
data: {
    Nombre: "Gustavo Meneses Sierra",
    Carrera: "Tecnico En Informatica",
    Numero: 0,

},
methods : {
    aumentar(){
        console.log("TODO CORRECTO GUSTAVO");
        this.Numero++;
    }
},
})