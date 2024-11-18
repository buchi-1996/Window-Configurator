import { colors, glassTypes, glazing, handles, profiles, ramTypes, windowFrames } from "./api.js"

// Here we define all variables
let currentMenuItem = 0
let settingsTitle = ''
let basicForm = 'single'
let currentSelectedForm = 0
let currentSelectedProfile = 0
let currentColorTab = 0
let currentSelectedHanlde = 0
let selectedColor = {
    window: 0,
    frame: 0
}

let numOfSingleParts = 1
let currentSelectedSinglePart = 0

let numOfOverLight = 1
let currentSelectedOverlightPart = 0

let numberOfUnderLight = 1
let currentSelectedUnderlightPart = 0

const isSingleFrameAccordionOpen = false
const isOverlightAccordionOpen = false
const isUnderlightAccordionOpen = false

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
        title: 'Construction',
        icon: ` <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
            </span>`,
        content: `<div class="construction">
            <div class="basic-forms">
                <h4>Select basic form<h4/>
                <ul>
                    ${windowFrames.map(frame => (
            `<li class="basic-form" data-id=${frame.title}>
                        <span class="selected">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>                                  
                        </span>
                        <img src=${frame.image} loading="lazy" decoding="sync" alt="" >
                        <small>${frame.title}</small>
                    </li>`
        )).join('')}
                </ul>
            </div>
            <div class="num-of-parts single">
                <h4>Select number of parts (Single)<h4/>
                <div class="parts">
                    <button class="part" data-id='1'>1</button>
                    <button class="part" data-id='2'>2</button>
                    <button class="part" data-id='3'>3</button>
                    <button class="part" data-id='4'>4</button>
                    <button class="part" data-id='5'>5</button>
                </div>
            </div>

            ${basicForm === 'overlight' ? (
                `<div class="num-of-parts overlight">
                <h4>Select number of parts (overlight)<h4/>
                <div class="parts">
                    <button class="part" data-id='1'>1</button>
                    <button class="part" data-id='2'>2</button>
                    <button class="part" data-id='3'>3</button>
                    <button class="part" data-id='4'>4</button>
                    <button class="part" data-id='5'>5</button>
                </div>
            </div>`
            ) : ''}

            ${basicForm === 'underlight' ? (
                `<div class="num-of-parts underlight">
                <h4>Select number of parts (underlight)<h4/>
                <div class="parts">
                    <button class="part" data-id='1'>1</button>
                    <button class="part" data-id='2'>2</button>
                    <button class="part" data-id='3'>3</button>
                    <button class="part" data-id='4'>4</button>
                    <button class="part" data-id='5'>5</button>
                </div>
            </div>`
            ) : ''}

            <div class="ram-types">
                <h4>Opening style<h4/>

                <ul class="accordion-wrap">
                    <li class="accordion-content single-rams">
                    <div class="accordion-content-header handle-accordion-header">
                        <p>Single</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>

                    ${Array.from({ length: numOfSingleParts }, (_, i) => i + 1).map((part) => (
                `<div class="ram-types-box part-${part}">
                    <p>Frame ${part}</p>
                    <div class="rams">
                        ${ramTypes.map(ram => (
                    `<div class="ram">
                            <img src=${ram.image} loading="lazy" decoding="sync" alt="" >
                        </div>`
                )).join('')}
                    </div>
                    
                    
                </div>`
            )).join('')}
            </li>

            ${basicForm === 'overlight' ? (
                `<li class="accordion-content overlight-rams">
                    <div class="accordion-content-header handle-accordion-header">
                        <p>Overlight</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>

                    ${Array.from({ length: numOfOverLight }, (_, i) => i + 1).map((part) => (
                    `<div class="ram-types-box part-${part}">
                    <p>Frame ${part}</p>
                    <div class="rams">
                        ${ramTypes.map(ram => (
                        `<div class="ram">
                            <img src=${ram.image} loading="lazy" decoding="sync" alt="" >
                        </div>`
                    )).join('')}
                    </div>
                    
                    
                </div>`
                )).join('')}
            </li>`
            ) : ''}

            ${basicForm === 'underlight' ? (
                `<li class="accordion-content underlight-rams">
                    <div class="accordion-content-header handle-accordion-header">
                        <p>Underlight</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>

                    ${Array.from({ length: numberOfUnderLight }, (_, i) => i + 1).map((part) => (
                    `<div class="ram-types-box part-${part}">
                    <p>Frame ${part}</p>
                    <div class="rams">
                        ${ramTypes.map(ram => (
                        `<div class="ram">
                            <img src=${ram.image} loading="lazy" decoding="sync" alt="" >
                        </div>`
                    )).join('')}
                    </div>
                    
                    
                </div>`
                )).join('')}
            </li>`
            ) : ''}
            </ul>
        </div>

                
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
        content: `<ul class="accordion-wrap">
                    <li class="accordion-content single-rams">
                    <div class="accordion-content-header handle-accordion-header">
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
            </ul>`
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
                                        <p class="col-a">Catalog</p>
                                        <p class="col-b"> Plastic</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Model</p>
                                        <p class="col-b">TH 2220</p>
                                    </div>
                                </div>
                            </div>
                            <div class="section-data">
                                <h5 class="section-name">Construction</h5>
                                <div class="section-details">
                                    <div class="row section-detail">
                                        <p class="col-a">Door frame</p>
                                        <p class="col-b">Leaf door</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Material</p>
                                        <p class="col-b">Plastic</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Overall dimension</p>
                                        <p class="col-b">1150 x 2220</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Door handle position</p>
                                        <p class="col-b">Left swing</p>
                                    </div>
                                </div>
                            <div class="section-data">
                                <h5 class="section-name">Glass</h5>
                                <div class="section-details">
                                    <div class="row section-detail">
                                        <p class="col-a">Left panel 1</p>
                                        <p class="col-b">clear glass</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Right panel</p>
                                        <p class="col-b">Rough glass</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Door glass</p>
                                        <p class="col-b">Smooth glass</p>
                                    </div>
                                </div>
                            </div>
                            <div class="section-data">
                                <h5 class="section-name">Color & Textures</h5>
                                <div class="section-details">
                                    <div class="row section-detail">
                                        <p class="col-a">Door color</p>
                                        <p class="col-b">Grey</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Frame color</p>
                                        <p class="col-b">Grey</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Door Decor</p>
                                        <p class="col-b">Grey</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Frame Decor</p>
                                        <p class="col-b">Grey</p>
                                    </div>
                                </div>
                            </div>
                            <div class="section-data">
                                <h5 class="section-name">Indoor Color & Textures</h5>
                                <div class="section-details">
                                    <div class="row section-detail">
                                        <p class="col-a">Door color</p>
                                        <p class="col-b">Grey</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Frame color</p>
                                        <p class="col-b">Grey</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Door Decor</p>
                                        <p class="col-b">Grey</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Frame Decor</p>
                                        <p class="col-b">Grey</p>
                                    </div>
                                </div>
                            </div>
                             <div class="section-data">
                                <h5 class="section-name">Handles</h5>
                                <div class="section-details">
                                    <div class="row section-detail">
                                        <p class="col-a">Handle</p>
                                        <p class="col-b">Handle one</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Inner ducker</p>
                                        <p class="col-b">4.130.00 Drücker/Langschild Innen (0784-13-I)</p>
                                    </div>
                                </div>
                            </div>
                            <div class="section-data">
                                <h5 class="section-name">Options</h5>
                                <div class="section-details">
                                    <div class="row section-detail">
                                        <p class="col-a">Pz-Rosette</p>
                                        <p class="col-b">type 1</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Locking</p>
                                        <p class="col-b">Daylatch</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Advanced security</p>
                                        <p class="col-b">Fl01</p>
                                    </div>
                                    <div class="row section-detail">
                                        <p class="col-a">Door viewers</p>
                                        <p class="col-b">Digital Door viewer</p>
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
                updateConstructionTab()
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
            updateConstructionTab()
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
        updateConstructionTab()
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
        updateConstructionTab()
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
    handleSinglePartSelection()
    handleOverlightPartSelection()
    handleUnderlightPartSelection()
    handleBasicFormSelection()
    handleSingleFrameOpening()
    handleOverlightFrameOpening()
    handleUnderlightFrameOpening()
    handleProfileSelection()
    handleColorTabs()
    handleKeyHandleSelections()
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


const updateConstructionTab = () => {
    const construction = document.querySelectorAll('.construction')

    construction.forEach(item => {
        item.innerHTML = `
        <div class="basic-forms">
            <h4>Select basic form<h4/>
            <ul>
                ${windowFrames.map(frame => (
            `<li class="basic-form" data-id=${frame.title}>
                    <span class="selected">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>                                  
                    </span>
                    <img src=${frame.image} loading="lazy" decoding="sync" alt="" >
                    <small>${frame.title}</small>
                </li>`
        )).join('')}
            </ul>
        </div>
        <div class="num-of-parts single">
            <h4>Select number of parts (Single)<h4/>
            <div class="parts">
                    <button class="part" data-id='1'>1</button>
                    <button class="part" data-id='2'>2</button>
                    <button class="part" data-id='3'>3</button>
                    <button class="part" data-id='4'>4</button>
                    <button class="part" data-id='5'>5</button>
                </div>
        </div>

        ${basicForm === 'overlight' ? (
                `<div class="num-of-parts overlight">
            <h4>Select number of parts (overlight)<h4/>
            <div class="parts">
                    <button class="part" data-id='1'>1</button>
                    <button class="part" data-id='2'>2</button>
                    <button class="part" data-id='3'>3</button>
                    <button class="part" data-id='4'>4</button>
                    <button class="part" data-id='5'>5</button>
                </div>
        </div>`
            ) : ''}

        ${basicForm === 'underlight' ? (
                `<div class="num-of-parts underlight">
            <h4>Select number of parts (underlight)<h4/>
            <div class="parts">
                    <button class="part" data-id='1'>1</button>
                    <button class="part" data-id='2'>2</button>
                    <button class="part" data-id='3'>3</button>
                    <button class="part" data-id='4'>4</button>
                    <button class="part" data-id='5'>5</button>
                </div>
        </div>`
            ) : ''}

        <div class="ram-types">
                <h4>Opening style<h4/>

                <ul class="accordion-wrap">
                    <li class="accordion-content single-rams">
                    <div class="accordion-content-header handle-accordion-header">
                        <p>Single</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>

                    ${Array.from({ length: numOfSingleParts }, (_, i) => i + 1).map((part) => (
                `<div class="ram-types-box part-${part}">
                    <p>Frame ${part}</p>
                    <div class="rams">
                        ${ramTypes.map(ram => (
                    `<div class="ram">
                            <img src=${ram.image} loading="lazy" decoding="sync" alt="" >
                        </div>`
                )).join('')}
                    </div>
                    
                    
                </div>`
            )).join('')}
            </li>

            ${basicForm === 'overlight' ? (
                `<li class="accordion-content overlight-rams">
                    <div class="accordion-content-header handle-accordion-header">
                        <p>Overlight</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>

                    ${Array.from({ length: numOfOverLight }, (_, i) => i + 1).map((part) => (
                    `<div class="ram-types-box part-${part}">
                    <p>Frame ${part}</p>
                    <div class="rams">
                        ${ramTypes.map(ram => (
                        `<div class="ram">
                            <img src=${ram.image} loading="lazy" decoding="sync" alt="" >
                        </div>`
                    )).join('')}
                    </div>
                    
                    
                </div>`
                )).join('')}
            </li>`
            ) : ''}

            ${basicForm === 'underlight' ? (
                `<li class="accordion-content underlight-rams">
                    <div class="accordion-content-header handle-accordion-header">
                        <p>Underlight</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </div>

                    ${Array.from({ length: numberOfUnderLight }, (_, i) => i + 1).map((part) => (
                    `<div class="ram-types-box part-${part}">
                    <p>Frame ${part}</p>
                    <div class="rams">
                        ${ramTypes.map(ram => (
                        `<div class="ram">
                            <img src=${ram.image} loading="lazy" decoding="sync" alt="" >
                        </div>`
                    )).join('')}
                    </div>
                    
                    
                </div>`
                )).join('')}
            </li>`
            ) : ''}
            </ul>
        </div>

                
        </div>`
    })



}

const handleBasicFormSelection = () => {

    if (settingsTitle.toLowerCase() === 'construction') {
        const formsDesktop = document.querySelectorAll('.tools_sidebar-content .basic-form')
        const formsMobile = document.querySelectorAll('.mobile_tools-bar .basic-form')



        formsDesktop[currentSelectedForm].classList.add('active')
        formsMobile[currentSelectedForm].classList.add('active')

        const formChange = (form, index) => {
            formsDesktop.forEach(form => form.classList.remove('active'))
            formsMobile.forEach(form => form.classList.remove('active'))
            form.classList.add('active')
            currentSelectedForm = index;
            basicForm = form.dataset.id.toLowerCase()
            console.log(basicForm);
            updateConstructionTab()
            getCurrentToolsBarContent()

            formsDesktop.forEach((form) => {
                form.removeEventListener('click', handleFormChangeDesktop)
            })

            formsMobile.forEach((form) => {
                form.removeEventListener('click', handleFormChangeMobile)
            })

        }

        const handleFormChangeDesktop = (e) => {
            let form = e.target

            while (form && !form.classList.contains('basic-form')) {
                form = form.parentElement;
            }
            if (form) {
                const index = Array.from(formsDesktop).indexOf(form);
                formChange(form, index)
            }
        }

        const handleFormChangeMobile = (e) => {
            let form = e.target

            while (form && !form.classList.contains('basic-form')) {
                form = form.parentElement;
            }
            if (form) {
                const index = Array.from(formsMobile).indexOf(form);
                formChange(form, index)
            }
        }


        formsDesktop.forEach((form, index) => {
            form.addEventListener('click', handleFormChangeDesktop)
        })
        formsMobile.forEach((form, index) => {
            form.addEventListener('click', handleFormChangeMobile)
        })



    }


}


const handleSinglePartSelection = () => {

    if (settingsTitle.toLowerCase() === 'construction') {

        const singlePartDesktop = document.querySelectorAll('.tools_sidebar-content .single .part')
        const singlePartMobile = document.querySelectorAll('.mobile_tools-bar .single .part')


        singlePartDesktop[currentSelectedSinglePart].classList.add('active')
        singlePartMobile[currentSelectedSinglePart].classList.add('active')

        singlePartDesktop.forEach((part, index) => {
            part.addEventListener('click', () => {
                singlePartDesktop.forEach(part => part.classList.remove('active'))
                part.classList.add('active')
                const numOfParts = part.dataset.id
                numOfSingleParts = numOfParts
                currentSelectedSinglePart = index;
                updateConstructionTab()
                getCurrentToolsBarContent()
            })
        })



        const partChange = (part, index) => {
            singlePartDesktop.forEach(part => part.classList.remove('active'))
            singlePartMobile.forEach(part => part.classList.remove('active'))
            part.classList.add('active')
            const numOfParts = part.dataset.id
            numOfSingleParts = numOfParts
            currentSelectedSinglePart = index;
            updateConstructionTab()
            getCurrentToolsBarContent()

            singlePartDesktop.forEach((part) => {
                part.removeEventListener('click', handlePartChangeDesktop)
            })

            singlePartMobile.forEach((part) => {
                part.removeEventListener('click', handlePartChangeMobile)
            })

        }

        const handlePartChangeDesktop = (e) => {
            let part = e.target
            const index = Array.from(singlePartDesktop).indexOf(part);
            partChange(part, index)
        }


        const handlePartChangeMobile = (e) => {
            let part = e.target
            const index = Array.from(singlePartMobile).indexOf(part);
            partChange(part, index)
        }


        singlePartDesktop.forEach((part, index) => {
            part.addEventListener('click', handlePartChangeDesktop)
        })
        singlePartMobile.forEach((part, index) => {
            part.addEventListener('click', handlePartChangeMobile)
        })

    }

}

const handleOverlightPartSelection = () => {

    if (settingsTitle.toLowerCase() === 'construction' && basicForm === 'overlight') {

        const overlightPartDesktop = document.querySelectorAll('.tools_sidebar-content .overlight .part')
        const overlightPartMobile = document.querySelectorAll('.mobile_tools-bar .overlight .part')

        overlightPartDesktop[currentSelectedOverlightPart].classList.add('active')
        overlightPartMobile[currentSelectedOverlightPart].classList.add('active')

        overlightPartDesktop.forEach((part, index) => {
            part.addEventListener('click', () => {
                overlightPartDesktop.forEach(part => part.classList.remove('active'))
                part.classList.add('active')
                const numOfParts = part.dataset.id
                numOfOverLight = numOfParts
                currentSelectedOverlightPart = index;
                updateConstructionTab()
                getCurrentToolsBarContent()
            })
        })



        const partChange = (part, index) => {
            overlightPartDesktop.forEach(part => part.classList.remove('active'))
            overlightPartMobile.forEach(part => part.classList.remove('active'))
            part.classList.add('active')
            const numOfParts = part.dataset.id
            numOfOverLight = numOfParts
            currentSelectedOverlightPart = index;
            updateConstructionTab()
            getCurrentToolsBarContent()

            overlightPartDesktop.forEach((part) => {
                part.removeEventListener('click', handlePartChangeDesktop)
            })

            overlightPartMobile.forEach((part) => {
                part.removeEventListener('click', handlePartChangeMobile)
            })

        }

        const handlePartChangeDesktop = (e) => {
            let part = e.target
            const index = Array.from(overlightPartDesktop).indexOf(part);
            partChange(part, index)
        }


        const handlePartChangeMobile = (e) => {
            let part = e.target
            const index = Array.from(overlightPartMobile).indexOf(part);
            partChange(part, index)
        }


        overlightPartDesktop.forEach((part, index) => {
            part.addEventListener('click', handlePartChangeDesktop)
        })
        overlightPartMobile.forEach((part, index) => {
            part.addEventListener('click', handlePartChangeMobile)
        })

    }

}


const handleUnderlightPartSelection = () => {

    if (settingsTitle.toLowerCase() === 'construction' && basicForm === 'underlight') {

        const underlightPartDesktop = document.querySelectorAll('.tools_sidebar-content .underlight .part')
        const underlightPartMobile = document.querySelectorAll('.mobile_tools-bar .underlight .part')

        underlightPartDesktop[currentSelectedUnderlightPart].classList.add('active')
        underlightPartMobile[currentSelectedUnderlightPart].classList.add('active')

        underlightPartDesktop.forEach((part, index) => {
            part.addEventListener('click', () => {
                underlightPartDesktop.forEach(part => part.classList.remove('active'))
                part.classList.add('active')
                const numOfParts = part.dataset.id
                numberOfUnderLight = numOfParts
                currentSelectedUnderlightPart = index;
                updateConstructionTab()
                getCurrentToolsBarContent()
            })
        })



        const partChange = (part, index) => {
            underlightPartDesktop.forEach(part => part.classList.remove('active'))
            underlightPartMobile.forEach(part => part.classList.remove('active'))
            part.classList.add('active')
            const numOfParts = part.dataset.id
            numberOfUnderLight = numOfParts
            currentSelectedUnderlightPart = index;
            updateConstructionTab()
            getCurrentToolsBarContent()

            underlightPartDesktop.forEach((part) => {
                part.removeEventListener('click', handlePartChangeDesktop)
            })

            underlightPartMobile.forEach((part) => {
                part.removeEventListener('click', handlePartChangeMobile)
            })

        }

        const handlePartChangeDesktop = (e) => {
            let part = e.target
            const index = Array.from(underlightPartDesktop).indexOf(part);
            partChange(part, index)
        }


        const handlePartChangeMobile = (e) => {
            let part = e.target
            const index = Array.from(underlightPartMobile).indexOf(part);
            partChange(part, index)
        }


        underlightPartDesktop.forEach((part, index) => {
            part.addEventListener('click', handlePartChangeDesktop)
        })
        underlightPartMobile.forEach((part, index) => {
            part.addEventListener('click', handlePartChangeMobile)
        })

    }

}


const handleSingleFrameOpening = () => {
    // Handle frame 1 selection
    if (settingsTitle.toLowerCase() === 'construction') {

        const handleFrame1RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .single-rams .part-1 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .single-rams .part-1 .ram')


            // set rams for frame 1
            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachSingleFrame.frame1Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachSingleFrame.frame1Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachSingleFrame.frame1Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachSingleFrame.frame1Ram = index
                })
            })

        }

        const handleFrame2RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .single-rams .part-2 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .single-rams .part-2 .ram')


            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachSingleFrame.frame2Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachSingleFrame.frame2Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachSingleFrame.frame2Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachSingleFrame.frame2Ram = index
                })
            })


        }

        const handleFrame3RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .single-rams .part-3 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .single-rams .part-3 .ram')


            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachSingleFrame.frame3Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachSingleFrame.frame3Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachSingleFrame.frame3Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachSingleFrame.frame3Ram = index
                })
            })


        }

        const handleFrame4RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .single-rams .part-4 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .single-rams .part-4 .ram')


            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachSingleFrame.frame3Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachSingleFrame.frame3Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachSingleFrame.frame3Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachSingleFrame.frame3Ram = index
                })
            })


        }

        const handleFrame5RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .single-rams .part-5 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .single-rams .part-5 .ram')


            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachSingleFrame.frame5Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachSingleFrame.frame5Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachSingleFrame.frame5Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachSingleFrame.frame5Ram = index
                })
            })


        }


        handleFrame1RamSelect()
        handleFrame2RamSelect()
        handleFrame3RamSelect()
        handleFrame4RamSelect()
        handleFrame5RamSelect()
    }
}



const handleOverlightFrameOpening = () => {
    // Handle frame 1 selection
    if (settingsTitle.toLowerCase() === 'construction') {

        const handleFrame1RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .overlight-rams .part-1 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .overlight-rams .part-1 .ram')

            // set rams for frame 1
            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachOverlightFrame.frame1Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachOverlightFrame.frame1Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachOverlightFrame.frame1Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachOverlightFrame.frame1Ram = index
                })
            })

        }

        const handleFrame2RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .overlight-rams .part-2 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .overlight-rams .part-2 .ram')


            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachOverlightFrame.frame2Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachOverlightFrame.frame2Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachOverlightFrame.frame2Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachOverlightFrame.frame2Ram = index
                })
            })


        }

        const handleFrame3RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .overlight-rams .part-3 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .overlight-rams .part-3 .ram')


            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachOverlightFrame.frame3Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachOverlightFrame.frame3Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachOverlightFrame.frame3Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachOverlightFrame.frame3Ram = index
                })
            })


        }

        const handleFrame4RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .overlight-rams .part-4 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .overlight-rams .part-4 .ram')


            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachOverlightFrame.frame3Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachOverlightFrame.frame3Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachOverlightFrame.frame3Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachOverlightFrame.frame3Ram = index
                })
            })


        }

        const handleFrame5RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .overlight-rams .part-5 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .overlight-rams .part-5 .ram')


            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachOverlightFrame.frame5Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachOverlightFrame.frame5Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachOverlightFrame.frame5Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsTypesForEachOverlightFrame.frame5Ram = index
                })
            })


        }


        handleFrame1RamSelect()
        handleFrame2RamSelect()
        handleFrame3RamSelect()
        handleFrame4RamSelect()
        handleFrame5RamSelect()
    }
}


const handleUnderlightFrameOpening = () => {
    // Handle frame 1 selection
    if (settingsTitle.toLowerCase() === 'construction') {

        const handleFrame1RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .underlight-rams .part-1 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .underlight-rams .part-1 .ram')


            // set rams for frame 1
            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachUnderlightFrame.frame1Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsMobile[index].classList.add('active')
                    ramsTypesForEachUnderlightFrame.frame1Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachUnderlightFrame.frame1Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsDesktop[index].classList.add('active')
                    ramsTypesForEachUnderlightFrame.frame1Ram = index
                })
            })

        }

        const handleFrame2RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .underlight-rams .part-2 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .underlight-rams .part-2 .ram')


            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachUnderlightFrame.frame2Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsMobile[index].classList.add('active')
                    ramsTypesForEachUnderlightFrame.frame2Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachUnderlightFrame.frame2Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsDesktop[index].classList.add('active')
                    ramsTypesForEachUnderlightFrame.frame2Ram = index
                })
            })


        }

        const handleFrame3RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .underlight-rams .part-3 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .underlight-rams .part-3 .ram')


            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachUnderlightFrame.frame3Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsMobile[index].classList.add('active')
                    ramsTypesForEachUnderlightFrame.frame3Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachUnderlightFrame.frame3Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsDesktop[index].classList.add('active')
                    ramsTypesForEachUnderlightFrame.frame3Ram = index
                })
            })


        }

        const handleFrame4RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .underlight-rams .part-4 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .underlight-rams .part-4 .ram')


            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachUnderlightFrame.frame3Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsMobile[index].classList.add('active')
                    ramsTypesForEachUnderlightFrame.frame3Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachUnderlightFrame.frame3Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsDesktop[index].classList.add('active')
                    ramsTypesForEachUnderlightFrame.frame3Ram = index
                })
            })


        }

        const handleFrame5RamSelect = () => {
            const ramsDesktop = document.querySelectorAll('.tools_sidebar-content .underlight-rams .part-5 .ram')
            const ramsMobile = document.querySelectorAll('.mobile_tools-bar .underlight-rams .part-5 .ram')


            ramsDesktop.forEach((ram, index) => {
                ramsDesktop[ramsTypesForEachUnderlightFrame.frame5Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsMobile[index].classList.add('active')
                    ramsTypesForEachUnderlightFrame.frame5Ram = index
                })
            })
            ramsMobile.forEach((ram, index) => {
                ramsMobile[ramsTypesForEachUnderlightFrame.frame5Ram].classList.add('active')
                ram.addEventListener('click', () => {
                    ramsMobile.forEach(ram => ram.classList.remove('active'))
                    ramsDesktop.forEach(ram => ram.classList.remove('active'))
                    ram.classList.add('active')
                    ramsDesktop[index].classList.add('active')
                    ramsTypesForEachUnderlightFrame.frame5Ram = index
                })
            })


        }


        handleFrame1RamSelect()
        handleFrame2RamSelect()
        handleFrame3RamSelect()
        handleFrame4RamSelect()
        handleFrame5RamSelect()
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
                console.log(colorButtonsDesktop);
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
    if(settingsTitle.toLowerCase() === 'handles'){

            const handleButtonsDesktop = document.querySelectorAll('.tools_sidebar .handles .handle')
            const handleButtonsMobile = document.querySelectorAll('.mobile_tools-bar .handles .handle')

            handleButtonsDesktop.forEach((handle, index) => {
                handleButtonsDesktop[currentSelectedHanlde].classList.add('active')
                handle.addEventListener('click', () => {
                    handleButtonsDesktop.forEach(handle => handle.classList.remove('active'))
                    handleButtonsMobile.forEach(handle => handle.classList.remove('active'))
                    handle.classList.add('active')
                    handleButtonsMobile[index].classList.add('active')
                    currentSelectedHanlde = index
                })
            })


            handleButtonsMobile.forEach((handle, index) => {
                handleButtonsMobile[currentSelectedHanlde].classList.add('active')
                handle.addEventListener('click', () => {
                    handleButtonsMobile.forEach(handle => handle.classList.remove('active'))
                    handleButtonsDesktop.forEach(handle => handle.classList.remove('active'))
                    handle.classList.add('active')
                    handleButtonsDesktop[index].classList.add('active')
                    currentSelectedHanlde = index
                })
            })

    }
}