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

$(".nav-text").hover(function(){
    $("#go-back").show();
    }, function(){
    $("#go-back").hide();
});

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

//functions for dan.html
$(function() {
    const $searchButton = $('select');

    function searchGiphy(searchTerm) {
        return $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=P4B2q79lmQ6UYLaVVBV2fqY47sR9hZLc&q=${searchTerm}&limit=25&offset=0&rating=R&lang=en`
        });
    }

    function buildUi(data) {
        data.forEach(function(gif) {
            const $gifContainer= $('.gif-container');

            const imgTag = $(`<img class="gif" src=${gif.images.original.url}>`)
            $gifContainer.append(imgTag);
        });
    }

    $searchButton.on('click', function() {
        const $searchInput = $('.search-input')
        $('.gif-container').empty();

        searchGiphy($searchInput.val())
            .then(function(data) {
                buildUi(data.data);
                $searchInput.val('')
            })
            .catch(function(err) {
                console.error(err);
            })
    });
});

//functions for bi.html
$( ".container" ).each(function () {
    $(".object")
    .hover(function() {
        $(this).animate({opacity:1},500);
    }, function() {
        $(this).animate({opacity:.2}, 500);
        console.log('fadeback')
    })
})