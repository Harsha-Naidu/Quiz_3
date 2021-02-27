import React, { Component } from 'react'
import NewAuctionForm from './NewAuctionForm';
import { Auction } from '../requests';

class AuctionNewPage extends Component {
  constructor(props) {
    super(props);
    
    this.createAuction = this.createAuction.bind(this)
   
  }

  createAuction(params) {
    Auction.create(params)
      .then(({id}) =>{
        this.props.history.push(`/auctions/${id}`);
      })
  }
  
  render() {
    return(
      <main>
        < NewAuctionForm 
          createAuction={this.createAuction}
        />
      </main>
    )
  }
}

export default AuctionNewPage