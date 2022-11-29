document.addEventListener("keyup", function(event) {
    const input = document.getElementById("txt");
    if (event.keyCode === 13) 
    {
        if (input.value.substring(0, 7) === "https://" || input.value.substring(0, 6) === "http://") 
        {
            window.open(input.value,'window','width=600,height=300');
        } else
        {
            window.open("https://" + input.value,'window','width=600,height=300');   
        }
    }
});
