(function () {
  require("IGCMS", function () {

    var Slideable = function () {
      var
      Config = {
        childrenSelector: null,
        inactiveClass: "js-slideable-hidden",
        childClass: "js-slideable-child",
        arrowRightTitle: "Right",
        arrowRightClass: "js-slideable-right",
        arrowLeftTitle: "Left",
        arrowLeftClass: "js-slideable-left",
        styles: ""
      },
      children = [],
      activeChildIndex = 0,
      getRandomInt = function (min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
      }
      activateChild = function () {
        for (var i = 0; i < children.length; i++) {
          children[i].classList.add(Config.childClass)
          if (i === activeChildIndex) {
            children[i].classList.remove(Config.inactiveClass)
            continue
          }
          children[i].classList.add(Config.inactiveClass)
        }
      },
      slideLeft = function (event) {
        if (activeChildIndex === 0) {
          activeChildIndex = children.length - 1
        } else {
          activeChildIndex--
        }
        activateChild()
      },
      slideRight = function (event) {
        activeChildIndex = (activeChildIndex + 1) % children.length
        activateChild()
      },
      initStructure = function () {
        if (!Config.childrenSelector) {
          return
        }
        children = document.querySelectorAll(Config.childrenSelector)
        if (children.length < 2) {
          return
        }
        activeChildIndex = getRandomInt(0, children.length - 1)
        activateChild()
        IGCMS.appendStyle(Config.styles)
        var arrowLeft = document.createElement("a")
        arrowLeft.href = 'Javascript:void(0)'
        arrowLeft.title = Config.arrowLeftTitle
        arrowLeft.className = Config.arrowLeftClass
        var arrowLeftIcon = document.createElement("span")
        arrowLeftIcon.innerHTML = '<span class="fas fa-3x fa-chevron-left"/>'
        arrowLeft.appendChild(arrowLeftIcon)
        var arrowRight = document.createElement("a")
        arrowRight.href = 'Javascript:void(0)'
        arrowRight.title = Config.arrowRightTitle
        arrowRight.className = Config.arrowRightClass
        var arrowRightIcon = document.createElement("span")
        arrowRightIcon.innerHTML = '<span class="fas fa-3x fa-chevron-right"/>'
        arrowRight.appendChild(arrowRightIcon)
        arrowLeft.addEventListener("click", slideLeft, false)
        arrowRight.addEventListener("click", slideRight, false)
        children[0].parentNode.appendChild(arrowLeft)
        children[0].parentNode.appendChild(arrowRight)
      }
      return {
        init: function (cfg) {
          IGCMS.initCfg(Config, cfg)
          initStructure()
        }
      }
    }

    var slideable = new Slideable()
    slideable.init({
      childrenSelector: ".references .citation",
      arrowRightTitle: "další reference",
      arrowLeftTitle: "předchozí reference",
      styles: 'body .js-slideable-child { display: block; animation: fadein linear 0.5s 1 normal forwards !important; -webkit-animation: fadein linear 0.5s 1 normal forwards !important; } body .js-slideable-hidden { display: none; } @keyframes fadein { 0% { opacity: 0; visibility: hidden; } 10% { opacity: 0; visibility: visible; } 100% { opacity: 1; height: auto; } @-webkit-keyframes fadein { 0% { opacity: 0; visibility: hidden; } 10% { opacity: 0; visibility: visible; } 100% { opacity: 1; height: auto; }'
    })
  })
})()
