const input = document.getElementById("txt");
document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") 
    {
        window.open("http://"+input.value,'window','width=600,height=300');   
    }
});

input.addEventListener('input', resizeInput);
resizeInput.call(input);
function resizeInput() 
{
  this.style.width = this.value.length + 2 + "ch";
}
