const ArtistID = document.musicArtists.txtArtistID;
const firstName = document.musicArtists.txtfirstName;
const lastName = document.musicArtists.txtlastName;
const telephone = document.musicArtists.txtTelephone;
const email = document.musicArtists.email;
const password = document.musicArtists.password;
const District = document.musicArtists.txtDistrict;
const birthDate = document.musicArtists.txtDoB;
const singlesHits = document.musicArtists.txtSingles;
const aliasName = document.musicArtists.txtAliasname;
const ninNo = document.musicArtists.txtNIN;
const albumNo = document.musicArtists.txtAlbums;
const based = document.musicArtists.txtBased;
const artistRole = document.musicArtists.role;

const startDate = document.musicArtists.txtdatestarted;
const profilePic = document.musicArtists.avatar;
const femaleGender = document.getElementById("female");
const maleGender = document.getElementById("male");



const ArtistError = document.getElementById("artistIDErr");
const firstnameError = document.getElementById("fstnameErr");
const lastnameError = document.getElementById("lstnameErr");
const phoneError = document.getElementById("telephoneErr");
const emailError = document.getElementById("emailErr");
const pwdError = document.getElementById("passwordErr");
const birthDateError = document.getElementById("DoBErr");
const sexError = document.getElementById("genderError");
const districtError = document.getElementById("districtErr");
const singlesHitsError = document.getElementById("singlesErr");
const aliasNameError = document.getElementById("aliasnameErr");
const ninNoError = document.getElementById("ninErr");
const albumNoError = document.getElementById("albumsErr");
const basedError = document.getElementById("basedErr");
const startDateError = document.getElementById("startErr");
const avatarError = document.getElementById("avatarErr");
const roleError = document.getElementById("userRoleErr");



const checknumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const phoneformat = /^[0-9]{10}$/;
const alphaNumeric = /^[a-zA-Z0-9 ]*$/;
const emailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const systemIDformat = /^[a-z]{3}\d+[a-z]{3}/;
const nationalIDFormat = /^[A-Z]{2}[0-9]{8}[A-Z]{2}[0-9]{1}[A-Z]{1}$/; // e.g CM90078102RT1H
const pwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/; 

