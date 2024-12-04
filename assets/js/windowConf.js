import { colors, glassTypes, glazing, handles, profiles, ramTypes, windowFrames } from "./api.js"

// Here we define all variables
let currentMenuItem = 0
let settingsTitle = ''
let basicForm = 'single'
let currentSelectedForm = 0
let currentSelectedProfile = 0
let currentColorTab = 0
let currentSelectedHandle = 0
let currentSelectedGlassType = 0
let currentSelectedGlazing = 0
let selectedColor = {
    window: 0,
    frame: 0
}

let currentSelectedWindowFrame = 0

let numOfSingleParts = 1
let currentSelectedSinglePart = 0

let numOfOverLight = 1
let currentSelectedOverlightPart = 0

let numberOfUnderLight = 1
let currentSelectedUnderlightPart = 0


let ramsTypesForEachSingleFrame = {
    frame1Ram: 0,
    frame2Ram: 0,
    frame3Ram: 0,
    frame4Ram: 0,
    frame5Ram: 0,
}

let ramsTypesForEachOverlightFrame = {
    frame1Ram: 0,
    frame2Ram: 0,
    frame3Ram: 0,
    frame4Ram: 0,
    frame5Ram: 0,
}

let ramsTypesForEachUnderlightFrame = {
    frame1Ram: 0,
    frame2Ram: 0,
    frame3Ram: 0,
    frame4Ram: 0,
    frame5Ram: 0,
}



const sidebarSettingsModal = document.querySelector('.tools_sidebar')
const modalWrapper = document.querySelector('.conf_sidebar_wrapper')
const sidebarModalContents = document.querySelector('.tools_sidebar-content')
const closeSettingsModalBtn = document.querySelector('.settings-close-btn')
const desktopMenuItems = document.querySelector('.conf_sidebar_menu');
const prevMenu = document.querySelectorAll('.prev-btn');
const nextMenu = document.querySelectorAll('.next-btn');
const getQuoteDesktop = document.querySelector('.summary');





const mobileMenuItems = document.querySelector('.mobile_menu-items ');
const mobileMenu = document.querySelector('.mobile_menu');
const mobileMenuToggle = document.querySelector('.conf_mobile_menu-toggle')
const mobileModalContents = document.querySelector('.mobile_tools-bar')
const mobileSettingsTitle = document.querySelector('.mobile_settings_title')

