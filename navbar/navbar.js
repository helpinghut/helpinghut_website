function loadNavbar() {
    fetch('../navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            addMenuFunctionality();
        });
}

function addMenuFunctionality() {
    const menu = document.querySelector(".nav-lists");
    const menubtn = document.querySelector(".menu-btn");
    const cancelbtn = document.querySelector(".cancel-btn");

    menubtn.onclick = () => {
        menu.classList.add("ctive");
          };

    cancelbtn.onclick = () => {
        menu.classList.remove("ctive");
    };
}


function loadFooter() {
    fetch('../footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}


window.onload = () => {
    loadNavbar();
    loadFooter();
};




