$(document).ready(function () {
    var videoIds = [
        "https://www.youtube.com/watch?v=60ItHLz5WEA",
        "https://www.youtube.com/watch?v=60ItHLz5WEA",
    ];

    $(".play-icon").on("click", function () {
        var index = $(this).parent().index();
        var videoId = videoIds[index];
        var url = new URL(videoId);
        videoId = url.searchParams.get("v");

        var img = $(this).siblings("img");
        var videoWidth = img.width();
        var videoHeight = img.height();

        var iframe =
            '<iframe width="' +
            videoWidth +
            '" height="' +
            videoHeight +
            '" src="https://www.youtube.com/embed/' +
            videoId +
            '?autoplay=1" frameborder="0" allowfullscreen></iframe>';

        $(this).parent().html(iframe);
    });
});

$(document).ready(function () {
    $(".navbar-toggler").on("click", function () {
        $("#navbarNav").toggleClass("show");
    });
});

$(document).ready(function () {
    $(".image-caption .more-content").hide();
    $(".read-more-button").click(function () {
        var caption = $(this).closest(".image-caption");
        var moreContent = caption.find(".more-content");
        if (moreContent.is(":visible")) {
            moreContent.slideUp();
            $(this).text("Read More");
        } else {
            moreContent.slideDown();
            $(this).text("Read Less");
        }
    });
});



