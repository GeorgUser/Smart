$(document).ready(function(){
    $('.mark-btn-js').click(function(){
        $(this).next('.order').toggleClass('btn-order');
        var btn_order = $(this).parent().find('.order');
        if((btn_order).hasClass('btn-order')){
            $(this).html('Close')}
        else {
            $(this).html('v Know More');
        }
    });

    $('.serv-btn-js').click(function () {
        var atr = $(this).data('ord');
        $('.orders').hide(600);
        $('#'+atr).show(600);
    });
    
    $('.btn-text').click(function () {
        $(this).addClass('hide-text');
        var hide_text = $(this).parent().find('.dis');
        $(hide_text).addClass('show-text');
    });


    $('.bg').mouseenter(function () {
        // var skill_1 = $(this).find('.perc1').data('skill');
        // var skill_2 = $(this).find('.perc2').data('skill');
        // var skill_3 = $(this).find('.perc3').data('skill');
        // $(this).find('.perc1').css('width', '0%' ).animate({width: skill_1}, 1000);
        // $(this).find('.perc2').css('width', '0%' ).animate({width: skill_2}, 1000);
        // $(this).find('.perc3').css('width', '0%' ).animate({width: skill_3}, 1000);

        var skill = '';
        for(var i=1; i <= 3; i++){
            skill = $(this).find('.perc'+i).data('skill');
            $(this).find('.perc'+i).css('width', '0%' ).animate({width: skill}, 1000);
        }
    });

    $('.slick-sl').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]

    });



    $('.popup-gallery').magnificPopup({
        mainClass: 'mfp-zoom-in',
        delegate: 'a',
        type: 'image',
        tLoading: '',
        gallery:{
            enabled:true,
        },
        removalDelay: 300,
        callbacks: {
            beforeChange: function() {
                this.items[0].src = this.items[0].src + '?=' + Math.random();
            },
            open: function() {
                $.magnificPopup.instance.next = function() {
                    var self = this;
                    self.wrap.removeClass('mfp-image-loaded');
                    setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
                }
                $.magnificPopup.instance.prev = function() {
                    var self = this;
                    self.wrap.removeClass('mfp-image-loaded');
                    setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
                }
            },
            imageLoadComplete: function() {
                var self = this;
                setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
            }
        }
    });

});