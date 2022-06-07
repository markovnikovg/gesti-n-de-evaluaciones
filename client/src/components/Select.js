const Select = (props) => {
  return (
    <select>
    {
        props.options.map((option, i)=>{
            return(
                <option key={i}>{option}</option>
            )
        })
    }
    </select>
  )
}

export default Select