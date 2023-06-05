document.write("HELLO我是吳柏江")

var count = 0;
    var counterElement = document.getElementById("counter");

    function increment() {
      count= count+2;
      counterElement.textContent = count;
    }