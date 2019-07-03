//////////////////////////////////////////////////////////////
//////////////////  volcano Validation v 1.1  ////////////////
//////////////////////////////////////////////////////////////
/////////                             ////////////////////////
/////////  Created By : Abd Kayali    ////////////////////////
/////////                             ////////////////////////
/////////  Tested By : Feras Allaham  ////////////////////////
/////////                             ////////////////////////
//////////////////////////////////////////////////////////////

///////////////////////
// helpers functions //
///////////////////////

function getstring(typeNode,valueNode) {
  const stringArr = [
                      [ "required", "* This feild is required "," !"],
                      [ "numeric", "* This feild  should be a Number "," !"],
                      [ "min-number", "* Must be greater than ", " !"],
                      [ "max-number", "* Must be smaller than ", " !"],
                      [ "min-length", "* Must be ", " character at least ! "],
                      [ "max-length", "* Must be ", " character at max ! "],
                      [ "password", "* ", " !"],   // you can find it in [ validate_rt_password ] function below
                      [ "email", "* Please enter a valid E-mail address ", " !"],
                      [ "match-password", "* Please enter a correct password ", " !"],
                      [ "url", "* Please enter a valid URL ", " !"],
                      [ "regex", "* Please enter a valid value ", " !"], // please change it 
                    ];
  console.log(stringArr);
  for (let i=0;i<stringArr.length;i++) {
      console.log(typeNode);
      console.log(stringArr[i][0]);
    if (typeNode == stringArr[i][0]) {
      return stringArr[i][1] + valueNode + stringArr[i][2];
    }
  }
}
function insertAfter(newNode, referenceNode,typeNode,valueNode = "") {
    let k = referenceNode.insertAdjacentElement("afterend", newNode);
    k.classList.add("validation-span");
    k.innerHTML = getstring(typeNode,valueNode);
}

function removeAfter(referenceNode) {
    referenceNode.nextElementSibling.remove();
}

function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

///////////////////////

///////////////////
//check functions//
///////////////////


// this function to loop throgh all inputs and see if its BlANK OR NO //
function validate_rt_empty(form_inputes_required) {
  let form_inputes = form_inputes_required;
  console.log(form_inputes);
  let not_empty = "";
  if (form_inputes.value != "") {
    console.log(form_inputes.value);
    not_empty = form_inputes.value;
  } else {
    console.log(form_inputes.value);
  }
  console.log(not_empty);
  console.log(not_empty.length);
  if (not_empty.length == 0) {
    return true;
  } else {
    return not_empty;
  }
}

// this function to loop throgh all inputs and see if its Numeric OR NO //
function validate_rt_numeric(form_inputes_numeric) {
  var form_inputes = form_inputes_numeric;
  console.log(form_inputes );
  var not_numeric = "";
    if (isNaN(form_inputes.value) != true) {
      console.log(form_inputes.value);
    } else {
      not_numeric = form_inputes.value;
      console.log(form_inputes.value);
    }
  console.log(not_numeric.length);
  if (not_numeric.length == 0) {
    return true;
  } else {
    return not_numeric;
  }
}

// this function to loop throgh all inputs and see if its in Min Number OR NO //
function validate_rt_min_number(form_inputes_min_number) {
  var form_inputes = form_inputes_min_number;
  console.log(form_inputes );
  var not_min_number = "";
    var exactly_min_number = form_inputes.getAttribute("data-min") || form_inputes.getAttribute("data-rt-min");
    console.log(exactly_min_number);
    if (parseFloat(form_inputes.value) >= exactly_min_number || form_inputes.value == "") {
      console.log(form_inputes.value);
    } else {
      not_min_number = exactly_min_number;
      console.log(form_inputes.value);
    }
  console.log(not_min_number.length);
  if (not_min_number.length == 0) {
    return true;
  } else {
    return not_min_number;
  }
}

// this function to loop throgh all inputs and see if its in Max Number OR NO //
function validate_rt_max_number(form_inputes_max_number) {
  var form_inputes = form_inputes_max_number;
  console.log(form_inputes );
  var not_max_number = "";
    var exactly_max_number = form_inputes.getAttribute("data-max") || form_inputes.getAttribute("data-rt-max");
    console.log(exactly_max_number);
    if (parseFloat(form_inputes.value) <= exactly_max_number || form_inputes.value == "") {
      console.log(form_inputes.value);
    } else {
      not_max_number = exactly_max_number;
    }
  console.log(not_max_number.length);
  if (not_max_number.length == 0) {
    return true;
  } else {
    return not_max_number;
  }
}

