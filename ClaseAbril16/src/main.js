


//Función que transforma dólares a pesos
function dolaresPesos(dolares){
    return (18.87*dolares);
};


//Función que transforma pesos mexicanos a litros de gasolina
function compraGasolina(dinero){
    return dinero/19.37;
};

console.log("Te alcanza para ", compraGasolina(dolaresPesos(100)), "litros de la verde.");