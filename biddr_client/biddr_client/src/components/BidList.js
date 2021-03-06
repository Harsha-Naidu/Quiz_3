import React from 'react';
import BidDetails from './BidDetails';

const BidList = ({ bids }) => {

  return (
    <>
        {bids ? bids.map((b, i) => {
        return <BidDetails
          key={i}
          id={b.id}
          body={b.body}
          created_at={b.created_at}
        />
      }) : '' }
    </>
  )
}

export default BidList