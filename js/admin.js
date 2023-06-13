
// 회원 목록 페이지

const userData = JSON.parse(localStorage.getItem('userData')) || [];
const tbody = document.querySelector("tbody")


for (const member of userData) {
    const tr = document.createElement("tr")
    for (let key in member) {
        const th = document.createElement("th")
        if (key === "createdAt") {
            th.innerText = new Date(member[key])
        }
        else {
            th.innerText = member[key]
        }
        th.style.height = "40px"
        tr.append(th)
    }
    tbody.append(tr)
}