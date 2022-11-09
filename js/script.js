var array;

function cargarpagina(){
    array = [
        {nombre: "Andrés", codigo: "192097", doc: "12345", progr:"ing. de sistemas"},
        {nombre: "Jack", codigo: "123", doc: "978", progr:"ing. de sistemas"},
        {nombre: "Sally", codigo: "7155", doc: "6854", progr:"ing. de sistemas"}

    ];
}

function calcular(){
    let nombre = $("#nombre").val();
    for(let i=0;i<array.length;i++){
        if(nombre==array[i].nombre){
            console.log("El nombre encontrado es: " + nombre);
            break;   
        }
        else{ 
            console.log("Su nombre " + nombre, " no fue encontrado");
        }


    }
 

}