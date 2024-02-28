//clases d'isntruments
class Instrument {
    constructor(nom, familia, so) {
        this.nom = nom;
        this.familia = familia;
        this.so = so;
        this.foto = foto; 
    }

    toca() {
        console.log(`Tocant el ${this.nom}`);
    }

    getInfo() {
        return `${this.nom} - Instrument de la subfamilia de ${this.familia}, el seu sroll és ${this.so}`;
    }
}

//diferents subclases dels isntruments
class Tambor extends Instrument {
    constructor(nom, so) {
        super(nom, "Percussió", so);
    }
}

class Flauta extends Instrument {
    constructor(nom, so) {
        super(nom, "Vent", so);
    }
}

class Guitarra extends Instrument {
    constructor(nom, so) {
        super(nom, "Corda", so);
    }
}

//array on guardarem els instruments
const listaInstrumentos = [];

//funció per crear els isntruments
function crearInstrumento() {
    const nombre = document.getElementById("nombre").value;
    const sonido = document.getElementById("sonido").value;
    const categoria = document.getElementById("categoria").value;
    const foto = document.getElementById("foto").value;

    //creem l'instrument segons la classe d'instrument que agafem
    let nuevoInstrumento;
    switch (categoria) {
        case "tambor":
            nuevoInstrumento = new Tambor(nombre, sonido, foto);
            break;
        case "flauta":
            nuevoInstrumento = new Flauta(nombre, sonido, foto);
            break;
        case "guitarra":
            nuevoInstrumento = new Guitarra(nombre, sonido, foto);
            break;
        default:
            console.error("Categoría de instrumento no válida");
            return;
    }

    //guardem el nou instrument
    listaInstrumentos.push(nuevoInstrumento);

    //imprimim informació dels instruments en la consola
    console.log(nuevoInstrumento.getInfo());
}
function mostrarInstrumentos() {
    const mostrarDiv = document.querySelector('.mostrar');
    mostrarDiv.innerHTML = '';

    if (listaInstrumentos.length === 0) {
        //si no hi han no es mostra
        mostrarDiv.innerHTML = '<p>No hay instrumentos creados aún.</p>';
    } else {
        //Es crea divs en bucle segons els isntruments que y s'hagin creat
        listaInstrumentos.forEach((instrumento, index) => {
            const nuevoInstrumentoDiv = document.createElement('div');
            nuevoInstrumentoDiv.classList.add('mostrar', 'row');
            nuevoInstrumentoDiv.innerHTML = `
                <div class="img">
                    <img src="${instrumento.foto}" alt="${instrumento.nom}">
                </div>
                <div class="text">
                    <div class="nom">${instrumento.nom}</div>
                    <div class="so">${instrumento.so}</div>
                    <div class="logos">
                        <div class="logo>
                        <img src="./delete.png" alt="delete">
                        </div>
                        <div class="logo>
                        <img src="./play.png" alt="play">
                        </div>
                    </div
                </div>
            `;

            mostrarDiv.appendChild(nuevoInstrumentoDiv);
        });
    }
}
