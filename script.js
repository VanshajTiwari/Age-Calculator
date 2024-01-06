function calculate() {
    let a = document.getElementById("Age").value;
    a = 2024 - a;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.animation = "appear 1s "
    document.getElementById("get").innerHTML = a;

}
