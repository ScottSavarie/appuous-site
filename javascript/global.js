/* Javascript for Appuous */


/* =Landing page intro
============================================================================== */

$(document).ready(function() {
    $("#nav-intro, #landing-intro").hide(0);
    $("#landing-intro").fadeIn('slow');
    $("#nav-intro").delay(600).slideDown(600);
});

/* =Navigation
============================================================================== */


// $(document).ready(function(){
//         if ($(window).width() <= 770) {
//             $("#nav-toggle").show();
//             $(".navigation").hide(0);
//             }
//         }); // end document ready


// $(window).resize(function() {
//     var width = $(window).width();
//     if (width <= 770) {
//         $("#nav-toggle").show();
//         $(".navigation").hide(0);
//     }
// }); 

// $(window).resize(function() {
//     var width = $(window).width();
//     if (width >= 770) {
//         $("#nav-toggle").hide();
//         $(".navigation").show(0);
//     }
// });    

// $(document).ready(function() {
// $("#nav-toggle").click(function(){
//     $(".navigation").toggle();
//     });
// }); 



$(document).ready(function() {
    $(".toggle-content").hide(0);
});


$(document).ready(function() {
$(".toggle-trigger").click(function(){
    $(this).find('.plus').toggleClass('rotated');
    $(this).next(["div"]).slideToggle();

   

    });
}); 



