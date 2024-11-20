// document.addEventListener("DOMContentLoaded", function () {
//     const toggleButton = document.querySelector(".btn-white"); // The EN/ΕΛ button
//     toggleButton.addEventListener("click", updatePageLanguage);
// });

let isEnglish = true;

// Ensure the toggle works when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.querySelector(".language-toggle");

    if (!languageToggle) {
        console.error("Language toggle element is missing!");
        return;
    }

    const sphere = languageToggle.querySelector(".toggle-sphere");

    if (!sphere) {
        console.error("Sphere element is missing within .language-toggle!");
        console.log("Language Toggle Element:", languageToggle); // Log toggle element for debugging
        return;
    }

    // Set initial state
    syncToggleState(languageToggle, sphere, isEnglish);

    // Add click listener for the toggle
    languageToggle.addEventListener("click", function () {
        toggleLanguage(languageToggle, sphere);
    });
});

// Function to toggle the language
function toggleLanguage(toggle, sphere) {
    // Flip the language state
    isEnglish = !isEnglish;

    // Synchronize the toggle's visual state
    syncToggleState(toggle, sphere, isEnglish);

    // Update the page's content based on the selected language
    updatePageLanguage();
}

// Function to synchronize the toggle's visuals with the language state
function syncToggleState(toggle, sphere, languageState) {
    if (!sphere) {
        console.error("Sphere element is missing during syncToggleState!");
        console.log("Toggle element at this point:", toggle);
        return;
    }

    if (languageState) {
        toggle.style.background = "linear-gradient(to right, #b14141 50%, #f5f5f5 50%)"; // Red and white
        sphere.style.left = "4px"; // Sphere position for English
        sphere.textContent = "EN"; // Sphere text for English
        sphere.style.color = "#d62828"; // Red text
        sphere.style.backgroundColor = "#fff"; // White background
    } else {
        toggle.style.background = "linear-gradient(to right, #6a9ff7 50%, #dbe9fa 50%)"; // Blue and white
        sphere.style.left = "44px"; // Sphere position for Greek
        sphere.textContent = "ΕΛ"; // Sphere text for Greek
        sphere.style.color = "#00247d"; // Blue text
        sphere.style.backgroundColor = "#fff"; // White background
    }
}


