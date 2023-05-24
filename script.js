var congratsMessages = [
    "Chúc mừng bạn đã đỗ!",
    "Xin chúc mừng!",
    "Thật tuyệt vời, bạn đã đỗ!",
    "Bạn đã làm rất tốt, chúc mừng!",
    "Chúc mừng bạn đã vượt qua!"
];

var encouragementMessages = [
    "Cố gắng hơn lần sau nhé!",
    "Đừng buồn, hãy cố gắng thêm!",
    "Tiếc quá, nhưng không sao, cố lên!",
    "Đừng bỏ cuộc, hãy thử lại!",
    "Hãy tập trung và cố gắng hơn!"
];

document.getElementById("calculate-btn").addEventListener("click", function () {
    var toan = parseFloat(document.getElementById("toan").value) || 0;
    var van = parseFloat(document.getElementById("van").value) || 0;
    var anh = parseFloat(document.getElementById("anh").value) || 0;
    var ly = parseFloat(document.getElementById("ly").value) || 0;
    var hoa = parseFloat(document.getElementById("hoa").value) || 0;
    var sinh = parseFloat(document.getElementById("sinh").value) || 0;

    if (toan <= 1 || van <= 1 || anh <= 1 || ly <= 1 || hoa <= 1 || sinh <= 1) {
        document.getElementById("score").textContent = "";
        document.getElementById("status-text").textContent = "TRƯỢT";
        document.getElementById("status-text").classList.add("font-semibold", "text-red-500");
        document.getElementById("status-text").classList.remove("text-green-500");
        var randomEncouragement = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
        document.getElementById("encouragement").textContent = randomEncouragement;
    } else {
        var diemlop12 = parseFloat(document.getElementById("diemlop12").value) || 0;
        var diemkk = parseFloat(document.getElementById("diemkk").value) || 0;
        var diemuutien = parseFloat(document.getElementById("diemuutien").value) || 0;

        var diemKHTN = (ly + hoa + sinh) / 3;
        var trungbinhmon = (toan + van + anh + diemKHTN + diemkk) / 4;
        var score = ((trungbinhmon * 7) + (diemlop12 * 3)) / 10 + diemuutien;
        document.getElementById("score").textContent = score.toFixed(2);

        var statusElement = document.getElementById("status-text");
        if (score >= 5) {
            statusElement.textContent = "ĐỖ";
            statusElement.classList.add("text-green-500");
            statusElement.classList.remove("text-red-500");
            var randomCongrats = congratsMessages[Math.floor(Math.random() * congratsMessages.length)];
            document.getElementById("encouragement").textContent = randomCongrats;
        } else {
            statusElement.textContent = "TRƯỢT";
            statusElement.classList.add("text-red-500");
            statusElement.classList.remove("text-green-500");
            var randomEncouragement = encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)];
            document.getElementById("encouragement").textContent = randomEncouragement;
        }
    }
});

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', function () {
    const isDarkMode = document.body.classList.contains('dark');
    if (isDarkMode) {
        document.body.classList.remove('dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        document.body.classList.add('dark');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});

var clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", clearData);

function clearData() {
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
        var input = inputElements[i];
        if (input.type === "text") {
            input.value = "";
        }
    }
}

