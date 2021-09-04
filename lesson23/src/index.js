function $(){}

$();

const accordionData = [
    {
        title: 'Get Started',
        content: 'Introduction in Jquery'
    },
    {
        title: 'For advanced users',
        content: 'We are glad to se you here'
    },
    {
        title: 'Your donate makes us happy',
        content: 'We are gratefully accepted your help <3'
    },
    {
        title: 'one more',
        content: 'yep.'
    }
];


accordionData.forEach(element => {

    const $accordion = $('<div>', {class: 'accordion'});
    const $title = $('<div>', {class: 'title'});
    const $content = $('<div>', {class: 'content'});

    $($title).text(element.title);
    $($content).text(element.content);
    $($accordion).append($title);
    $($accordion).append($content);

    $($accordion).css({
        'position': 'relative'
    });

    $($title).css({
        'background-color': 'lightgrey',
        'padding': '15px 5px',
        'cursor': 'pointer',
        'transition': '0.2s'
    });

    $($content).css({
        'padding': '10px 15px',
        'display': 'none',
        'border': '1px solid grey'
    });


    $(document.body).append($accordion);
});

$('.accordion').on('click', '.title', ({target}) => {
    if($(target).parent().hasClass('isActive')){
        return;
    }
    $('.content').slideUp();
    $(target).parent().addClass('isActive');
    $(target).next().slideDown();
});