// 1.
console.log('1.');

const supermercado = {
    papa: 9000,
    arroz: 5000,
    lentejas: 7000,
    aceite: 4000
}

for (let producto in supermercado) {
    console.log(`el precio de ${producto} es ${supermercado[producto]} pesos`);
}

// 2.
console.log('2.');

let objeto = {}

objeto.marca = 'honda';
objeto.moto = 'CB650R';
objeto.precio = 54000000;

console.log(objeto);

// 3.
console.log('3.');

const users = {
    password: "admin30905",
    rol: "admin",
    edad: 20
}

users.password = 'user_7833';
users.user = users.rol

delete users.rol

console.log(users);

// 4.
console.log('4.');

let numeros = {
    dos: 2,
    cinco: 5,
    siete: 7,
    cuarenta: 40,
    cincuenta: 50
}

for (let producto in numeros) {
    let par = numeros[producto]
    if (par % 2 === 0) {
        console.log(par);
    }
}

// 5.
console.log('5.');

let usuarios = {
    183344: "habilitado",
    354625: "habilitado",
    6762442: "inhabilitado",
    88552: "inhabilitado",
    438276: "habilitado"
}

let habilitados = 0;

for (let usuario in usuarios) {
    if (usuarios[usuario] === "habilitado") {
        habilitados++;
    }
}
console.log(`hay ${habilitados} usuarios habilitados`);

// 6.
console.log('6.');

objeto = {
    numeros: [45, 78, 22, 89, 8]
};

for (let i = 0; i < objeto.numeros.length; i++) {
    console.log(objeto.numeros[i]);
}

// 7.
console.log('7.');

numeros = {
    3: "tres",
    60: "sesenta",
    10: "diez"
}

delete numeros[60];

console.log(numeros);

// 8.
console.log('8.');

usuarios = {
    162544: { nombres: "Pepe", apellidos: "Perez", edad: 40 },
    4357262: { nombres: "Maria", apellidos: "Gomez", edad: 31 },
    786353: { nombres: "Raul", apellidos: "Castro", edad: 80 }
};

for (let numeroUsuario in usuarios) {
    let persona = usuarios[numeroUsuario]
    for (let propiedad in persona) {
        console.log(`${propiedad}: ${persona[propiedad]}`);
    }
    console.log('------');
}

// 9.
console.log('9.');

const tienda = {
    papa: 300,
    arroz: 1000,
    lentejas: 700,
    aceite: 2300,
    pan: 1200
};

let producto = prompt("9. Ingrese el nombre del producto (papa, arroz, lentejas, aceite, pan):");

producto = producto.toLowerCase();

if (tienda[producto] !== undefined) {
    console.log(`El precio de ${producto} es ${tienda[producto]} pesos`);
} else {
    console.log("Lo siento, el producto no está disponible en la tienda.");
}

//   10.'
console.log('10. usuarios:');

usuarios = {
    12345678: "Gabriel Torres",
    87654321: "Marta Silva",
    23456789: "Andres Martinez",
    34567890: "Isabel Sanchez",
    45678901: "Fernando Garcia",
    56789012: "Laura Romero",
    67890123: "Javier Fernandez",
    78901234: "Carolina Perez",
    89012345: "Roberto Jimenez",
    90123456: "Patricia Ruiz"
};

for (let user in usuarios) {
    console.log(usuarios[user]);
}

//   11.'
console.log('11.');

const continentes = {
    Asia: ["China", "India", "Japon", "Corea del Sur", "Tailandia"],
    Africa: ["Nigeria", "Egipto", "Sudafrica", "Kenya", "Etiopia"],
    America: ["Brasil", "Estados Unidos", "Argentina", "Mexico", "Colombia"],
    Europa: ["Alemania", "Francia", "Espana", "Italia", "Reino Unido"],
    Oceania: ["Australia", "Nueva Zelanda", "Fiyi", "Papua Nueva Guinea", "Samoa"]
};

let continente = prompt("11. Ingrese el nombre de un continente (Asia, Africa, America, Europa, Oceania):");

continente = continente.charAt(0).toUpperCase() + continente.slice(1).toLowerCase();

if (continentes[continente]) {
    console.log(`Los 5 paises de ${continente} son:`);
    continentes[continente].forEach((pais, index) => {
        console.log(`${index + 1}. ${pais}`);
    });
} else {
    console.log("El continente ingresado no es valido. Por favor, ingrese uno de los continentes validos.");
}