function updatePageLanguage() {
    // Helper function to safely update text content
    const updateText = (selector, englishText, greekText) => {
        const element = document.querySelector(selector);
        if (element) {
            element.textContent = isEnglish ? englishText : greekText;
        }
    };

    // Helper function to safely update innerHTML
    const updateHTML = (selector, englishHTML, greekHTML) => {
        const element = document.querySelector(selector);
        if (element) {
            element.innerHTML = isEnglish ? englishHTML : greekHTML;
        }
    };

    // NAVBAR
    const navLinks = document.querySelectorAll(".primary-nav li a");
    if (navLinks.length >= 3) {
        navLinks[0].textContent = isEnglish ? "Information" : "Πληροφορiες";
        navLinks[1].textContent = isEnglish ? "Events" : "Εκδηλωσεις";
        navLinks[2].textContent = isEnglish ? "RSVP" : "Θα ερθετε?";
    }

    // HERO SECTION
    updateText("#headline", "Spyridoula & Stelios", "Σπυριδούλα & Στέλιος");

    // INFORMATION SECTION
    updateText("#information h1", "Information", "Πληροφορίες");
    updateText("#information h3:nth-child(1)", "We’re Getting Married And You’re Invited!", "Παντρευομαστε και ειστε καλεσμενοι!");
    updateHTML(
        "#information p",
        "We’re so excited to share this special time in our lives with you! With our families and friends spread across the globe, we wanted to create an opportunity for everyone to celebrate with us. Therefore, we’ve chosen to hold our wedding ceremony in London and our wedding party a week later in Athens.<br>Below, you’ll find details about the locations, dates, and times for both events. Please let us know if you’ll be joining us for either—or both—by filling out the RSVP form at the bottom of the page.",
        "Είμαστε τόσο ενθουσιασμένοι που θα μοιραστούμε αυτήν την ξεχωριστή στιγμή της ζωής μας μαζί σας! Με τις οικογένειες και τους φίλους μας σκορπισμένους σε όλο τον κόσμο, θέλαμε να δώσουμε σε όλους την ευκαιρία να γιορτάσουμε μαζί. Γι’ αυτό και αποφασίσαμε να πραγματοποιήσουμε την τελετή του γάμου μας στο Λονδίνο και, μία εβδομάδα αργότερα, το γαμήλιο πάρτι μας στην Αθήνα.<br>Παρακάτω θα βρείτε όλες τις πληροφορίες σχετικά με τις τοποθεσίες, τις ημερομηνίες και τις ώρες και των δύο εκδηλώσεων. Σας παρακαλούμε να μας ενημερώσετε εαν θα παρευρεθείτε σε κάποια ή και στις δύο εκδηλώσεις, συμπληρώνοντας τη φόρμα στο τέλος της σελίδας."
    );
    updateText("#finalHeader", "We can’t wait to celebrate with you!", "Ανυπομονουμε να γιορτασουμε μαζι σας!");

    // EVENTS SECTION
      updateText("#events h1", "Events", "Εκδηλώσεις");
    updateHTML("#infoCeremony",
        `<h3>Ceremony</h3>
        <p>
            <strong><i class="icon-calendar"></i> Sunday 24th August</strong>
            <br>
            <strong><i class="icon-clock"></i> 4:00pm</strong> (Please arrive by 3:45pm)
        </p>
        <p><strong>Our wedding ceremony will take place at the:</strong> 
            <br>Lauderdale House
            <br>Waterlow Park, Highgate Hill,
            <br>London N6 5HG,
            <br>United Kingdom
        </p>`,
        `<h3>Τελετη</h3>
        <p>
            <strong><i class="icon-calendar"></i> Κυριακή 24 Αυγούστου</strong>
            <br>
            <strong><i class="icon-clock"></i> 4:00μμ</strong> (Παρακαλούμε να είστε εκεί μέχρι τις 3:45μμ)
        </p>
        <p><strong>Η γαμήλια τελετή μας θα πραγματοποιηθεί στο:</strong> 
            <br>Lauderdale House
            <br>Waterlow Park, Highgate Hill,
            <br>Λονδίνο N6 5HG,
            <br>Ηνωμένο Βασίλειο
        </p>`
    )
    updateHTML("#infoParty",
        `<h3>Party</h3>
        <p>
            <strong><i class="icon-calendar"></i> Saturday 30th August</strong>
            <br>
            <strong><i class="icon-clock"></i> 7:00pm</strong>
        </p>
        <p><strong>Our wedding party will take place at the:</strong>
            <br>Oasis Hotel Apartments,
            <br>Leof. Poseidonos 27,
            <br>Glifada 166 75,
            <br>Greece
        </p>`,
        `<h3>Παρτυ</h3>
        <p>
            <strong><i class="icon-calendar"></i> Σάββατο 30 Αυγούστου</strong>
            <br>
            <strong><i class="icon-clock"></i> 7:00μμ</strong>
        </p>
        <p><strong>Το γαμήλιο πάρτι μας θα πραγματοποιηθεί στο:</strong>
            <br>Oasis Hotel Apartments,
            <br>Λεωφ. Ποσειδώνος 27,
            <br>Γλυφάδα 166 75,
            <br>Ελλάδα
        </p>`
)

    // RSVP SECTION
    updateText("#rsvp h1", "RSVP", "Θα έρθετε?");
    updateHTML(
        "#rsvp p",
        "Please use this form to confirm your attendance to one or both events by selecting <strong>'Yes'</strong> or <strong>'no'</strong> for each. If you plan to attend, kindly specify the total number of attendees, including yourself. We would greatly appreciate it if you could RSVP by <strong>31st of May '25</strong>.",
        "Παρακαλούμε ενημερώστε μας για την παρουσία σας στις εκδηλώσεις μας, επιλέγοντας <strong>'Ναι'</strong> ή <strong>'Οχι'</strong> μαζί με τον συνολικό αριθμό ατόμων στην κάθε μία. Τέλος, θα το εκτιμούσαμε πολύ αν μας απαντούσατε πριν τις <strong>31 Μαΐου '25</strong>"
    );
    updateText("#rsvp h4:nth-child(1)", "Contact Details", "Στοιχεία Επικοινωνίας");
    const emailInput = document.querySelector("input[name='email']");
    if (emailInput) {
        emailInput.placeholder = isEnglish ? "Your email" : "Το email σας";
    }
    const nameInput = document.querySelector("input[name='name']");
    if (nameInput) {
        nameInput.placeholder = isEnglish ? "Your full name" : "Το ονοματεπώνυμο σας";
    }
    updateText("#eventHeader", "Event Attendance", "Προσέλευση");

    // London attendance
    updateText("#radioLabel1","Will you be able to attend our ceremony in London?","Θα μπορέσετε να έρθετε στην τελετή μας στο Λονδίνο;");
       const londonRadio2 = document.querySelector("#radioLabel2");
    if (londonRadio2) {
        londonRadio2.childNodes[1].textContent = isEnglish ? "Yes" : "Ναι";
    }
    const londonRadio3 = document.querySelector("#radioLabel3");
    if (londonRadio3) {
        londonRadio3.childNodes[1].textContent = isEnglish ? "No" : "Όχι";
    }

    const londonAttendees = document.querySelector("input[name='london_attendees']");
    if (londonAttendees) {
        londonAttendees.placeholder = isEnglish ? "Number of Guests" : "Αριθμός Καλεσμένων";
    }

    // Athens attendance
    updateText("#radioLabel4","Will you be able to join our party in Athens?","Θα μπορέσετε να έρθετε στο πάρτυ μας στην Αθήνα;");
    const londonRadio5 = document.querySelector("#radioLabel5");
    if (londonRadio5) {
        londonRadio5.childNodes[1].textContent = isEnglish ? "Yes" : "Ναι";
    }
    const londonRadio6 = document.querySelector("#radioLabel6");
    if (londonRadio6) {
        londonRadio6.childNodes[1].textContent = isEnglish ? "No" : "Όχι";
    }
    const athensAttendees = document.querySelector("input[name='athens_attendees']");
    if (athensAttendees) {
        athensAttendees.placeholder = isEnglish ? "Number of Guests" : "Αριθμός Καλεσμένων";
    }

    // Oasis Hotel
    updateHTML("#athens_attendees_container label",`Would you be interested in booking a room at the Oasis Hotel?`,`Θα σας ενδιέφερε διαμονή στο Oasis Hotel;`);
    const londonRadio7 = document.querySelector("#radioLabel7");
    if (londonRadio7) {
        londonRadio7.childNodes[1].textContent = isEnglish ? "Yes" : "Ναι";
    }
    const londonRadio8 = document.querySelector("#radioLabel8");
    if (londonRadio8) {
        londonRadio8.childNodes[1].textContent = isEnglish ? "No" : "Όχι";
    }

    // Diet and Password
    const dietInput = document.querySelector("input[name='dietary_restrictions']");
    if (dietInput) {dietInput.placeholder = isEnglish ? "Do you have any dietary restrictions?" : "Έχετε διατροφικούς περιορισμούς ή αλλεργίες;";}
    const codeInput = document.querySelector("input[name='invite_code']");
    if (codeInput) {codeInput.placeholder = isEnglish ? "Password" : "Κωδικός";}

    // Form Submit button
    const submitButton = document.querySelector("#submitRsvp");
    if (submitButton) {submitButton.textContent = isEnglish ? "Yes, I'll be there!" : "Ναι, θα ερθω!";}

    // Footer
    updateHTML(
        "footer p",
        `Crafted by Stelios with lots of <span class="fa fa-heart pulse2"></span> for Spyri!`,
        `Aπό τον Στέλιο με πολλή <span class="fa fa-heart pulse2"></span> για τη Σπυριδούλα!`
    );
}