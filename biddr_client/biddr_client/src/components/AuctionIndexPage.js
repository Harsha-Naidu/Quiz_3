import React, { Component } from 'react';
import { Auction } from '../requests';
import NewAuctionForm from './NewAuctionForm';

class AuctionIndexpage extends Component{
    constructor(props) { // It always receives props as an arg
        super(props);
        this.state = {
          auctions: []
        }
        this.createAuction = this.createAuction.bind(this);
      }


      componentDidMount() {
        Auction.index()
          .then((auctions) => {
            this.setState((state) => {
              return {
                auctions: auctions
              }
            })
          })
      }

      createAuction(params) {
        this.setState((state) => {
          return {
            auctions: [
              ...state.auctions, 
              {
                id: (Math.max(...state.auctions.map(a => a.id)) + 1),
                ...params
              }
            ]
          }
        })
      }
    
      render() {
        console.log('Auction Index Page Rendered')
        return(
          <main>
              <NewAuctionForm createAuction={this.createAuction}/>
              <div><h2> AUCTIONS</h2></div>
            {this.state.auctions.map(a => {
              return(
                <div key={a.id}>
                <Link to={`/auctions/${a.id}`}>
                  <h1> {a.title}</h1>
                  <p>Posted on {a.created_at}</p>
                </Link>
                </div>
    
              )
            })}
          </main>
        )
      }
}


export default AuctionIndexpage