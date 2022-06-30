// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

//jQuery for scrolling to div

$('.searchbychar').click(function () {
    var divID = '#' + this.id;
    $('html, body').animate({
        scrollTop: $(divID).offset().top
    }, 2000);
});