document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        window.open(document.getElementById("txt").value,'window','width=600,height=300');
    }
});