// Window Menus
const windowItemMenus = [

    {
        id: 0,
        title: 'Profile',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>`,
        content: `
             
             <ul class="profiles">
                ${profiles.map(profile => (
            `<li class="profile ">
                    <span class="selected">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>                                  
                    </span>
                   <div><img src=${profile.image} loading="lazy" decoding="sync" alt=${profile.title}></div>
                    <small>${profile.title}</small>
                </li>`
        )).join('')}
             </ul>`
    },
    {
        id: 1,
        title: 'Window frames',
        icon: ` <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
            </span>`,
        content: `<div class="windows">
                <ul class="window-frames">
                    ${windowFrames.map((frame, index)=> (
            `<li class="window-frame " data-id=${index}>
                        <span class="selected">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>                                  
                        </span>
                        <img src=${frame.image} loading="lazy" decoding="sync" alt=${frame.title} >
                        <small>${frame.title}</small>
                    </li>`
        )).join('')}
                </ul>
        </div>`
    },
    {
        id: 2,
        title: 'Dimension',
        icon: `<span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                    </svg>
                </span>`,
        content: `
        <div class="units">
                        <form class="units-form">
                            <div class="window-units unit-box">
                            <span>Window units:</span>
                                <div class="form-group">
                                    <input type="number" id="window-width" placeholder="Width">
                                </div>
                                <div class="form-group">
                                    <input type="number" id="window-height" placeholder="Height">
                                </div>
                            </div>`
    },
    {
        id: 3,
        title: 'Colors',
        icon: `<span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                    </svg>
                </span>`,
        content: `
        
        <div class="color-tabs">
                            <div class="color-tab-buttons">
                                <button>Window</button>
                                <button>Frame</button>  
                            </div>
                            <div class="color-tab-contents"></div>
                        </div>
                </div>
        `
    },
    {
        id: 4,
        title: 'Handles',
        icon: `<span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                    </svg>
                </span>`,
        content: `<ul class="handles">
                        ${handles.map((handle, index) => (
            `<li data-id=${index} class='handle'>
                                            <span class="selected">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                </svg>                                  
                                            </span>
                                            <img src="${handle.image}" loading="lazy" decoding="async" alt="${handle.title}">
                                            <small>${handle.title}</small>
                                        </li>`
        )).join('')}            
                </ul>`

    },
    {
        id: 5,
        title: 'Glass',
        icon: `<span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                </svg>

                </span>`,
        content: `<div class="glass">
            <ul class="accordion-wrap">
                    <li class="accordion-content">
                    <div class="accordion-content-header">
                        <p>Glass Type</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>

                  <div class="glass-types">
                        ${glassTypes.map((glassType, index) => (
            `<div class="glass-type" data-id=${index}>
                            <span class="selected">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>                                  
                        </span>
                            <img src=${glassType.image} loading="lazy" decoding="sync" alt="" >
                        <small>${glassType.title}</small>
                        </div>`
        )).join('')}
                </div>
            </li>
            <li class="accordion-content">
                    <div class="accordion-content-header handle-accordion-header">
                        <p>Glazing</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>
                    <div class="glazings">
                        ${glazing.map((glazing, index) => (
            `<div class="glazing" data-id=${index}>
                            <span class="selected">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>                                  
                        </span>
                            <img src=${glazing.image} loading="lazy" decoding="sync" alt="" >
                        <small>${glazing.title}</small>
                        </div>`
        )).join('')}
                </div>
            </li>
            </ul>
        </div>`
    },
    {
        id: 6,
        title: 'Done',
        icon: `<span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                    </svg>
                </span>`,
        content: `<div class="summary_wrapper">
                        <div class="download_pdf">
                            <p>Get a summary of all your selections on a PDF with images included.</p>
                            <button class="btn btn-outline">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </span>
                                <p>Download PDF</p>
                            </button>
                        </div>
                        <div class="data-container">
                                <div class="section-data">
                                <h5 class="section-name">Your configuration</h5>
                                <div class="section-details">
                                    <div class="row section-detail">
                                        <p class="col-a">Profile</p>
                                        <p class="col-b">${profiles[currentSelectedProfile].title}</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Window type</p>
                                        <p class="col-b">${windowFrames[currentSelectedWindowFrame].title}</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Handle</p>
                                        <p class="col-b">${handles[currentSelectedHandle].title}</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Dimension</p>
                                        <p class="col-b">1000 x 2000</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="section-data">
                                <h5 class="section-name">Colors</h5>
                                <div class="section-details">
                                    <div class="row section-detail">
                                        <p class="col-a">Window</p>
                                        <p class="col-b"><span class="color_indicator" style="background: ${colors[selectedColor.window].code}"></span>${colors[selectedColor.window].Ralcode}</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Frame</p>
                                        <p class="col-b"><span class="color_indicator" style="background: ${colors[selectedColor.frame].code}"></span>${colors[selectedColor.frame].Ralcode}</p>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div class="section-data">
                                <h5 class="section-name">Glass</h5>
                                <div class="section-details">
                                    <div class="row section-detail">
                                        <p class="col-a">Glass type</p>
                                        <p class="col-b">${glassTypes[currentSelectedGlassType].title}</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Glazing</p>
                                        <p class="col-b">${glazing[currentSelectedGlazing].title}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="summary-buttons">
                                <button class="summary-get-quote">Get a quote</button>
                                <button class="summary-add-to-cart">Add to cart</button>
                            </div>
                        </div>
                        
                  </div>
                </div>`
    },

]


// Initialize App
const intializeApp = () => {
    displayMenuItems()
    handleDynamicMenuButtonClick()
    loadEventListeners()
    getCurrentToolsBarContent()
    showMobileSettingsModal('Profile', 0)
}

// All events
const loadEventListeners = () => {
    mobileMenuToggle.addEventListener('click', handleMobilemenuToggle)
    closeSettingsModalBtn.addEventListener('click', closeSettingsModal)
    prevMenu.forEach(btn => {
        btn.addEventListener('click', handlePrevClick)
    })

    nextMenu.forEach(btn => {
        btn.addEventListener('click', handleNextClick)
    })


    getQuoteDesktop.addEventListener('click', () => {
        const doorDoneMenu = windowItemMenus.length - 1
        handleGetQuote(doorDoneMenu)

    })

    
}


document.addEventListener('DOMContentLoaded', intializeApp);






// Show available menu Items
const displayMenuItems = () => {
    desktopMenuItems.innerHTML = windowItemMenus.map(menu => (
        `<li class="sidebar_menu-item" data-id="${menu.id}">
                <div>
                    ${menu.icon}
                    <span>${menu.title}</span>
                </div>
                <span class="point-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </span>
            </li>`
    )).join('')


    mobileMenuItems.innerHTML = windowItemMenus.map(menu => (
        `<li class="mobile_menu-item" data-id="${menu.id}">
                <div>
                    ${menu.icon}
                    <span>${menu.title}</span>
                </div>
                <span class="point-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </span>
            </li>`
    )).join('')
}


// Handle menu click
const handleDynamicMenuButtonClick = () => {
    desktopMenuItems.addEventListener('click', (e) => {

        let button = e.target;

        // Traverse up the DOM to find the nearest element with the class 'sidebar_menu-item'
        while (button && !button.classList.contains('sidebar_menu-item')) {
            button = button.parentElement;
        }

        if (button) {
            // Remove the 'active' class from all currently active menu items
            const desktopActiveItems = desktopMenuItems.querySelectorAll('.sidebar_menu-item');
            desktopActiveItems.forEach(item => item.classList.remove('active'));


            currentMenuItem = +button.dataset.id;
            closeSettingsModal();

            settingsTitle = button.children[0].lastElementChild.textContent;
            button.classList.add('active');
            modalWrapper.classList.add('showModal');


            setTimeout(() => {
                showSettingsModal(settingsTitle, currentMenuItem);
                showMobileSettingsModal(settingsTitle, currentMenuItem);
                getCurrentToolsBarContent()
            }, 40);
            // Change active states for desktop responsive screens
            const mobileActiveItems = mobileMenu.querySelectorAll('.mobile_menu-item');
            mobileActiveItems.forEach(item => item.classList.remove('active'));
            mobileActiveItems[currentMenuItem].classList.add('active')

        }
    });

    mobileMenu.addEventListener('click', (e) => {
        let button = e.target;

        // Traverse up the DOM to find the nearest element with the class 'sidebar_menu-item'
        while (button && !button.classList.contains('mobile_menu-item')) {
            button = button.parentElement;
        }

        if (button) {
            // Remove the 'active' class from all currently active menu items
            handleMobilemenuToggle()
            const mobileActiveItems = mobileMenu.querySelectorAll('.mobile_menu-item');
            mobileActiveItems.forEach(item => item.classList.remove('active'));

            currentMenuItem = +button.dataset.id;

            settingsTitle = button.children[0].lastElementChild.textContent;
            button.classList.add('active');

            showMobileSettingsModal(settingsTitle, currentMenuItem)
            showSettingsModal(settingsTitle, currentMenuItem)
            getCurrentToolsBarContent()


            // Change active states for desktop responsive screens
            const desktopActiveItems = desktopMenuItems.querySelectorAll('.sidebar_menu-item');
            desktopActiveItems.forEach(item => item.classList.remove('active'));
            desktopActiveItems[currentMenuItem].classList.add('active')


            modalWrapper.classList.add('showModal')
        }
    });
}

// Toggle mobile menu
const handleMobilemenuToggle = (e) => {
    mobileMenu.classList.toggle('show_mobile_menu')
}

// Show slide in modal for desktop
const showSettingsModal = (title, id) => {

    sidebarModalContents.scrollTop = 0;
    sidebarSettingsModal.firstElementChild.firstElementChild.innerText = title

    windowItemMenus.forEach((menu) => {
        if (menu.id === id) {
            sidebarModalContents.innerHTML = menu.content
        }
    })


    sidebarSettingsModal.classList.add('showModal')
}


// Show slide in modal for mobile
const showMobileSettingsModal = (title, id) => {
    mobileModalContents.scrollTop = 0;
    mobileSettingsTitle.innerText = title


    windowItemMenus.forEach((menu) => {
        if (menu.id === id) {
            mobileModalContents.innerHTML = menu.content
        }
    })


}

const closeSettingsModal = () => {
    document.querySelectorAll('.sidebar_menu-item').forEach(btn => btn.classList.remove('active'));

    sidebarSettingsModal.classList.remove('showModal')
    modalWrapper.classList.remove('showModal')
}

const handleGetQuote = (doorDoneMenu) => {
    settingsTitle = 'Done'
    showSettingsModal('Done', doorDoneMenu)
    showMobileSettingsModal('Done', doorDoneMenu)

    sidebarSettingsModal.classList.remove('showModal')

    setTimeout(() => {
        modalWrapper.classList.add('showModal')
        sidebarSettingsModal.classList.add('showModal')

    }, 40)
    getCurrentToolsBarContent()
    const desktopActiveItems = desktopMenuItems.querySelectorAll('.sidebar_menu-item');
    desktopActiveItems.forEach(btn => btn.classList.remove('active'));
    desktopActiveItems[doorDoneMenu].classList.add('active')
    currentMenuItem = doorDoneMenu;
}

const handlePrevClick = () => {
    const desktopActiveItems = desktopMenuItems.querySelectorAll('.sidebar_menu-item');

    if (currentMenuItem <= 0) return;
    currentMenuItem--
    settingsTitle = desktopActiveItems[currentMenuItem].children[0].lastElementChild.textContent
    sidebarSettingsModal.classList.remove('showModal')


    setTimeout(() => {
        showSettingsModal(settingsTitle, currentMenuItem)
        showMobileSettingsModal(settingsTitle, currentMenuItem)
        getCurrentToolsBarContent()
    }, 40);

    desktopActiveItems.forEach(item => item.classList.remove('active'));
    desktopActiveItems[currentMenuItem].classList.add('active')

    // Change active states for mobile responsive screens
    const mobileActiveItems = mobileMenu.querySelectorAll('.mobile_menu-item');
    mobileActiveItems.forEach(item => item.classList.remove('active'));
    mobileActiveItems[currentMenuItem].classList.add('active')


}

const handleNextClick = () => {
    const desktopActiveItems = desktopMenuItems.querySelectorAll('.sidebar_menu-item');
    const menuLength = desktopActiveItems.length - 1
    if (currentMenuItem >= menuLength) return;
    currentMenuItem++
    console.log(currentMenuItem);
    settingsTitle = desktopActiveItems[currentMenuItem].children[0].lastElementChild.textContent

    sidebarSettingsModal.classList.remove('showModal')

    setTimeout(() => {
        showSettingsModal(settingsTitle, currentMenuItem)
        showMobileSettingsModal(settingsTitle, currentMenuItem)
        getCurrentToolsBarContent()

    }, 40);

    desktopActiveItems.forEach(item => item.classList.remove('active'));
    desktopActiveItems[currentMenuItem].classList.add('active')

    // Change active states for mobile responsive screens
    const mobileActiveItems = mobileMenu.querySelectorAll('.mobile_menu-item');
    mobileActiveItems.forEach(item => item.classList.remove('active'));
    mobileActiveItems[currentMenuItem].classList.add('active')

}


const getCurrentToolsBarContent = () => {
    toggleAccordion()
    handleProfileSelection()
    handleColorTabs()
    handleKeyHandleSelections()
    handleGlassSelection()
    handleWindowFrameSelection()
    handleSelectionSummary()
    // showGetQuoteModal()
}


const toggleAccordion = () => {
    const accordionWrapper = document.querySelectorAll('.accordion-content');
    const accordionButton = document.querySelectorAll('.accordion-content-header');
    const headerSvg = document.querySelectorAll('.accordion-content-header span svg');

    accordionButton.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Close all other accordions
            accordionWrapper.forEach((item, i) => {
                if (i !== index) {
                    item.classList.remove('open');
                }
            });
            headerSvg.forEach((item, i) => {
                if (i !== index) {
                    item.classList.remove('open');
                }
            });

            // Toggle the clicked accordion
            accordionWrapper[index].classList.toggle('open');
            headerSvg[index].classList.toggle('open');
        });
    });
};


const handleWindowFrameSelection = () => {
    if(settingsTitle.toLowerCase() === 'window frames'){
        const frameDesktop = document.querySelectorAll('.tools_sidebar-content .window-frames .window-frame')
        const frameMobile = document.querySelectorAll('.mobile_tools-bar .window-frames .window-frame')

        frameDesktop.forEach((frame, index) => {
            frameDesktop[currentSelectedWindowFrame].classList.add('active')
            frame.addEventListener('click', () => {
                frameDesktop.forEach(frame => frame.classList.remove('active'))
                frameMobile.forEach(frame => frame.classList.remove('active'))
                frame.classList.add('active')
                frameMobile[index].classList.add('active')
                currentSelectedWindowFrame = index
            })
        })

        frameMobile.forEach((frame, index) => {
            frameMobile[currentSelectedWindowFrame].classList.add('active')
            frame.addEventListener('click', () => {
                frameMobile.forEach(frame => frame.classList.remove('active'))
                frameDesktop.forEach(frame => frame.classList.remove('active'))
                frame.classList.add('active')
                frameDesktop[index].classList.add('active')
                currentSelectedWindowFrame = index
            })
        })

    }
}


const handleProfileSelection = () => {
    if (sidebarModalContents && sidebarModalContents.firstElementChild &&
        sidebarModalContents.firstElementChild.classList.contains('profiles') || mobileModalContents && mobileModalContents.firstElementChild &&
        mobileModalContents.firstElementChild.classList.contains('profiles')) {

        const profilesDesktop = document.querySelectorAll('.tools_sidebar-content .profiles .profile')
        const profilesMobile = document.querySelectorAll('.mobile_tools-bar .profiles .profile')

        profilesDesktop.forEach((profile, index) => {
            profilesDesktop[currentSelectedProfile].classList.add('active')
            profile.addEventListener('click', () => {
                profilesDesktop.forEach(profile => profile.classList.remove('active'))
                profilesMobile.forEach(profile => profile.classList.remove('active'))
                profile.classList.add('active')
                profilesMobile[index].classList.add('active')
                currentSelectedProfile = index
            })
        })

        profilesMobile.forEach((profile, index) => {
            profilesMobile[currentSelectedProfile].classList.add('active')
            profile.addEventListener('click', () => {
                profilesMobile.forEach(profile => profile.classList.remove('active'))
                profilesDesktop.forEach(profile => profile.classList.remove('active'))
                profile.classList.add('active')
                profilesDesktop[index].classList.add('active')
                currentSelectedProfile = index
            })
        })
    }
}


const handleColorTabs = () => {
    if (settingsTitle.toLowerCase() === 'colors') {
        const tabButtonsDesktop = document.querySelectorAll('.tools_sidebar-content .color-tab-buttons button');
        const tabButtonsMobile = document.querySelectorAll('.mobile_tools-bar .color-tab-buttons button');

        const tabContentsDesktop = document.querySelectorAll('.tools_sidebar-content .color-tab-contents');
        const tabContentsMobile = document.querySelectorAll('.mobile_tools-bar .color-tab-contents');




        const loadTabContent = (tabIndex) => {
            if (tabButtonsDesktop.length > 0 && tabContentsDesktop.length > 0) {
                tabContentsDesktop.forEach(tabContent => {
                    tabContent.innerHTML = '';

                    const content = tabButtonsDesktop[tabIndex].innerText.trim().toLowerCase() === 'window' ? (` <ul class="colors window-colors">
                                    ${colors.map((color, index) => (
                        `<li class="color" style="background: ${color.code}">
                                    <span class="selected">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>                                  
                                    </span>
                                    <small>${color.Ralcode}</small>
                                </li>`
                    )).join('')}
                                </ul>`) : (` <ul class="colors frame-colors">
                                    ${colors.map((color, index) => (
                        `<li class="color" style="background: ${color.code}">
                                    <span class="selected">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>                                  
                                    </span>
                                    <small>${color.Ralcode}</small>
                                </li>`
                    )).join('')}
                                </ul>`);

                    tabContent.innerHTML = `${content}`;
                });
            }

            if (tabButtonsMobile.length > 0 && tabContentsMobile.length > 0) {
                tabContentsMobile.forEach(tabContent => {
                    tabContent.innerHTML = '';

                    const content = tabButtonsDesktop[tabIndex].innerText.trim().toLowerCase() === 'window' ? (` <ul class="colors window-colors">
                                    ${colors.map((color, index) => (
                        `<li class="color" style="background: ${color.code}">
                                    <span class="selected">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>                                  
                                    </span>
                                    <small>${color.Ralcode}</small>
                                </li>`
                    )).join('')}
                                </ul>`) : (` <ul class="colors frame-colors">
                        ${colors.map((color, index) => (
                        `<li class="color" style="background: ${color.code}">
                        <span class="selected">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>                                  
                        </span>
                        <small>${color.Ralcode}</small>
                    </li>`
                    )).join('')}
                    </ul>`);


                    tabContent.innerHTML = `${content}`;
                });
            }
        };

        const handleTabButtonChange = (button, index) => {
            console.log('loaded');
            tabButtonsDesktop.forEach(btn => btn.classList.remove('active'));
            tabButtonsMobile.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentColorTab = index;
            loadTabContent(currentColorTab);
            getCurrentToolsBarContent();

            // Remove event listeners before adding new ones
            tabButtonsDesktop.forEach((button) => {
                button.removeEventListener('click', handleDesktopClick);
            });
            tabButtonsMobile.forEach((button) => {
                button.removeEventListener('click', handleMobileClick);
            });
        };


        const handleDesktopClick = (e) => {
            const button = e.target;
            const index = Array.from(tabButtonsDesktop).indexOf(button);
            handleTabButtonChange(button, index);
        };

        const handleMobileClick = (e) => {
            const button = e.target;
            const index = Array.from(tabButtonsMobile).indexOf(button);
            handleTabButtonChange(button, index);
        };

        // Add event listeners
        tabButtonsDesktop.forEach((button) => {
            tabButtonsDesktop[currentColorTab].classList.add('active');
            tabButtonsMobile[currentColorTab].classList.add('active');
            button.addEventListener('click', handleDesktopClick);
        });


        tabButtonsMobile.forEach((button) => {
            tabButtonsDesktop[currentColorTab]?.classList.add('active');
            tabButtonsMobile[currentColorTab]?.classList.add('active');
            button.addEventListener('click', handleMobileClick);
        });


        const handleWindowColorClick = () => {

            if (currentColorTab === 0) {
                const colorButtonsDesktop = document.querySelectorAll('.tools_sidebar .window-colors .color')
                const colorButtonsMobile = document.querySelectorAll('.mobile_tools-bar .window-colors .color')
                if (colorButtonsDesktop) {
                    colorButtonsDesktop[selectedColor.window].classList.add('active')


                    colorButtonsDesktop.forEach((color, index) => {
                        color.addEventListener('click', () => {
                            colorButtonsDesktop.forEach(btn => btn.classList.remove('active'))
                            colorButtonsMobile.forEach(btn => btn.classList.remove('active'))
                            color.classList.add('active')
                            colorButtonsMobile[index].classList.add('active')
                            selectedColor.window = index

                        })
                    })
                }

                if (colorButtonsMobile) {
                    colorButtonsMobile[selectedColor.window].classList.add('active')


                    colorButtonsMobile.forEach((color, index) => {
                        color.addEventListener('click', () => {
                            colorButtonsMobile.forEach(btn => btn.classList.remove('active'))
                            colorButtonsDesktop.forEach(btn => btn.classList.remove('active'))
                            color.classList.add('active')
                            colorButtonsDesktop[index].classList.add('active')
                            selectedColor.window = index

                        })
                    })
                }
            }

        }

        const handleFrameColorClick = () => {

            if (currentColorTab === 1) {
                const colorButtonsDesktop = document.querySelectorAll('.tools_sidebar .frame-colors .color')
                const colorButtonsMobile = document.querySelectorAll('.mobile_tools-bar .frame-colors .color')
                console.log(colorButtonsDesktop);

                if (colorButtonsDesktop) {
                    colorButtonsDesktop[selectedColor.frame].classList.add('active')


                    colorButtonsDesktop.forEach((color, index) => {
                        color.addEventListener('click', () => {
                            colorButtonsDesktop.forEach(btn => btn.classList.remove('active'))
                            colorButtonsMobile.forEach(btn => btn.classList.remove('active'))
                            color.classList.add('active')
                            colorButtonsMobile[index].classList.add('active')
                            selectedColor.frame = index

                        })
                    })
                }

                if (colorButtonsMobile) {
                    colorButtonsMobile[selectedColor.frame].classList.add('active')


                    colorButtonsMobile.forEach((color, index) => {
                        color.addEventListener('click', () => {
                            colorButtonsMobile.forEach(btn => btn.classList.remove('active'))
                            colorButtonsDesktop.forEach(btn => btn.classList.remove('active'))
                            color.classList.add('active')
                            colorButtonsDesktop[index].classList.add('active')
                            selectedColor.frame = index

                        })
                    })
                }
            }

        }



        loadTabContent(currentColorTab)
        handleWindowColorClick()
        handleFrameColorClick()
    }
}


const handleKeyHandleSelections = () => {
    if (settingsTitle.toLowerCase() === 'handles') {

        const handleButtonsDesktop = document.querySelectorAll('.tools_sidebar .handles .handle')
        const handleButtonsMobile = document.querySelectorAll('.mobile_tools-bar .handles .handle')

        handleButtonsDesktop.forEach((handle, index) => {
            handleButtonsDesktop[currentSelectedHandle].classList.add('active')
            handle.addEventListener('click', () => {
                handleButtonsDesktop.forEach(handle => handle.classList.remove('active'))
                handleButtonsMobile.forEach(handle => handle.classList.remove('active'))
                handle.classList.add('active')
                handleButtonsMobile[index].classList.add('active')
                currentSelectedHandle = index
            })
        })


        handleButtonsMobile.forEach((handle, index) => {
            handleButtonsMobile[currentSelectedHandle].classList.add('active')
            handle.addEventListener('click', () => {
                handleButtonsMobile.forEach(handle => handle.classList.remove('active'))
                handleButtonsDesktop.forEach(handle => handle.classList.remove('active'))
                handle.classList.add('active')
                handleButtonsDesktop[index].classList.add('active')
                currentSelectedHandle = index
            })
        })

    }
}



const handleGlassSelection = () => {
    if (settingsTitle.toLowerCase() === 'glass') {
        // handle glass types
        // handle glazing

        const handleGlassType = () => {
            const glassButtonDesktop = document.querySelectorAll('.tools_sidebar .glass-types .glass-type')
            const glassButtonMobile = document.querySelectorAll('.mobile_tools-bar .glass-types .glass-type')

            glassButtonDesktop.forEach((glassType, index) => {
                glassButtonDesktop[currentSelectedGlassType].classList.add('active')
                glassType.addEventListener('click', () => {
                    glassButtonDesktop.forEach(glassType => glassType.classList.remove('active'))
                    glassButtonMobile.forEach(glassType => glassType.classList.remove('active'))
                    glassType.classList.add('active')
                    glassButtonMobile[index].classList.add('active')
                    currentSelectedGlassType = index
                })
            })

            glassButtonMobile.forEach((glassType, index) => {
                glassButtonMobile[currentSelectedGlassType].classList.add('active')
                glassType.addEventListener('click', () => {
                    glassButtonMobile.forEach(glassType => glassType.classList.remove('active'))
                    glassButtonDesktop.forEach(glassType => glassType.classList.remove('active'))
                    glassType.classList.add('active')
                    glassButtonDesktop[index].classList.add('active')
                    currentSelectedGlassType = index
                })
            })

        }

        const handleGlazing = () => {
            const glazButtonDesktop = document.querySelectorAll('.tools_sidebar .glazings .glazing')
            const glazButtonMobile = document.querySelectorAll('.mobile_tools-bar .glazings .glazing')


            glazButtonDesktop.forEach((glaz, index) => {
                glazButtonDesktop[currentSelectedGlazing].classList.add('active')
                glaz.addEventListener('click', () => {
                    glazButtonDesktop.forEach(glaz => glaz.classList.remove('active'))
                    glazButtonMobile.forEach(glaz => glaz.classList.remove('active'))
                    glaz.classList.add('active')
                    glazButtonMobile[index].classList.add('active')
                    currentSelectedGlazing = index
                })
            })

            glazButtonMobile.forEach((glaz, index) => {
                glazButtonMobile[currentSelectedGlazing].classList.add('active')
                glaz.addEventListener('click', () => {
                    glazButtonMobile.forEach(glaz => glaz.classList.remove('active'))
                    glazButtonDesktop.forEach(glaz => glaz.classList.remove('active'))
                    glaz.classList.add('active')
                    glazButtonDesktop[index].classList.add('active')
                    currentSelectedGlazing = index
                })
            })

        }

        handleGlassType()
        handleGlazing()
    }
}

const handleSelectionSummary = () => {
    if(settingsTitle.toLowerCase() === 'done'){
        const doneTab = document.querySelectorAll('.summary_wrapper')


        doneTab.forEach(item => {
            return item.innerHTML = `<div class="download_pdf">
                            <p>Get a summary of all your selections on a PDF with images included.</p>
                            <button class="btn btn-outline">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                </span>
                                <p>Download PDF</p>
                            </button>
                        </div>
                        <div class="data-container">
                                <div class="section-data">
                                <h5 class="section-name">Your configuration</h5>
                                <div class="section-details">
                                    <div class="row section-detail">
                                        <p class="col-a">Profile</p>
                                        <p class="col-b">${profiles[currentSelectedProfile].title}</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Window type</p>
                                        <p class="col-b">${windowFrames[currentSelectedWindowFrame].title}</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Handle</p>
                                        <p class="col-b">${handles[currentSelectedHandle].title}</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Dimension</p>
                                        <p class="col-b">1000 x 2000</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="section-data">
                                <h5 class="section-name">Colors</h5>
                                <div class="section-details">
                                    <div class="row section-detail">
                                        <p class="col-a">Window</p>
                                        <p class="col-b"><span class="color_indicator" style="background: ${colors[selectedColor.window].code}"></span>${colors[selectedColor.window].Ralcode}</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Frame</p>
                                        <p class="col-b"><span class="color_indicator" style="background: ${colors[selectedColor.frame].code}"></span>${colors[selectedColor.frame].Ralcode}</p>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div class="section-data">
                                <h5 class="section-name">Glass</h5>
                                <div class="section-details">
                                    <div class="row section-detail">
                                        <p class="col-a">Glass type</p>
                                        <p class="col-b">${glassTypes[currentSelectedGlassType].title}</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Glazing</p>
                                        <p class="col-b">${glazing[currentSelectedGlazing].title}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="summary-buttons">
                                <button class="summary-get-quote">Get a quote</button>
                                <button class="summary-add-to-cart">Add to cart</button>
                            </div>
                        </div>
                        
                  </div>`
        })
    }
}