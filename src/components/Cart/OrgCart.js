import React, { useState } from 'react';
import './Cart.css'

const OrgCart = ({ Item,removeFromCart }) => {
  const [change, setChange] = useState(1);

  const onHandleChange = (e) => {
    const { name } = e.target;
    if (name === 'INC') {
      setChange(change + 1);
    } else {
      if ((change - 1) === 0) {
        setChange(1);
      } else {
        setChange(change - 1);
      }
    }
  }

 


  return (
    <div className="items">
      <div className="imgDiv">
        <img className='img' src={Item.thumbnail} alt="" />
        <p>{Item.title}</p>
      </div>
      <div className="row">
        <p>{`${Item.price}₹`}</p>
        <p>
          <input type="submit" onClick={onHandleChange} name='DEC' value='-' />
          { change }
          <input type="submit" onClick={onHandleChange} name='INC' value='+' />
        </p>
        <p>{`${change*Item.price}₹`}</p>
        <button className='butn' onClick={()=>removeFromCart(Item.id)}>✖</button>
      </div>
    </div>
  )
}

export default OrgCart
