var header = document.getElementById("myHeader");
var footer = document.getElementById("x");


console.log(header.innerHTML);
// console.log(footer.innerHTML);
disHeader = function(params) {
if (window.location.href === "http://localhost:6969/register" || "http://localhost:6969/login" ) {
header.style.visibility = 'hidden';
footer.style.visibility = 'hidden';
    
} else {
    header.style.visibility = 'visible';
    footer.style.visibility = 'visible';


}
    
};



disHeader();