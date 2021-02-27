import React from 'react';

const AuctionDetails = (props) => {
  const { title, description, ends_at, reserve_price} = props;
  
  console.log('Auction Details Re-rendered')
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Ends at:{ends_at}</p>
      <p>Reserve price:{reserve_price}</p>
    </div>
  )
}

export default AuctionDetails;