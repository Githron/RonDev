// $(document).ready(function () {
//     $("#arcade").click(function () {
//         $("#arcade").css("border", "2px solid rgb(151, 56, 223)");
//     });
// });

var selectedPrice;

$(document).ready(function () {
    $("#arcade").click(function () {
        $("#arcade").css("border", "2px solid rgb(151, 56, 223)");
        $("#advanced").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#pro").css("border", "2px solid hsl(231, 11%, 63%)");
        selectedPrice = $(".arcadePrice").text();
        console.log(selectedPrice);
    });
});

$(document).ready(function () {
    $("#advanced").click(function () {
        $("#advanced").css("border", "2px solid rgb(151, 56, 223)");
        $("#arcade").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#pro").css("border", "2px solid hsl(231, 11%, 63%)");
        selectedPrice = $(".advancedPrice").text();
        console.log(selectedPrice);
    });
});

$(document).ready(function () {
    $("#pro").click(function () {
        $("#pro").css("border", "2px solid rgb(151, 56, 223)");
        $("#arcade").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#advanced").css("border", "2px solid hsl(231, 11%, 63%)");
        selectedPrice = $(".advancedPrice").text();
        console.log(selectedPrice);
    });
});

//THIS IS JQUERY div id = link anchor hrrf function
$(document).ready(function () {
    $("#index1, #stepBackTo1").click(function () {
        window.location.href = "index1.html";
    });

    $("#index2, #stepTo2").click(function () {
        window.location.href = "index2.html";
    });

    $("#index3, #stepTo3, #stepTo3").click(function () {
        window.location.href = "index3.html";
    });

    $("#index4, #stepTo4").click(function () {
        window.location.href = "index4.html";
    });
});
//end

$(document).ready(function () {
    const image = $("#tImgX");

    function updateImageSource() {
        if ($(window).width() <= 830) {
            image.attr("src", "assets/images/bg-sidebar-mobile.svg");
        } else {
            image.attr("src", "assets/images/bg-sidebar-desktop.svg");
            $(".menuBox").removeClass("open");
        }
    }

    $(window).resize(updateImageSource);

    updateImageSource();
});

// index 2
//toggle switch
// $(document).ready(function () {
//     $("input#checkbox").prop("checked", false); //initial state every refresh
//     $("input#checkbox").click(function () {
//         if ($(this).is(":checked")) {
//             $(".p2").css("color", "hsl(213, 96%, 18%)");
//             $(".p1").css("color", "hsl(231, 11%, 63%)");
//             $(".free2mnths").css("display", "block");
//             $("#spanMths").text("$90/yr");
//         } else {
//             $(".p2").css("color", "hsl(231, 11%, 63%)");
//             $(".p1").css("color", "hsl(213, 96%, 18%)");
//             $(".free2mnths").css("display", "none");
//             $("#spanMths").text("$9/mo");
//         }
//     });
// });

// maintain the state of the CSS of the checkbox after a page refresh
$(document).ready(function () {
    var checkboxState = localStorage.getItem("checkboxState");

    if (checkboxState === "checked") {
        $("input#checkbox").prop("checked", true);
        $(".p2").css("color", "hsl(213, 96%, 18%)");
        $(".p1").css("color", "hsl(231, 11%, 63%)");
        $(".free2mnths").css("display", "block");
        $("#spanMths").text("$90/yr");
        $("#spanMths2").text("$120/yr");
        $("#spanMths3").text("$150/yr");
    } else {
        $("input#checkbox").prop("checked", false);
        $(".p2").css("color", "hsl(231, 11%, 63%)");
        $(".p1").css("color", "hsl(213, 96%, 18%)");
        $(".free2mnths").css("display", "none");
        $("#spanMths").text("$9/mo");
        $("#spanMths2").text("$12/mo");
        $("#spanMths3").text("$15/mo");
    }

    $("input#checkbox").click(function () {
        if ($(this).is(":checked")) {
            $(".p2").css("color", "hsl(213, 96%, 18%)");
            $(".p1").css("color", "hsl(231, 11%, 63%)");
            localStorage.setItem("checkboxState", "checked");
            $(".free2mnths").css("display", "block");
            $("#spanMths").text("$90/yr");
            $("#spanMths2").text("$120/yr");
            $("#spanMths3").text("$150/yr");
        } else {
            $(".p2").css("color", "hsl(231, 11%, 63%)");
            $(".p1").css("color", "hsl(213, 96%, 18%)");
            localStorage.setItem("checkboxState", "unchecked");
            $(".free2mnths").css("display", "none");
            $("#spanMths").text("$9/mo");
            $("#spanMths2").text("$12/mo");
            $("#spanMths3").text("$15/mo");
        }
    });
});

//global next buttons
// const elementToMove = document.getElementById("element-to-move");
// const targetContainer = document.getElementById("target-container");

// function moveElement() {
//     targetContainer.appendChild(elementToMove);
// }

// if (window.matchMedia("(max-width: 830px)").matches) {
//     moveElement();
// }

// window.addEventListener("resize", function () {
//     if (window.matchMedia("(max-width: 830px)").matches) {
//         moveElement();
//     }
// });

// const elementToMove = document.getElementById("element-to-move");
// const targetContainer = document.getElementById("target-container");

// function moveElement() {
//     targetContainer.appendChild(elementToMove);
//     targetContainer.offsetHeight; // Forces the page to update
// }

// if (window.matchMedia("(max-width: 830px)").matches) {
//     moveElement();
// }

// window.addEventListener("resize", function () {
//     if (window.matchMedia("(max-width: 830px)").matches) {
//         moveElement();
//     }
// });