const validate = (event) => {
    let isValid = true;
    // Validating ID
    const artistID = ArtistID.value.trim();
    if (artistID == ""){
        ArtistID.style.border = "1px solid red";
        ArtistError.innerHTML = "Artist ID field is required";
        ArtistError.style = "color:red; margin-left: 110px; font-size: 10px";
        ArtistID.focus();
        isValid = false;
    }else if (!artistID.match(systemIDformat)){
        ArtistID.style.border = "1px solid red";
        ArtistError.innerHTML = "Artist ID format is wrong";
        ArtistError.style = "color:red; margin-left: 110px; font-size: 10px";
        ArtistID.focus();
        isValid = false;
    }else {
        ArtistID.style.border = "1px solid green";
        ArtistError.innerHTML = "";
    }
    // Validating first name
    const artistfirstname = firstName.value.trim();
        if (artistfirstname == ""){
            firstName.style.border ="1px solid red";
            firstnameError.innerHTML = "Firstname Field is required";
            firstnameError.style = "color:red; margin-left: 110px; font-size: 10px";
            firstName.focus();
            isValid = false;
        }else if (!artistfirstname.match(capitalize)){
            firstName.style.border ="1px solid red";
            firstnameError.innerHTML = "First Name should more than 1 characters, all letters, starts with capital letter";
            firstnameError.style = "color:red; margin-left: 110px; font-size: 10px";
            firstName.focus();
            isValid = false;
        }else {
            firstName.style.border = "1px solid green";
            firstnameError.innerHTML = "";
        }

            // Validating last name
        const artistlastname = lastName.value.trim();
        if (artistlastname == ""){
            lastName.style.border ="1px solid red";
            lastnameError.innerHTML = "Lastname Field is required";
            lastnameError.style = "color:red; margin-left: 110px; font-size: 10px";
            lastName.focus();
            isValid = false;
        }else if (!artistfirstname.match(capitalize)){
            lastName.style.border ="1px solid red";
            lastnameError.innerHTML = "First Name should more than 1 characters, all letters, starts with capital letter";
            lastnameError.style = "color:red; margin-left: 110px; font-size: 10px";
            lastName.focus();
            isValid = false;
        }else {
            lastName.style.border = "1px solid green";
            lastnameError.innerHTML = "";
        }

        // Validating Phone number
        const artisttelephone = telephone.value.trim();
            if (artisttelephone == ""){
                telephone.style.border ="1px solid red";
                phoneError.innerHTML = "Telephone Field is required";
                phoneError.style = "color:red; margin-left: 110px; font-size: 10px";
                telephone.focus();
                isValid = false;
            }else if (!artisttelephone.match(phoneformat)){
                telephone.style.border ="1px solid red";
                phoneError.innerHTML = "The telephone Number should be 10 digits starting with a 0";
                phoneError.style = "color:red; margin-left: 110px; font-size: 10px";
                telephone.focus();
                isValid = false;
            }else {
                telephone.style.border = "1px solid green";
                phoneError.innerHTML = "";
            }
        // Validating Password Field
        const artistPassword = password.value.trim();
            if (artistPassword == ""){
                password.style.border ="1px solid red";
                pwdError.innerHTML = "Password Field is required";
                pwdError.style = "color:red; margin-left: 110px; font-size: 10px";
                password.focus();
                isValid = false;
            }else if (!artistPassword.match(pwdRegex)){
                password.style.border ="1px solid red";
                pwdError.innerHTML = "Password must be atleast a Minimum of 8 Character containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
                pwdError.style = "color:red; margin-left: 110px; font-size: 10px";
                password.focus();
                isValid = false;
            }else {
                password.style.border = "1px solid green";
                pwdError.innerHTML = "";
            }
        // Validating email Address
        const artistEmail = email.value.trim();
            if (artistEmail == ""){
                email.style.border ="1px solid red";
                emailError.innerHTML = "Field required";
                emailError.style = "color:red; margin-left: 110px; font-size: 10px";
                email.focus();
                isValid = false;
            }else if (!artistEmail.match(emailformat)){
                email.style.border ="1px solid red";
                emailError.innerHTML = "Email doesn't match the format";
                emailError.style = "color:red; margin-left: 110px; font-size: 10px";
                email.focus();
                isValid = false;
            }else {
                email.style.border = "1px solid green";
                emailError.innerHTML = "";
            }
            
        // Validating Alias Name
            const artistaliasName = aliasName.value.trim();
            if (artistaliasName == ""){
                aliasName.style.border ="1px solid red";
                aliasNameError.innerHTML = "Field required";
                aliasNameError.style = "color:red; margin-left: 110px; font-size: 10px";
                aliasName.focus();
                isValid = false;
            }else if (!artistaliasName.match(alphaNumeric)){
                aliasName.style.border ="1px solid red";
                aliasNameError.innerHTML = "Alias name doesn't match the format";
                aliasNameError.style = "color:red; margin-left: 110px; font-size: 10px";
                aliasName.focus();
                isValid = false;
            }else {
                aliasName.style.border = "1px solid green";
                aliasNameError.innerHTML = "";
            }
        // Validating NIN Number
            const artistNIN = ninNo.value.trim();
            if (artistNIN == ""){
                ninNo.style.border = "1px solid red";
                ninNoError.innerHTML = "Enter NIN Number to continue";
                ninNoError.style = "color:red; margin-left: 110px; font-size: 10px";
                ninNo.focus();
                isValid = false;
            }else if (!artistNIN.match(nationalIDFormat)){
                ninNo.style.border ="1px solid red";
                ninNoError.innerHTML = "NIN number doesn't match the format e.g CM90078102RT1H";
                ninNoError.style = "color:red; margin-left: 110px; font-size: 10px";
                ninNo.focus();
                isValid = false;
            }
            else {
                ninNo.style.border = "1px solid green";
                ninNoError.innerHTML = "";
            }
        // Validating Gender field
            if (femaleGender.checked == false && maleGender.checked == false){
                sexError.innerHTML = "Please select your gender";
                sexError.style = "color:red; margin-left: 110px; font-size: 10px";
                isValid = false;
            }else {
                sexError.innerHTML = "";
            }
        // Validating DoB Field
            const artistDoB = birthDate.value.trim();
            if (artistDoB == ""){
                birthDate.style.border = "1px solid red";
                birthDateError.innerHTML = "Please pick your Date of Birth";
                birthDateError.style = "color:red; margin-left: 110px; font-size: 10px";
                birthDate.focus();
                isValid = false;
            }else {
                birthDate.style.border = "1px solid green";
                birthDateError.innerHTML = "";
            }
        // Validating DoB Field
            const artiststartDate = startDate.value.trim();
            if (artiststartDate == ""){
                startDate.style.border = "1px solid red";
                startDateError.innerHTML = "Please pick a Date Artist started the career";
                startDateError.style = "color:red; font-size: 10px";
                startDate.focus();
                isValid = false;
            }else {
                startDate.style.border = "1px solid green";
                startDateError.innerHTML = "";
            }
        // Validating Location Field
            const artistDistrict = District.value.trim();
            if (artistDistrict == ""){
                District.style.border = "1px solid red";
                districtError.innerHTML = "Please enter the Artist Location";
                districtError.style = "color:red; margin-left: 110px; font-size: 10px";
                District.focus();
                isValid = false;
            }else {
                District.style.border = "1px solid green";
                districtError.innerHTML = "";
            }
        // Validating Singles Hits Field
            const artistsinglesHits = singlesHits.value.trim();
            if (artistsinglesHits == ""){
                singlesHits.style.border = "1px solid red";
                singlesHitsError.innerHTML = "Please enter the Number of Artist Single Hits";
                singlesHitsError.style = "color:red; font-size: 10px";
                singlesHits.focus();
                isValid = false;
            }else {
                singlesHits.style.border = "1px solid green";
                singlesHitsError.innerHTML = "";
            }
        // Validating Number of Album Field
            const artistalbumNo = albumNo.value.trim();
            if (artistalbumNo == ""){
                albumNo.style.border = "1px solid red";
                albumNoError.innerHTML = "Please enter the Number of Artist Albums";
                albumNoError.style = "color:red; margin-left: 110px; font-size: 10px";
                albumNo.focus();
                isValid = false;
            }else {
                albumNo.style.border = "1px solid green";
                albumNoError.innerHTML = "";
            }
        // Validating Number of Album Field
            const artistbased = based.value.trim();
            if (artistbased == ""){
                based.style.border = "1px solid red";
                basedError.innerHTML = "Please enter the Number of Artist Albums";
                basedError.style = "color:red; font-size: 10px";
                based.focus();
                isValid = false;
            }else {
                based.style.border = "1px solid green";
                basedError.innerHTML = "";
            }

            if (!isValid){
                event.preventDefault();
                return false;
            }
};


const artistForm = document.getElementById("musicartistForm");
    artistForm.addEventListener('submit', (event) => {
        validate(event);
    });