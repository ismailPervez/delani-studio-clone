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
