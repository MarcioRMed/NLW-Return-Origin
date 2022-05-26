// .addEventListener('event', function(){})
window.addEventListener('scroll', onScroll)

onScroll()

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()
}

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

