document.addEventListener("DOMContentLoaded", function() {  //문서가 전체를 로딩된 후 실행 됨.

    // 상단 서브메뉴 보이기
    const headerLinks = document.querySelectorAll("header li > a");
    headerLinks.forEach( function( i ) {
        i.addEventListener("mouseenter", function() {
            document.querySelector("header nav").style.display = "none";
            this.nextElementSibling.style.display = "block";
        });
        i.addEventListener("click", function(event) {
            event.preventDefault();
        });
    });

    // 이미지 슬라이드 함수 정의
    function rightMove() {
        const slidingDiv = document.querySelector("#sliding div");
        const imgs = slidingDiv.children;

        if (window.innerWidth > 768) {
            slidingDiv.style.transition = "left 1s ease-in-out";
            slidingDiv.style.left = "-1280px";

            // 슬라이드 후 처리
            setTimeout(function() {
                slidingDiv.insertBefore(imgs[imgs.length - 1], imgs[0]);
                slidingDiv.style.transition = "none";
                slidingDiv.style.left = "-2560px";
            }, 1000);
        } else {
            slidingDiv.style.transition = "left 1s ease-in-out";
            slidingDiv.style.left = "-100vw";

            // 슬라이드 후 처리
            setTimeout(function() {
                slidingDiv.insertBefore(imgs[imgs.length - 1], imgs[0]);
                slidingDiv.style.transition = "none";
                slidingDiv.style.left = "-200vw";
            }, 1000);
        }
    }

    // 윈도우 사이즈에 따라 이미지 슬라이드 간격 설정
    if (window.innerWidth > 768) {
        setInterval(rightMove, 2000);
    } else {
        setInterval(rightMove, 2000);
    }

    // 팝업 (협력사 이미지 클릭)
    document.querySelector("#partner > a").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#black").style.display = "block";
    });

    // 팝업 버튼 클릭 시 닫힘
    document.querySelector("#black button").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector("#black").style.display = "none";
    });

});
