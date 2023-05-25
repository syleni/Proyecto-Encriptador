
var outputText = document.getElementById("output-text");
var msgInicial = document.getElementById("msgbox-text");
var botonCopiar = document.getElementById("btn-copy");


function convertirMsg() {
    var mayus = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`áéíóúàèìòù']/g;
    var inputText = document.getElementById("input-text").value;
    
    if (!inputText) {
        alert("Ingresa el texto que desees encriptar o desencriptar.");
            
        } else if (inputText.match(mayus) != inputText.match(mayus) || inputText.match(caracteres) != inputText.match(caracteres)) {
            alert("Solo se aceptan letras minúsculas y sin acentos. El mensaje no puede contener acentos ni caracteres especiales")
            } 
            else {
                var msgConvertido = inputText.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
                document.getElementById("output-text").value = msgConvertido;
                msgInicial.style.display = "none";
                botonCopiar.style.display = "block";
                outputText.style.display = "block";
        }

    
}

function desconvertirMsg() {
    var inputText = document.getElementById("input-text").value;
    var msgDesconvertido = inputText.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("output-text").value = msgDesconvertido;
}

function copiarMsg() {
    var textoCopiado = document.getElementById("output-text");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiado.value);
}



/*function validarMsg() {
    var mayus = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    var inputText = document.getElementById("input-text").value;
    
    if(!inputText) {
        textoValido = false;
        alert("Escribe tu mensaje.")
        } else if(mayus.test(inputText) && caracteres.test(inputText)){ 
            textoValido = false;
            alert("Solo letras minúsculas y sin acentos.")
        } else {
            textoValido = true;
            }
                }*/
    