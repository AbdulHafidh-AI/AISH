// Make function to get the current date
function getDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return day + '/' + month + '/' + year;
}

// Make function to get the current time
function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return hours + ':' + minutes + ':' + seconds;
}


// Mendapatkan tanggal hari ini
document.getElementById("tanggal").innerHTML = getDate();
// Mendapatkan jam hari ini
document.getElementById("jam").innerHTML = getTime();

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.nav ul #right-nav');


menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});


// Ke lokasi yang dituju berdasar id
function goTo(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}




