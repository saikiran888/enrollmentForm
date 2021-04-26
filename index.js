
// -------------------------------------->function for taking user input and inserting new row
function myFunction() {

    if (validation() == true) {

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var website = document.getElementById('website').value;
    
        
        var image = document.getElementById('imagelink').value;
        //------------------------------------------------------------------>radio button value
        if (document.getElementById('rdbfemal').checked) {
            var gender = document.getElementById('rdbfemal').value;
        }
        else {
            var gender = document.getElementById('rdbmale').value;
        }
        //------------------------------------------------------------------>checkbox values
        var skills = []
        var list = document.querySelectorAll('input[type="checkbox"]:checked');
        for (var skill of list) {
            skills.push(skill.value);
        };
        
        console.log(skills);

        var img = document.createElement('img');
        img.src = image;

        img.classList.add('imagetd');
        //---------------------------------------------------------------------->inserting new row
        var table = document.getElementById("myTable");

        var row1 = table.insertRow(-1);
        var cell1 = row1.insertCell(0);

        var cell2 = row1.insertCell(1);
        cell1.innerHTML = '<strong>'+ name+'</strong>'+ '<br>' + gender + '<br>' + email + '<br>' +'<a target=\"_blank\"href="' +website +'">'+website+'</a>' + '<br>' + skills;


        cell2.appendChild(img);

        row1.classList.add('visible');
        setTimeout(function () {
            row1.classList.remove('visible');
        }, 1000);

    }

    else {
        alert('please enter valid details and complete the form ')
    }
};



//----------------------------------------------------> validation function for user input

function validation() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var website = document.getElementById('website').value;

// -------------------------------------------------------------->validating input name
    if (name == "") {

        document.getElementById('username').innerHTML = " ** Please fill the username field";
        return false;
    }
    if ((name.length <= 2) || (name.length > 20)) {
        document.getElementById('username').innerHTML = " ** Username lenght must be between 2 and 20";
        return false;
    }
    if (!isNaN(name)) {
        document.getElementById('username').innerHTML = " ** only characters are allowed";
        return false;
    }
//-------------------------------------------------------------------->validating mail id


    if (email == "") {
        document.getElementById('email').innerHTML = " ** Please fill the email idx` field";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById('email').innerHTML = " ** @ Invalid Position";
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('email').innerHTML = " ** . Invalid Position";
        return false;
    }
// -------------------------------------------------check box validation
    if(!document.getElementById('java').checked && !document.getElementById('html').checked && !document.getElementById('css').checked){
        alert("Please choose skills");
        return false;
    }
//------------------------------------------------------------------------->validating url using regular exp

    regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(website)) {
        return true;
    }
    else {
        document.getElementById('website').innerHTML = " ** . Invalid Position";
        return false;
    }
    

    
}





