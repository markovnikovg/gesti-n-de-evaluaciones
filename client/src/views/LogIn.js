import Navbar from "../components/Navbar"
import Form from "../components/Form"
import questions from "../config/questions"

const LogIn = () => {

  return (
    <div>
        <Navbar/>
        <Form questions={questions.logInQuestions}/>
    </div>
  )
}

export default LogIn