;(function () {
  var delay = 200
  var removeEffect = function (el, cl) {
    el.className = el.className.replace(cl, '')
    removeTransform(el)
    setTimeout(function () {
      el.style.zIndex = ''
    }, delay)
  }

  var addEffect = function (el, cl) {
    el.style.zIndex = 999
    el.className = el.className + ' ' + cl
    setTransform(el)
  }

  var setTransform = function (el) {
    var ch = document.documentElement.clientHeight
    var cw = document.documentElement.clientWidth
    var rh = ch / el.height - 0.2
    var rw = cw / el.width - 0.2

    // 放大比例
    var r = rh < rw ? rh : rw

    var stop = document.body.scrollTop
    var otop = el.offsetTop
    var oleft = el.offsetLeft

    // 移动距离
    var oT = stop - otop + (ch - el.height) / 2
    var oL = (cw - el.width) / 2 - oleft

    el.style.transform = 'translate(' + oL + 'px,' + oT + 'px' + ')' + 'scale(' + r + ',' + r + ') '
  }

  var removeTransform = function (el) {
    el.style.transform = ''
  }

  var showZoome = function () {
    var div = document.createElement('div')
    div.setAttribute('class', 'zoomed-bg')
    document.body.appendChild(div)
  }

  var hideZoome = function () {
    var zoom = document.getElementsByClassName('zoomed-bg')
    if (zoom) {
      var bg = zoom[0]
      bg.className = bg.className + ' ' + 'hiding'
      setTimeout(function () {
        document.body.removeChild(bg)
      }, delay)
    }
  }

  document.body.addEventListener('click', function (event) {
    if (!document.getElementsByClassName('photo').length) return

    var target = event.target
    var c = 'zoomed'
    if (target.nodeName === 'IMG') {
      var cl = target.className

      if (cl.match(c)) {
        removeEffect(target, c)
        hideZoome()
        return
      }
      addEffect(target, c)
      showZoome()
    }
  })
}())
