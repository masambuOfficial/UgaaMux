const fullName = document.contactUs.txtfullName;
const email = document.contactUs.txtemail;
const telephone = document.contactUs.txtTelephone;
const message = document.contactUs.txtmessage;

const fullnameError = document.getElementById("fullnameErr");
const emailError = document.getElementById("emailErr");
const telephoneError = document.getElementById("telephoneErr");

const emailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

// Validating Contact us form

const validate = () => {
    const customerName = fullName.value.trim();
        if (customerName.value == ""){
            fullName.style.border = "1px solid red";
            fullnameError.innerHTML = "This is a required Field";
            fullnameError.style = "color:red; font-size: 10px";
            fullName.focus();
        } else {
            fullName.style.border = "1px solid green";
            fullnameError.innerHTML = "";
        }

    const customerEmail = email.value.trim();
        if (customerEmail.value == ""){
            email.style.border = "1px solid red";
            emailError.innerHTML = "This is a required Field";
            emailError.style = "color:red; font-size: 10px";
            email.focus();
        } else if (!customerEmail.match(emailformat)){
            email.style.border ="1px solid red";
            emailError.innerHTML = "Email doesn't match the format";
            emailError.style = "color:red; margin-left: 110px; font-size: 10px";
            email.focus();
        }
        else {
            email.style.border = "1px solid green";
            emailError.innerHTML = "";
        }

    const customerTelephone = telephone.value.trim();
        if (customerTelephone.value == ""){
            telephone.style.border = "1px solid red";
            telephoneError.innerHTML = "This is a required Field";
            telephoneError.style = "color:red; font-size: 10px";
            telephone.focus();
        } else {
            telephone.style.border = "1px solid green";
            telephoneError.innerHTML = "";
        }

};

const contactForm = document.getElementById("contactUsForm");
    contactForm.addEventListener('submit', validate);
    // contactForm.addEventListener('submit', (e) =>{
    //     e.preventDefault();
    // });
