$(document).ready(function () {
    $('.card-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      });

      $(".play_video").click(function () { 
        Swal.fire({
            html: '<iframe width="500" height="300" src="https://www.youtube.com/embed/yChiMuzNOIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        });
      });
});