//   12.'
console.log('12.');

let estudiantes = [
    {
        nombre: "John Smith",
        edad: 20,
        matricula: "A123",
        calificaciones: [75, 85, 90, 88, 92]
    },
    {
        nombre: "Emily Johnson",
        edad: 22,
        matricula: "B456",
        calificaciones: [88, 79, 94, 91, 86]
    },
    {
        nombre: "Michael Brown",
        edad: 21,
        matricula: "C789",
        calificaciones: [92, 93, 94, 90, 87]
    },
    {
        nombre: "Sophia Williams",
        edad: 23,
        matricula: "D012",
        calificaciones: [80, 82, 79, 85, 84]
    },
    {
        nombre: "David Miller",
        edad: 24,
        matricula: "E345",
        calificaciones: [90, 89, 88, 91, 93]
    }
];

function calcularPromedio(matricula) {
    let estudiante = estudiantes.find(e => e.matricula === matricula);

    if (estudiante) {
        let suma = estudiante.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
        return suma / estudiante.calificaciones.length;
    } else {
        return "Estudiante no encontrado";
    }
}

function actualizarCalificaciones(matricula, nuevasCalificaciones) {
    let estudiante = estudiantes.find(e => e.matricula === matricula);

    if (estudiante) {
        estudiante.calificaciones = nuevasCalificaciones;
        console.log(`Las calificaciones de ${estudiante.nombre} han sido actualizadas.`);
    } else {
        console.log("Estudiante no encontrado");
    }
}

console.log("Lista de estudiantes con sus promedios:");
estudiantes.forEach(estudiante => {
    console.log(`${estudiante.nombre} - Promedio: ${calcularPromedio(estudiante.matricula)}`);
});

actualizarCalificaciones("B456", [90, 91, 94, 88, 93]);

console.log("\nLista de estudiantes después de actualizar las calificaciones:");
estudiantes.forEach(estudiante => {
    console.log(`${estudiante.nombre} - Promedio: ${calcularPromedio(estudiante.matricula)}`);
});

//   13.'
console.log('13.');

let pacientes = [
    {
        nombre: "Juan Pérez",
        documento: "12345678",
        cita: {
            dia: "Lunes",
            fecha: "2024-12-15",
            hora: "09:00 AM"
        }
    },
    {
        nombre: "Ana Gómez",
        documento: "87654321",
        cita: {
            dia: "Miércoles",
            fecha: "2024-12-17",
            hora: "11:00 AM"
        }
    },
    {
        nombre: "Carlos Ruiz",
        documento: "11223344",
        cita: {
            dia: "Viernes",
            fecha: "2024-12-19",
            hora: "02:00 PM"
        }
    },
    {
        nombre: "María López",
        documento: "55667788",
        cita: {
            dia: "Martes",
            fecha: "2024-12-16",
            hora: "03:00 PM"
        }
    }
];

// consultar cita por documento
function consultarCita(documento) {
    let paciente = pacientes.find(p => p.documento === documento);

    if (paciente) {
        console.log(`Paciente: ${paciente.nombre}`);
        console.log(`Día de la cita: ${paciente.cita.dia}`);
        console.log(`Fecha de la cita: ${paciente.cita.fecha}`);
        console.log(`Hora de la cita: ${paciente.cita.hora}`);

        // cambiar cita
        let cambiarCita = prompt("¿Desea cambiar el día o la fecha de su cita? (sí/no)");

        if (cambiarCita.toLowerCase() === "si") {
            let nuevoDia = prompt("Ingrese el nuevo día de la cita (por ejemplo, Lunes):");
            let nuevaFecha = prompt("Ingrese la nueva fecha de la cita (por ejemplo, 2024-12-20):");
            let nuevaHora = prompt("Ingrese la nueva hora de la cita (por ejemplo, 10:00 AM):");

            // actualizar cita
            paciente.cita.dia = nuevoDia;
            paciente.cita.fecha = nuevaFecha;
            paciente.cita.hora = nuevaHora;

            console.log("¡Cambio exitoso!");
            console.log(`Nueva cita de ${paciente.nombre}:`);
            console.log(`Día: ${paciente.cita.dia}`);
            console.log(`Fecha: ${paciente.cita.fecha}`);
            console.log(`Hora: ${paciente.cita.hora}`);
        } else {
            console.log("No se realizó ningún cambio.");
        }
    } else {
        console.log("Documento no encontrado. Por favor, intente nuevamente.");
    }
}

