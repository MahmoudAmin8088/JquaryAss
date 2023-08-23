$(document).ready(function () {
    $(".sk-circle").fadeOut(1000,function(){
        $(".loading").slideUp(1000,function(){
            $('body').css("overflow","auto");
            $(".loading").remove();
        })
    });


    (function partyTimeDown() {
        let partyDate = new Date("september 22 , 2023 10:00:00").getTime();
        let now = new Date().getTime();

        timeLeft = partyDate - now

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        $('#days').html(`${days} Day `);
        $('#hours').html(`${hours} hour `);
        $('#mins').html(`${minutes} min `);
        $('#secs').html(`${seconds} sec `);

        setInterval(function () {
            partyTimeDown()
        }, 1000)

    })();

    $(".sidebar a[href^='#']").click(function () {
        let aHref = $(this).attr('href');
        let sectionHeight = $(aHref).offset().top;
        $("html,body").animate({ scrollTop: sectionHeight }, 1000);

    });

    $(".open").click(function () {
        $(".sidebar").animate({ left: '0px' }, 1000);
        $(".header-content").animate({ marginLeft: '150px' }, 1000)
        $(".open").animate({ marginLeft: '200px' }, 1000)

    });

    $(".close-btn").click(function () {
        $(".sidebar").animate({ left: '-200px' }, 1000);
        $(".header-content").animate({ marginLeft: '0' }, 1000)
        $(".open").animate({ marginLeft: '0' }, 1000)
    });

    $(".singer").click(function () {

        $('.info').not($(this).next()).slideUp(1000)
        $(this).next().slideToggle(1000);

    });

    $("textarea").on("input", function () {
        let maxChar = 100;
        let value = $(this).val();
        let currentLength = value.length;

        if (currentLength > maxChar) {
            let trimmedValue = value.substring(0, maxChar);
            $(this).val(trimmedValue);
            currentLength = maxChar;
        }

        $(".maxchar").text(maxChar - currentLength);
    });



});


