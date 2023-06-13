
$(document).ready(function () {

    const validateUserId = () => {
        const userId = document.getElementById("userId");
        const userIdtest = /^(?=.*\d)(?=.*^[a-z])(?=.).{4,12}$/;
        if (!userIdtest.test(userId.value)) {
            userId.nextElementSibling.style.display = 'inline';
            return false;
        } else {
            userId.nextElementSibling.style.display = 'none';
            return true;
        }
    };

    const validatePassword = () => {
        const userPw = document.getElementById("pwd");
        const userPwtest = /^(?=.*\d)(?=.*[A-Za-z])(?=.*[!&/\\*@]).{8,15}$/;
        if (!userPwtest.test(userPw.value)) {
            userPw.nextElementSibling.style.display = 'inline';
            return false;
        } else {
            userPw.nextElementSibling.style.display = 'none';
            return true;
        }
    };

    const validatePasswordtest = () => {
        const p1 = document.getElementById("pwd").value;
        const p2 = document.getElementById("pwdCheck").value;
        const errElement = document.getElementById("errpwdCheck");

        if (p1 !== p2) {
            errElement.style.display = 'inline';
            return false;
        } else {
            errElement.style.display = 'none';
            return true;
        }
    };

    const validateUserName = () => {
        const userName = document.getElementById("userName");
        const userNameTest = /^[가-힣]{2,}$/;
        if (!userNameTest.test(userName.value)) {
            userName.nextElementSibling.style.display = 'inline';
            return false;
        } else {
            userName.nextElementSibling.style.display = 'none';
            return true;
        }
    };

    const validateEmail = () => {
        const email = document.getElementById("email");
        const emailTest = /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/;
        if (!emailTest.test(email.value)) {
            email.nextElementSibling.style.display = 'inline';
            return false;
        } else {
            email.nextElementSibling.style.display = 'none';
            return true;
        }
    };

    const validateTel1 = () => {
        const tel1 = document.getElementById("tel1");
        const tel1Test = /^0\d{1,2}$/;
        if (!tel1Test.test(tel1.value)) {
            tel1.nextElementSibling.style.display = 'inline';
            return false;
        } else {
            tel1.nextElementSibling.style.display = 'none';
            return true;
        }
    };

    const validateTel2 = () => {
        const tel2 = document.getElementById("tel2");
        const tel2Test = /^[0-9]{3,4}$/;
        if (!tel2Test.test(tel2.value)) {
            tel2.nextElementSibling.style.display = 'inline';
            return false;
        } else {
            tel2.nextElementSibling.style.display = 'none';
            return true;
        }
    };

    const validateTel3 = () => {
        const tel3 = document.getElementById("tel3");
        const tel3Test = /^[0-9]{4}$/;
        if (!tel3Test.test(tel3.value)) {
            tel3.nextElementSibling.style.display = 'inline';
            return false;
        } else {
            tel3.nextElementSibling.style.display = 'none';
            return true;
        }
    };

    const userNameInput = document.getElementById("userName");
    userNameInput.onblur = validateUserName;
    const pwdCheck = document.getElementById("pwdCheck");
    pwdCheck.oninput = validatePasswordtest;
    const userId = document.getElementById("userId");
    userId.onblur = validateUserId;
    const userPw = document.getElementById("pwd");
    userPw.onblur = validatePassword;
    const email = document.getElementById("email");
    email.onblur = validateEmail;
    const tel1 = document.getElementById("tel1");
    tel1.onblur = validateTel1;
    const tel2 = document.getElementById("tel2");
    tel2.onblur = validateTel2;
    const tel3 = document.getElementById("tel3");
    tel3.onblur = validateTel3;


    const pwd = document.getElementById("pwd");
    pwd.oninput = (e) => {
        const userPw = document.getElementById("pwd");
        const userPwtest = /^(?=.*\d)(?=.*[A-Za-z])(?=.*[!&/\\*@]).{8,15}$/;
        if (userPwtest.test(e.target.value)) {
            e.target.nextElementSibling.style.display = 'none';
        } else {
            e.target.nextElementSibling.style.display = 'inline';
        }
    };

    document.memberFrm.onsubmit = function (e) {
        e.preventDefault(); // 기본 제출 동작 방지
    }

    //1.아이디검사
    //첫글자는 반드시 영소문자 F로 이루어지고, 
    //숫자가 하나이상 포함되어야함.
    //아이디의 길이는 4~12글자사이

    document.addEventListener("DOMContentLoaded", function () {
        const validations = [
            { re: /^.{8,12}$/, msg: '아이디는 8~12자리여야 합니다.' },
            { re: /\d/, msg: '아이디는 숫자를 하나 이상 포함해야합니다.' },
            { re: /^[a-z]/, msg: '아이디는 반드시 영소문자로 시작해야합니다.' },
        ];

        const userIdInput = document.getElementById("userId");
        const userIdValue = userIdInput.value;

        const result = validations.every(({ re, msg }) => {
            if (!re.test(userIdValue)) {
                alert(msg);
                return false;
            }
            return true;
        });
    });

    // 2.비밀번호 확인 검사
    // 숫자 / 문자 / 특수문자 포함 형태의 8~15자리 이내의 암호 정규식

    document.addEventListener("DOMContentLoaded", function () {
        const validations2 = [
            { re: /^.{8,15}$/, msg: '비밀번호는 8~15자리여야 합니다.' },
            { re: /\d/, msg: '비밀번호는 숫자를 하나이상 포함해야합니다.' },
            { re: /[a-z]/i, msg: '비밀번호는 문자를 하나이상 포함해야합니다.' },
            { re: /[!&/\\*@]/, msg: '비밀번호는 특수문자 !&/\\*@ 를 하나이상 포함해야합니다.' },
        ];

        const result2 = validations2.every(({ re, msg }) => {
            if (!re.test(value)) {
                alert(msg);
                return false;
            }
            return true;
        });
    });

    // 3. 비밀번호 일치여부 검사
    document.addEventListener("DOMContentLoaded", function () {
        const p1 = document.getElementById("pwd").value;
        const p2 = document.getElementById("pwdCheck").value;

        if (p1 !== p2) {
            alert("비밀번호가 일치하지 않습니다.");
        };
    });

    // 4.이름검사 : 한글 2글자 이상만 허용.
    document.addEventListener("DOMContentLoaded", function () {
        const validations3 = [
            { re: /^[가-힣]{2,}$/, msg: '이름은 한글 2글자 이상 가능합니다.' },
        ];

        const result3 = validations3.every(({ re, msg }) => {
            const userName = document.getElementById("userName");
            const value = userName.value;

            if (!re.test(value)) {
                alert(msg);
                return false;
            }
            return true;

        });

        //5.이메일 검사
        // 4글자 이상(\w = [a-zA-Z0-9_], [\w-\.]) @가 나오고
        // 1글자 이상(주소). 글자 가 1~3번 반복됨
        if (
            !regExpTest(
                /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/,
                email,
                "이메일을 잘못 입력하셨습니다."
            )
        )
            return false;

        //6. 전화번호 검사
        // 전화번호 앞자리는 두자리이상, 두번째 자리는 3~4자리 숫자, 세번째 자리는 4자리 숫자
        if (!regExpTest(/^0\d{1,2}$/, tel1, "번호 2자리 이상 입력"))
            return false;
        if (!regExpTest(/^[0-9]{3,4}$/, tel2, "번호 3자리 이상 입력"))
            return false;
        if (!regExpTest(/^[0-9]{4}$/, tel3, "4자리 번호 입력"))
            return false;

        return true;

    });

    // 회원가입 버튼 눌렀을 때 회원정보
    const join_btn = document.getElementById("join_btn");
    join_btn.addEventListener("click", function () {

        if (
            validateUserId() &&
            validatePassword() &&
            validatePasswordtest() &&
            validateUserName() &&
            validateEmail() &&
            validateTel1() &&
            validateTel2() &&
            validateTel3()
        ) {
            const userData = {
                userId: document.getElementById("userId").value,
                userPw: document.getElementById("pwd").value,
                userName: document.getElementById("userName").value,
                email: document.getElementById("email").value,
                tel: `${document.getElementById("tel1").value}-${document.getElementById("tel2").value}-${document.getElementById("tel3").value}`,
                guestbook: document.getElementById("guestbook").value,
            };

            // 기존 데이터 가져오기
            let storedUserData = JSON.parse(localStorage.getItem("userData"));
            // 기존 데이터가 없는 경우 새로운 배열 생성
            if (!Array.isArray(storedUserData)) {
                storedUserData = [];
            }
            // 새로운 회원 데이터 추가
            storedUserData.push(userData);

            // WebStorage에 데이터 저장
            localStorage.setItem("userData", JSON.stringify(storedUserData));

            alert("💜가입해주셔서 감사합니다💜");
            window.location.href = "../Login.html";
        }
    });
});
