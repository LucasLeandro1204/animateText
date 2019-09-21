/**
 * @file Text Animation
 * @author E. Design <contato@eryc.design>
 * @version 0.1
 */


/**
 * Text Animation
 * 
 * @param {string} selector - The element containing the text.
 * @param {obj} a - The animation properties.
 */

function fadeIn(selector, a) {

  (!!a.name) ? a.name : a.name = "fadeIn";
  (!!a.duration) ? a.duration : a.duration = "3s";
  (!!a.count) ? a.count : a.count = "1";
  (!!a.fill) ? a.fill : a.fill = "forwards";
  (!!a.timing) ? a.timing : a.timing = "cubic-bezier(0.215, 0.61, 0.355, 1)";
  (!!a.delay) ? a.delay : a.delay = 0;
  (!!a.additionalDelay) ? a.additionalDelay : a.additionalDelay = 75;

  var elsArray = [].slice.call(document.querySelectorAll(selector));
  var d = a.delay;

  elsArray.forEach(function (el, index) {
    var text = el.innerText;
    el.innerText = "";

    for (var x = 0, c = ''; c = text.charAt(x); x++) {
      var t = document.createTextNode(c);
      var s = document.createElement('span');
      s.classList.add('s');
      s.appendChild(t);
      el.appendChild(s);
      s.style.opacity = "0";
      s.style.display = "inline-block";
      s.style.animationName = a.name;
      s.style.animationDuration = a.duration;
      s.style.animationIterationCount = a.count;
      s.style.animationFillMode = a.fill,
      s.style.animationTimingFunction = a.timing;
      s.style.animationDelay = d + "ms";
      d += a.additionalDelay;
    }
  });
}