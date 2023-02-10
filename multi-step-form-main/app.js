// $(document).ready(function () {
//     $("#arcade").click(function () {
//         $("#arcade").css("border", "2px solid rgb(151, 56, 223)");
//     });
// });

// index 1
$(document).ready(function () {
    $("#stepTo2").click(function () {
        // console.log("test");
        $(".nCheckEmpty").css("display", "none");
        $(".eaCheckEmpty").css("display", "none");
        $(".pnCheckEmpty").css("display", "none");
        $("#name").css("border", "2px solid var(--Lightgray)");
        $("#email").css("border", "2px solid var(--Lightgray)");
        $("#number").css("border", "2px solid var(--Lightgray)");
        if ($.trim($('input[name="name"]').val()).length == 0) {
            console.log("test name");
            $(".nCheckEmpty").css("display", "block");
            $("#name").css("border", "2px solid red");
        } else if ($.trim($('input[name="email"]').val()).length == 0) {
            console.log("test email");
            $(".eaCheckEmpty").css("display", "block");
            $("#email").css("border", "2px solid red");
        } else if ($.trim($('input[name="number"]').val()).length == 0) {
            console.log("test pnumber");
            $(".pnCheckEmpty").css("display", "block");
            $("#number").css("border", "2px solid red");
        } else {
            console.log("test next");
            alert("now you are hacked! ;)");
            window.location.href = "index2.html";
        }
    });
});

//

var selectedPrice;

$(document).ready(function () {
    $("#arcade").click(function () {
        $("#arcade").css("border", "2px solid rgb(151, 56, 223)");
        $("#advanced").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#pro").css("border", "2px solid hsl(231, 11%, 63%)");
        selectedPrice = $(".arcadePrice").text();
        console.log(selectedPrice);

        localStorage.setItem("selectedPrice", selectedPrice);
    });
});

$(document).ready(function () {
    $("#advanced").click(function () {
        $("#advanced").css("border", "2px solid rgb(151, 56, 223)");
        $("#arcade").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#pro").css("border", "2px solid hsl(231, 11%, 63%)");
        selectedPrice = $(".advancedPrice").text();
        console.log(selectedPrice);

        localStorage.setItem("selectedPrice", selectedPrice);
    });
});

$(document).ready(function () {
    $("#pro").click(function () {
        $("#pro").css("border", "2px solid rgb(151, 56, 223)");
        $("#arcade").css("border", "2px solid hsl(231, 11%, 63%)");
        $("#advanced").css("border", "2px solid hsl(231, 11%, 63%)");
        selectedPrice = $(".proPrice").text();
        console.log(selectedPrice);

        localStorage.setItem("selectedPrice", selectedPrice);
    });
});

