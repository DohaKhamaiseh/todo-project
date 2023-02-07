var Username = prompt("Please enter your name");

var Usergender = prompt ("Please enter your gender") ;

var Userage = prompt ("Please enter your age") ;

if (Userage<=0)
{
    alert("Invalid Age") ;
}

let Skip = confirm("Do you wanna skip welcoming message ?");
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

let Arr = [] ;

function addArray (){
    let questionOne = prompt("Do you have any social media accounts ?");
    let questionTwo = prompt("Do you like my WebSite ?");
    let questionThree = prompt("Do you have any note about it ?");

    if(questionOne==" " || questionOne=="")
    questionOne = "invalid";

    if( questionTwo == " " || questionTwo=="")
    questionTwo = "invalid";

     if(questionThree == " " || questionThree=="")
     questionThree = "invalid";
    

   
    Arr.push(questionOne);
    Arr.push(questionTwo);
    Arr.push(questionThree);

}


function traverseArray (Array){
for (let i=0;i<Array.length;i++){
    console.log(Array[i]+ " ");
}
}

addArray ();
traverseArray(Arr);
