const btn= document.getElementById('btnmodal');
const sub = document.getElementById('sub');
const cancel = document.getElementById('cancelf');
const show = document.getElementById('form');
const s = show.classList;
const err = document.querySelector('.error');
const form = document.forms['myForm'];
const inputs = document.querySelectorAll('.forminput input');
var list = document.getElementById('contactlist');
const savedContacts = JSON.parse(localStorage.getItem("savedContacts")) || [];
      
        

btn.addEventListener('click', add =>{s.add('show')});

cancel.addEventListener('click', canceL => {
    s.remove('show');
    document.forms['myForm'].reset();
});

sub.addEventListener('click', Clicked);

function Clicked(e){
    // console.log(e);
    e.preventDefault();
    // console.log(inputs);         
    var a = [...inputs];  
    // console.log(a)
         
         
    fail = validateFn(form.firstname.value)
    fail += validateLn(form.lastname.value);
    fail += validateCn(form.comname.value);
    fail += validateJt(form.jobtitle.value);
    fail += validateMail(form.email.value);
    fail += validateTn(form.telno.value);
         
         
    function validateFn(field){
              if (a[0].value === ""){
              //  console.log('error');
                  return "<p> First name is required </p>" ;
              } else{ return ""}
          }
         
    function validateLn(field){
              if (a[1].value === ""){
               // console.log('2nd error');
                  return  "<p> Last name is required </p>";
            }  else{ return ""}
         }
         
    function validateCn(field){
               if (a[2].value === ""){
                //console.log('3rd error');
                  return "<p> Company name is required </p>";
            }   else{ return ""}          
         }
         
    function validateJt(field){
            if (a[3].value === ""){
                //console.log('4th error');
                 return "<p> Job title is required </p>";
            }  else{ return ""}        
        }
         
    function validateMail(field){
             if (a[4].value === ""){
               // console.log('5th error');
                 return  "<p> Email address is required </p> ";
            }   else{ return ""}    
         }  
         
    function validateTn(field) {
            if (a[5].value === ""){
               // console.log('6th error');
                 return "<p> Phone number is required </p>";
            }  else{ return ""}
        }   
        
    if (fail){
        err.innerHTML = fail;
         err.classList.add('wrong');
    } else if(!fail) {
        
         let contact = {
             firstname: a[0].value,
             lastname:  a[1].value,
             companyname: a[2].value,
             jobtitle: a[3].value,
             email: a[4].value,
             phone: a[5].value
         }
         
        savedContacts.push(contact);
        savedContacts.sort((a,b) => a.lastname > b.lastname ? 1:-1);
        localStorage.setItem("savedContacts", JSON.stringify(savedContacts)); 
        console.log(savedContacts);
        
        err.innerHTML = "";
        err.classList.remove('wrong');
        err.classList.add('success');
        err.innerHTML = ( " Contact ",  `${a[0].value + " " + a[1].value} created successfully`) ;

        var newP = document.createElement("p");
        var newLi = document.createElement("li");
        var hideP = document.getElementById('empty');
        hideP.classList.add('hide');
        list.appendChild(newLi);
        newLi.appendChild(newP);
        newP.innerHTML = `${a[0].value + " " + a[1].value + " " + a[2].value + " " + a[3].value + " " + a[4].value + " " + a[5].value}`; 
        newP.style.padding = "10px";
        newP.style.wordSpacing = "40px";
        document.forms['myForm'].reset();
        s.remove('show');
        
        
        setInterval(rem, 5000);
             
        newP.addEventListener('mouseover', a=>{newP.title = "Click to edit";});
        newP.addEventListener('click', Edit); 
        
             
        }    
     //form.submit();         
};


function rem(){
            err.innerHTML = "";
            err.className = "";
        }
 

function Edit(){
     //    console.log(this);
    var c = confirm("Are you sure you want to edit this contact?" );
    if (c === true){
        err.classList.add('hide');
        s.add('show');
       // this.textContent = " ";
        this.remove();
        Clicked(this);
    } else{
        err.classList.add('hide');
        return false;
     }
}

     
   /*  function Delete(e){
         console.log(e);
         var c = confirm("Are you sure you want to delete?");
         if (c === true){
              newP.textContent = "";
              alert("Contact deleted");
         } else{
             return false;
         }
        
         
         
     } */
     
     
    
      
   

         
     

 /*    if (!inputs[0].value.length){
                  // console.log("error");
                err.innerHTML = "First name is required";
               }  
            if (!inputs[1].value.length){
                 //  console.log("error2");
                 err.innerHTML +=  "Last name is required."
               } 
           if (!inputs[2].value.length){
                   //console.log("error");
                    err.innerHTML +=  "Company name is required."
               } else if (!inputs[3].value.length){
                  // console.log("error");
                    err.innerHTML +=  "Job title is required."
               } else if (!inputs[4].value.length){
                  // console.log("error");
                    err.innerHTML +=  "Email address is required."
               } else if (!inputs[5].value.length){
                 //  console.log("error");
                    err.innerHTML +=  "Phone number is required."
               } 
           
           
           
          inputs.forEach(input => {
               console.log(input.value);
             
               
           }) */
          
     /*   function validate(form){ 
           // console.log(form.firstname.value);

          //  console.log(this);
    
            fail = validateFn(form.firstname.value);
            fail += validateLn(form.lastname.value);
            fail += validateCn(form.comname.value);
            fail += validateJt(form.jobtitle.value);
            fail += validateMail(form.email.value);
            fail += validateTn(form.telno.value);
            
            function validateFn(field) {
                if (!form.firstname.value){ 
                    return err.innerHTML = "First name is required";
                } 
            } 
            
            function validateLn(field) {
                if (!form.lastname.value){ 
                    return err.innerHTML +=  "Last name is required."
                } 
            }
            
            function validateCn(field){
                if (!form.comname.value){
                    return err.innerHTML +=  "Company name is required\n";
                }
            }
            
            function validateJt(field){
                if (!form.jobtitle.value){
                    return err.innerHTML +=  "Job title is required\n";
                }
            }
            
            function validateMail(field){
                if (!form.email.value){
                    return err.innerHTML +=   "Email is required\n";
                }
            }
            
            function validateTn(field){
                if (!form.telno.value){
                     return err.innerHTML += " Phone number is required\n";
                }
            }
            
        
        if (fail){
             err.classList.add('wrong');
        } else {
           // err.style.backgroundColor = "green";
            err.classList.add('success');
            err.innerHTML = ( " Contact ",  `${form.firstname.value + " " + form.lastname.value} created successfully`) ;
        } 
          

    } */
        


         
       

       