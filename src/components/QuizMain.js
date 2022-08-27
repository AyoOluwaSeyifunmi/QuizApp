import React, { Component } from  'react';
import Question from './question/question';
import Answer from './answer/answer';
import './QuizMain.css'; 


export default class Quiz extends Component {
    
    state = {
        questions:{
            1: 'Irigation projects are commonly found in area of',
            2: 'All the following lead to the depletion of the ozone layer except',
            3: 'WHich of the following settlement is famous for its ecclesiastical function',
            4: 'A village is characterised by',
            5: 'In which of the following countries is long staple type of cotton mainly grown',
            6: 'World Maximum newsprint comes from',
            7: 'Cultivation of Wheat require',
            8: 'There was a substantial increase in food grains production specially wheat production, during the period after',
            9: 'The crop mainly grown in hills is ',
            10: 'Which of the following is called "brown paper"',
            // 11: 'who was the first president of Nigeria',
            // 12: 'how old was abraham when isaac was born',
            // 13: 'What is the capital of Lagos',
            // 14: 'who was the first president of Nigeria',
            // 15: 'how old was abraham when isaac was born',
            // 16: 'What is the capital of Lagos',
            // 17: 'who was the first president of Nigeria',
            // 18: 'how old was abraham when isaac was born',
            // 19: 'What is the capital of Lagos',
            // 20: 'who was the first president of Nigeria',
           },

        answers:{
            1:{
                1:'low rate of evaporation',
                2: 'low and unreliable rainfall',
                3: 'high volume of rainfall'
               

            },
            2:{
                1:'Bush Burning',
                2: 'Evapotranspiration',
                3: 'Volcanic Eruption'

            },  
            3:{
                1:'London',
                2: 'Freetown',
                3: 'Rome'

            },
            4:{
                1:'Agriculture and other primary economic activities',
                2: 'The presence of several refineries',
                3: 'Developed infrastructural facilities'

            },  
            5:{
                1:'India',
                2: 'Greece',
                3: 'Egypt'

            },  
            6:{
                1:'Deciduous forest',
                2: 'Mangroove forest',
                3: 'Monsoon forest'

            },  
            7:{
                1:'Moderate temperature and heavy rains',
                2: 'humid temperature and heavy rains',
                3: 'moderate temperature and moderate rains'

            },  
            8:{
                1:'1965',
                2: '1966',
                3: '1964'

            },  
            9:{
                1:'Sweet Potato',
                2: 'Sweet Corn',
                3: 'Sweet Pea'

            },  
            10:{
                1:'Jute',
                2: 'Tea',
                3: 'Cotton'

            },  
             

        },
        correctAnswers: {
            1:'2',
            2:'2',
            3:'3',
            4:'1',
            5:'3',
            6:'1',
            7:'3',
            8:'2',
            9:'1',
            10:'2',
           
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]){
            this.setState({
                score: score +1,
                correctAnswer : correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }

    }
    nextQuestion = step => {
        this.setState({
            step: step +1,
            correctAnswer: 0,
            clickedAnswer: 0

        })
    }
    questionAgain = step => {
        this.setState({
            step:step +1,
            correctAnswer:0,
            clickedAnswer:0

        })
    }
   
   
    render(){
        let { questions, answers, clickedAnswer, correctAnswer, step, score} = this.state;
        return(
            
            <div className="Content">
                
                {step <= Object.keys(questions).length ?
                     (<>
                        <Question 
                            question ={questions[step]}
                        />
                        <Answer 
                            answer = {answers[step]}
                            step={step}
                            checkAnswer = {this.checkAnswer}
                            correctAnswer = {correctAnswer}
                            clickedAnswer = {clickedAnswer}
                        />
                        
                        <button
                            className="NextQuestion"
                            disabled={
                                clickedAnswer && Object.keys(questions).length >= step
                                ? false : true
                            }
                            onClick={()=>this.nextQuestion(step)}>
                                Next
                        </button>
                     </>) :  (
                         <div className='finalPage'>
                             <h1>You have completed the Quiz</h1>
                             <p> Your Score is: {score} of {Object.keys(questions).length}</p>
                             <p>Thank You!</p>
                             <button 
                             onClick ={()=> this.questionAgain(step)}> Take Quiz Again </button>
                        </div>
                     )   
                }         
            </div>
        );
    }
}