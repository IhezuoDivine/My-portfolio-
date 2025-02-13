

   document.getElementById("menu-icon").addEventListener("click", function() {
    var menu = document.getElementById("navbutton");

    // Toggle menu display
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}); 

  document.getElementById("formid").addEventListener("submit",function(event){
    event.preventDefault();

 let name = document.getElementById("name").value.trim();
 let email = document.getElementById("email").value.trim();
 let  number = document.getElementById("number").value.trim();
 let subject = document.getElementById("subject").value.trim();
 let messgae= document.getElementById("message").value.trim();
 let formp1= document.getElementById("formp1").value.trim();

 formp1.textContent="";

 submit.onclick=function(){


 if( name===""|| email===""|| number==="" || subject===""||message===""){
    formp1.textContent = "All fields are required!";
        formp1.style.color = "red";
        return;
 }
   if (!validateEmail(email)) {
        formp1.textContent = "enter a valid email!";
        formp1.style.color = "red";
        return;
}
    if (!email.includes("@") || !email.includes(".")) {
        formp1.textContent ="enter a valid enail"
        return ;
   }
   }
    //formp1.textContent = "Sending...";
   // formp1.style.color = "blue";

    // Simulating form submission (Replace with real backend or email service)
  //  setTimeout(() => {
   //     formp1.textContent = "Message sent successfully!";
   //     formp1.style.color = "green";
    //    document.getElementById("formid").reset();
  //  }, 20);

});
 //corrct code
// Functionx to validate email format
//function validateEmail(email) {
   // let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //  return re.test(email);
//} basic code
  
    //if (!email.includes("@") || !email.includes(".")) {
  //      return false;
   // }