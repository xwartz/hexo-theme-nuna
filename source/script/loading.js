;(function () {
  window.pageAccelerator && window.pageAccelerator({
    beforeLoading: function () {
      document.getElementsByClassName('loading-bar')[0].classList.add('isloading')
    },
    afterLoading: function () {
      document.getElementsByClassName('loading-bar')[0].classList.remove('isloading')
    }
  })
}())