// this function to loop throgh all inputs and see if its in Min Length OR NO //
function validate_rt_min_length(form_inputes_min_length) {
  var form_inputes = form_inputes_min_length;
  console.log(form_inputes);
  var not_min_length = "";
    var exactly_min_length = form_inputes.getAttribute("data-min-length") || form_inputes.getAttribute("data-rt-min-length");
    console.log(exactly_min_length);
    if (form_inputes.value.length >= exactly_min_length) {
      console.log(form_inputes.value);
    } else {
      not_min_length = exactly_min_length;
      console.log(form_inputes.value);
    }
  console.log(not_min_length.length);
  if (not_min_length.length == 0) {
    return true;
  } else {
    return not_min_length;
  }
}

// this function to loop throgh all inputs and see if its in Max Length OR NO //
function validate_rt_max_length(form_inputes_max_length) {
  var form_inputes = form_inputes_max_length;
  console.log(form_inputes );
  var not_max_length = "";
    var exactly_max_length = form_inputes.getAttribute("data-max-length") || form_inputes.getAttribute("data-rt-max-length");
    console.log(exactly_max_length);
    if (form_inputes.value.length <= exactly_max_length) {
      console.log(form_inputes.value);
    } else {
      not_max_length = exactly_max_length;
    }
  console.log(not_max_length.length);
  if (not_max_length.length == 0) {
    return true;
  } else {
    return not_max_length;
  }
}

// this function to loop throgh all inputs and see if its in Password OR NO //
function validate_rt_password(form_inputes_password) {
  //--------------------------------------//
  // check spaces function // 
  function no_spaces(our_str) {
    var pattern = new RegExp('\\s');
    console.log(our_str);
    var res = pattern.test(our_str);
    console.log(res);
    return !res;
  }
  // check letters length function // 
  function letters_length(our_str) {
    var len = our_str.length;
    if (len >= 6) {
      return true;
    } else {
      return false;
    }
  }
  // check string char function // 
  function string_char(our_str) {
    var pattern = new RegExp('[A-Za-z_]');
    console.log(our_str);
    var res = pattern.test(our_str);
    console.log(res);
    return res;
  }
  // check numeric char function // 
  function numeric_char(our_str) {
    var pattern = new RegExp('[0-9]');
    console.log(our_str);
    var res = pattern.test(our_str);
    console.log(res);
    return res;
  }
  // check special char function // 
  function special_char(our_str) {
    var pattern = new RegExp('[^\\w\\s]');
    console.log(our_str);
    var res = pattern.test(our_str);
    console.log(res);
    return res;
  }
  
  //--------------------------------------//
  var form_inputes = form_inputes_password;
  console.log(form_inputes );
  var not_password = "";
    var err_message = "";
    var hardness_password = form_inputes.getAttribute("data-password") || form_inputes.getAttribute("data-rt-password");
    var our_str = form_inputes.value;
    console.log(hardness_password);
    if (hardness_password == "easy") {
      if (!(no_spaces(our_str) == true && letters_length(our_str) == true && string_char(our_str) == true)) {
        console.log("wrong");
        if (no_spaces(our_str) == false) {
          err_message = "Please dont use Spaces";
        } else if (letters_length(our_str) == false) {
          err_message = " 6 characters at least";
        } else if (string_char(our_str) == false) {
          err_message = "Please use letters too";
        }
        not_password = err_message;
      }
      
    } else if (hardness_password == "med") {
      if (!(no_spaces(our_str) == true && letters_length(our_str) == true && string_char(our_str) == true && numeric_char(our_str) == true)) {
        console.log("wrong");
        if (no_spaces(our_str) == false) {
          err_message = "Please dont use Spaces";
        } else if (letters_length(our_str) == false) {
          err_message = " 6 characters at least";
        } else if (string_char(our_str) == false) {
          err_message = "use letters, numbers";
        } else if (numeric_char(our_str) == false) {
          err_message = "use letters, numbers";
        }
        not_password = err_message;
      }
    } else if (hardness_password == "hard") {
      if (!(no_spaces(our_str) == true && letters_length(our_str) == true && string_char(our_str) == true && numeric_char(our_str) == true && special_char(our_str) == true)) {
        console.log("wrong");
        if (no_spaces(our_str) == false) {
          err_message = "Please dont use Spaces";
        } else if (letters_length(our_str) == false) {
          err_message = " 6 characters at least";
        } else if (string_char(our_str) == false) {
          err_message = "use letters, numbers, special chars";
        } else if (numeric_char(our_str) == false) {
          err_message = "use letters, numbers, special chars";
        } else if (special_char(our_str) == false) {
          err_message = "use letters, numbers, special chars";
        }
        not_password = err_message;
      }
    }
  console.log(not_password.length);
  if (not_password.length == 0) {
    return true;
  } else {
    return not_password;
  }
}

