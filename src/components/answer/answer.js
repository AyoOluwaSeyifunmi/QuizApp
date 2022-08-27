import React from 'react';
import './answer.css';

const Answer =  (props) =>{

    let asnwer =Object.keys(props.answer)
        .map((qAnswer, i)=> (
            <li 
            className = {
                props.correctAnswer === qAnswer ?
                'correct' :
                props.clickedAnswer === qAnswer ? 
                'incorrect' : ''
            }
            onClick={ () => props.checkAnswer(qAnswer)}
            key={qAnswer}>
                {props.answer[qAnswer]}
            </li>
        ))
    return (
        <>
             <ul disabled = {props.clickedAnswer ? true : false} className="Answers">
            {asnwer}            
            </ul>
            <div>
                {
                    props.correctAnswer ?
                    'Correct answer' :
                    props.clickedAnswer
                }
            </div>
        
        </>
       

    );
}

export default Answer;







