$(document).ready(function(){
    // Function to toggle a card
    function toggleCard(buttonId, cardId) {
        $(buttonId).click(function(){
            $(cardId).toggle();
            if ($(cardId).is(':visible')) {
                $(buttonId).text('Hide Message');
            } else {
                $(buttonId).text('Show Message');
            }
        });
    }

    function toggleDisclaimer(buttonId, cardId) {
        $(buttonId).click(function(){
            $(cardId).toggle();
            if ($(cardId).is(':visible')) {
                $(buttonId).text('Hide Message');
            } else {
                $(buttonId).text('Ito muna');
            }
        });
    }

    toggleDisclaimer('#toggleDisclaimer', '#disclaimer');
    // Toggle for the first card
    toggleCard('#toggleButton1', '#firstCard');

    // Toggle for the second card
    toggleCard('#toggleButton2', '#secondCard');

    toggleCard('#toggleButton3', '#thirdCard');
});

function getGreeting() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour < 12) {
        return "Good Morning! I hopee u're okay paaa :))";
    } else if (currentHour < 18) {
        return "Good Afternoon!";
    } else {
        return "Good Evening!";
    }
}

document.getElementById("greet").innerHTML = getGreeting();
