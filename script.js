

(function () {

    var names = ["Sujana", "Suma", "Jin", "Jacob", "Zendaya", "Taylor", "Pine", "Apple", "Lauryn", "ken"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker(names[i]);
        }
        else {
            helloSpeaker(names[i]);
        }
    }

})();


