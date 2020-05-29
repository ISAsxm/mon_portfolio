const DOMStrings = {

    "navLink": ".navigation__link",
    "naviToggle": "#navi-toggle",
};

const navLink = document.querySelectorAll(DOMStrings.navLink);
const naviToggle = document.querySelector(DOMStrings.naviToggle);

const nodeListForEach = function(list, callback) {

    for (let i = 0; i < list.length; i++) {
        callback(list[i], i);
    }
};

nodeListForEach(navLink, function(current) {

    current.addEventListener('click', function() {

        naviToggle.checked = false;
    });   
    
});