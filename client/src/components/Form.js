import Input from "./Input"
import Select from "./Select"

const Form = (props) => {
  return (
    <form>
          {

            props.questions?.map((question, i)=>{

              let isSelect = question.select

              if(isSelect){
                return <Select options={question.options} key={i}/>
                
              } else {
                return <Input type={question.type} key={i}/>
              }

            })
          }
    </form>
  )
}

export default Form