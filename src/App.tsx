import React, {useState} from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import { Wrapper, Container, Heading, SpendingWrapper } from './Components/Calculator.styles';
import { ExpenseProps} from './Components/Props';
import {v4 as uuidv4} from "uuid"



const initialExpenses: ExpenseProps['expenses'] = [
  {id:uuidv4(), charge:"school fees", amount: 400},
  {id:uuidv4(), charge:"electricity bill", amount: 750},
  {id:uuidv4(), charge:"foodstuffs", amount: 240},
  {id:uuidv4(), charge:"lorry fare", amount:80},
  {id:uuidv4(), charge:"clothing", amount:300}
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [values, setInputValues] = useState({ charge: '',amount: 0})
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("bosaata")


  // function for handling form inputs
  const handleInputValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues(prev=>{
          return {
            ...prev,
            [e.target.name]: e.target.value
          }
        })
  }

  const handleClearAll = () => {
      setExpenses([]);
  }

  const handleDelete = (id:string) => {
      const tempExpenses = expenses.filter(item=> item.id !== id);
      setExpenses(tempExpenses);

  }

  const handleEdit = (id:string) => {
      const singleExpense = expenses.find(item=> item.id === id);
      setEdit(true);
      if(singleExpense){
          setInputValues({charge: singleExpense.charge, amount: singleExpense.amount})
          setId(singleExpense.id)
        } 
      
      
  }

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(values.charge !=='' && values.amount > 0){
      if(edit){
          const temp = expenses.map(item=>{
            return item.id === id ? {...item, charge: values.charge, amount: values.amount}:item
          })
          setExpenses(temp)
          setEdit(false)
      }
      else{
          const singleExpense = {id: uuidv4(), charge: values.charge, amount: values.amount}
          setExpenses(prev=>{
              return [...prev, singleExpense];
            })
          }
          setInputValues(()=>({charge: '',amount: 0 }))
    }
    else{
      return
    }
  }

  return (
    <Wrapper>
      <Heading>Budget Calculator</Heading>
      <Container>
        <ExpenseForm 
          values={values} 
          handleValue={handleInputValues} 
          handleSubmit={handleSubmit}
          edit={edit}
        />

        <ExpenseList 
          expenses={expenses} 
          handleClearAll={handleClearAll} 
          handleDelete={handleDelete}
          handleEdit = {handleEdit}
        />
      </Container>

      <SpendingWrapper>
        Total Spending: 
        <span> {" "}${expenses.reduce((acc, val)=>{
          return acc+= Number(val.amount);
            },0)} 
        </span>
      </SpendingWrapper>
    </Wrapper>
  );
}

export default App;


