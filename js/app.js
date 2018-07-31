$(function(){
    console.log('loaded')

    const $lastName = $('#l-name');
    const $midName = $('#m-name');
    const $firstName = $('#f-name');

    $( "nameplate" )
    .click(function(){
        window.location = "./index.html";
    });

    $( "#l-name" )
    .mouseover(function() {
        $("#l-name").css("color","#daa520");
        $("#l-name").append("<sub>Lee</sub>")
    })
    .mouseout(function() {
        $("#l-name").css("color","#d4d4d4")
    })
    .click(function() {
        window.location = "./lee.html";
    });

    $( "#m-name" )
    .mouseover(function() {
        $("#m-name").css("color","#daa520");
        $("#m-name").append("<sub>Dan</sub>")
    })
    .mouseout(function() {
        $("#m-name").css("color","#d4d4d4")
    })
    .click(function() {
        window.location = "./dan.html";
    });

    $( "#f-name" )
    .mouseover(function() {
        $("#f-name").css("color","#daa520");
        $("#f-name").append("<sub>Bi</sub>")
    })
    .mouseout(function() {
        $("#f-name").css("color","#d4d4d4")
    })
    .click(function() {
        window.location = "./bi.html";
    });
    
})

//functions for lee.html

$( ".places" ).each(function () {
    $(".place")
    .mouseover(function() {
        $(this).css("color","#daa520");
    })
    .mouseout(function() {
        $(this).css("color","#d4d4d4")
    })
    .on("click",function() {
        $(this).css("text-decoration","underline")
        
    })
})
