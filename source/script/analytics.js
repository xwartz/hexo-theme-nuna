// google analytics
(function () {
  var ga = window.ga || function () {}
  var track = function (fields) {
    ga('send', fields)
  }
  track({
    hitType: 'screenview',
    screenName: document.title
  })
}())