//THIS IS JQUERY div id = link anchor hrrf function
$(document).ready(function () {
    $("#index1, #stepBackTo1").click(function () {
        window.location.href = "index1.html";
    });

    $("#index2, .p2Index4").click(function () {
        window.location.href = "index2.html";
    });

    $("#index3, #stepTo3, #stepTo3").click(function () {
        window.location.href = "index3.html";
    });

    $("#index4, #stepTo4").click(function () {
        window.location.href = "index4.html";
    });

    $("#confirm").click(function () {
        window.location.href = "index5.html";
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
    var selectedPrice = localStorage.getItem("selectedPrice");

    if (checkboxState === "checked") {
        $("input#checkbox").prop("checked", true);
        $(".p2").css("color", "hsl(213, 96%, 18%)");
        $(".p1").css("color", "hsl(231, 11%, 63%)");
        $(".free2mnths").css("display", "block");
        $("#spanMths").text("$90/yr"); // changes the elementstext value
        $("#spanMths2").text("$120/yr");
        $("#spanMths3").text("$150/yr");

        // step 3 id="addOndate1"
        $("#addOndate1").text("+$10/yr");
        $("#addOndate2").text("+$20/yr");
        $("#addOndate3").text("+$20/yr");

        if (selectedPrice === "$90/yr") {
            selectedPrice = $(".arcadePrice").text();
            $(".p1Index4").text("Arcade (Yearly)");
            $(".p3Index4").text(selectedPrice);
            console.log(selectedPrice);
        }
    } else {
        $("input#checkbox").prop("checked", false);
        $(".p2").css("color", "hsl(231, 11%, 63%)");
        $(".p1").css("color", "hsl(213, 96%, 18%)");
        $(".free2mnths").css("display", "none");
        $("#spanMths").text("$9/mo");
        $("#spanMths2").text("$12/mo");
        $("#spanMths3").text("$15/mo");

        if (selectedPrice === "$90/yr") {
            selectedPrice = $(".arcadePrice").text();
            $(".p1Index4").text("Arcade (Monthly)");
            $(".p3Index4").text(selectedPrice);
            console.log(selectedPrice);
        }
    }

    $("input#checkbox").click(function () {
        var selectedPrice = localStorage.getItem("selectedPrice");

        if ($(this).is(":checked")) {
            // console.log(selectedPrice);
            $(".p2").css("color", "hsl(213, 96%, 18%)");
            $(".p1").css("color", "hsl(231, 11%, 63%)");
            localStorage.setItem("checkboxState", "checked");
            $(".free2mnths").css("display", "block");
            $("#spanMths").text("$90/yr");
            $("#spanMths2").text("$120/yr");
            $("#spanMths3").text("$150/yr");

            if (selectedPrice === "$9/mo") {
                selectedPrice = $(".arcadePrice").text();
                $(".p1Index4").text("Arcade (Yearly)");
                $(".p3Index4").text("$90/yr");
                console.log("$90/yr");
                localStorage.setItem("selectedPrice", selectedPrice);
            }
        } else {
            // console.log(selectedPrice);
            $(".p2").css("color", "hsl(231, 11%, 63%)");
            $(".p1").css("color", "hsl(213, 96%, 18%)");
            localStorage.setItem("checkboxState", "unchecked");
            $(".free2mnths").css("display", "none");
            $("#spanMths").text("$9/mo");
            $("#spanMths2").text("$12/mo");
            $("#spanMths3").text("$15/mo");

            if (selectedPrice === "$90/yr") {
                selectedPrice = $(".arcadePrice").text();
                $(".p1Index4").text("Arcade (Monthly)");
                $(".p3Index4").text("$9/mo");
                console.log("$9/moX");
                localStorage.setItem("selectedPrice", selectedPrice);
            }
        }
    });
});

$("input#checkbox").click(function () {
    var selectedPrice = localStorage.getItem("selectedPrice");

    if (!$(this).is(":checked")) {
        // console.log(selectedPrice)
        if (selectedPrice === "$90/yr") {
            selectedPrice = $(".arcadePrice").text();
            $(".p1Index4").text("Arcade (Yearly)");
            $(".p3Index4").text("$9/mo");
            console.log("$9/moY");
            localStorage.setItem("selectedPrice", selectedPrice);
        }
    } else {
        // console.log(selectedPrice);
        if (selectedPrice === "$9/mo") {
            selectedPrice = $(".arcadePrice").text();
            $(".p1Index4").text("Arcade (Monthly)");
            $(".p3Index4").text("$90/yr");
            console.log("$90/yrY");
            localStorage.setItem("selectedPrice", selectedPrice);
        }
    }
});

// index 3 onlineService
$(document).ready(function () {
    var onlineService = localStorage.getItem("onlineService");
    var checkboxState = localStorage.getItem("checkboxState");

    if (onlineService === "checked") {
        $("#onlineService").prop("checked", true);
        localStorage.setItem("onlineService", "checked");
        if (checkboxState === "checked") {
            $("#p5Index4").text("+$10/yr");
        } else {
            $("#p5Index4").text("+$1/mo");
        }
    } else {
        $("#onlineService").prop("checked", false);
        localStorage.setItem("onlineService", "unchecked");
    }

    $("#onlineService").click(function () {
        var checkboxState = localStorage.getItem("checkboxState");
        if ($(this).is(":checked")) {
            localStorage.setItem("onlineService", "checked");
            if (checkboxState === "checked") {
                $("#p5Index4").text("+$10/yr");
            } else {
                $("#p5Index4").text("+$1/mo");
            }
        } else {
            localStorage.setItem("onlineService", "unchecked");
        }
    });
});

// index 3 LargerStorage
$(document).ready(function () {
    var largerStorage = localStorage.getItem("largerStorage");
    var checkboxState = localStorage.getItem("checkboxState");

    if (largerStorage === "checked") {
        $("#largerStorage").prop("checked", true);
        localStorage.setItem("largerStorage", "checked");
        if (checkboxState === "checked") {
            $("#p6Index4").text("+$20/yr");
        } else {
            $("#p6Index4").text("+$2/mo");
        }
    } else {
        $("#largerStorage").prop("checked", false);
        localStorage.setItem("largerStorage", "unchecked");
    }

    $("#largerStorage").click(function () {
        var checkboxState = localStorage.getItem("checkboxState");
        if ($(this).is(":checked")) {
            localStorage.setItem("largerStorage", "checked");
            if (checkboxState === "checked") {
                $("#p6Index4").text("+$20/yr");
            } else {
                $("#p6Index4").text("+$2/mo");
            }
        } else {
            localStorage.setItem("largerStorage", "unchecked");
        }
    });
});

// index 3 customizableProfile
$(document).ready(function () {
    var customizableProfile = localStorage.getItem("customizableProfile");
    var checkboxState = localStorage.getItem("checkboxState");

    if (customizableProfile === "checked") {
        $("#customizableProfile").prop("checked", true);
        localStorage.setItem("customizableProfile", "checked");
        if (checkboxState === "checked") {
            $("#p7Index4").text("+$20/yr");
        } else {
            $("#p7Index4").text("+$2/mo");
        }
    } else {
        $("#customizableProfile").prop("checked", false);
        localStorage.setItem("customizableProfile", "unchecked");
    }

    $("#customizableProfile").click(function () {
        var checkboxState = localStorage.getItem("checkboxState");
        if ($(this).is(":checked")) {
            localStorage.setItem("customizableProfile", "checked");
            if (checkboxState === "checked") {
                $("#p7Index4").text("+$20/yr");
            } else {
                $("#p7Index4").text("+$2/mo");
            }
        } else {
            localStorage.setItem("customizableProfile", "unchecked");
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
