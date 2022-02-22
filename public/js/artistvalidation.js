const birthnameC_A = Bname.value.trim();
    if (birthnameC_A == '') {
        Bname.style = 'border-bottom: 1px solid red';
        BNerror.innerHTML = 'enter birthname';
        BNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Bname.focus();
        Isvalid = false;
    } else if (!(birthnameC_A.length > 1)) {
        Bname.style = 'border-bottom:1px solid red';
        BNerror.innerHTML = 'should be be more than one letter';
        BNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Bname.focus();
        Isvalid = false;
    }else if (birthnameC_A.match(nonumber)) {
        Bname.style = 'border-bottom: 1px solid red';
        BNerror.innerHTML = 'should not contain a number';
        BNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Bname.focus();
        Isvalid = false;
    } else if (!birthnameC_A.match(capitalize)) {
        Bname.style = 'border-bottom: 1px solid red';
        BNerror.innerHTML = 'should start with capital';
        BNerror.style = 'color:red; position:absolute; font-size:0.7em';
        Bname.focus();
        Isvalid = false;
    } else {
        Bname.style.border = ' 1px solid green';
    }
