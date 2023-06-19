const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

const linkTags = document.querySelectorAll('nav a')
const firstLink = document.querySelector('a')
const secondLink = firstLink.nextElementSibling
const thirdLink = secondLink.nextElementSibling
const fourthLink = thirdLink.nextElementSibling
const fifthLink = fourthLink.nextElementSibling
const sixthLink = fifthLink.nextElementSibling

const greatIdeaLogo = document.querySelector('img')

const firstSectionH1 = document.querySelector('.cta h1') 
const firstSectionButton = document.querySelector('.cta button')
const ctaImg= document.querySelector('#cta-img')

const codeImg = document.querySelector('.middle-img')

const textContentH4 = document.querySelector('.text-content h4')
const textContentP = document.querySelector('.text-content p')
const secondTextContentH4 = document.querySelector('.text-content:nth-of-type(2) h4')
const secondTextContentP = document.querySelector('.text-content:nth-of-type(2) p')
const thirdTextContentH4 = document.querySelector('.text-content:nth-of-type(3) h4')
const thirdTextContentP = document.querySelector('.text-content:nth-of-type(3) p')
const fourthTextContentH4 = document.querySelector('.bottom-content .text-content h4')
const fourthTextContentP = document.querySelector('.bottom-content .text-content p')
const fifthTextContentH4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
const fifthTextContentP = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')

const footerH4 = document.querySelector('.contact h4')
const footerFirstP = footerH4.nextElementSibling
const footerSecondP = footerFirstP.nextElementSibling
const footerThirdP = footerSecondP.nextElementSibling
const footerLink = document.querySelector('footer a')

footerLink.classList.add('bold')

linkTags.forEach(link => {
  link.classList.add('italic')
})

firstLink.textContent = siteContent['nav']['nav-item-1']
secondLink.textContent = siteContent['nav']['nav-item-2']
thirdLink.textContent = siteContent['nav']['nav-item-3']
fourthLink.textContent = siteContent['nav']['nav-item-4']
fifthLink.textContent = siteContent['nav']['nav-item-5']
sixthLink.textContent = siteContent['nav']['nav-item-6']

greatIdeaLogo.src = 'http://localhost:9000/img/logo.png'
ctaImg.src = "http://localhost:9000/img/cta.png"
codeImg.src = "http://localhost:9000/img/accent.png"

firstSectionH1.textContent = siteContent['cta']['h1']
firstSectionButton.textContent = siteContent['cta']['button']

textContentH4.textContent = siteContent['main-content']['features-h4']
textContentP.textContent = siteContent['main-content']['features-content']
secondTextContentH4.textContent = siteContent['main-content']['about-h4']
secondTextContentP.textContent = siteContent['main-content']['about-content']
thirdTextContentH4.textContent = siteContent['main-content']['services-h4']
thirdTextContentP.textContent = siteContent['main-content']['services-content']
fourthTextContentH4.textContent = siteContent['main-content']['product-h4']
fourthTextContentP.textContent = siteContent['main-content']['product-content']
fifthTextContentH4.textContent = siteContent['main-content']['vision-h4']
fifthTextContentP.textContent = siteContent['main-content']['vision-content']

footerH4.textContent = siteContent['contact']['contact-h4']
footerFirstP.textContent = siteContent['contact']['address']
footerSecondP.textContent = siteContent['contact']['phone']
footerThirdP.textContent = siteContent['contact']['email']
footerLink.textContent = siteContent['footer']['copyright']


