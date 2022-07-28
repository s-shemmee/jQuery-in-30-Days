// ALL ITERATIONS OF JQUERY EFFECTS

// $(".question").click(function () {
//     $(this).next().slideDown("slow");
// });

// $(".question").click(function () {
//     $(this).next().slideToggle("slow");
// });

$(".question").click(function () {
    $(this).children().toggleClass("collapse");
    $(this).next().fadeToggle("slow");
});
