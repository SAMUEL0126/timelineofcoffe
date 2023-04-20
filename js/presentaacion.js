$(function() {
    
    $("#btnStart").click(function () {
       let lentDark = $("#darkWindow")
       lentDark.addClass('darkWindowClass')

       setTimeout(() => {
        window.location.assign('/pages/index.html')
    }, 3500);
    }) 
})

$(function() {

    $("#btnStartIgl").click(function () {
       let lentDark = $("#darkWindow")
       lentDark.addClass('darkWindowClass')

       setTimeout(() => {
        window.location.assign('/pages/indexinlges.html')
    }, 3500);
    }) 
})


