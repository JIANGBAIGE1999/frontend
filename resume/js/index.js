$(document).ready(function() {
    $('.sidenav').sidenav();
});
$(document).ready(function() {
    $('.collapsible').collapsible();
});
AOS.init();

function animation(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var step = (target - obj.scrollTop) / 10;
        if (obj.scrollTop >= target) {
            clearInterval(obj.timer);
        }
        obj.scrollTop = obj.scrollTop + step;
    }, 30)
}

$(".scroll-to-bottom").click(function() {
    var contact = document.getElementById('about-this-site');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#this_site").click(function() {
    var contact = document.getElementById('about-this-site');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$(".scroll-to-top-li").click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

$("#last").click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

$("#Contact").click(function() {
    var contact = document.getElementById('contact');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$(".Contact").click(function() {
    var contact = document.getElementById('contact');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#propro").click(function() {
    var contact = document.getElementById('about-me');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#Projects").click(function() {
    var contact = document.getElementById('projects');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#Skills").click(function() {
    var skills = document.getElementById('skills');
    var num = skills.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#Profile").click(function() {
    var profile = document.getElementById('profile');
    var num = profile.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#sp_works").click(function() {
    var contact = document.getElementById('projects');
    var num = contact.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#sp_skills").click(function() {
    var skills = document.getElementById('skills');
    var num = skills.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

$("#sp_profile").click(function() {
    var profile = document.getElementById('profile');
    var num = profile.offsetTop;
    $('body,html').animate({
        scrollTop: num
    }, 1000);
    return false;
});

var modal_trigger = document.getElementsByClassName("modal-trigger");
var modal = document.getElementsByClassName("modal");
var modal_content = document.getElementsByClassName("modal-content");
for(let i = 0;i < modal_trigger.length;i++){
    modal_trigger[i].onclick = ()=>{
        modal[i].style.display = 'block';
        modal_content[i].style.display = 'block';
        let close = document.getElementsByClassName("close");
        close[i].onclick = ()=>{
            modal[i].style.display = 'none';
            modal_content[i].style.display = 'none';
        }
    }
}