import { Form } from "./Form"
import { Option } from "./Option"

const Index = () => {
  return (
    <div className="containerOrador">
       <div className="container_option">
       <Option title='Estudiante' percentaje='80' clasess={{border: '2px solid #507db4'}} />
        <Option title='Trainee' percentaje='50' clasess={{border: '2px solid #62b690'}} />
        <Option title='Junior' percentaje='15' clasess={{border: '2px solid #f3dc99'}} />
       </div>
       <Form />
    </div>
  )
}

export default Index