// ********** CHALLENGE: ADD ANOTHER OPTION **********
$(".question").click(function () {
    $(this).children().toggleClass("collapse");
    $(this).next().animate({
        width: [ "toggle", "swing" ],
        height: [ "toggle", "swing" ],
        opacity: "toggle",
        fontSize: ["40px"]}, "slow"
    );
});
// **********

