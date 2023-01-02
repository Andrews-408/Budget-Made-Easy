import React from 'react'
import { ListItem, ListItemContainer } from './Calculator.styles';
import { ItemsProp } from './Props';
import {MdDelete, MdEdit} from "react-icons/md"


const Item : React.FC<ItemsProp>= ({ItemProp, handleDelete, handleEdit}) => {
  const {id,charge, amount} = ItemProp;
  return (
    <ListItem>
      <ListItemContainer>
        <span className='charge'>{charge}</span>
        <span className='amount'>${" "}{amount}</span>
        <div className='btns'>
          <span><button className='btn-edit' onClick={()=> handleEdit(id)}> <MdEdit/> </button></span>
          <span><button className='btn-delete' onClick={()=> handleDelete(id)}> <MdDelete /> </button></span>
        </div>
      </ListItemContainer>
    </ListItem>
  )
}

export default Item;
