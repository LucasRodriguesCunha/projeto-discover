function alterarModo() {
    const html = document.documentElement;
    html.classList.toggle("light");

    // Pegar a tag img
    const img = document.querySelector("#perfil img");

    // Substituir a imagem

    if (html.classList.contains("light")) {
        // Se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "/assets/assets/avatar-light.png");
    } else {
        // Se tiver sem light mode, manter a imagem normal 
        img.setAttribute("src", "/assets/assets/avatar.png");

    }






}