
// criei uma função chamada rotação.

function rotation(){
    const html = document.documentElement
    html.classList.toggle("luz")

    // aqui estou pegando a tag img pelo seletor.
    const img = document.querySelector(".profile img")

    // aqui estou substituindo a imagem - rotation
    //usando a condição IF e ELSE

    // se tiver luz mode, adicionar a imagem luz rotation
    // senao, tiver luz, manter a imagem normal

    if (html.classList.contains("luz")) {

        img.setAttribute("src", "./assets/img-black.jpg")
      } else {
       
        img.setAttribute("src", "./assets/img-white.jpg")
      }
}