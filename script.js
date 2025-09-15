var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// Replace with your actual EmailJS service and template ID
emailjs.init("ZqQAdmxdp_bEDiHRq");
const serviceID = "service_s8at5yg";
const contactTemplateID = "template_f0mm2xn"; // Contact Us (which includes auto-reply)

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = this;

    emailjs.sendForm(serviceID, contactTemplateID, form)
    .then(() => {
        console.log("Message sent ✅ (Auto-reply will be sent automatically)");
        alert("Message sent successfully!");
        form.reset(); // Clear the form after submission
    })
    .catch((error) => {
        console.error("Failed to send message ❌", error);
        alert("Something went wrong. Please try again.");
    });
});


    document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector("nav ul");

        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    });