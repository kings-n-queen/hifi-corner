let main_header = document.querySelector('button')

buttons.forEach(button => {
    button.addEventListener('click', function () {
        button.forEach(btn=> btn.classList.remove('active'));
        this.classList.add('active');
    })
})