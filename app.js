const correctAnswers = ['A','A','D','C'];

const form= document.querySelector('.quiz-form');

const result = document.querySelector('.result');

form.addEventListener('submit',e=>{
    e.preventDefault();

    let score = 0;
    const userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];


    // check answer and calculate score
    userAnswer.forEach((answer,index)=>{
        if(answer === correctAnswers[index])
        {
            score += 25;
        }
    });

    //show result now
    scrollTo(0,0)
    // result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;

    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score)
        {
            clearInterval(timer);
            setTimeout(function(){ window. location. reload(); }, 10000); 
        }
        else{
            output++;
        }
    },10);
});

//Window Object (global object)
