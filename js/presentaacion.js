$(function() {

    // setTimeout(() => {
    //     $("#transition").toggle('transitionC')
    // }, 2500);

    $("#btnStart").click(function () {
       let lentDark = $("#darkWindow")
       lentDark.addClass('darkWindowClass')

       setTimeout(() => {
        window.location.assign('/pages/index.html')
    }, 3500);
    }) 
})

$(function() {

    // setTimeout(() => {
    //     $("#transition").toggle('transitionC')
    // }, 2500);

    $("#btnStartIgl").click(function () {
       let lentDark = $("#darkWindow")
       lentDark.addClass('darkWindowClass')

       setTimeout(() => {
        window.location.assign('/pages/indexinlges.html')
    }, 3500);
    }) 
})


