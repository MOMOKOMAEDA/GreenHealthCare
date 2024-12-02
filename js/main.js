$(".slide-items").slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    dots: true,
    dotsClass: 'dots-wrap',
    appendDots: $('.dots-box'),
    appendArrows: $('.arrow_box'),
    prevArrow: '<div class="slide-arrow prev-arrow"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"></div>',
}); 


// _____________________________mainvisualのフェードイン____________________________

function toggleAccordion(element) {
    // すべてのアコーディオンを閉じる
    const allDetails = document.querySelectorAll('.schedule_content_detail');
    const allIcons = document.querySelectorAll('.accordion-icon');

    allDetails.forEach((detail) => {
        if (detail !== element.nextElementSibling) {
            detail.classList.remove('open');
        }
    });

    allIcons.forEach((icon) => {
        if (icon !== element.querySelector('.accordion-icon')) {
            icon.textContent = '+';
        }
    });

    // クリックされた要素の詳細をトグル
    const detail = element.nextElementSibling;
    const icon = element.querySelector('.accordion-icon');

    if (detail.classList.contains('open')) {
        detail.classList.remove('open');
        icon.textContent = '+';
    } else {
        detail.classList.add('open');
        icon.textContent = '-';
    }
}

// _________________________________valueのフェードイン＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿

document.addEventListener("DOMContentLoaded", function () {
    const scrollFadeElements = document.querySelectorAll('.scroll-fade');

    const onScroll = () => {
        scrollFadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elementTop = rect.top;
            const elementBottom = rect.bottom;

            // 要素が画面内に完全に入ったら visible クラスを追加
            if (elementTop < window.innerHeight && elementBottom > 0) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll(); // 初期ロード時にもチェック
});


// __________________________________________ハンバーガーメニュー＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
// ハンバーガーメニューのクリックイベント
$(".toggle_btn").on("click", function () {
    // .toggle_btnをクリックしたときに実行する
    //  function:実行する

    ($(".header1").toggleClass("open"));
  });
  // #maskのエリアをクリックした時にメニューを閉じる
  $("#mask").on("click", function () {
    // #maskをクリックしたときに実行する
    $(".header1").toggleClass("open");

  });

  // リンクをクリックした時にメニューを閉じる
  $("#navi a").on("click", function () {
    // #navi aをクリックしたときに実行する

    $(".header1").toggleClass("open");
  });