// this function to loop throgh all inputs and see if its Email OR NO //
function validate_rt_email(form_inputes_email) {
  var form_inputes = form_inputes_email;
  console.log(form_inputes );
  var not_email = "";
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/igm);
  var our_str = form_inputes.value;
  var res = pattern.test(our_str);
  console.log(res);
  if (res == false && our_str != "") {
    not_email = our_str;
    console.log(form_inputes.value);
  }
  if (not_email.length == 0) {
    return true;
  } else {
    return not_email;
  }
}

// this function to loop throgh all inputs and see if its in Match Password OR NO //
function validate_rt_match_password(form_inputes_match_password) {
  var form_inputes = form_inputes_match_password;
  console.log(form_inputes );
  var not_match_password = "";
  var our_password = form_inputes.getAttribute("data-match-password") || form_inputes.getAttribute("data-rt-match-password");
  var password_selector = "#"+our_password;
  var exactly_match_password = document.querySelector(password_selector).value;
  console.log(exactly_match_password);
  console.log(form_inputes.value);
  if (form_inputes.value == "") {
    not_match_password = "wrong wrong";
  } else {
    if (form_inputes.value == exactly_match_password) {
      console.log(form_inputes.value);
    } else {
      not_match_password = form_inputes.value;
    }
  }
  console.log(not_match_password.length);
  if (not_match_password.length == 0) {
    return true;
  } else {
    return not_match_password;
  }
}

// this function to loop throgh all inputs and see if its Url OR NO //
function validate_rt_url(form_inputes_url) {
  var form_inputes = form_inputes_url;
  console.log(form_inputes );
  var not_url = "";
  var pattern = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/igm);
  var our_str = form_inputes.value;
  var res = pattern.test(our_str);
  console.log(res);
  if (res == false && our_str != "") {
    not_url = our_str;
    console.log(form_inputes.value);
  }
  if (not_url.length == 0) {
    return true;
  } else {
    return not_url;
  }
}

// this function to loop throgh all inputs and see if regex is true OR NO //
function validate_rt_regex(form_inputes_regex) {
  var form_inputes = form_inputes_regex;
  console.log(form_inputes );
  var not_regex = "";
    var exactly_regex = form_inputes.getAttribute("data-rt-regex");
//    exactly_regex = toString(exactly_regex);
    var pattern = new RegExp(exactly_regex);
    var our_str = toString(form_inputes.value);
     var res = chack(exactly_regex,our_str);
    //  var res = our_str.match(exactly_regex);
     console.log(res);
     console.log(exactly_regex);
     if (res == false) {
      not_regex = our_str;
      console.log(form_inputes.value);
    }
  console.log(not_regex.length);
  if (not_regex.length == 0) {
    return true;
    console.log(form_inputes.value);
  } else {
    return not_regex;
    console.log(form_inputes.value);
  }
}

function chack(pat,our_str){
	let pattern = new RegExp(pat);
	return pattern.test(our_str);
}
///////////////////

////////////////////
//normal functions//
////////////////////

