const autos = [
    {
        marca: 'Audi',
        modelo: "A3",
        year: 2020,
        precio: 20000,
        puertas: 4,
        color: "Azul",
        transmision: "automatico"
    },
    {
        marca: 'BMW',
        modelo: "Serie 3",
        year: 2022,
        precio: 30000,
        puertas: 4,
        color: "Blanco",
        transmision: "automatico"
    },
    {
        marca: 'Mercedes Benz',
        modelo: "C200",
        year: 2015,
        precio: 10000,
        puertas: 4,
        color: "Negro",
        transmision: "automatico"
    },
    {
        marca: 'Chevrolet',
        modelo: "Silverado",
        year: 2020,
        precio: 20000,
        puertas: 4,
        color: "Rojo",
        transmision: "automatico"
    },
    {
        marca: 'Ford',
        modelo: "Mustang",
        year: 2022,
        precio: 70000,
        puertas: 2,
        color: "Negro",
        transmision: "automatico"
    },
    {
        marca: 'RAM',
        modelo: "1500",
        year: 2010,
        precio: 10000,
        puertas: 4,
        color: "Blanco",
        transmision: "manual"
    },
    {
        marca: 'Audi',
        modelo: "R8",
        year: 2020,
        precio: 80000,
        puertas: 4,
        color: "Rojo",
        transmision: "automatico"
    },
    {
        marca: 'Ford',
        modelo: "Raptor",
        year: 2022,
        precio: 80000,
        puertas: 4,
        color: "Azul",
        transmision: "automatico"
    },
    {
        marca: 'Mercedes Benz',
        modelo: "AMG G-63",
        year: 2021,
        precio: 90000,
        puertas: 4,
        color: "Negro",
        transmision: "automatico"
    },
    {
        marca: 'RAM',
        modelo: "700",
        year: 2020,
        precio: 20000,
        puertas: 2,
        color: "Azul",
        transmision: "manual"
    },
    {
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
    {
		marca: 'Mercedes Benz',
		modelo: 'GLE',
		year: 2018,
		precio: 65000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'Q8',
		year: 2019,
		precio: 55000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
    {
		marca: 'Chevrolet',
		modelo: 'Aveo',
		year: 2018,
		precio: 10000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'manual'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Spark',
		year: 2017,
		precio: 15000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'manual'
	},
    {
		marca: 'Ford',
		modelo: 'Eco Sport',
		year: 2007,
		precio: 10000,
		puertas: 4,
		color: 'Azul',
		transmision: 'manual'
	}
];

//variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//contenedor de resultados
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear();
const min = max - 12;

//generar objeto de busqueda
const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",
}

//event
document.addEventListener("DOMContentLoaded",() => {
    mostrarAutos(autos); //muestra los autos al cargar

    //llena las opciones de años
    llenandoSelect()
})

//event listener para select de busqueda
marca.addEventListener("change", e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto()
});

year.addEventListener("change", e=>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto()
});

minimo.addEventListener("change", e =>{
    datosBusqueda.minimo = e.target.value;
    filtrarAuto()
});

maximo.addEventListener("change", e =>{
    datosBusqueda.maximo = e.target.value;
    filtrarAuto()
});

puertas.addEventListener("change", e=>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto()
});

transmision.addEventListener("change", e =>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto()
});

color.addEventListener("change", e =>{
    datosBusqueda.color = e.target.value;
    filtrarAuto()
});

//funciones
function mostrarAutos(autos){
    limpiarHTML()//elimina HTML previo

    autos.forEach(auto =>{
        const {marca, modelo, year, puertas, transmision, color, precio} = auto;
        const autoHTML = document.createElement("p");

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision ${transmision} - Color ${color} - Precio ${precio}
        `;

        //insertar en HTML
        resultado.appendChild(autoHTML);
    });
}

//limpiar html
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenandoSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //agrega opcion años al select
    }
}

//funcion que filtra en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMin ).filter( filtrarMax ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );

    /* console.log(resultado); */
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado() {
    limpiarHTML();
    
    const noResultado = document.createElement("div");
    noResultado.classList.add("alerta", "error");
    noResultado.textContent = "No Hay Resultados, Intente Con Otra Busqueda";
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if( marca ) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const{ year } = datosBusqueda;
    if (year) {
        return auto.year === year;
    } 
    return auto;
}

function filtrarMin(auto) {
    const{ minimo } = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    } 
    return auto;
}

function filtrarMax(auto) {
    const{ maximo } = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const{ puertas } = datosBusqueda;
    if(puertas) {
        return auto.puertas === puertas
    }
    return auto
}

function filtrarTransmision(auto) {
    const{ transmision } = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision
    }
    return auto
}

function filtrarColor(auto) {
    const{ color } = datosBusqueda;
    if (color) {
        return auto.color === color
    }
    return auto
}