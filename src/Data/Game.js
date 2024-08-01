import './Game.css'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


let Game = ({ setscore, setremarks, setresult, score }) => {

    let navigate = useNavigate();

    let [ans, setans] = useState(['Option1', 'Option2', 'Option3', 'Option4'])

    function genNum() {
        let Number = Math.floor(Math.random() * 29);
        return Number;
    }

    function genNum1() {
        let Number = Math.floor(Math.random() * 9) + 1;
        return Number;
    }

    function genNum2() {
        let Number = Math.floor(Math.random() * 4);
        return Number;
    }

    let on1 = genNum1()
    let tw2 = genNum1()
    let th3 = genNum1()

    let Shuffle = (val) => {
        let op1 = genNum2()
        let op2 = genNum2()
        let op3 = genNum2()
        let op4 = genNum2()
        let anns = [val + op1 + 2, val + op2 + 5, val + op3 + 9, val + op4 + 7];
        let finalOption = genNum2()
        anns[finalOption] = val;
        setans(anns);
    }

    //All states
    let [option, setoption] = useState('');
    let [Attempts, setAttempts] = useState(0);
    let [time, settime] = useState(-1);
    let [expressionn, setexpressionn] = useState({});
    let [btn, setbtn] = useState('Play');
    let [timing, settiming] = useState(0)
    let [userAnswer, setuserAnswer] = useState(0)
    let [one, setone] = useState(on1)
    let [two, settwo] = useState(tw2)
    let [three, setthree] = useState(th3)
    let [array, setarray] = useState([])

    //Expression

    let Equation = (e) => {
        if (e === 0) {
            let obj = {
                expression: `${one} + ${two} / ${one} * (${three} + ${one} * ${three})`,
                answer: one + two / one * (three + one * three),
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 1) {
            let obj = {
                expression: `${one} - ${two} + ${three} * (${one}*${three}) / (${one}+${two} - ${three})`,
                answer: one - two + three * (one * three) / (one + two - three),
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 2) {
            let obj = {
                expression: `(${one}*${two})/${three} - ${two}`,
                answer: (one * two) / three - two,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 3) {
            let obj = {
                expression: `${one}+ ${three} * ((${one}+${one})-${two})`,
                answer: one + three * ((one + one) - two),
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 4) {
            let obj = {
                expression: `${three} * ${one} / ${two} - (${one} * ${three} + ${two})`,
                answer: three * one / two - (one * three + two),
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 5) {
            let obj = {
                expression: `(${two}+${one}) - ${three} * ${one}`,
                answer: three * one - (two + one),
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 6) {
            let obj = {
                expression: `${one} - ${one} + (${three} * ${one} - ${two})`,
                answer: one - one + (three * one - two),
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 7) {
            let obj = {
                expression: `${three} + (${two} + ${two} - ${two}) * ${one}`,
                answer: three + (two + two - two) * one,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 8) {
            let obj = {
                expression: `(${two} + ${one}) * ${three} + (${two} - ${two})`,
                answer: (two + one) * three + (two - two),
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 9) {
            let obj = {
                expression: `${one} - ${one} + ${two} * ${three}`,
                answer: one - one + two * three,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 10) {
            let obj = {
                expression: `${two} + ${two} * ${two} / ${two} + ${one} * ${three}`,
                answer: two + two * two / two + one * three,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 11) {
            let obj = {
                expression: `(${three} * ${one}) / ${two}`,
                answer: (three * one) / two,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 12) {
            let obj = {
                expression: `${three} + ${three} * ${one} - (${two} + ${one}) / ${one}`,
                answer: three + three * one - (two + one) / one,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 13) {
            let obj = {
                expression: `${two} + (${one} + ${three}) - ${two} * ${one}`,
                answer: two + (one + three) - two * one,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 14) {
            let obj = {
                expression: `${three} + (${one} * ${one} / ${one}) - ${two}`,
                answer: three + (one * one / one) - two,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 15) {
            let obj = {
                expression: `${one} * (${two} + ${three}) - ${one}`,
                answer: one * (two + three) - one,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 16) {
            let obj = {
                expression: `${two} + ${one} * (${one} / ${one} + ${three}) - ${two}`,
                answer: two + one * (one / one + three) - two,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 17) {
            let obj = {
                expression: `${two} - ${one} * ${three} - (${one} + ${two})`,
                answer: two - one * three - (one + two),
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 18) {
            let obj = {
                expression: `(${three} + ${one}) / ${one} + ${three}`,
                answer: (three + one) / one + three,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 19) {
            let obj = {
                expression: `${three} + ${two} * (${one} + ${one}) / ${one}`,
                answer: three + two * (one + one) / one,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 20) {
            let obj = {
                expression: `(${two} + ${two} + ${one}) / ${one} - ${three}`,
                answer: (two + two + one) / one - three,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 21) {
            let obj = {
                expression: `${one} + ${one} - ${one} + ${two} * ${three}`,
                answer: one + one - one + two * three,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 22) {
            let obj = {
                expression: `(${two} + ${one}) - ${two} * ${one}`,
                answer: (two + one) - two * one,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 23) {
            let obj = {
                expression: `${three} - (${one} + ${two}) * ${three}`,
                answer: three - (one + two) * three,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 24) {
            let obj = {
                expression: `${two} * ${three} - (${one} + ${one} - ${two})`,
                answer: two * three - (one + one - two),
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 25) {
            let obj = {
                expression: `${one} + ${three} - (${two} * ${three}) / ${one}`,
                answer: one + three - (two * three) / one,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 26) {
            let obj = {
                expression: `${three} * (${two} + ${one}) / ${one}`,
                answer: three * (two + one) / one,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 27) {
            let obj = {
                expression: `${one} / ${one} + (${two} + ${three}) - ${two}`,
                answer: one / one + (two + three) - two,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
        else if (e === 28) {
            let obj = {
                expression: `(${two} + ${two} + ${two}) / ${one} + ${three}`,
                answer: (two + two + two) / one + three,
                status: ''
            }
            obj.answer = Math.round(obj.answer)
            setexpressionn(obj);
            Shuffle(obj.answer)
        }
    }

    //Handling Functions
    let handleChange = (e) => {
        let { name } = e.target;
        let { value } = e.target;
        setoption(name)
        setuserAnswer(value * 1)
    }

    useEffect(() => {
        if (time >= 0) {
            let Timer = setTimeout(() => {
                settime(time - 1);
                if (time === 1) {
                    Submit();
                }
            }, 1000);
            return () => clearTimeout(Timer);

        }
        else {
            settime(timing);
        }
    }, [time]);


    let Submit = () => {
        let arr = array
        settiming(10)
        setbtn('Submit');
        on1 = genNum1()
        tw2 = genNum1()
        th3 = genNum1()
        setone(on1)
        settwo(tw2)
        setthree(th3)
        if (expressionn.answer === userAnswer) {
            if (expressionn.status === '')
                expressionn.status = 'right'
            setscore(score + 1)
        }
        else {
            if (expressionn.status === '')
                expressionn.status = 'wrong'
        }
        if (expressionn.status !== '')
            arr.push(expressionn)
        setarray(arr)
        settime(10)
        if (Attempts === 0) {
            setAttempts(10)
        }
        else {
            setAttempts(Attempts - 1)
            if (Attempts === 1) {
                if (score < 5) {
                    setremarks('BLNT')
                } else if (score === 5) {
                    setremarks('Fair')
                } else if (score > 5 && score < 8) {
                    setremarks('Good')
                } else if (score > 7) {
                    setremarks('Excellent')
                }
                setresult(arr)
                navigate('/result')
            }
        }
        setoption('')
        let num = genNum();
        Equation(num);
    }




    return (
        <div className="main">
            <div className="aboutme">
                <div>
                    <h1>Quiz Game</h1>
                </div>
                <div>About Developer <a href='http://www.linkedin.com/in/hammad-baseer-763682279'>Hammad Baseer</a></div>

            </div>
            <div className='score'>
                <div>Attempts: {Attempts}</div>
                <div>Time: {time}</div>
            </div>
            <div className='body'>
                <div className='brief'>
                    Choose the answer any of one
                </div>
                <div className='Expression'>
                    <div className='expression'>
                        Solve: {expressionn.expression}
                    </div>
                    <div className='options'>
                        <div className='box'>
                            <input type='checkbox' name='option1' value={ans[0]} checked={option === 'option1'} onChange={handleChange} />
                            {ans[0]}
                        </div>
                        <div className='box'>
                            <input type='checkbox' name='option2' value={ans[1]} checked={option === 'option2'} onChange={handleChange} />
                            {ans[1]}
                        </div>
                        <div className='box'>
                            <input type='checkbox' name='option3' value={ans[2]} checked={option === 'option3'} onChange={handleChange} />
                            {ans[2]}
                        </div>
                        <div className='box'>
                            <input type='checkbox' name='option4' value={ans[3]} checked={option === 'option4'} onChange={handleChange} />
                            {ans[3]}
                        </div>
                    </div>
                    <div className='Submit'>
                        <button onClick={Submit}>{btn}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game;