// this active when the user press the Done button //
function start_validation(my_form) {
  // get form name //
  var form_name = my_form.name;
  var error = 0;
//  alert("Done");
  
  // Remove old validation content //
  let old_calss = document.querySelectorAll(".volcano-validation");
  for (let i = 0; i < old_calss.length; i++) {
    old_calss[i].classList.remove("validation-required-error");
    old_calss[i].classList.remove("validation-numeric-error");
    old_calss[i].classList.remove("validation-min-number-error");
    old_calss[i].classList.remove("validation-max-number-error");
    old_calss[i].classList.remove("validation-max-length-error");
    old_calss[i].classList.remove("validation-min-length-error");
    old_calss[i].classList.remove("validation-password-error");
    old_calss[i].classList.remove("validation-email-error");
    old_calss[i].classList.remove("validation-match-password-error");
  }
  let old_error = document.querySelectorAll(".validation-span");
  for (let i = 0; i < old_error.length; i++) {
    old_error[i].remove();
  }
  
  // get required feilds //
  let validation_selector_required = document.querySelectorAll(".volcano-validation[data-rt-required], .volcano-validation[data-required]");
  for (let i = 0; i < validation_selector_required.length; i++) {
    console.log(validation_selector_required[i].value);
    let ourvalue = validate_rt_empty(validation_selector_required[i]);
    if (ourvalue != true) {
      error += 1;
      console.log(ourvalue);
      if (hasClass(validation_selector_required[i], "validation-required-error")) {
        validation_selector_required[i].classList.remove("validation-required-error");
        removeAfter(validation_selector_required[i]);  
      }
    } else {
      validation_selector_required[i].classList.add("validation-required-error");
      let node = document.createElement("SPAN");
      insertAfter(node,validation_selector_required[i],"required")
    }
  }
  
  // get numeric feilds //
  let validation_selector_numeric = document.querySelectorAll(".volcano-validation[data-rt-numeric], .volcano-validation[data-numeric]");
  for (let i = 0; i < validation_selector_numeric.length; i++) {
    console.log(validation_selector_numeric[i].value);
    let ourvalue = validate_rt_numeric(validation_selector_numeric[i]);
    if (ourvalue != true) {
      error += 1;
      console.log(ourvalue);
      if (!hasClass(validation_selector_numeric[i], "validation-numeric-error")) {
        validation_selector_numeric[i].classList.add("validation-numeric-error");
        let node = document.createElement("SPAN");
        insertAfter(node,validation_selector_numeric[i],"numeric")
      }
    } else {
      if (hasClass(validation_selector_numeric[i], "validation-numeric-error")) {
        validation_selector_numeric[i].classList.remove("validation-numeric-error");
        removeAfter(validation_selector_numeric[i]);  
      }
    }
  }
  
  // get min number //
  let validation_selector_min_number = document.querySelectorAll(".volcano-validation[data-rt-min],.volcano-validation[data-min]");
  for (let i = 0; i < validation_selector_min_number.length; i++) {
    console.log(validation_selector_min_number[i].value);
    let ourvalue = validate_rt_min_number(validation_selector_min_number[i]);
    console.log(ourvalue);
    var exactly_min_number = validation_selector_min_number[i].getAttribute("data-rt-min") || validation_selector_min_number[i].getAttribute("data-min");
    if (ourvalue != true) {
      error += 1;
      console.log(ourvalue);
      if (!hasClass(validation_selector_min_number[i], "validation-min-number-error")) {
        validation_selector_min_number[i].classList.add("validation-min-number-error");
        let node = document.createElement("SPAN");
        insertAfter(node,validation_selector_min_number[i],"min-number",exactly_min_number);
      }
    } else {
      if (hasClass(validation_selector_min_number[i], "validation-min-number-error")) {
        validation_selector_min_number[i].classList.remove("validation-min-number-error");
        removeAfter(validation_selector_min_number[i]);  
      }
    }
  }
  
  // get max number //
  let validation_selector_max_number = document.querySelectorAll(".volcano-validation[data-rt-max],.volcano-validation[data-max]");
  for (let i = 0; i < validation_selector_max_number.length; i++) {
    console.log(validation_selector_max_number[i].value);
    let ourvalue = validate_rt_max_number(validation_selector_max_number[i]);
    console.log(ourvalue);
    var exactly_max_number = validation_selector_max_number[i].getAttribute("data-rt-max") || validation_selector_max_number[i].getAttribute("data-max");
    if (ourvalue != true) {
      error += 1;
      console.log(ourvalue);
      if (!hasClass(validation_selector_max_number[i], "validation-max-number-error")) {
        validation_selector_max_number[i].classList.add("validation-max-number-error");
        let node = document.createElement("SPAN");
        insertAfter(node,validation_selector_max_number[i],"max-number",exactly_max_number);
      }
    } else {
      if (hasClass(validation_selector_max_number[i], "validation-max-number-error")) {
        validation_selector_max_number[i].classList.remove("validation-max-number-error");
        removeAfter(validation_selector_max_number[i]);  
      }
    }
  }

  //get min length //
  let validation_selector_min_length = document.querySelectorAll(".volcano-validation[data-rt-min-length],.volcano-validation[data-min-length]");
  for (let i = 0; i < validation_selector_min_length.length; i++) {
    console.log(validation_selector_min_length[i].value);
    let ourvalue = validate_rt_min_length(validation_selector_min_length[i]);
    console.log(ourvalue);
    var exactly_min_length = validation_selector_min_length[i].getAttribute("data-rt-min-length") || validation_selector_min_length[i].getAttribute("data-min-length");
    if (ourvalue != true) {
      error += 1;
      console.log(ourvalue);
      if (!hasClass(validation_selector_min_length[i], "validation-min-length-error")) {
        validation_selector_min_length[i].classList.add("validation-min-length-error");
        let node = document.createElement("SPAN");
        insertAfter(node,validation_selector_min_length[i],"min-length",exactly_min_length);
      }
    } else {
      if (hasClass(validation_selector_min_length[i], "validation-min-length-error")) {
        validation_selector_min_length[i].classList.remove("validation-min-length-error");
        removeAfter(validation_selector_min_length[i]);  
      }
    }
  }
  
  //get max length //
  let validation_selector_max_length = document.querySelectorAll(".volcano-validation[data-rt-max-length],.volcano-validation[data-max-length]");
  for (let i = 0; i < validation_selector_max_length.length; i++) {
    console.log(validation_selector_max_length[i].value);
    let ourvalue = validate_rt_max_length(validation_selector_max_length[i]);
    console.log(ourvalue);
    var exactly_max_length = validation_selector_max_length[i].getAttribute("data-rt-max-length") || validation_selector_max_length[i].getAttribute("data-max-length");
    if (ourvalue != true) {
      error += 1;
      console.log(ourvalue);
      if (!hasClass(validation_selector_max_length[i], "validation-max-length-error")) {
        validation_selector_max_length[i].classList.add("validation-max-length-error");
        let node = document.createElement("SPAN");
        insertAfter(node,validation_selector_max_length[i],"max-length",exactly_max_length);
      }
    } else {
      if (hasClass(validation_selector_max_length[i], "validation-max-length-error")) {
        validation_selector_max_length[i].classList.remove("validation-max-length-error");
        removeAfter(validation_selector_max_length[i]);  
      }
    }
  }
  
  //get password  //
  let validation_selector_password = document.querySelectorAll(".volcano-validation[data-rt-password],.volcano-validation[data-password]");
  for (let i = 0; i < validation_selector_password.length; i++) {
    console.log(validation_selector_password[i].value);
    let ourvalue = validate_rt_password(validation_selector_password[i]);
    console.log(ourvalue);
    var exactly_password = validation_selector_password[i].getAttribute("data-rt-password") || validation_selector_password[i].getAttribute("data-password");
    if (ourvalue != true) {
      error += 1;
      console.log(ourvalue);
      if (!hasClass(validation_selector_password[i], "validation-password-error")) {
        validation_selector_password[i].classList.add("validation-password-error");
        let node = document.createElement("SPAN");
        insertAfter(node,validation_selector_password[i],"password",ourvalue);
      } else {
        validation_selector_password[i].classList.remove("validation-password-error");
        removeAfter(validation_selector_password[i]);
        validation_selector_password[i].classList.add("validation-password-error");
        let node = document.createElement("SPAN");
        insertAfter(node,validation_selector_password[i],"password",ourvalue);
      }
    } else {
      if (hasClass(validation_selector_password[i], "validation-password-error")) {
        validation_selector_password[i].classList.remove("validation-password-error");
        removeAfter(validation_selector_password[i]);
      }
    }
  }
  
  //get Email  //
  let validation_selector_email = document.querySelectorAll(".volcano-validation[data-rt-email],.volcano-validation[data-email]");
  for (let i = 0; i < validation_selector_email.length; i++) {
    console.log(validation_selector_email[i].value);
    let ourvalue = validate_rt_email(validation_selector_email[i]);
    if (ourvalue != true) {
      error += 1;
      console.log(ourvalue);
      if (!hasClass(validation_selector_email[i], "validation-email-error")) {
        validation_selector_email[i].classList.add("validation-email-error");
        let node = document.createElement("SPAN");
        insertAfter(node,validation_selector_email[i],"email");
      }
    } else {
      if (hasClass(validation_selector_email[i], "validation-email-error")) {
        validation_selector_email[i].classList.remove("validation-email-error");
        removeAfter(validation_selector_email[i]);  
      }
    }
  }

  //get Match Password  //
  let validation_selector_match_password = document.querySelectorAll(".volcano-validation[data-rt-match-password],.volcano-validation[data-match-password]");
  for (let i = 0; i < validation_selector_match_password.length; i++) {
    console.log(validation_selector_match_password[i].value);
    let ourvalue = validate_rt_match_password(validation_selector_match_password[i]);
    if (ourvalue != true) {
      error += 1;
      console.log(ourvalue);
      if (!hasClass(validation_selector_match_password[i], "validation-match-password-error")) {
        validation_selector_match_password[i].classList.add("validation-match-password-error");
        let node = document.createElement("SPAN");
        insertAfter(node,validation_selector_match_password[i],"match-password");
      }
    } else {
      if (hasClass(validation_selector_match_password[i], "validation-match-password-error")) {
        validation_selector_match_password[i].classList.remove("validation-match-password-error");
        removeAfter(validation_selector_match_password[i]);  
      }
    }
  }

  // url //
  let validation_selector_url = document.querySelectorAll(".volcano-validation[data-rt-url],.volcano-validation[data-url]");
  for (let i = 0; i < validation_selector_url.length; i++) {
    validation_selector_url[i].addEventListener( "input", function() {
      console.log(validation_selector_url[i].value);
      let ourvalue = validate_rt_url(validation_selector_url[i]);
      if (ourvalue != true) {
        console.log(ourvalue);
        if (!hasClass(validation_selector_url[i], "validation-url-error")) {
          validation_selector_url[i].classList.add("validation-url-error");
          let node = document.createElement("SPAN");
          insertAfter(node,validation_selector_url[i],"url")
        }
      } else {
        if (hasClass(validation_selector_url[i], "validation-url-error")) {
          validation_selector_url[i].classList.remove("validation-url-error");
          removeAfter(lidation_selector_url[i]);  
        }
      }
    });
  }

  //submit the form //
  if (error == 0) {
  // alert("checkout done!");
   my_form.submit();
  }
}
////////////////////

