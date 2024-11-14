const burgerMenu = document.querySelector(".burger-menu");
const CloseSidebarButton = document.querySelector(".close-sidebar");

burgerMenu.addEventListener("click", toggleSidebar);

function toggleSidebar ()
{
    const sideBar = document.querySelector(".sidebar");
    let sideBarDisplay = window.getComputedStyle(sideBar).display;

    if(sideBarDisplay === "flex")
    {
        
        sideBar.style.display = "none";
    }
    else if(sideBarDisplay === "none")
    {
        burgerMenu.removeEventListener("click", toggleSidebar);
        sideBar.style.display = "flex";
    }
}

CloseSidebarButton.addEventListener("click" , (event) => {
    const sideBar = document.querySelector(".sidebar");

    let sideBarDisplay = window.getComputedStyle(sideBar).display;

    if(sideBarDisplay === "flex")
    {
        burgerMenu.addEventListener("click", toggleSidebar);
        sideBar.style.display = "none";
    }
    
});