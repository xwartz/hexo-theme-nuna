// google analytics
(function () {
  var ga = window.ga || function () {}
  var track = function (fields) {
    ga('send', fields)
  }

    // Page Tracking
    // track({
    //   hitType: 'pageview',
    //   page: window.location.pathname,
    //   title: document.title
    // })

    // Screen Tracking
  track({
    hitType: 'screenview',
    screenName: document.title
  })

  // User Timings
  // try {
  //   window.addEventListener('load', function () {
  //     var t = window.performance.timing
  //     setTimeout(function () {
  //       track({
  //         hitType: 'timing',
  //         timingCategory: 'All resources finished loading',
  //         timingVar: 'load',
  //         timingValue: t.loadEventEnd - t.navigationStart
  //       })
  //     }, 1000)
  //   })
  // } catch (e) {
  //   track({
  //     hitType: 'exception',
  //     exDescription: e.message,
  //     exFatal: false
  //   })
  // }
}())

