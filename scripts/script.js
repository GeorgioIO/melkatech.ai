// TITLE : DOM ELEMENTS
const burgerMenu = document.querySelector(".burger-menu");
const CloseSidebarButton = document.querySelector(".close-sidebar");
const switchers = document.querySelectorAll(".switch");
const triangles = document.querySelectorAll(".triangle");
const togglerImage = document.querySelector(".toggler")
const upToggler = document.querySelector(".up")

// TITLE : EVENT LISTENERS
burgerMenu.addEventListener("click", toggleSidebar);


// -SUB EVENT LISTENERS- HANDLE THE UP TOGGLER
upToggler.addEventListener("click" , (event) => {
    window.scroll({
        top : 0,
        behavior : 'smooth'
    });
});

// -SUB EVENT LISTENERS- HANDLE THE THEME TOGGLER 
togglerImage.addEventListener("click" , (event) => {
    let imageSrc = event.target.getAttribute("src");
    const socialProofs = document.querySelectorAll(".past-work-logo-container img");
    
    if(imageSrc === "./images/icons8-moon-50.png")
    {
        event.target.setAttribute("src" , "./images/icons8-sun-30.png");
        document.documentElement.setAttribute('data-theme', "light");
        socialProofs.forEach(image => {
            const imageDataName = image.getAttribute("data-name");
            toggleSocialProofsDark(image , imageDataName);
        });
    }
    else
    {
        event.target.setAttribute("src" , "./images/icons8-moon-50.png");
        document.documentElement.setAttribute('data-theme', "dark");
        socialProofs.forEach(image => {
            const imageDataName = image.getAttribute("data-name");
            toggleSocialProofsLight(image , imageDataName);
        });

    }
});


// -SUB EVENT LISTENERS- HANDLER THE FAQ TOGGLER
triangles.forEach(triangle => {
    triangle.addEventListener("click" , (event) => {
        triangle.classList.toggle("rotate-triangle");
    
        const faqParent = event.target.closest(".faq");
        console.log(faqParent)
        const faqText = faqParent.querySelector(".faq-text");
        console.log(faqText)
        const faqTextState = window.getComputedStyle(faqText).display;
        console.log(faqTextState)
    
        if(faqTextState === "block")
        {
            faqText.style.display = "none";
        }
        else
        {
            faqText.style.display = "block"; 
        }
    })
});


// -SUB EVENT LISTENERS- HANDLER TO CLOSE THE SIDEBAR
CloseSidebarButton.addEventListener("click" , (event) => {
    const sideBar = document.querySelector(".sidebar");
    if (!sideBar) {
        console.error("Sidebar element not found!");
    }
    
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

// -SUB FUNCTION- FUNCTION TO CHANGE SOCIAL PROOFS URL
function toggleSocialProofsDark(image , imageName)
{
    switch (imageName)
    {
        case "cai":
            image.setAttribute("src" , "./images/icons8-character-ai-50-dark.png");
            break;
        case "paradox":
            image.setAttribute("src" , "./images/icons8-paradox-ai-50-dark.png");
            break;
        case "otter":
            image.setAttribute("src" , "./images/icons8-otter-ai-50-dark.png");
            break;
        case "candy":
            image.setAttribute("src" , "./images/icons8-candy-ai-50-dark.png");
            break;
        case "perplexity":
            image.setAttribute("src" , "./images/icons8-perplexity-ai-50-dark.png");
            break;
        case "invedio":
            image.setAttribute("src" , "./images/icons8-invideo-ai-50-dark.png");
            break;
    }
}

function toggleSocialProofsLight(image , imageName)
{
    switch (imageName)
    {
        case "cai":
            image.setAttribute("src" , "./images/social-proof-1.png");
            break;
        case "paradox":
            image.setAttribute("src" , "./images/social-proof-2.png");
            break;
        case "otter":
            image.setAttribute("src" , "./images/social-proof-3.png");
            break;
        case "candy":
            image.setAttribute("src" , "./images/social-proof-4.png");
            break;
        case "perplexity":
            image.setAttribute("src" , "./images/social-proof-5.png");
            break;
        case "invedio":
            image.setAttribute("src" , "./images/social-proof-6.png");
            break;
    }
}

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