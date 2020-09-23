

$(function(){
    const $slider1 = $('.slider');
    const $slider2 = $('.slider2');
    
    $slider1.slick({
        rows: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        swipe: true,
    })
    
    $slider2.slick({
        rows: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        swipe: true,
    })

    $('.slider .slider__item').on("click", function() {
        const index = $(this).attr("data-slick-index");
        $slider2.slick("slickGoTo", index);
        $slider1.slick("slickGoTo", index);
      });
});




let sliderItem = document.querySelectorAll('.slider__item');
let modal = document.querySelector('.modal');

sliderItem.forEach(item => {
    item.addEventListener('click', function() {
        openModal()
    });
});

modal.onclick = e => {
    if (e.target === modal) {
        closeModal()
    }
}

function openModal() {
    modal.classList.add('open');
}

function closeModal() {
    modal.classList.remove('open');
}

