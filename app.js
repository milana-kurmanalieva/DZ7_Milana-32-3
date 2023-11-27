const buttons = document.querySelectorAll('.item')

buttons.forEach(button => {
    const answerBtn = button.querySelector('.button')
    const answer = button.querySelector('.answer')

    answerBtn.addEventListener('click', () => {
        answer.classList.toggle('look')
        const isAnswerVisible = answer.classList.contains('look')

        answerBtn.innerHTML = isAnswerVisible ? 'Скрыть ответ' : 'Показать ответ'
        answerBtn.style.backgroundColor = isAnswerVisible ? 'black' : 'grey'
    })
})

