// show date on top of every page
var d = new Date();
document.getElementById("date").innerHTML = d;
//Function to show email address when email button is clicked
function showEmail() {
    document.getElementById("email").innerHTML = "yic76@pitt.edu";
}//end showEmail

//Function to show phone number when phone button is clicked
function showNumber() {
    document.getElementById("number").innerHTML = "917-698-2488";
}//end showNumber

//Picture slide show function to show my pictures
var index = 1; //index is the picture number in order added in the html document
slide(index);//start with the first picture
        
//prev/next control
function change(n) {
    slide(index +=n);
}

//function to go through my pictures with the click of prev or next button
function slide(n) {
        var i;
        var x = document.getElementsByClassName("pictureslide");//get pictureslide object
        
        if (n > x.length) {index = 1;} //next from last picture = first picture
        if (n < 1) {index = x.length;} //prev from first picture = last picture
    
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; //hide picture
        }

        x[index-1].style.display = "block"; //display picture
}



//function to show fun facts with "Show fun fact" button
function showFacts() {
    
    var funFacts = document.getElementById("funfacts");//get function fact section
    var buttontext = document.getElementById("showFacts");//get button text

    //display fun facts is it is not already display and change button to say "show less"
    //undispaly fun facts when button is clicked again
    if (funFacts.className == "nodisplay") {
        funFacts.className = "display";
        buttontext.innerHTML = "Show Less";
    }
    else {
        funFacts.className = "nodisplay";
        buttontext.innerHTML = "Show fun facts";
    }
}

//function for validation and submitting a message
function submit_message() {

    var n = document.forms["sendmessage"]["name"].value;//get name value
    var e = document.forms["sendmessage"]["email"].value;//get email value
    var m = document.forms["sendmessage"]["message"].value;//get message value
    var btn = document.getElementById("submitbtn");//get button element
    var element = document.getElementById("messagebox");// get messagebox element
    
    //User missing values, message will display to tell them to put in missing value
    if (n=="" || e=="" || m=="") {
        if( n == "") {
            var para = document.createElement("p");
            var node = document.createTextNode("Please put in a name");
            para.appendChild(node);
            element.insertBefore(para, btn); //missing value message inserted after form and before submit button
        }
        if( e == "") {

            var para = document.createElement("p");
            var node = document.createTextNode("Please put in an email");
            para.appendChild(node);
            element.insertBefore(para, btn); //missing value message inserted after form and before submit button
        }

        if( m == "") {
            var para = document.createElement("p");
            var node = document.createTextNode("Please put in a message");
            para.appendChild(node);
            element.insertBefore(para, btn); //missing value message inserted after form and before submit button
        }
    } 
    //successful input of value leads to confirmation message box with all user input value displayed
    else {
        
        document.getElementById("confirmationmessage").className = "display";//display confirmation box
        document.getElementById("confirmation").innerHTML = "Name:" + n + "\n\n" + "Email:" + e + "\n\n" + "Message:" + m;//values inside confirmation box
        btn.disabled = true;//disable submit button
        document.forms["sendmessage"].reset();//reset form fields
    }//end else
}//end submit_message
   
        
