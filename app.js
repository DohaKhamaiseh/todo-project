var Username = prompt("Please enter your name");

var Usergender = prompt ("Please enter your gender") ;

var Userage = prompt ("Please enter your age") ;

if (Userage<=0)
{
    alert("Invalid Age") ;
}

Skip = confirm("Do you wanna skip welcoming message ?");
if (Skip==false)
{
   if (Usergender=='male' || Usergender=='Male'){
    alert ("Welcome Mr " + Username) ;
   }

   else if (Usergender=='female' || Usergender=='Female'){
    alert ("Welcome Ms " + Username) ;
   }

   else {
    alert ("Welcome " + Username) ;
   }
}
