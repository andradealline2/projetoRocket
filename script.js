function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if(html.classList.contains('light')){
  //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar_2.png")
  }else {
    img.setAttribute("src", "./assets/avatar_2.png")
  }





  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }else {
  //   html.classList.add('light')
  // }


  
  

  
  

}