

$( function() {
    $(window).ready( function(){
        $('.preloader').fadeOut(7000)
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
