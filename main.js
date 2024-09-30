document.addEventListener('DOMContentLoaded', function() {
    const buttonsNext = document.querySelectorAll('.next');
    const buttonsPrev = document.querySelectorAll('.prev');
    const progressBar = document.getElementById('progressBar');
    const totalQuestions = document.querySelectorAll('fieldset').length;
    let currentQuestion = 1;

    function updateProgress() {
        const progress = (currentQuestion / totalQuestions) * 100;
        progressBar.style.width = progress + '%';
        progressBar.setAttribute('aria-valuenow', progress);
    }

    function initQuestions() {
        document.querySelectorAll('fieldset').forEach((fieldset, index) => {
            fieldset.style.display = (index === 0) ? 'block' : 'none';
            fieldset.classList.remove('active');
        });
        document.querySelector('fieldset').classList.add('active');
        updateProgress();
    }

    buttonsNext.forEach(button => {
        button.addEventListener('click', function() {
            if(currentQuestion < totalQuestions) {
                const currentFieldset = document.querySelector('fieldset.active');
                currentFieldset.style.display = 'none';
                currentFieldset.classList.remove('active');
                currentQuestion++;
                const target = `#question-${currentQuestion}`;
                document.querySelector(target).style.display = 'block';
                document.querySelector(target).classList.add('active');
                updateProgress();
            }
        });
    });

    buttonsPrev.forEach(button => {
        button.addEventListener('click', function() {
            if(currentQuestion > 1) {
                const currentFieldset = document.querySelector('fieldset.active');
                currentFieldset.style.display = 'none';
                currentFieldset.classList.remove('active');
                currentQuestion--;
                const target = `#question-${currentQuestion}`;
                document.querySelector(target).style.display = 'block';
                document.querySelector(target).classList.add('active');
                updateProgress();
            }
        });
    });
    initQuestions();
});