/////////////////////
// Real-Time Stuff //
/////////////////////


// required //
let rt_validation_selector_required = document.querySelectorAll(".volcano-validation[data-rt-required]");
for (let i = 0; i < rt_validation_selector_required.length; i++) {
  rt_validation_selector_required[i].addEventListener( "input", function() {
    console.log(rt_validation_selector_required[i].value);
    let ourvalue = validate_rt_empty(rt_validation_selector_required[i]);
    if (ourvalue != true) {
      console.log(ourvalue);
      if (hasClass(rt_validation_selector_required[i], "validation-required-error")) {
        console.log("it has be removed");
        rt_validation_selector_required[i].classList.remove("validation-required-error");
        removeAfter(rt_validation_selector_required[i]);  
      }
    } else {
      if (!hasClass(rt_validation_selector_required[i], "validation-required-error")) {
        rt_validation_selector_required[i].classList.add("validation-required-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_required[i],"required")
      }
    }
  });
  rt_validation_selector_required[i].addEventListener( "focus", function() {
    console.log(rt_validation_selector_required[i].value);
    let ourvalue = validate_rt_empty(rt_validation_selector_required[i]);
    if (ourvalue != true) {
      console.log(ourvalue);
      if (hasClass(rt_validation_selector_required[i], "validation-required-error")) {
       console.log("it has be removed");
        rt_validation_selector_required[i].classList.remove("validation-required-error");
        removeAfter(rt_validation_selector_required[i]);  
      }
    } else {
      if (!hasClass(rt_validation_selector_required[i], "validation-required-error")) {
        rt_validation_selector_required[i].classList.add("validation-required-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_required[i],"required");
      }
    }
  });
}

// numeric //
let rt_validation_selector_numeric = document.querySelectorAll(".volcano-validation[data-rt-numeric]");
for (let i = 0; i < rt_validation_selector_numeric.length; i++) {
  rt_validation_selector_numeric[i].addEventListener( "input", function() {
    console.log(rt_validation_selector_numeric[i].value);
    let ourvalue = validate_rt_numeric(rt_validation_selector_numeric[i]);
    if (ourvalue != true) {
      console.log(ourvalue);
      if (!hasClass(rt_validation_selector_numeric[i], "validation-numeric-error")) {
        rt_validation_selector_numeric[i].classList.add("validation-numeric-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_numeric[i],"numeric")
      }
    } else {
      if (hasClass(rt_validation_selector_numeric[i], "validation-numeric-error")) {
        rt_validation_selector_numeric[i].classList.remove("validation-numeric-error");
        removeAfter(rt_validation_selector_numeric[i]);  
      }
    }
  });
}

// min-number //
let rt_validation_selector_min_number = document.querySelectorAll(".volcano-validation[data-rt-min]");
for (let i = 0; i < rt_validation_selector_min_number.length; i++) {
  rt_validation_selector_min_number[i].addEventListener( "input", function() {
    console.log(rt_validation_selector_min_number[i].value);
    let ourvalue = validate_rt_min_number(rt_validation_selector_min_number[i]);
    console.log(ourvalue);
    var exactly_min_number = rt_validation_selector_min_number[i].getAttribute("data-rt-min");
    if (ourvalue != true) {
      console.log(ourvalue);
      if (!hasClass(rt_validation_selector_min_number[i], "validation-min-number-error")) {
        rt_validation_selector_min_number[i].classList.add("validation-min-number-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_min_number[i],"min-number",exactly_min_number);
      }
    } else {
      if (hasClass(rt_validation_selector_min_number[i], "validation-min-number-error")) {
        rt_validation_selector_min_number[i].classList.remove("validation-min-number-error");
        removeAfter(rt_validation_selector_min_number[i]);  
      }
    }
  });
}

// max-number //
let rt_validation_selector_max_number = document.querySelectorAll(".volcano-validation[data-rt-max]");
for (let i = 0; i < rt_validation_selector_max_number.length; i++) {
  rt_validation_selector_max_number[i].addEventListener( "input", function() {
    console.log(rt_validation_selector_max_number[i].value);
    let ourvalue = validate_rt_max_number(rt_validation_selector_max_number[i]);
    console.log(ourvalue);
    var exactly_max_number = rt_validation_selector_max_number[i].getAttribute("data-rt-max");
    if (ourvalue != true) {
      console.log(ourvalue);
      if (!hasClass(rt_validation_selector_max_number[i], "validation-max-number-error")) {
        rt_validation_selector_max_number[i].classList.add("validation-max-number-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_max_number[i],"max-number",exactly_max_number);
      }
    } else {
      if (hasClass(rt_validation_selector_max_number[i], "validation-max-number-error")) {
        rt_validation_selector_max_number[i].classList.remove("validation-max-number-error");
        removeAfter(rt_validation_selector_max_number[i]);  
      }
    }
  });
}

// min-length //
let rt_validation_selector_min_length = document.querySelectorAll(".volcano-validation[data-rt-min-length]");
for (let i = 0; i < rt_validation_selector_min_length.length; i++) {
  rt_validation_selector_min_length[i].addEventListener( "input", function() {
    console.log(rt_validation_selector_min_length[i].value);
    let ourvalue = validate_rt_min_length(rt_validation_selector_min_length[i]);
    console.log(ourvalue);
    var exactly_min_length = rt_validation_selector_min_length[i].getAttribute("data-rt-min-length");
    if (ourvalue != true) {
      console.log(ourvalue);
      if (!hasClass(rt_validation_selector_min_length[i], "validation-min-length-error")) {
        rt_validation_selector_min_length[i].classList.add("validation-min-length-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_min_length[i],"min-length",exactly_min_length);
      }
    } else {
      if (hasClass(rt_validation_selector_min_length[i], "validation-min-length-error")) {
        rt_validation_selector_min_length[i].classList.remove("validation-min-length-error");
        removeAfter(rt_validation_selector_min_length[i]);  
      }
    }
  });
  rt_validation_selector_min_length[i].addEventListener( "focus", function() {
    console.log(rt_validation_selector_min_length[i].value);
    let ourvalue = validate_rt_min_length(rt_validation_selector_min_length[i]);
    console.log(ourvalue);
    var exactly_min_length = rt_validation_selector_min_length[i].getAttribute("data-rt-min-length");
    if (ourvalue != true) {
      console.log(ourvalue);
      if (!hasClass(rt_validation_selector_min_length[i], "validation-min-length-error")) {
        rt_validation_selector_min_length[i].classList.add("validation-min-length-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_min_length[i],"min-length",exactly_min_length);
      }
    } else {
      if (hasClass(rt_validation_selector_min_length[i], "validation-min-length-error")) {
        rt_validation_selector_min_length[i].classList.remove("validation-min-length-error");
        removeAfter(rt_validation_selector_min_length[i]);  
      }
    }
  });
}

// max-length //
let rt_validation_selector_max_length = document.querySelectorAll(".volcano-validation[data-rt-max-length]");
for (let i = 0; i < rt_validation_selector_max_length.length; i++) {
  rt_validation_selector_max_length[i].addEventListener( "input", function() {
    console.log(rt_validation_selector_max_length[i].value);
    let ourvalue = validate_rt_max_length(rt_validation_selector_max_length[i]);
    console.log(ourvalue);
    var exactly_max_length = rt_validation_selector_max_length[i].getAttribute("data-rt-max-length");
    if (ourvalue != true) {
      console.log(ourvalue);
      if (!hasClass(rt_validation_selector_max_length[i], "validation-max-length-error")) {
        rt_validation_selector_max_length[i].classList.add("validation-max-length-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_max_length[i],"max-length",exactly_max_length);
      }
    } else {
      if (hasClass(rt_validation_selector_max_length[i], "validation-max-length-error")) {
        rt_validation_selector_max_length[i].classList.remove("validation-max-length-error");
        removeAfter(rt_validation_selector_max_length[i]);  
      }
    }
  });
}

// password //
let rt_validation_selector_password = document.querySelectorAll(".volcano-validation[data-rt-password]");
for (let i = 0; i < rt_validation_selector_password.length; i++) {
  rt_validation_selector_password[i].addEventListener( "input", function() {
    console.log(rt_validation_selector_password[i].value);
    let ourvalue = validate_rt_password(rt_validation_selector_password[i]);
    console.log(ourvalue);
    var exactly_password = rt_validation_selector_password[i].getAttribute("data-rt-password");
    if (ourvalue != true) {
      console.log(ourvalue);
      if (!hasClass(rt_validation_selector_password[i], "validation-password-error")) {
        rt_validation_selector_password[i].classList.add("validation-password-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_password[i],"password",ourvalue);
      } else {
        rt_validation_selector_password[i].classList.remove("validation-password-error");
        removeAfter(rt_validation_selector_password[i]);
        rt_validation_selector_password[i].classList.add("validation-password-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_password[i],"password",ourvalue);
      }
    } else {
      if (hasClass(rt_validation_selector_password[i], "validation-password-error")) {
        rt_validation_selector_password[i].classList.remove("validation-password-error");
        removeAfter(rt_validation_selector_password[i]);  
      }
    }
  });
}

// email //
let rt_validation_selector_email = document.querySelectorAll(".volcano-validation[data-rt-email]");
for (let i = 0; i < rt_validation_selector_email.length; i++) {
  rt_validation_selector_email[i].addEventListener( "input", function() {
    console.log(rt_validation_selector_email[i].value);
    let ourvalue = validate_rt_email(rt_validation_selector_email[i]);
    if (ourvalue != true) {
      console.log(ourvalue);
      if (!hasClass(rt_validation_selector_email[i], "validation-email-error")) {
        rt_validation_selector_email[i].classList.add("validation-email-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_email[i],"email")
      }
    } else {
      if (hasClass(rt_validation_selector_email[i], "validation-email-error")) {
        rt_validation_selector_email[i].classList.remove("validation-email-error");
        removeAfter(rt_validation_selector_email[i]);  
      }
    }
  });
}

// match-password //
let rt_validation_selector_match_password = document.querySelectorAll(".volcano-validation[data-rt-match-password]");
for (let i = 0; i < rt_validation_selector_match_password.length; i++) {
  rt_validation_selector_match_password[i].addEventListener( "input", function() {
    console.log(rt_validation_selector_match_password[i].value);
    let ourvalue = validate_rt_match_password(rt_validation_selector_match_password[i]);
    if (ourvalue != true) {
      console.log(ourvalue);
      if (!hasClass(rt_validation_selector_match_password[i], "validation-match-password-error")) {
        rt_validation_selector_match_password[i].classList.add("validation-match-password-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_match_password[i],"match-password")
      }
    } else {
      if (hasClass(rt_validation_selector_match_password[i], "validation-match-password-error")) {
        rt_validation_selector_match_password[i].classList.remove("validation-match-password-error");
        removeAfter(rt_validation_selector_match_password[i]);  
      }
    }
  });
  rt_validation_selector_match_password[i].addEventListener( "focus", function() {
    console.log(rt_validation_selector_match_password[i].value);
    let ourvalue = validate_rt_match_password(rt_validation_selector_match_password[i]);
    if (ourvalue != true) {
      console.log(ourvalue);
      if (!hasClass(rt_validation_selector_match_password[i], "validation-match-password-error")) {
        rt_validation_selector_match_password[i].classList.add("validation-match-password-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_match_password[i],"match-password")
      }
    } else {
      if (hasClass(rt_validation_selector_match_password[i], "validation-match-password-error")) {
        rt_validation_selector_match_password[i].classList.remove("validation-match-password-error");
        removeAfter(rt_validation_selector_match_password[i]);  
      }
    }
  });
}

// url //
let rt_validation_selector_url = document.querySelectorAll(".volcano-validation[data-rt-url]");
for (let i = 0; i < rt_validation_selector_url.length; i++) {
  rt_validation_selector_url[i].addEventListener( "input", function() {
    console.log(rt_validation_selector_url[i].value);
    let ourvalue = validate_rt_url(rt_validation_selector_url[i]);
    if (ourvalue != true) {
      console.log(ourvalue);
      if (!hasClass(rt_validation_selector_url[i], "validation-url-error")) {
        rt_validation_selector_url[i].classList.add("validation-url-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_url[i],"url")
      }
    } else {
      if (hasClass(rt_validation_selector_url[i], "validation-url-error")) {
        rt_validation_selector_url[i].classList.remove("validation-url-error");
        removeAfter(rt_validation_selector_url[i]);  
      }
    }
  });
}
// regex //
let rt_validation_selector_regex = document.querySelectorAll(".volcano-validation[data-rt-regex]");
for (let i = 0; i < rt_validation_selector_regex.length; i++) {
  rt_validation_selector_regex[i].addEventListener( "input", function() {
    console.log(rt_validation_selector_regex[i].value);
    let ourvalue = validate_rt_regex(rt_validation_selector_regex[i]);
    if (ourvalue != true) {
      console.log(ourvalue);
      if (!hasClass(rt_validation_selector_regex[i], "validation-regex-error")) {
        rt_validation_selector_regex[i].classList.add("validation-regex-error");
        let node = document.createElement("SPAN");
        insertAfter(node,rt_validation_selector_regex[i],"regex")
      }
    } else {
      if (hasClass(rt_validation_selector_regex[i], "validation-regex-error")) {
        rt_validation_selector_regex[i].classList.remove("validation-regex-error");
        removeAfter(rt_validation_selector_regex[i]);  
      }
    }
  });
}

/////////////////////