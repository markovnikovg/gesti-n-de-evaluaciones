import Navbar from "../components/Form"
import Form from "../components/Form"
import questions from "../config/questions"

const Register = () => {

  return (
    <div>
        <Navbar/>
        <Form questions={questions.registerQuestions}/>
    </div>
  )
}

export default Register