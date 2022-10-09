function ShowNavBarLogin() {
    if(document.getElementById("nav-bar-menu").style.visibility == "visible") return;
    var el = document.getElementById("nav-bar-login");
    var elBackgroud = document.getElementById("nav-bar-background");
    SwitchNav(el, elBackgroud);
}

function ShowNavBarMenu() {
    if(document.getElementById("nav-bar-login").style.visibility == "visible") return;
    var el = document.getElementById("nav-bar-menu");
    var elBackgroud = document.getElementById("nav-bar-background");
    SwitchNav(el, elBackgroud);
}

function SwitchNav(el, elBackgroud) {
    if(el.style.visibility == "visible") {
        el.style.visibility = "hidden";
        elBackgroud.style.visibility = "hidden";
    }
    else {
        el.style.visibility = "visible";
        elBackgroud.style.visibility = "visible";
    }
}
