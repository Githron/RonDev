//
//
//
const primNav = document.querySelector(".primNav");
const mobNavTogl = document.querySelector(".mobNavTogl");

mobNavTogl.addEventListener("click", () => {
    const visibility = primNav.getAttribute("data-visible");

    // console.log(visibility);
    if (visibility === "false") {
        primNav.setAttribute("data-visible", true);
        mobNavTogl.setAttribute("aria-expanded", true);
        console.log("visibility='true'");
    } else {
        primNav.setAttribute("data-visible", false);
        mobNavTogl.setAttribute("aria-expanded", false);
        console.log("visibility='false'");
    }
});


// jQuery link distination nav
$(document).ready(function () {
    $("#moon").click(function () {
        window.location.href =
            "destination-moon.html";
    });

    $("#mars").click(function () {
        window.location.href = "destination-mars.html";
    });

    $("#europa").click(function () {
        window.location.href =
            "destination-europa.html";
    });

    $("#titan").click(function () {
        window.location.href = "destination-titan.html";
    });
});
