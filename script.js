function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open")
    icon.classList.toggle("open")

    if(icon.classList.contains("open")){
        icon.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="4rem" width="4rem" xmlns="http://www.w3.org/2000/svg"><path d="M878.6 230.6L793.4 145.4c-3.1-3.1-8.2-3.1-11.3 0L512 415.6 241.9 145.4c-3.1-3.1-8.2-3.1-11.3 0L145.4 230.6c-3.1 3.1-3.1 8.2 0 11.3L415.6 512 145.4 782.1c-3.1 3.1-3.1 8.2 0 11.3l85.2 85.2c3.1 3.1 8.2 3.1 11.3 0L512 608.4l270.1 270.1c3.1 3.1 8.2 3.1 11.3 0l85.2-85.2c3.1-3.1 3.1-8.2 0-11.3L608.4 512 878.6 241.9c3.1-3.1 3.1-8.2 0-11.3z"></path></svg>';
    }else{
        icon.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="4rem" width="4rem" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>'
    }
}