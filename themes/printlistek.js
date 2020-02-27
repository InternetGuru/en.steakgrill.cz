(function() {
  
  require("IGCMS", function () {
  
    if (!'print' in window) {
      return;
    }

    var url = new URL(window.location.href);
    if (url.searchParams.get("print") === null) {
      return;
    }

    var Printable = function () {
      var
      Config = {
        styles: "",
        parentSelector: "",
        printButtonStyle: "width: 1em; margin-left: 0.5em; white-space: nowrap; overflow: hidden; border: 0; background: none; cursor: pointer;",
        printButtonClass: "noprint fas fa-print",
        printButtonText: "Print",
        childrenSelector: [],
        allChildren: false,
        copies: 16
      },
      w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight,
      printNabidka = function (event) {
        var printWin = window.open('', 'PRINT', 'height=' + y + ',width=' + x);

        printWin.document.write('<html><head><link href="//fonts.googleapis.com/css?family=Roboto:400,500&amp;subset=latin-ext" rel="stylesheet"></head><body>');

        var wrap = document.createElement('div');
        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        wrap.appendChild(div1);
        div1.appendChild(div2);
        var h1 = document.createElement('h1');
        h1.innerHTML = document.querySelector(Config.parentSelector).title;
        div2.appendChild(h1);
        for (var i = 0; i < Config.childrenSelector.length; i++) {
          if (Config.allChildren) {
            var children = document.querySelectorAll(Config.childrenSelector[i]);
            for (var j = 0; j < children.length; j++) {
              div2.appendChild(children[j].cloneNode(true));
            }
          } else {
            var children = document.querySelector(Config.childrenSelector[i]);
            div2.appendChild(children.cloneNode(true));
          }
        }

        for (var i = 0; i < Config.copies; i++) {
          printWin.document.write(wrap.innerHTML);
        }
        printWin.document.write('</body></html>');

        var style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(Config.styles));
        printWin.document.head.appendChild(style);

        printWin.document.close(); // necessary for IE >= 10
        printWin.focus(); // necessary for IE >= 10*/


        printWin.setTimeout(function () {
          printWin.print();
        }, 300);

        //printWin.close();

        return true;
      }
      return {
        init: function (cfg) {
          if (!cfg.parentSelector) {
            return;
          }
          IGCMS.initCfg(Config, cfg)
          var button = document.createElement('button');
          var span = document.createElement('span');
          button.appendChild(span);
          button.style = Config.printButtonStyle;
          span.innerHTML = Config.printButtonText;
          button.title = Config.printButtonText;
          span.className = Config.printButtonClass;
          var nadpis = document.querySelector(Config.parentSelector);
          nadpis.appendChild(button);
          button.addEventListener('click', printNabidka, false);
        }
      }
    };
    
    var styles = " \
    * { \
      margin: 0; \
      padding: 0; \
      box-sizing: border-box; \
    } \
    body > div { \
      display: inline-block; \
      float: left; \
      width: 25vw; \
      height: 50vh; \
      background: #ddd; \
      padding: 1.5mm; \
      position: relative; \
      z-index: -1; \
    } \
    div > div { \
      background: white; \
      height: 100%; \
      position: relative; \
    } \
    div > div:before { \
      content: \"\"; \
      display: block; \
      position: absolute; \
      width: 100%; \
      height: calc(100% + 3mm); \
      background: white; \
      top: -1.5mm; \
      z-index: -1; \
    } \
    div > div:after { \
      content: \"\"; \
      display: block; \
      position: absolute; \
      width: calc(100% + 3mm); \
      height: 100%; \
      background: white; \
      left: -1.5mm; \
      top: 0; \
      z-index: -1; \
    } \
    body > div > div > * { \
      position: relative; \
      z-index: 1; \
    } \
    body > div:after { \
      content: \"\"; \
      width: 80%; \
      height: 100%; \
      background: url(\"/files/piktogram_orez_4.png\") no-repeat bottom right; \
      display: block; \
      position: absolute; \
      bottom: 0; \
      right: 0; \
      background-size:  contain; \
    } \
    dt.price, \
    .noprint { \
      display: none; \
    } \
    @media all and (orientation: portrait) and (min-width: 200mm) { \
      body > div { \
        height: 25vh; \
      } \
    } \
    /**********************/ \
    div { \
      font-size: 10pt; \
      font-family: Roboto, sans-serif; \
    } \
    h1, dl { \
      padding: 1em 1rem; \
    } \
    h1 +dl { \
      padding-top: 0; \
    } \
    h1 { \
      font-weight: 400; \
    } \
    dl dt, \
    dl dd { \
      margin: 0; \
    } \
    dl.meal dt { \
      font-size: 12pt; \
      font-weight: 500; \
      margin-bottom: 0.3em; \
    } \
    dl.meal dd.price { \
      display: flex; \
      /* margin-left: auto; */ \
      justify-content: flex-end; \
      font-weight: 500; \
      margin-top: 0.2em; \
      font-size: 12pt; \
    } \
    dl.meal dd.price > span { \
      margin: 0 0.75em; \
    } \
    dl.meal dd.price > span:last-child { \
      margin-right: 0; \
    } \
    dl.meal dd.price > span > span:first-child { \
      display: block; \
      text-align: right; \
      font-weight: normal; \
      font-size: 10pt; \
    } \
    dl.meal dd.price > span > span + span { \
      font-weight: 500; \
    } \
    svg { \
      display: none; \
    }";
    
    var printable = new Printable()
    printable.init({
      styles: styles + 'body > div { height: fit-content; max-height: 33.3vh; overflow: hidden; } div > div { padding-bottom: 13mm; } h1 { padding: 4mm 1rem; } dl { padding: 0 1rem 4mm 1rem; } body > div:before { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; margin: 0; height: 13mm; background:  rgba(0, 0, 0, 0.05); z-index: 1; }',
      parentSelector: '#denni_specialita, #daily_offer',
//       printButtonText: 'Vytisknout denní nabídku',
      printButtonText: '',
      childrenSelector: [".daily_offer dl.meal[data-type='Soup']", ".daily_offer dl.meal[data-type='Main meal']"],
      allChildren: true
    })
    
    var printable2 = new Printable()
    printable2.init({
      styles: styles + " body > div { width: 50%; height: 100%; }",
      parentSelector: '#akce, #weekend_events',
//       printButtonText: 'Vytisknout víkendovou nabídku',
      printButtonText: '',
      childrenSelector: [".weekend_events dl.meal[data-type='Starter']", ".weekend_events dl.meal[data-type='Main meal']"],
      allChildren: true
    })
    
    var printable3 = new Printable()
    printable3.init({
      styles: styles + " img { max-width: 8em; }",
      parentSelector: '#pivo, #beer',
//       printButtonText: 'Vytisknout speciální nabídku piva',
      printButtonText: '',
      childrenSelector: [".beer p", ".beer dl.meal[data-type='Beer']"]
    })

  });
  
})()
