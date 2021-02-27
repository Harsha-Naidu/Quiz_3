import React from 'react';
import BlackInput from './BlackInput';

const NewBidForm = ({ createBid }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);
        const params = {
            body: formdata.get('body')
        }
        createBid(params);
    }
  
    
  
    return(
      <form onSubmit={handleSubmit}>
        
        <div>
          <input 
            name='body'
            id='body'
          />
        <span>
          <BlackInput type='submit' value='Bid' />
        </span>
        </div>

      </form>
    )
  }
  
  export default NewBidForm