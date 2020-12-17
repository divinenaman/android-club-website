
// //change android-club color
// $("#start").click(function() {
// //   $('.home-page-circle-3').toggleClass('home-page-circle-3-active');
//   $('.home-page-circle-3').addClass('home-page-circle-3-active').removeClass('home-page-circle-3');
// //   $('.main-text').toggleClass('main-text-active');
//   $('.main-text').addClass('main-text-active').removeClass('main-text');
//   $('.main-text-box').addClass('main-text-box-active').removeClass('main-text-box');
// });


// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

//mapbox

 var x=document.getElementById('map');
    L.mapbox.accessToken = 'pk.eyJ1IjoibmFtYW4tZGV2IiwiYSI6ImNrZ2FvM3pveDA5MXkydHFuN3phbmI1dmYifQ.aEltE_iy6B49-YiNsht4cQ';
    var map = L.mapbox.map('map')
        .setView([12.840761286993125, 80.1534282972338], 16)
        .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
    var marker = L.marker([12.840761286993125, 80.1534282972338], {
    icon: L.mapbox.marker.icon({
        'marker-color': '#f86767'
    })
    }).addTo(map);