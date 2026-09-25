const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector("textarea").value;

        try {
            const response = await fetch("http://localhost:5000/api/enquiries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                })
            });

            const data = await response.json();

            if (data.success) {
                alert("Thank you! Your enquiry has been submitted successfully.");
                contactForm.reset();
            } else {
                alert("Something went wrong. Please try again.");
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Server se connection nahi ho pa raha.");
        }
    });
}