require("WebFont", function() {
  WebFont.load({
    google: {
//       families: ['Roboto:400,400italic,500,700:latin-ext', 'Frank Ruhl Libre:300,400,500,700:latin-ext'],
      families: ['Roboto:400,400italic,500,700:latin-ext', 'EB Garamond:400,400italic,600,700,700italic:latin-ext&display=swap'],
//     families: ['Roboto'],
//     urls: ['/lib/roboto/roboto.css'],
    },
    active: function () {
      sessionStorage.fonts = true
    },
  })
})