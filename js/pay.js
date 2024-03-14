document.ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});

document.ready(function(){
    $("#flip1").click(function(){
        $("#panel1").slideToggle("slow");
    });
});
document.ready(function(){
    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });
});


var modal = document.getElementById("orderModal");
var btn = document.getElementById("placeOrderBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
    // Simulate order processing for 3 seconds
    setTimeout(function() {
        modal.style.display = "none"; // Hide the modal
        showMessage("Order placed successfully!"); // Display success message
    }, 3000);
}
// Function to display a message
function showMessage(message) {
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add("success-message");
    document.body.appendChild(messageElement);

    // Remove the message after 2 seconds
    setTimeout(function() {
        messageElement.remove();
    }, 2000);
}