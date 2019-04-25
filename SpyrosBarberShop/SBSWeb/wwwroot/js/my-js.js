function expandText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var readMore = document.getElementById("readMoreText");
    var readLess = document.getElementById("readLessText");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        readMore.style.display = "inline";
        readLess.style.display = "none";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        readMore.style.display = "none";
        readLess.style.display = "inline";
        moreText.style.display = "inline";
    }
}