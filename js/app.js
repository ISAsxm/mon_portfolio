const DOMStrings = {
  navLink: ".navigation__link",
  navToggle: "#nav-toggle",
}

const navLink = document.querySelectorAll(DOMStrings.navLink)
const navToggle = document.querySelector(DOMStrings.navToggle)

const nodeListForEach = function (list, callback) {
  for (let i = 0; i < list.length; i++) {
    callback(list[i], i)
  }
}

nodeListForEach(navLink, function (current) {
  current.addEventListener("click", function () {
    navToggle.checked = false
  })
})
