
var $sections = $('section');
$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    var $currentSection
    $sections.each(function () {
        var divPosition = $(this).offset().top;
        if (divPosition - 100 < currentScroll) {
            $currentSection = $(this);
        }
        if ($currentSection) {
            var id = $currentSection.attr('id');
            $('a').removeClass('is-active');
            $("[href='#" + id + "']").addClass('is-active');
        }
    })

});