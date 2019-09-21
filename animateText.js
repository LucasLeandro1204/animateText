/**
 * Text Animation
 * 
 * @param {String} selector - The element containing the text.
 *
 * @param {Object} a - The animation properties.
 * @property {String} name - The animation name. Requires a CSS Keyframe declared. Default: "fadeIn"
 * @property {Number} duration - The animation duration, declared in MILISECONDS. Default: 3000
 * @property {Number} count - The times this animation will run. Default: 1
 * @property {String} fill - The animation fill mode. Default: "forwards"
 * @property {String} timing - The animation timing. Default OUT-QUAD: "cubic-bezier(0.215, 0.61, 0.355, 1)"
 * @property {Number} delay - The delay for the first element animated. Default: 0
 * @property {Number} additionalDelay - The amount of delay to stack up on the other. Default: 75
 */

function animateText(selector, a = { name, duration, count, fill, timing, delay, additionalDelay}) {

  (!!a.name) ? a.name : a.name = "fadeIn";
  (!!a.duration) ? a.duration : a.duration = 3000;
  (!!a.count) ? a.count : a.count = 1;
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
      if (c === " ") {
        s.innerHTML = "&nbsp;";
      }
      s.appendChild(t);
      el.appendChild(s);
      s.style.opacity = "0";
      s.style.display = "inline-block";
      s.style.animationName = a.name;
      s.style.animationDuration = a.duration + "ms";
      s.style.animationIterationCount = a.count;
      s.style.animationFillMode = a.fill,
      s.style.animationTimingFunction = a.timing;
      s.style.animationDelay = d + "ms";
      d += a.additionalDelay;
    }
  });
}