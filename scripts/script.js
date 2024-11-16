// TITLE : DOM ELEMENTS
const burgerMenu = document.querySelector(".burger-menu");
const CloseSidebarButton = document.querySelector(".close-sidebar");
const switchers = document.querySelectorAll(".switch");
console.log(switchers)

// TITLE : EVENT LISTENERS
burgerMenu.addEventListener("click", toggleSidebar);



// -SUB EVENT LISTENERS- HANDLER TO CLOSE THE SIDEBAR
CloseSidebarButton.addEventListener("click" , (event) => {
    const sideBar = document.querySelector(".sidebar");

    let sideBarDisplay = window.getComputedStyle(sideBar).display;

    if(sideBarDisplay === "flex")
    {
        burgerMenu.addEventListener("click", toggleSidebar);
        sideBar.style.display = "none";
    }
});

// -SUB EVENT LISTENERS- HANDLERS FOR SWITCHERS TESTIMONIALS
switchers.forEach(switcher => {
    switcher.addEventListener("click" , () => {
        removeSwitchActClass(event.target , switchers);
        const testimonials = document.querySelectorAll(".testimonial-card")
        toggleTestimonials(event.target , testimonials);

    })
});

// TITLE : FUNCTIONS

// -SUB FUNCTION- FUNCTION TO CHANGE BETWEEN TESTIMONIALS
function toggleTestimonials(targetedSwitch , testimonials)
{
    const targetedValue = targetedSwitch.dataset.name;

    testimonials.forEach(testimonial => {
        if(testimonial.id === targetedValue)
        {
            testimonial.style.display = "block";
        }
        else
        {
            testimonial.style.display = "none";
        }
    });
}
// -SUB FUNCTIONS- FUNCTION TO REMOVE SWITCH-ACTIVE CLASS FROM NOT CLICKED BUTTONS
function removeSwitchActClass (targetedSwitch , switchers)
{
    const targetedValue = targetedSwitch.dataset.name

    switchers.forEach(switcher => {
        if (targetedValue == switcher.dataset.name)
        {
            switcher.classList.add("switch-active");
        }
        else
        {
            switcher.classList.remove("switch-active");
        } 
    });
}

// -SUB FUNCTIONS- FUNCTION FOR THE BURGER MENU
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