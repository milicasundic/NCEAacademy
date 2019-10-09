mybutton = document.getElementById("back-to-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

$("#back-to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});
