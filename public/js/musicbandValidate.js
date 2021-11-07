const bandname = document.musicBands.txtbandName;
const bandhome = document.musicBands.txtbandHome;
const bandowner = document.musicBands.txtbandOwner;
const telephone = document.musicBands.txttelephone;
const emailaddress = document.musicBands.email;
const pwd = document.musicBands.password;
const startDate = document.musicBands.txtformationDate;
const numberofMember = document.musicBands.txtnumberofMembers;
const bandslogan = document.musicBands.txtlabelSlogan;
const albums = document.musicBands.txtnumberofAlbums;
const category = document.musicBands.txtmusicCategory;
const icon = document.musicBands.txtbandicon;
const user = document.musicBands.txtuserRole;


const bandnameError = document.getElementById("bandNameErr");
const bandhomeError = document.getElementById("bandHomeErr");
const bandownerError = document.getElementById("bandownerErr");
const bandtelephoneError = document.getElementById("telephoneErr");
const bandemailError = document.getElementById("emailErr");
const bandpasswordError = document.getElementById("passwordErr");
const bandstartdateError = document.getElementById("dateErr");
const bandmembersError = document.getElementById("membersErr");
const bandalbumsError = document.getElementById("albumsErr");
const bandsloganError = document.getElementById("sloganErr");
const bandcategoryError = document.getElementById("categoryErr");
const userRoleError = document.getElementById("userRoleErr");


const checknumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/i;
const phoneformat = /^[0-9]{10}$/;
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const emailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
const systemIDformat = /^[a-z]{3}\d+[a-z]{3}/;
const nationalIDFormat = /^[A-Z]{2}\d+[A-Z]{3}/;
const pwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/; 

