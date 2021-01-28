if (window.SimpleSlide) {
    new SimpleSlide({
        slide: "quote", //nome do atributo data-slide="principal"
        time: 5000 //tempo de transição do slide
    })
    new SimpleSlide({
        slide: "portfolio", //nome do atributo data-slide="principal"
        time: 5000, //tempo de transição do slide
        nav: true
    })
}

new SimpleAnime();