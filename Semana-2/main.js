// Simula un login con usuario y contraseña predefinidos.

// - Usuario correcto: `"admin"`
// - Contraseña correcta: `"1234"`

//  Pide al usuario que los ingrese y muestra si el acceso es concedido o denegado.

//1
// const usuario = "admin";
// const password = "1234";

// let usuarioIngresado = prompt("Ingrese su usuario");
// let passwordIngresado = prompt("Ingrese su contraseña");

// while (usuarioIngresado != usuario || passwordIngresado != password) {
//     alert("Usuario o contraseña incorrectos");
//     usuarioIngresado = prompt("Ingrese su usuario");
//     passwordIngresado = prompt("Ingrese su contraseña");
// }

// alert("Bienvenido " + usuarioIngresado + ", has ingresado correctamente.");

//2
// let usuarioDos = prompt("Ingrese el nombre de usuario")
// let passwordDos = prompt("Ingrese la contraseña")

// if(usuario == "admin" && password == 1234) {
//     alert("Bienvenido Admin")
// } else {
//     alert("Acceso denegado")
// }

//3

// const usuarioCorrecto = "admin";

// const contrasenaCorrecta = "1234";

// const usuarioPrompt = prompt("Usuario:");
// const contrasenaPrompt = prompt("Ingrese la contraseña:");

// if (usuarioPrompt === usuarioCorrecto && usuarioPrompt === contrasenaCorrecta) {
//     alert("Bienvenido!");
// } else {
//     alert("Hacé memoria.");
// }

//4

// const user1 ="admin";
// const pass1 = 1234;

// let userIngreso = prompt("ingrese su usuario");
// let passIngreso = prompt("ingrese contraseña ")

// if ( user1 == userIngreso && pass1 == passIngreso) {
// console.log('Ingreso correctamente');

// }else {

// console.log('Usuario o contraseña incorrecto');
// }

const usuarioCorrecto = "admin"
const passCorrecto = "1234"

let usuarioPrompt = prompt("Usuario:");
let contrasenaPrompt = prompt("Ingrese la contraseña:");
let seLogeo = false

let bandera = true

while(bandera){
    if(usuarioCorrecto === usuarioPrompt && passCorrecto === contrasenaPrompt){
        bandera = false
        seLogeo = true
        alert("Usted entro de manera correcta a su cuenta")
    }else{
        alert("Su contraseña esta mal, o su usuario")
        let quiereSeguir = confirm("¿Quiere seguir intentando?")
        if(!quiereSeguir){
            bandera = false
        }else{
            usuarioPrompt = prompt("Usuario:");
            contrasenaPrompt = prompt("Ingrese la contraseña:");
        }
    }
}

if(seLogeo){
    let valorInicia = Number(prompt("Con cuanto dinero quiere arrancar?"))

    if(isNaN(valorInicia)){
        valorInicia = null
    }

    bandera = true
    let limiteCuenta = 50000
    let saldo = valorInicia ?? -1
    let saldoEnPesos = 0
    let numeroAxu = 0
    let deuda = 0
    let menuText = "Bienvenidos a Coder Bank:\n 1- Ver saldo\n 2- Depositar\n 3- Retirar\n 4- Prestamo \n 5- Ver Deuda \n 6- Pagar deuda \n 7- Ver saldo en pesos \n 8- Ver deuda en pesos \n 9- Comprar pesos \n 0- Salir "

    while(bandera){
        let menu = Number(prompt(menuText))

        while(isNaN(menu)){
            alert("Te pedi numeros y me mandaste cualqueir cosa.")
            menu = Number(prompt(menuText))
        }

        switch (menu) {
            case 1:
                alert(`Su saldo es ${saldo.toFixed(2)}`)
                break;
            case 2:
                numeroAxu = Number(prompt("¿Cuanto quiere ingresar?"))

                while(isNaN(numeroAxu) || numeroAxu < 0 || numeroAxu + saldo > limiteCuenta){
                    alert("El valor es invalido")
                    numeroAxu = Number(prompt("¿Cuanto quiere ingresar?"))
                }

                //saldo = saldo + numeroAxu

                saldo += numeroAxu
                break;
            case 3:
                numeroAxu = Number(prompt("¿Cuanto quiere retirar?"))

                while(isNaN(numeroAxu) || numeroAxu < 0 || numeroAxu > saldo){
                    alert("El valor es invalido")
                    numeroAxu = Number(prompt("¿Cuanto quiere retirar?"))
                }

                saldo -= numeroAxu
                break;
            case 4:
                numeroAxu = Number(prompt("¿Cuanto quiere pedir prestado?"))

                while(isNaN(numeroAxu) || numeroAxu < 0 || numeroAxu > 5000 || numeroAxu + saldo > limiteCuenta){
                    alert("El valor es invalido")
                    numeroAxu = Number(prompt("¿Cuanto quiere pedir prestado?"))
                }

                saldo += numeroAxu
                deuda += numeroAxu * 1.4
                break;
            case 5:
                alert(`Su deuda es de: ${deuda.toFixed(2)} :D`)
                break;
            case 6:
                alert(`Su deuda es de: ${deuda.toFixed(2)} :D`)
                numeroAxu = Number(prompt("¿Cuanto quiere pagar de su deuda?"))

                while(isNaN(numeroAxu) || numeroAxu < 0 || numeroAxu > saldo){
                    alert("El valor es invalido")
                    numeroAxu = Number(prompt("¿Cuanto quiere pagar de su deuda?"))
                }

                saldo -= numeroAxu
                deuda -= numeroAxu

                break;
            case 7:
                alert(`Su cuenta en pesos es de: ${(saldo * 1200).toFixed(2)}`)

                break
            case 8:
                alert(`Su deuda en pesos es de: ${(deuda * 1200).toFixed(2)}`)

                break
            case 9:

                numeroAxu = Number(prompt("¿Cuantos sucios dolares quiere pasar a grandes pesos?"))

                while(isNaN(numeroAxu) || numeroAxu < 0){
                    alert("El valor es invalido")
                    numeroAxu = Number(prompt("¿Cuantos sucios dolares quiere pasar a grandes pesos?"))
                }

                let numeroAxuPesos = numeroAxu * 1200

                alert(`Su dolares se trasformaron en ${numeroAxuPesos.toFixed(2)} pesos, la mejor moneda de mundo.`)

                saldoEnPesos += numeroAxuPesos
                break
            case 0:
                alert("¡Nos vemos!")
                bandera = false
                break;
            default:
                alert("Me ejecuto si es otro numero")
                break;
        }
    }
}