// select the icon image tags
$('article img').click((event) => {
    // console.log(event.target.id);
    let icon = event.target.id;
    $(`#${icon}`).fadeOut();
    $(`.${icon}`).fadeIn(2000);
    $(`.${icon}`).css("display", "block");
})

$('.what-we-do article p').click((event) => {
    // console.log(event.target.className);
    let desc = event.target.className;
    $(`.${desc}`).fadeOut();
    $(`.${desc}`).css("display", "none");
    $(`#${desc}`).fadeIn();
})

/* hover animations on the portfolio projects card */
$('.portfolio article').hover(function() {

    $(this).find('.overlay').addClass('active');
}, function() {
    $(this).find('.overlay').removeClass('active');
})

/* contact form verification and response */
$('form').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    if (!name || !email || !message) {
        alert('all fields are required');
    }

    else {
        alert(`hello ${name}! We have received your email. thank you for contacting us`);
        $('#name').val('');
        $('#email').val('');
        $('#message').val('');
    }
})