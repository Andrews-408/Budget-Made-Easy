import React from 'react'
import { ExpenseProps } from './Props';
import Item from './Item';
import { ListWrapper, Button } from './Calculator.styles';
import {MdDelete} from "react-icons/md"
import { ItemsProp } from './Props';


const ExpenseList:React.FC<ExpenseProps> = ({expenses, handleClearAll, handleDelete, handleEdit}) => {
  return (
    <>
        <ListWrapper>
            {expenses.map((expense: ItemsProp['ItemProp'] )=>{
                return <Item 
                          key={expense.id} 
                          ItemProp={expense} 
                          handleDelete={handleDelete} 
                          handleEdit={handleEdit}
                        />
            })}
        </ListWrapper>
        {expenses.length > 0 && 
                <Button onClick={()=> handleClearAll()}>
                    Clear All<MdDelete className='btn-clr-all'/>
                </Button>
        }
    </>
  )
}

export default ExpenseList
