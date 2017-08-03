'use strict';
(function() {
  /**
   * 可运行在body中，也可运行在head中
   */
  if (window.devicePixelRatio && devicePixelRatio >= 2) {
    var docElem  = document.documentElement;
    var testElem = document.createElement('div');
    var fakeBody = document.createElement('body');
    var refNode  = docElem.firstElementChild || docElem.firstChild;

    testElem.style.border = '.5px solid transparent';
    fakeBody.appendChild(testElem);
    docElem.insertBefore(fakeBody, refNode);

    if (testElem.offsetHeight == 1) {
      document.querySelector('html').classList.add('hairlines');
    }
    
    docElem.removeChild(fakeBody);
  }
})();