$(function(){
    console.log('loaded')

    const $lastName = $('#l-name');
    const $midName = $('#m-name');
    const $firstName = $('#f-name');

    $( "#l-name" )
    .mouseover(function() {
        $("#l-name").css("color","#003334");
    })
    .mouseout(function() {
        $("#l-name").css("color","#d4d4d4")
    })
    .click(function() {
        window.location = "./lee.html";
    });

    $( "#m-name" )
    .mouseover(function() {
        $("#m-name").css("color","#003334");
    })
    .mouseout(function() {
        $("#m-name").css("color","#d4d4d4")
    })
    .click(function() {
        window.location = "./dan.html";
    });

    $( "#f-name" )
    .mouseover(function() {
        $("#f-name").css("color","#003334");
    })
    .mouseout(function() {
        $("#f-name").css("color","#d4d4d4")
    })
    .click(function() {
        window.location = "./bi.html";
    });
      

})