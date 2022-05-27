// .addEventListener('event', function(){})
window.addEventListener('scroll', onScroll)

onScroll()

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection()

}




function activateMenuAtCurrentSection(){
    
    // descobre alinha central da tela
    const targetLine = scrollY + innerHeight / 2

    console.log(targetLine)

    // verifica se a seção passsou da linha
    // quais dados vou precisar?
    const sectionTop = home.offsetTop
    
    const sectionHeight = home.offsetHeight
    
    console.log(' altura total section = final do home ' + sectionHeight)
    
    
    
    
    console.log('inicio do top ' + sectionTop) //


}


/**
 *  .innerHeight - altura visivel do navegador  
 *  .offsetTop - mostra a posicao do inicio da secção
 * 




 */

























function showNavOnScroll(){
    if (scrollY > 0){
        navigation.classList.add('scroll')         
    } else {
        navigation.classList.remove('scroll')
    }

}

function showBackToTopButtonOnScroll(){
    // console.log(scrollY) //mostra a posicao scroll da tela
    if (scrollY > 500){
        backToTopButton.classList.add('show')         
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

// Animação SrollReveal - lib

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content,
    #about img`);

