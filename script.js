// LANGUAGE DETECTION

const lang = navigator.language || navigator.userLanguage;

const translations = {

es: {
title:"LIVEGOOD Punta Cana",
subtitle:"Suplementos Premium • Salud Natural • Oportunidad de Ingresos",
heroTitle:"Vive Mejor con LIVEGOOD",
heroText:"Suplementos naturales de alta calidad a precios accesibles.",
featured:"Productos Destacados",
catalog:"Catálogo LIVEGOOD",
businessTitle:"Gana Dinero con LIVEGOOD",
businessText:"Únete como afiliado y crea ingresos recomendando productos."
},

en: {
title:"LIVEGOOD Punta Cana",
subtitle:"Premium Supplements • Natural Health • Income Opportunity",
heroTitle:"Live Better with LIVEGOOD",
heroText:"High quality natural supplements at affordable prices.",
featured:"Featured Products",
catalog:"LIVEGOOD Catalog",
businessTitle:"Earn Money with LIVEGOOD",
businessText:"Join as an affiliate and create income recommending products."
}

};

const language = lang.startsWith("es") ? "es" : "en";

document.getElementById("title").innerText = translations[language].title;
document.getElementById("subtitle").innerText = translations[language].subtitle;
document.getElementById("heroTitle").innerText = translations[language].heroTitle;
document.getElementById("heroText").innerText = translations[language].heroText;
document.getElementById("featured").innerText = translations[language].featured;
document.getElementById("catalog").innerText = translations[language].catalog;
document.getElementById("businessTitle").innerText = translations[language].businessTitle;
document.getElementById("businessText").innerText = translations[language].businessText;


// INFINITE CAROUSEL

const track = document.querySelector(".carousel-track");
track.innerHTML += track.innerHTML;
