$(document).ready(function () { // 문서가 로드된 후에 JavaScript 코드가 적절한 시점에 실행하게 해주는 코드

    /*  메뉴 스크롤  */
    var $menu = $('.nav ul li'),
        $contents = $('.section'),
        $doc = $('html, body');
    $(function () {
        $menu.on('click', 'a', function (e) {
            var $target = $(this).parent(), // 클릭한 메뉴 항목의 부모 요소인 <li>를 $target 변수에 할당
                idx = $target.index(), // $target의 인덱스를 가져와 $contents에서 해당 섹션을 선택할 때 사용할 인덱스인 idx 변수에 할당
                section = $contents.eq(idx), // $contents에서 idx에 해당하는 섹션을 선택하고 section 변수에 할당
                offsetTop = section.offset().top; // 선택한 섹션의 상단 위치를 offsetTop 변수에 할당

            var correctedOffsetTop = offsetTop - -10; // offsetTop 값을 10만큼 보정값 조정, 스크롤 살짝 위로 올리기
            $doc.stop() // $doc 변수에 저장된 문서 요소('html, body')를 애니메이션으로 스크롤
                .animate({
                    scrollTop: correctedOffsetTop
                }, 500); // scrollTop 속성을 correctedOffsetTop 값으로 설정하고, 500밀리초 동안 애니메이션을 진행
            return false; // <a> 요소를 클릭했을 때 기본적으로 발생하는 링크 이동을 방지
        });
    });

    $(window).scroll(function () { // 윈도우의 스크롤 이벤트가 발생할 때 실행될 이벤트 핸들러를 등록
        var scltop = $(window).scrollTop(); // 현재 스크롤의 위치를 scltop 변수에 할당. scrollTop() 함수는 스크롤된 Y축의 위치를 반환

        $.each($contents, function (idx, item) { // $contents에 대해 반복문을 실행. $contents는 각 섹션 요소들을 나타내는 배열
            var $target = $contents.eq(idx), // 현재 반복 중인 섹션을 $target 변수에 할당
                i = $target.index(), // $target의 인덱스를 가져와 i 변수에 할당
                targetTop = $target.offset().top; // $target 요소의 상단 위치를 targetTop 변수에 할당

            if (targetTop <= scltop) { // 현재 스크롤 위치(scltop)가 $target 요소의 상단 위치(targetTop)보다 크거나 같을 경우 실행
                $menu.removeClass('on'); // 모든 메뉴 항목에서 'on' 클래스를 제거
                $menu.eq(idx).addClass('on'); // 현재 섹션에 해당하는 메뉴 항목에 'on' 클래스를 추가. 이를 통해 현재 보여지는 섹션과 연관된 메뉴 항목에 시각적인 표시를 줄 수 있다
            }

        })
    });


    /* to top 버튼 */
    var btnTop = $('.to_top_btn'); // $('.to_top_btn') 선택자를 사용하여 "To Top" 버튼을 나타내는 요소를 선택하고 btnTop 변수에 할당
    btnTop.on('click', function () {
        $doc.stop() // $doc 변수에 저장된 문서 요소('html, body')를 애니메이션으로 스크롤
            .animate({
                scrollTop: 0
            }, 500) // scrollTop 속성을 0으로 설정하여 페이지의 맨 위로 이동하고, 500밀리초 동안 애니메이션을 진행
    });


    /* 상단 게이지 바 */
    $(window).scroll(function () {
        var wintop = $(window).scrollTop(), // 현재 스크롤 위치를 wintop 변수에 할당. scrollTop() 함수는 스크롤된 Y축의 위치를 반환
            docheight = $('.wrapper').height(), // .wrapper 클래스를 가진 요소의 높이를 가져와 docheight 변수에 할당. 페이지 전체 내용의 높이
            winheight = $(window).height(); // 윈도우의 높이를 가져와 winheight 변수에 할당. 현재 보이는 브라우저 창의 높이
        var totalScroll = (wintop / (docheight - winheight)) * 100; // 스크롤 위치(wintop)를 페이지 내용의 전체 높이(docheight - winheight)로 나눈 후 100을 곱하여 전체 스크롤의 백분율을 계산하여 totalScroll 변수에 할당
        $(".progress_bar").css("width", totalScroll + "%"); // .progress_bar 클래스를 가진 요소의 너비를 totalScroll 백분율 값으로 설정. 상단에 위치한 게이지 바의 너비를 조정
        $(".hodu_img").css("left", totalScroll + "%"); // .hodu_img 클래스를 가진 요소의 왼쪽 위치를 totalScroll 백분율 값으로 설정. 이를 통해 이미지를 수평으로 이동
    });


    /* 이미지 슬라이드 */
    var imgs;
    var img_count;
    var img_position = 1;

    imgs = $(".gallery"); // .gallery 클래스를 가진 요소를 선택하여 imgs 변수에 할당. 이는 이미지 슬라이드가 적용될 이미지 컨테이너를 나타낸다
    img_count = imgs.children().length; // imgs 변수에 저장된 이미지 컨테이너의 자식 요소(이미지)의 개수를 가져와 img_count 변수에 할당

    //버튼을 클릭했을 때 함수 실행
    $('.prev_btn').click(function (e) { // 이전 버튼(.prev_btn)을 클릭했을 때 실행될 함수를 등록. back() 함수를 호출하여 이전 이미지로 이동
        back();
    });

    $('.next_btn').click(function (e) { // 다음 버튼(.next_btn)을 클릭했을 때 실행될 함수를 등록. next() 함수를 호출하여 다음 이미지로 이동
        if (img_position < img_count - 2) {
            next();
        } else {
            e.preventDefault();
        }
    });

    function back() { // back()는 이전 이미지로 이동하는 동작을 수행. 현재 이미지 위치(img_position)가 1보다 큰 경우
        if (1 < img_position) {
            imgs.animate({
                left: '+=210px' // 이미지 컨테이너(imgs)를 210px 왼쪽으로 애니메이션으로 이동.
            });
            img_position--; // 그리고 img_position을 감소
        }
    }

    function next() { // next()는 다음 이미지로 이동하는 동작을 수행. 현재 이미지 위치(img_position)가 이미지 개수(img_count)보다 작은 경우
        if (img_count > img_position) {
            imgs.animate({
                left: '-=210px' // 이미지 컨테이너(imgs)를 210px 오른쪽으로 애니메이션으로 이동
            });
            img_position++; // 그리고 img_position을 증가
        }
    }

});

