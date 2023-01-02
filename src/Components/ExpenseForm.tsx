import React from 'react'
import { FormProps } from './Props'
import { MdSend } from 'react-icons/md'
import { FormWrapper, FormContainer, FormControl, FormLabel, Button} from './Calculator.styles'

const ExpenseForm: React.FC<FormProps>= ({values, handleValue, handleSubmit, edit}) => {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormContainer>
        <div>
          <FormLabel htmlFor='charge'>Charge</FormLabel>
          <FormControl 
              type='text' 
              id='charge'
              placeholder='e.g. Rent'
              name='charge'
              value={values.charge}
              onChange={handleValue}
              
          />  
        </div>
        <div>
          <FormLabel htmlFor='amount'>Amount</FormLabel>
          <FormControl 
              type='number'
              id='amount'
              placeholder= 'e.g. 200'
              name = 'amount'
              value= {values.amount}
              onChange = {handleValue}
          />
        </div>
      </FormContainer>
      <Button type='submit'>
        {edit? "Edit" : "Submit"} <MdSend className='submit-edit'/>
      </Button>
    </FormWrapper>
  )
}

export default ExpenseForm;
