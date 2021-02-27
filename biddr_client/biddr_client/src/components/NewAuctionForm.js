import React from 'react';
// import './NewQuestionForm.css';


const NewAuctionForm = ({ createAuction }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.currentTarget);
    const params = {
        title: formdata.get('title'),
        description: formdata.get('description'),
        ends_at: formdata.get('ends_at'),
        reserve_price: formdata.get('reserve_price')   
    }
    createAuction(params);
  }

  

  return(
      
    <main>
          <div><h2>CREATE AN AUCTION</h2></div>
     <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title *</label> 
        <input 
          name='title'
          id='title'
        />
      </div>
      <div>
         <label htmlFor='Description'>Description *</label>
        <textarea 
          name='description'
          id='description'
        />
      </div>
      <div>
        <label htmlFor='ends_at'>Ends at *</label> 
        <input 
          name='ends_at'
          id='ends_at'
        />
      </div>
      <div>
        <label htmlFor='reserve_price'>Reserve Price *</label> 
        <input 
          name='reserve_price'
          id='reserve_price'
        />
      </div>
      <div>
        <BlackInput type='submit' value='save' />
      </div>
    </form>
    </main>
  )
}

export default NewAuctionForm