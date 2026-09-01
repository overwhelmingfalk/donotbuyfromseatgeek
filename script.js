// JavaScript for donotbuyfromseatgeek.com
// Interactive elements and enhancements

document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("emailModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");

    // Get all thumbnail images
    var thumbnails = document.getElementsByClassName("email-thumbnail");
    var captionTexts = [
        "Email 1: Initial complaint and promise to fix ADA seating",
        "Email 2: Options presented - ADA seating or refund",
        "Email 3: Confirmation of ADA seat exchange processing",
        "Email 4: SeatGeek reneges, cites inventory constraints",
        "Email 5: Forrest's draft response expressing disappointment"
    ];

    // Loop through thumbnails and set up click event
    for (var i = 0; i < thumbnails.length; i++) {
        var thumb = thumbnails[i];

        thumb.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            // Use the alt text as caption, or fallback to index-based caption
            captionText.innerHTML = this.alt || captionTexts[i] || "Email screenshot";
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-btn")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Optional: Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});