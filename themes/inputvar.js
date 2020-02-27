(function () {
  require("IGCMS.InputVar", function () {
    require("IGCMS.Completable", function () {
      function createSelect (data, id) {
        var select = document.createElement("select")
        select.name = id
        select.id = id
        for (var i = 0; i < data.length; i++) {
          var option = document.createElement("option")
          option.innerHTML = data[i].name + " – " + data[i].desc
          option.setAttribute("data-name", data[i].name)
          option.setAttribute("data-date", data[i].date)
          option.setAttribute("data-desc", data[i].desc)
          option.setAttribute("data-price", data[i].price)
          select.appendChild(option)
        }
        return select
      }

      var data = IGCMS.InputVar.data
      var textareas = document.getElementsByTagName("textarea")

      for (var i = 0; i < data.length; i++) {
        var name = data[i].name
        for (var j = 0; j < textareas.length; j++) {
          if (!textareas[j].name.startsWith(name) || textareas[j].name.startsWith(name + "-")) {
            continue;
          }
          var selectId = "select-" + name + j
          var completable = createSelect(data[i].data, selectId)
          textareas[j].parentNode.appendChild(completable)
          IGCMS.Completable.init({
            selectSelector: "#" + selectId,
            placeholder: "Pro doplnění jídla začněte psát..",
            label: "<span class='fas fa-magic'></span>",
            onSend: (function () {
              var textarea = textareas[j]
              return function (navig, file, close) {
                if (!navig.value || !file) {
                  return
                }
                textarea.value = file.origElm.getAttribute("data-name") + "\n"
                  + file.origElm.getAttribute("data-desc") + "\n"
                  + file.origElm.getAttribute("data-price").replace("~", "\n")
                textarea.dispatchEvent(new Event('input'))
                navig.value = ""
                close()
              }
            })(),
            submitOnEnter: false,
            sendOnEmpty: true,
            decorateListItem: function (itemValue) {
              return itemValue.replace(/ – /g, "</br>")
            },
            undecorateListItem: function (itemValue) {
              return itemValue.replace(/<\/br>/g, " – ")
            }
          })
        }
      }
    })
  })
  function getClosestDate(date, day) {
    var resultDate = new Date(date.getTime())
    resultDate.setDate(date.getDate() + (7 + day - date.getDay()) % 7)
    return resultDate
  }
  function getButton (text, target, onclickText) {
    var button = document.createElement("button")
    button.type = "button"
    button.className = "button"
    button.innerHTML = text
    button.addEventListener("click", function () {
      target.value = onclickText
    }, false)
    return button
  }
  var months = ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"]
  function getCzechDate (date, year) {
    year = typeof year === 'undefined' ? true : year
    return date.getDate() + ". " + months[date.getMonth()] + (year ? " " + date.getFullYear() : "")
  }
  var nabidka = document.getElementById("inputvar-nabidka")
  var nabidkadd = nabidka.parentNode
  var date = new Date()
  var date1Buttton = getButton("Dnes", nabidka, "Denní specialita, " + getCzechDate(date))
  date.setDate(date.getDate() + 1)
  var date2Buttton = getButton("Zítra", nabidka, "Denní specialita, " + getCzechDate(date))
  date.setDate(date.getDate() + 1)
  var date3Buttton = getButton("Pozítří", nabidka, "Denní specialita, " + getCzechDate(date))
  nabidkadd.appendChild(date1Buttton)
  nabidkadd.appendChild(date2Buttton)
  nabidkadd.appendChild(date3Buttton)

  var akce = document.getElementById("inputvar-vikendova-akce")
  var akcedd = akce.parentNode
  var date = new Date()
  date = getClosestDate(date, 6)
  var date1 = new Date(date)
  date1.setDate(date1.getDate() + 1)
  var date1Buttton = getButton(
    "Tento / nejbližší víkend",
    akce,
    "Víkendová akce, " + getCzechDate(date, false) + " až " + getCzechDate(date1)
  )
  date.setDate(date.getDate() + 7)
  date1.setDate(date1.getDate() + 7)
  var date2Buttton = getButton("Příští víkend",
    akce,
    "Víkendová akce, " + getCzechDate(date, false) + " až " + getCzechDate(date1)
  )
  akcedd.appendChild(date1Buttton)
  akcedd.appendChild(date2Buttton)

})()