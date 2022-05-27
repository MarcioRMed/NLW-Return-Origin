// .addEventListener('event', function(){})
window.addEventListener('scroll', onScroll)

onScroll()

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    // activateMenuAtCurrentSection(services)

}




function activateMenuAtCurrentSection(section){
    
    // descobre alinha central da tela
    // linha alvo
    const targetLine = scrollY + innerHeight / 2
    
    // topo da seção
    const sectionTop = section.offsetTop    

    // altura da seção
    const sectionHeight = section.offsetHeight
    
    // o topo da seção chegou ou utropassou a linha alvo
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop
    


    // verifica se a base está abaixo da linha alvo
    // quais dados vou precisar?



    // a secao termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    // o final da secao passsou da linha alvo
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    console.log('O fundo da seção passou da linha? ', sectionEndPassedTargetline)















    //===== informações dos dados e da lógica=========
    console.log('inicio do top ', sectionTop)
    console.log('linha alvo ', targetLine)    
    console.log('final do home ', sectionHeight)

 
   console.log('O topo da seção chegou ou passou da linha? ', sectionTopReachOrPassedTargetline)

}


/**
 *  .innerHeight - altura visivel do navegador  
 *  .offsetTop - mostra a posicao do inicio da secção
 * 
// const sectionTop = home.offsetTop    
    const sectionTop = section.offsetTop



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

