// List ảnh chuyển
let list = document.querySelector('.slider-content .slider .list');
let items = document.querySelectorAll('.slider-content .slider .list .item');
let prev = document.getElementById('prev')
let next = document.getElementById('next')

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if (active + 1 > lengthItems) {
        active = 0; 
    }
    else {
        active += 1;
    }
    reloadSlider()
}

prev.onclick = function() {
    if (active - 1 < 0) {
        active = lengthItems;
    }
    else {
        active -= 1;
    }
    reloadSlider()
}

let refreshSlider = setInterval(() => {next.click()}, 5000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 5000);
}

// Thanh header chuyển màu và nút quay về đầu trang

$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop()) {
            $('#header').addClass('sticky');
            $('#button').fadeIn();
        }
        else {
            $('#header').removeClass('sticky');
            $('#button').fadeOut();
        }
    })
    $('#button').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    })
})