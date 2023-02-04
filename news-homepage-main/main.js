//jQuery slide in/out up/down
$(document).ready(function () {
    $("#click, #click2").click(function () {
        if ($(".menuBox").hasClass("open")) {
            $(".menuBox").css("opacity", "0");
            $(".menuBox").removeClass("open");
            setTimeout(function () {
                $(".menuBox").css("display", "none");
            }, 500);
        } else {
            $(".menuBox").css("display", "block");
            $(".menuBox").animate(
                {
                    opacity: 1,
                },
                500,
                "linear"
            );
            $(".menuBox").addClass("open");
        }
    });
});

// // const image = document.querySelector("img");
// const image = document.getElementById("tImgX");

// function updateImageSource() {
//     if (window.matchMedia("(max-width: 919px)").matches) {
//         image.src = "assets/images/image-web-3-mobile.jpg";
//     } else {
//         image.src = "assets/images/image-web-3-desktop.jpg";
//     }
// }

// window.addEventListener("resize", updateImageSource);

// updateImageSource();

$(document).ready(function () {
    const image = $("#tImgX");

    function updateImageSource() {
        if ($(window).width() <= 919) {
            image.attr("src", "assets/images/image-web-3-mobile.jpg");
        } else {
            image.attr("src", "assets/images/image-web-3-desktop.jpg");
            $(".menuBox").removeClass("open");
        }
    }

    $(window).resize(updateImageSource);

    updateImageSource();
});
