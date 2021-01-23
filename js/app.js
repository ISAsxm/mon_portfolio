const DOMStrings = {
  navLinks: ".navigation__link",
  navToggle: "#nav-toggle",
  mailLinks: ".mail-link",
}
const mailLinks = document.querySelectorAll(DOMStrings.mailLinks)
const navLinks = document.querySelectorAll(DOMStrings.navLinks)
const navToggle = document.querySelector(DOMStrings.navToggle)

const nodeListForEach = function (list, callback) {
  for (let i = 0; i < list.length; i++) {
    callback(list[i], i)
  }
}

nodeListForEach(navLinks, function (current) {
  current.addEventListener("click", function () {
    navToggle.checked = false
  })
})

nodeListForEach(mailLinks, function (current) {
  current.addEventListener("click", function (e) {
    e.preventDefault()
    window.location.href = `mailto:${current.dataset.name}@${current.dataset.domain}.${current.dataset.tld}`
  })
})
