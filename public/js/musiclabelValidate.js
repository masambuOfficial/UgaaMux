const labelIDnumber = document.musicLabels.txtlabelID;
const labelName = document.musicLabels.txtlabelName;
const labelHome = document.musicLabels.txtlabelHome;
const labelOwner = document.musicLabels.txtlabelOwner;
const telephone = document.musicLabels.txtphone;
const email = document.musicLabels.email;
const password = document.musicLabels.password;
const startDate = document.musicLabels.txtformationDate;
const Sponsor = document.musicLabels.txtSponsorname;
const slogan = document.musicLabels.txtlabelSlogan;
const Members = document.musicLabels.txtmembers;
const ArtistManaged = document.musicLabels.txtmanaged;
const Icon = document.musicLabels.txtlabelIcon;
const labeluser = document.musicLabels.role;

// Album Details
const albumName = document.musicLabels.txtalbumName;
const songName = document.musicLabels.txtsongName;
const songNumbers = document.musicLabels.txtsongs;
const profilePic = document.musicLabels.albumCover;



const labelIDError = document.getElementById("labelidErr");
const labelnameError = document.getElementById("lbnameErr");
const labelhomeError = document.getElementById("labelHomeErr");
const labelownerError = document.getElementById("labelownerErr");
const labeltelephoneError = document.getElementById("telErr");
const labelemailError = document.getElementById("emailErr");
const passwordError = document.getElementById("pwdErr");
const labelstartdateError = document.getElementById("dateErr");
const labelsponsorsError = document.getElementById("sponsornameErr");
const labelsloganError = document.getElementById("sloganErr");
const labelmembersError = document.getElementById("membersErr");
const labelartistError = document.getElementById("manageErr");
const labeliconError = document.getElementById("labeliconErr");
const labelalbumnaeError = document.getElementById("albumNameErr");
const labelsongnamesError = document.getElementById("songnameErr");
const labelsongnumbersError = document.getElementById("songsnumberErr");
const labelalbumcoverError = document.getElementById("albumcoverErr");


const checknumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
const phoneformat = /^[0-9]{10}$/;
const alphaNumeric = /^[a-zA-Z0-9 ]*$/;
const emailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const systemIDformat = /^[a-z]{3}\d+[a-z]{3}/;
const pwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/; 

