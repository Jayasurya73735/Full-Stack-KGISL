// Load existing reviews from local storage
    document.addEventListener("DOMContentLoaded", function() {
        loadReviews();
    });

    // Function to load reviews from local storage
    function loadReviews() {
        var reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        var reviewsContainer = document.getElementById("reviews");
        reviewsContainer.innerHTML = "";

        reviews.forEach(function(review) {
            var reviewDiv = document.createElement("div");
            reviewDiv.classList.add("review");
            reviewDiv.innerHTML = "<strong>" + review.movie + "</strong> - Rating: " + review.rating + "/10<br>" + review.comment;
            reviewsContainer.appendChild(reviewDiv);
        });
    }

    // Function to handle form submission
    document.getElementById("reviewForm").addEventListener("submit", function(event) {
        event.preventDefault();

        var movie = document.getElementById("movie").value;
        var rating = document.getElementById("rating").value;
        var comment = document.getElementById("comment").value;

        // Create review object
        var review = {
            movie: movie,
            rating: rating,
            comment: comment
        };

        // Save review to local storage
        var reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push(review);
        localStorage.setItem("reviews", JSON.stringify(reviews));

        // Reload reviews
        loadReviews();

        // Reset form fields
        document.getElementById("reviewForm").reset();
    });