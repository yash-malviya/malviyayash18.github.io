document.querySelectorAll("#second-nav-middle div.item-cat:nth-child(5)")[0].addEventListener('click', function (event) {
    window.location.href = "./aboutUs.html";
});

document.querySelectorAll("#second-nav-middle div.item-cat:nth-child(4)")[0].addEventListener('click', function (event) {
    window.location.href = "./partners.html";
});

document.querySelectorAll("#second-nav-middle div.item-cat:nth-child(3)")[0].addEventListener('click', function (event) {
    window.location.href = "./blog.html";
});

document.querySelectorAll("#second-nav-middle div.item-cat:nth-child(2)")[0].addEventListener('click', function (event) {
    window.location.href = "./services.html";
});

document.querySelectorAll("#second-nav-middle div.item-cat:nth-child(1)")[0].addEventListener('click', function (event) {
    window.location.href = "/";
});


// Test Code for https://onlineprograms.sacredheart.edu/

window.addEventListener('beforeunload', recordExitTime);


var visitedPage = [];
var pageTime = [];
var visitTime;
var exitTime;

$('document').ready(function () {

    visitTime = new Date();
    sessionStorage.setItem('visitTime', visitTime);
    getCountry();
    getPageLang();

    //  Check for data in session storage. (same session)

    if (sessionStorage.getItem('visitedPage') !== null && sessionStorage.getItem('pageTime') !== null) {
        visitedPage = JSON.parse(sessionStorage.getItem('visitedPage'));
        pageTime = JSON.parse(sessionStorage.getItem('pageTime'))
    } else { // (new session)

    }
});

$('window').unload(function () {
    recordExitTime();
});



// Functions 

function addCurrentPath() {
    visitedPage.push(window.location.pathname);
    sessionStorage.setItem('visitedPage', JSON.stringify(visitedPage));
}

function calculateTimeSpent() {
    let spentTime = Math.round((exitTime - visitTime) / 1000);
    return spentTime;
}

function recordExitTime() {
    exitTime = new Date();
    pageTime.push(calculateTimeSpent());
    addCurrentPath();
    sessionStorage.setItem('pageTime', JSON.stringify(pageTime));
}

function getPageLang() {
    var lang = document.documentElement.lang;
    sessionStorage.setItem('language', lang);
    console.log(lang);
    return lang;
}

function getCountry() {
    fetch('https://extreme-ip-lookup.com/json/')
        .then(res => res.json())
        .then(response => {
            sessionStorage.setItem('country', response.country);
            console.log("Country : ", response.country);
        })
        .catch((data, status) => {
            console.log('Failed :(');
        })
}

