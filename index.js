/* <div><p>A</p></div>  */

const container = document.querySelector('.word')
const lifesDiv = document.querySelector('.lifes')
const oportunidades = document.querySelector('.oportunidades')
let lifes = 6





const words = [
    {
        word: "VIKINGO",
    },
    {
        word: "ROTONDA",
    },
    {
        word: "JAVASCRIPT"
    },
    {
        word: "BIOMEDICINA"
    },
    {
        word: "EXPERIENCIA"
    },
    {
        word: "TRABAJO"
    },
    {
        word: "COMERCIO"
    },
    {
        word: "AUTOMOVIL"
    },
    {
        word: "FUTBOL"
    },
    {
        word: "VIDEOJUEGO"
    },
    {
        word: "DISFRAZ"
    }

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
    acumWord = ''
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
        swal("Oops", "Te equivocaste :(", "error")

        if (lifes > 0){

            lifes = lifes - 1
            lifesDiv.innerHTML += 
            `<div class="col-md-2"><p>X</p></div>`
            
            oportunidades.innerHTML = `¡ Te quedan ${lifes} oportunidades !`
        }else{
            swal("Oops", "Perdiste :(", "error")

        }

    }

}