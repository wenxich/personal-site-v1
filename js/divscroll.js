$(document).on('click','.searchbychar', function(event) {
    event.stopPropagation()
    event.preventDefault();
    var target = "#" + this.getAttribute('data-target');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 2000);
});