const labelValidate = (event) => {
    let isValid = true;
    // Validating ID
    const labelID = labelIDnumber.value.trim();
        if (labelID == ""){
            labelIDnumber.style.border = "1px solid red";
            labelIDError.innerHTML = "Label ID filed starts with 3 characters, digits & 3 characters";
            labelIDError.style = "color:red; margin-left: 110px; font-size: 10px";
            labelIDnumber.focus();
            isValid = false;
        }else if (!artistID.match(systemIDformat)){
            labelIDnumber.style.border = "1px solid red";
            labelIDError.innerHTML = "Label ID format is wrong";
            labelIDError.style = "color:red; margin-left: 110px; font-size: 10px" ;
            labelIDnumber.focus();
            isValid = false;
        }else {
            labelIDnumber.style.border = "1px solid green";
            labelIDError.innerHTML = "Field Correctly filled";
            labelIDError.style = "color:green; margin-left: 110px; font-size: 10px";
        }
    // Validating label's name
    const labelRealname = labelName.value.trim();
        if (labelRealname == ""){
            labelName.style.border ="1px solid red";
            labelnameError.innerHTML = "Label name is a required field ";
            labelnameError.style = "color:red; margin-left: 110px; font-size: 10px";
            labelName.focus();
            isValid = false;
        }else if (!artistfirstname.match(capitalize)){
            labelName.style.border ="1px solid red";
            labelnameError.innerHTML = "Label Name should more than 1 characters, all letters, starts with capital letter";
            labelnameError.style = "color:red; margin-left: 110px; font-size: 10px";
            labelName.focus();
            isValid = false;
        }else {
            labelName.style.border = "1px solid green";
            labelnameError.innerHTML = "Field Correctly filled";
            labelnameError.style = "color:green; margin-left: 110px; font-size: 10px";
        }

            // Validating Label's Home Address
        const labelhomeAddress = labelHome.value.trim();
        if (labelhomeAddress == ""){
            labelHome.style.border ="1px solid red";
            labelhomeError.innerHTML = "Label Home Address is a required field";
            labelhomeError.style = "color:red; margin-left: 110px; font-size: 10px";
            labelHome.focus();
            isValid = false;
        }else if (!labelhomeAddress.match(alphaNumeric)){
            labelHome.style.border ="1px solid red";
            labelhomeError.innerHTML = "The Label's Home Address should be Alphanumeric";
            labelhomeError.style = "color:red; margin-left: 110px; font-size: 10px";
            labelHome.focus();
            isValid = false;
        }else {
            labelHome.style.border = "1px solid green";
            labelhomeError.innerHTML = "Field Correctly filled";
            labelhomeError.style = "color:green; margin-left: 110px; font-size: 10px";
        }

        // Validating Label's Owner
        const musiclabelowner = labelOwner.value.trim();
        if (musiclabelowner == ""){
            labelOwner.style.border ="1px solid red";
            labelownerError.innerHTML = "Label's owner is a required field";
            labelownerError.style = "color:red; margin-left: 110px; font-size: 10px";
            labelOwner.focus();
            isValid = false;
        }else if (!musiclabelowner.match(capitalize)){
            labelOwner.style.border ="1px solid red";
            labelownerError.innerHTML = "The Label's owner field should be Alphanumeric";
            labelownerError.style = "color:red; margin-left: 110px; font-size: 10px";
            labelOwner.focus();
            isValid = false;
        }else {
            labelOwner.style.border = "1px solid green";
            labelownerError.innerHTML = "Field Correctly filled";
            labelownerError.style = "color:green; margin-left: 110px; font-size: 10px";
        }

        // Validating Label Phone Contact
        const labelphone = telephone.value.trim();
            if (labelphone == ""){
                telephone.style.border ="1px solid red";
                labeltelephoneError.innerHTML = "Label's Phone field is  required";
                labeltelephoneError.style = "color:red; font-size: 10px";
                telephone.focus();
                isValid = false;
             } //else if (!labelphone.match(phoneformat)){
            //     telephone.style.border ="1px solid red";
            //     labeltelephoneError.innerHTML = "The telephone Number should be 10 digits starting with a 0";
            //     labeltelephoneError.style = "color:red; font-size: 10px";
            //     telephone.focus();}
            else {
                telephone.style.border = "1px solid green";
                labeltelephoneError.innerHTML = "Field Correctly filled";
                labeltelephoneError.style = "color:green; font-size: 10px";
            }

        // Validating email Address
        const labelemailAddress = email.value.trim();
            if (labelemailAddress == ""){
                email.style.border ="1px solid red";
                labelemailError.innerHTML = "Label's email field is required";
                labelemailError.style = "color:red; margin-left: 110px; font-size: 10px";
                email.focus();
                isValid = false;
            }else if (!artistEmail.match(emailformat)){
                email.style.border ="1px solid red";
                labelemailError.innerHTML = "Email doesn't match the format";
                labelemailError.style = "color:red; margin-left: 110px; font-size:10px";
                email.focus();
                isValid = false;
            }else {
                email.style.border = "1px solid green";
                labelemailError.innerHTML = "Field Correctly filled";
                labelemailError.style = "color:green; margin-left: 110px; font-size: 10px";
            }
        // Validating Password Field
        
        const labelPassword = password.value.trim();
            if (labelPassword == ""){
                password.style.border ="1px solid red";
                passwordError.innerHTML = "Password Field is required";
                passwordError.style = "color:red; margin-left: 110px; font-size: 10px";
                password.focus();
                isValid = false;
            }else if (!labelPassword.match(pwdRegex)){
                password.style.border ="1px solid red";
                passwordError.innerHTML = "Password must be atleast a Minimum of 8 Character containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
                passwordError.style = "color:red; margin-left: 110px; font-size: 10px";
                password.focus();
                isValid = false;
            }else {
                password.style.border = "1px solid green";
                passwordError.innerHTML = "";
            }
        // Validating label's Date of formation
            const labelstartdate = startDate.value.trim();
            if (labelstartdate == ""){
                startDate.style.border ="1px solid red";
                labelstartdateError.innerHTML = "Label's date of formation  field is required";
                labelstartdateError.style = "color:red; margin-left: 110px; font-size:10px";
                startDate.focus();
                isValid = false;
            }else {
                startDate.style.border = "1px solid green";
                labelstartdateError.innerHTML = "Field Correctly filled";
                labelstartdateError.style = "color:green; margin-left: 110px; font-size:10px";
            }

        // Validating label's Slogan
            const labelslogan = slogan.value.trim();
            if (labelslogan == ""){
                slogan.style.border ="1px solid red";
                labelsloganError.innerHTML = "Label's Slogan  field is required";
                labelsloganError.style = "color:red; margin-left: 110px; font-size:10px";
                slogan.focus();
                isValid = false;
            }else {
                slogan.style.border = "1px solid green";
                labelsloganError.innerHTML = "Field Correctly filled";
                labelsloganError.style = "color:green; margin-left: 110px; font-size:10px";
            }
        // Validating label's number of members
            const labelmembers = Members.value.trim();
            if (labelmembers == ""){
                Members.style.border = "1px solid red";
                labelmembersError.innerHTML = "Label's Slogan  field is required";
                labelmembersError.style = "color:red; font-size:10px";
                Members.focus();
                isValid = false;
            }else {
                Members.style.border = "1px solid green";
                labelmembersError.innerHTML = "Field Correctly filled";
                labelmembersError.style = "color:green; font-size:10px";
            }
            // Validating label's Artist Managed
                const labelartistmanaged = ArtistManaged.value.trim();
                if (labelartistmanaged == ""){
                    ArtistManaged.style.border = "1px solid red";
                    labelartistError.innerHTML = "Label's Artist managed field is required";
                    labelartistError.style = "color:red; margin-left: 110px; font-size:10px";
                    ArtistManaged.focus();
                    isValid = false;
                }else {
                    ArtistManaged.style.border = "1px solid green";
                    labelartistError.innerHTML = "Field Correctly filled";
                    labelartistError.style = "color:green; margin-left: 110px; font-size:10px";
                }
            // Validating label's Icon
                const labelicon = Icon.value.trim();
                if (labelicon == ""){
                    labeliconError.innerHTML = "Please select the label's icon to continue!";
                    labeliconError.style = "color:red; font-size:10px";
                    ArtistManaged.focus();
                    isValid = false;
                }else {
                    labeliconError.innerHTML = "Field Correctly filled";
                    labeliconError.style = "color:green; font-size:10px";
                }


                // Album Details

            // Validating label's Album Name
                const labelalbumName = albumName.value.trim();
                if (labelalbumName == ""){
                    albumName.style.border = "1px solid red";
                    labelalbumnaeError.innerHTML = "Label's Album Name field is required";
                    labelalbumnaeError.style = "color:red; margin-left: 110px; font-size:10px";
                    albumName.focus();
                    isValid = false;
                }else {
                    albumName.style.border = "1px solid green";
                    labelalbumnaeError.innerHTML = "Field Correctly filled";
                    labelalbumnaeError.style = "color:green; margin-left: 110px; font-size:10px";
                }

            // Validating label's Album Name
                const labelsongName = songName.value.trim();
                if (labelsongName == ""){
                        songName.style.border = "1px solid red";
                        labelsongnamesError.innerHTML = "Label's Album Songs field is required";
                        labelsongnamesError.style = "color:red; margin-left: 110px; font-size:10px";
                        songName.focus();
                        isValid = false;
                }else {
                        songName.style.border = "1px solid green";
                        labelsongnamesError.innerHTML = "Field Correctly filled";
                        labelsongnamesError.style = "color:green; margin-left: 110px; font-size:10px";
                }

            // // Validating label's album cover
            //     const labelalbumcover = profilePic.value.trim();
            //     if (labelalbumcover == ""){
            //         labelalbumcoverError.innerHTML = "Please select the label's icon to continue!";
            //         labelalbumcoverError.style = "color:red; font-size:10px";
            //         profilePic.focus();
            //         isValid = false;
            //     }else {
            //         labelalbumcoverError.innerHTML = "Field Correctly filled";
            //         labelalbumcoverError.style = "color:green; font-size:10px";
            //     }

            // Validating user role select
            if (labeluser.value == "Default"){
                userRoleError.innerHTML = "Please select the user role to continue";
                userRoleError.style = "color:red; font-size: 10px;";
                labeluser.focus();
                isValid = false;
            }else {
                userRoleError.innerHTML = "";
            }

                if (!isValid){
                    event.preventDefault();
                    return false;
                }


}

const labelForm = document.getElementById("musiclabelsForm");
    labelForm.addEventListener('submit', (event) => {
        labelValidate(event)
    });
    