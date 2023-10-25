// Select all anchor (a) elements on the page and add a click event listener to each of them.
document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
        // Prevent the default behavior of the anchor tag, which is to navigate to another page.
        e.preventDefault();

        // Get the target ID from the href attribute of the clicked anchor and remove the '#' symbol.
        const targetId = link.getAttribute("href").substring(1);

        // Find the element with the target ID in the document.
        const target = document.getElementById(targetId);

        // Check if the target element exists in the document.
        if (target) {
            // If the target element exists, scroll to it with a smooth scrolling effect.
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


document.getElementById('scrollButton').addEventListener('click', function() {
    // Find the target element to scroll to (you can replace 'targetElement' with the actual element ID or selector)
    const targetElement = document.getElementById('targetElementId'); // Change 'targetElementId' to your target element's ID

    // Use the scrollIntoView method to scroll to the target element
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
});