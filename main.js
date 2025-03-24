const resizeBtn = document.querySelector('#resize');
resizeBtn.addEventListener('click', function(e) {
    e.preventDefault(); //blocks default button behavior
    document.body.classList.toggle('sb-expand'); //adding/removing class from body
});