// solicitar docum
let documentoUsuario = prompt("Ingrese su número de documento para consultar su cita:");
consultarCita(documentoUsuario);

 //   14.'
 console.log('14.');

let productos = [
    { nombre: "Arroz", stock: 20, umbral: 10 },
    { nombre: "Aceite", stock: 5, umbral: 7 },
    { nombre: "Lentejas", stock: 8, umbral: 5 },
    { nombre: "Papa", stock: 30, umbral: 15 }
  ];
  
  function verificarStock() {
    productos.forEach(producto => {
      if (producto.stock < producto.umbral) {
        console.log(`Alerta: El stock de ${producto.nombre} está bajo. Solo quedan ${producto.stock} unidades.`);
      }
    });
  }
  
  function actualizarStock(nombreProducto, cantidad) {
    let producto = productos.find(p => p.nombre === nombreProducto);
  
    if (producto) {
      producto.stock += cantidad;
      console.log(`El stock de ${producto.nombre} ha sido actualizado. Nuevo stock: ${producto.stock}`);
    } else {
      console.log(`Producto ${nombreProducto} no encontrado.`);
    }
  }
  
  verificarStock();
  
  actualizarStock("Aceite", 3); // Sumar 3 unidades
  actualizarStock("Lentejas", -5); // Restar 5 unidades (simula una venta)
  
  verificarStock();
  
   //   15.'
 console.log('15.');

let inventario = [
    { nombre: "Sudadera", categoria: "Ropa Deportiva", precio: 120000, cantidad: 50, codigo: "A123" },
    { nombre: "Pantalón Corto", categoria: "Ropa Casual", precio: 45000, cantidad: 30, codigo: "B456" },
    { nombre: "Camiseta", categoria: "Ropa Casual", precio: 35000, cantidad: 20, codigo: "C789" }
  ];
  
  function verificarCodigoUnico(codigo) {
    return inventario.some(producto => producto.codigo === codigo);
  }
  
  function agregarProducto(nombre, categoria, precio, cantidad, codigo) {
    if (verificarCodigoUnico(codigo)) {
      console.log("Error: El código del producto ya existe. El código debe ser único.");
    } else {
      inventario.push({ nombre, categoria, precio, cantidad, codigo });
      console.log("Producto agregado exitosamente.");
    }
  }
  
  function editarProducto(codigo, nombre, categoria, precio, cantidad) {
    let producto = inventario.find(p => p.codigo === codigo);
    if (producto) {
      producto.nombre = nombre || producto.nombre;
      producto.categoria = categoria || producto.categoria;
      producto.precio = precio || producto.precio;
      producto.cantidad = cantidad || producto.cantidad;
      console.log("Producto editado exitosamente.");
    } else {
      console.log("Producto no encontrado.");
    }
  }
  
  function eliminarProducto(codigo) {
    let index = inventario.findIndex(p => p.codigo === codigo);
    if (index !== -1) {
      inventario.splice(index, 1);
      console.log("Producto eliminado exitosamente.");
    } else {
      console.log("Producto no encontrado.");
    }
  }
  
  function visualizarProductos() {
    if (inventario.length === 0) {
      console.log("No hay productos en el inventario.");
    } else {
      console.log("Inventario de productos:");
      inventario.forEach(producto => {
        console.log(`Código: ${producto.codigo}, Nombre: ${producto.nombre}, Categoría: ${producto.categoria}, Precio: $${producto.precio.toLocaleString('es-CO')}, Cantidad: ${producto.cantidad}`);
      });
    }
  }
  
  console.log("Bienvenido al sistema de gestión de inventario de ropa.");
  
  visualizarProductos();
  
  agregarProducto("Gorra", "Accesorios", 20000, 25, "D012");
  
  agregarProducto("Guantes", "Accesorios", 15000, 30, "A123");
  
  visualizarProductos();
  
  editarProducto("D012", "Gorra", "Accesorios", 25000, 20);
  
  visualizarProductos();
  
  eliminarProducto("B456");
  
  visualizarProductos();
  