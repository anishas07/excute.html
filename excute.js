function myfunction() {
    var x = 5;
    var y = 10;
    var a = eval("x + y") + "<br>";
    var b = eval("2 * 2") + "<br>";
    var c = eval("y - x") + "<br>";

    var res = a + b + c;
    document.getElementById("p1").innerHTML = res;
}