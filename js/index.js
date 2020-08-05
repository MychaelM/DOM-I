const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
const navValues = siteContent["nav"];
console.log(navValues);
const anchorTags = document.querySelectorAll("a");

let navNum = 1;
anchorTags.forEach((element) => {
  element.innerText = navValues[`nav-item-${navNum.toString()}`];
  element.style.color = "green";
  console.log(navNum);
  navNum++;
});

anchorTags.forEach((element) => {
  element.addEventListener("mouseover", (event) => {
  event.target.style.fontSize = "2rem";
  event.target.style.color = "dodgerblue";
})});

const navTag = document.querySelector("nav");
console.log(navTag);

const newNavItem1 = document.createElement("a");
newNavItem1.href = "#";
newNavItem1.textContent = "First";
newNavItem1.style.color = "green";
console.log(newNavItem1);

const newNavItem2 = document.createElement("a");
newNavItem2.href = "#";
newNavItem2.textContent = "Last";
newNavItem2.style.color = "green";

navTag.prepend(newNavItem1);
navTag.append(newNavItem2);

const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerText = siteContent["cta"]["h1"];
// adding event listener for onClick
ctaH1.addEventListener("click", (event) => {
  event.target.style.fontSize = "5rem";  
  event.target.style.color = "slategrey";  
})

const ctaButton = document.querySelector(".cta-text button");
ctaButton.innerText = siteContent["cta"]["button"];

const ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

const mainContentH4 = document.querySelectorAll(".text-content h4");
console.log(mainContentH4);
mainContentH4[0].innerText = siteContent["main-content"]["features-h4"];
mainContentH4[1].innerText = siteContent["main-content"]["about-h4"];

const mainContentText = document.querySelectorAll(".text-content p");
mainContentText[0].innerText = siteContent["main-content"]["features-content"];
mainContentText[1].innerText = siteContent["main-content"]["about-content"];

// const topHeaderText = ["Features", "About"];

// const topH4 = document.querySelectorAll(".top-content .text-content h4");

// let topHeaderNum = 0;
// topH4.forEach((element) => {
//     element.innerText = topHeaderText[topHeaderNum];
//     topHeaderNum++;
// });

// Bottom H4 Content
mainContentH4[2].innerText = siteContent["main-content"]["services-h4"];
mainContentH4[3].innerText = siteContent["main-content"]["product-h4"];
mainContentH4[4].innerText = siteContent["main-content"]["vision-h4"];

// Bottom Text Content
mainContentText[2].innerText = siteContent["main-content"]["services-content"];
mainContentText[3].innerText = siteContent["main-content"]["product-content"];
mainContentText[4].innerText = siteContent["main-content"]["vision-content"];

const topH4 = document.querySelectorAll(".top-content .text-content h4");

const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

const contactH4 = document.querySelector(".contact h4");
// console.log(contact);
contactH4.innerText = siteContent["contact"]["contact-h4"];

const contactText = document.querySelectorAll(".contact p");
// console.log(contactText[0]);
contactText[0].innerText = siteContent["contact"]["address"];
contactText[1].innerText = siteContent["contact"]["phone"];
contactText[2].innerText = siteContent["contact"]["email"];

const footerText = document.querySelector("footer p");
footerText.innerText = siteContent["footer"]["copyright"];
