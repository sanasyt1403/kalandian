$(document).ready(function(){
    // Function to toggle a card
    function toggleCard(buttonId, cardId) {
        $(buttonId).click(function(){
            console.log("clicked" + buttonId)
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
    toggleCard('#toggleButton1', '#firstCard');
    toggleCard('#toggleButton2', '#secondCard');
    toggleCard('#toggleButton3', '#thirdCard');
    toggleCard('#toggleButton4', '#fourthCard');
    toggleCard('#toggleButton5', '#fifthCard');
    toggleCard('#toggleButton6', '#sixthCard');
    toggleCard('#toggleButton7', '#seventhCard');
    toggleCard('#toggleButton8', '#eighthCard');
});

function getGreeting() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour < 12) {
        return "Good Morning!";
    } else if (currentHour < 18) {
        return "Good Afternoon!";
    } else {
        return "Good Evening!";
    }
}

document.getElementById("greet").innerHTML = getGreeting();
