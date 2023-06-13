
/* 로그인 페이지 */

const login_btn = document.getElementById("login_btn");
login_btn.addEventListener("click", function () {

    // 로그인 버튼 클릭 시
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    const userId = document.getElementById("loginId").value;
    const password = document.getElementById("loginPwd").value;

    if (Array.isArray(storedUserData)) { // localStorage에서 가져온 사용자 데이터가 배열인 경우
        const user = storedUserData.find((data) => data.userId === userId && data.userPw === password);
        if (user) {
            // 로그인 성공
            alert("💜로그인 되었습니다💜");

            // 사용자 ID를 sessionStorage에 저장
            sessionStorage.setItem('login_userId', userId);

            // index.html로 이동
            window.location.href = "../index.html";

        } else {
            // 로그인 실패
            alert("사용자 ID와 비밀번호를 잘못 입력하셨습니다.");
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const login_li = document.getElementById("login_li");
    const logout_li = document.getElementById("logout_li");
    const join_li = document.getElementById("join_li");
    const admin_li = document.getElementById("admin_li");
    const login_userId = sessionStorage.getItem("login_userId");

    if (login_userId) { // 로그인한 사용자의 ID가 sessionStorage에 저장되어 있는 경우
        login_li.style.display = "none";
        logout_li.style.display = "block";
        join_li.style.display = "none";

        // 관리자 계정으로 로그인한 경우
        if (login_userId === "admin1") {
            admin_li.style.display = "block";
        }
    } else {
        login_li.style.display = "block";
        logout_li.style.display = "none";
    }

    logout_btn.addEventListener("click", function () {
        console.log(123);
        // 로그아웃 버튼 클릭 시 로그아웃
        sessionStorage.removeItem("login_userId");
        window.location.href = "../kh_front_project/index.html";
    });
})