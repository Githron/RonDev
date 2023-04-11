$(document).ready(function () {
    const image = $(".techImg");

    function updateImageSource() {
      // Get the current font size of the window in pixels
      const fontSizeInPixels = parseFloat($(window).css("font-size"));

      // Convert em units to pixels by multiplying with the font size
      const minWidthInPixels = 35 * fontSizeInPixels;

      if ($(window).width() >= minWidthInPixels) {
        // Code to be executed if window width is greater than or equal to 35em
        image.attr("src", "assets/technology/image-space-capsule-portrait.jpg");
        $(".menuBox").removeClass("open");
      } else {
        // Code to be executed if window width is less than 35em
        image.attr("src", "assets/technology/image-space-capsule-landscape.jpg");
      }
    }

    $(window).resize(updateImageSource);

    updateImageSource();
  });