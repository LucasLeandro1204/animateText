function fadeIn(selector, delay) {

  var elsArray = [].slice.call(document.querySelectorAll(selector));
  var d = delay;

  elsArray.forEach(function (el, index) {
    var text = el.innerText;
    el.innerText = "";

    for (var x = 0, c = ''; c = text.charAt(x); x++) {
      var t = document.createTextNode(c);
      var s = document.createElement('span');
      s.classList.add('s');
      s.appendChild(t);
      el.appendChild(s);
      s.style.animationDelay = d + "ms";
      s.classList.add('active');
      d += 75;
    }
  });
}