const bandValidate = () => {
    // validating the band name field
    const musicbandname = bandname.value.trim();
        if (musicbandname == ""){
            bandname.style.border = "1px solid red";
            bandnameError.innerHTML = "Field is required";
            bandnameError.style = "color:red; margin-left: 110px; font-size:10px";
            bandname.focus();
        }else if (!musicbandname.match(capitalize)){
            bandname.style.border = "1px solid red";
            bandnameError.innerHTML = "Band name must be alphanumeric and starts with Capital letter";
            bandnameError.style = "color:red; margin-left: 110px; font-size:10px";
            bandname.focus();
        }else{
            bandname.style.border = "1px solid green";
            bandnameError.innerHTML = ""
        }
    // validating the band home field
    const musicbandhome = bandhome.value.trim();
        if (musicbandhome == ""){
            bandhome.style.border = "1px solid red";
            bandhomeError.innerHTML = "Field is required";
            bandhomeError.style = "color:red; margin-left: 110px; font-size:10px";
            bandhome.focus();
        }else if (!musicbandhome.match(alphaNumeric)){
            bandhome.style.border = "1px solid red";
            bandhomeError.innerHTML = "Band home must be alphanumeric";
            bandhomeError.style = "color:red; margin-left: 110px; font-size:10px";
            bandhome.focus();
        }else{
            bandhome.style.border = "1px solid green";
            bandhomeError.innerHTML = ""
        }
    // validating the band home field
        const musicbandowner = bandowner.value.trim();
            if (musicbandowner == ""){
                bandowner.style.border = "1px solid red";
                bandownerError.innerHTML = "Field is required";
                bandownerError.style = "color:red; margin-left: 110px; font-size:10px";
                bandowner.focus();
            }else if (!musicbandhome.match(capitalize)){
                bandowner.style.border = "1px solid red";
                bandownerError.innerHTML = "Band owner starts with Capital letter";
                bandownerError.style = "color:red; margin-left: 110px; font-size:10px";
                bandowner.focus();
            }else{
                bandowner.style.border = "1px solid green";
                bandownerError.innerHTML = ""
            }
    // validating the band telephone field
        const bandtelephone = telephone.value.trim();
            if (bandtelephone == ""){
                telephone.style.border ="1px solid red";
                bandtelephoneError.innerHTML = "Band Phone field is  required";
                bandtelephoneError.style = "color:red; font-size: 10px";
                telephone.focus();
             } 
            //else if (!labelphone.match(phoneformat)){
            //     telephone.style.border ="1px solid red";
            //     labeltelephoneError.innerHTML = "The telephone Number should be 10 digits starting with a 0";
            //     labeltelephoneError.style = "color:red; font-size: 10px";
            //     telephone.focus();}
            else {
                telephone.style.border ="1px solid green";
                bandtelephoneError.innerHTML = "";
            }
    // Validating email Address
        const bandemailAddress = emailaddress.value.trim();
            if (bandemailAddress == ""){
                emailaddress.style.border ="1px solid red";
                bandemailError.innerHTML = "Label's email field is required";
                bandemailError.style = "color:red; margin-left: 110px; font-size: 10px";
                emailaddress.focus();
            }else if (!bandemailAddress.match(emailformat)){
                emailaddress.style.border ="1px solid red";
                bandemailError.innerHTML = "Email doesn't match the format";
                bandemailError.style = "color:red; margin-left: 110px; font-size:10px";
                emailaddress.focus();
            }else {
                emailaddress.style.border ="1px solid green";
                bandemailError.innerHTML = "";
            }
    // Validating Password Field
        const bandPassword = pwd.value.trim();
            if (bandPassword == ""){
                pwd.style.border ="1px solid red";
                bandpasswordError.innerHTML = "Password Field is required";
                bandpasswordError.style = "color:red; margin-left: 110px; font-size: 10px";
                pwd.focus();
            }else if (!bandPassword.match(pwdRegex)){
                pwd.style.border ="1px solid red";
                bandpasswordError.innerHTML = "Password must be atleast a Minimum of 8 Character containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
                bandpasswordError.style = "color:red; margin-left: 110px; font-size: 10px";
                pwd.focus();
            }else {
                pwd.style.border = "1px solid green";
                bandpasswordError.innerHTML = "";
            }
    // validating the band Date of Formation field
        const bandstartDate = startDate.value.trim();
            if (bandstartDate == ""){
                startDate.style.border ="1px solid red";
                bandstartdateError.innerHTML = "Band Start Date field is  required";
                bandstartdateError.style = "color:red; font-size: 10px";
                startDate.focus();
            } 
            //else if (!labelphone.match(phoneformat)){
            //     telephone.style.border ="1px solid red";
            //     labeltelephoneError.innerHTML = "The telephone Number should be 10 digits starting with a 0";
            //     labeltelephoneError.style = "color:red; font-size: 10px";
            //     telephone.focus();}
            else {
                startDate.style.border = "1px solid green";
                bandstartdateError.innerHTML = "";
            }
    // validating the Number of Members field
        const bandnumberofMember = numberofMember.value.trim();
            if (bandnumberofMember == ""){
                numberofMember.style.border ="1px solid red";
                bandmembersError.innerHTML = "Band number of Member field is  required";
                bandmembersError.style = "color:red; font-size: 10px";
                numberofMember.focus();
            }else {
                numberofMember.style.border = "1px solid green";
                bandmembersError.innerHTML = "";
            }
    // validating the Band Slogan field
        // const musicbandslogan = bandslogan.value.trim();
        //     if (musicbandslogan == ""){
        //         bandslogan.style.border ="1px solid red";
        //         bandsloganError.innerHTML = "Band slogan field is  required";
        //         bandsloganError.style = "color:red; font-size: 10px";
        //         bandslogan.focus();
        //     }else {
        //         bandslogan.style.border = "1px solid green";
        //         bandsloganError.innerHTML = "";
        //     }
    // validating the Band number of Albums field
        const bandalbums = albums.value.trim();
            if (bandalbums == ""){
                albums.style.border ="1px solid red";
                bandalbumsError.innerHTML = "Band Albums field is  required";
                bandalbumsError.style = "color:red; font-size: 10px";
                albums.focus();
            }else {
                albums.style.border = "1px solid green";
                bandalbumsError.innerHTML = "";
            }
    // validating the Band Category field
        const bandcategory = category.value.trim();
            if (bandcategory == ""){
                category.style.border ="1px solid red";
                bandcategoryError.innerHTML = "Band Albums field is  required";
                bandcategoryError.style = "color:red; font-size: 10px";
                category.focus();
            }else {
                category.style.border = "1px solid green";
                bandcategoryError.innerHTML = "";
            }
    // Validating select
            if (user.value == "") {
                user.style.border ="1px solid red";    
                userRoleError.innerHTML = "Please select your country";
                userRoleError.style = "color:red; font-size:12px; padding-left:5px";    
                user.focus();        
            } else {
                userRoleError.innerHTML = "";
            }
            
};



const bandForm = document.getElementById("musicbandsForm");
    bandForm.addEventListener('submit', bandValidate);
    // bandForm.addEventListener ('submit', (e) => {
    //     e.preventDefault();
    // });
