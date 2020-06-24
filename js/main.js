// var option = document.querySelector('.option')
var menu = document.querySelector('.menu')

// option.addEventListener('click', fechar())

function fechar () {

    if( menu.style.visibility == 'hidden' ){        

        menu.style.visibility = 'block'

    }else{

        menu.style.visibility = 'hidden'

    }
}