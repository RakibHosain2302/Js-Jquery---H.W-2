

$( function() {
    $(window).ready( function(){
        $('.preloader').fadeOut(8000)
    })
})


let navBTn = $("nav button")
let sidebarBtn = $(".side")
let btn = $(".Btn")

navBTn.click(() =>{
    btn.toggleClass('active')
    sidebarBtn.toggleClass('active')
    navBTn.toggleClass('is-active')
})
