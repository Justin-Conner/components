$(document).ready(function(){
    var text = $(".colored-text p").text().trim();
    var coloredText = "";
    var words = text.split(/\s+/); // Split text into words

    words.forEach(function(word, index) {
        if (word === "Justin@HIREME") {
            coloredText += `<span class="green-text">${word}</span>`;
        } else {
            for (var i = 0; i < word.length; i++) {
                var char = word.charAt(i);
                var colorClass = "";

                if (char === '@') {
                    colorClass = "green-text";
                } else if (char.match(/[a-zA-Z0-9]/)) {
                    colorClass = "purple-text";
                } else if (char === '/') {
                    colorClass = "yellow-text";
                } else if (char === '$') {
                    colorClass = "white-text";
                }

                coloredText += `<span class="${colorClass}">${char}</span>`;
            }
        }

        // Add space between words except for the last word
        if (index !== words.length - 1) {
            coloredText += " ";
        }
    });

    $(".colored-text p").html(coloredText);
});
