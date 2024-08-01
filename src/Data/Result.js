import './Game.css'
import { useNavigate } from "react-router-dom";

let Result = ({ score, remarks, result, setscore, setremarks }) => {

    let navigate = useNavigate();

    let PlayAgain = () => {
        setscore(0)
        setremarks(0)
        navigate('/')
    }

    console.log(result)

    return (
        <div className="main">
            <div className="aboutme">
                <div>
                    <h1>Quiz Game</h1>
                </div>
                <div>About Developer <a href='http://www.linkedin.com/in/hammad-baseer-763682279'>Hammad Baseer</a></div>

            </div>
            <div className="result">
                <div className='report'>
                    {result.map((item) => {
                        if (!item.expression) { }
                        else {
                            return (
                                <div className='reportBox'>
                                    <div className='boxexpression'>{item.expression}</div>
                                    <div className='boxanswer'>answer: {item.answer}</div>
                                    <div className='boxstatus'>status: {item.status}</div>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className='under'>
                    <div>Score: {score}</div>
                    <div>Remarks: {remarks}</div>
                </div>
                <div className='btn'>
                    <button onClick={PlayAgain}>Play Again</button>
                </div>
            </div>
        </div>
    )
}

export default Result;