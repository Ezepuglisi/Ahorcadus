/* <div><p>A</p></div>  */

const container = document.querySelector('.word')
const lifesDiv = document.querySelector('.lifes')
const oportunidades = document.querySelector('.oportunidades')
let lifes = 6





const words = [
    {
        word: "IDEAS"
    },
    {
        word: "HELICE"
    },
    {
        word: "VIENTO"
    },
    {
        word: "MOVIMIENTO"
    },
    {
        word: "BURBUJA"
    },
    {
        word: "ASPAS"
    },
    {
        word: "DISEÑO"
    },
    {
        word: "PROGRAMACION"
    },
    {
        word: "ANIMACION"
    },
    {
        word: "VIDEOJUEGO"
    },

]



function renderDivs(choice) {
    let acumDiv = ``
    let numOfDivs = choice.word.length

    for (let i = 0; i < numOfDivs; i++) {
        let div = `<div><p class="letter">${choice.word[i]}</p></div>`
        acumDiv += div

    }

    container.innerHTML = acumDiv
}

function play() {
    //acumWord = ''
    let option = words[Math.floor(Math.random() * words.length)]

    renderDivs(option)
    let myWord = option.word

    /* GENERAMOS LOS BOTONES CON SU EVENTO*/
    const buttons = document.getElementsByTagName('button')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            if(buttons[i].textContent == "OK" && buttons[i].textContent.length == 0){
                console.log(document.querySelector('#completeWord').value.length)
                searchCoincidence(document.querySelector('#completeWord').value,myWord)
            }else{
                searchCoincidence(buttons[i].textContent, myWord)
            }
        })

    }


}

play()


function searchCoincidence(letter, word) { 


    if (letter === word) {
        swal("Good job!", "You clicked the button!", "success");
    } else if (word.includes(letter)) {
        let p = document.querySelectorAll('.letter')
        for (let i = 0; i < p.length; i++) {
            if (p[i].textContent == letter) {
                p[i].style.display = "block"
            }
        }

    } else {
        answerGameOver(lifes)
        
    }

}


const answerGameOver = (life) =>{
    console.log(lifes)
    if(life == 1){
        isGameOver()
        document.querySelectorAll('.btn-letter').forEach((btn) => {
            btn.disabled = true
        })
    }else{
        isNotGameOver()
    }
}

const isGameOver = () =>{
    Swal.fire({
        title: 'Perdiste :(',
        text: "¿Quieres volver a intentarlo?",
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, juguemos de nuevo!'
      }).then((result) => {
        if (result.isConfirmed) {
          location.reload()
        }
      })

    play()
}

const isNotGameOver = () =>{

    Toastify({
        text: "Letra incorrecta",
        className: "error",
        style: {
          background: "red",
        },
        gravity:"bottom"
      }).showToast();

        lifes = lifes - 1
        lifesDiv.innerHTML += 
        `<div class="col-md-2"><p>X</p></div>`
        
        oportunidades.innerHTML = `¡ Te quedan ${lifes} oportunidades !`
    
}