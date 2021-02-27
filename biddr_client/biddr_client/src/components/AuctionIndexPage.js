import React, { Component } from 'react';
import { Auction } from '../requests';
import NewAuctionForm from './NewAuctionForm';
import { Link } from 'react-router-dom';

class AuctionIndexpage extends Component{
    constructor(props) { // It always receives props as an arg
        super(props);
        this.state = {
          auctions: []
        }
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

    
      render() {
        console.log('Auction Index Page Rendered')
        return(
          <main>
            <div><h2> AUCTIONS</h2></div>
            {this.state.auctions.map(a => {
              return(
                <div key={a.id}>
                <Link to={`/auctions/${a.id}`}>
                  <h1> {a.title}</h1>
                  <p>Posted on {a.created_at.toLocaleString()}</p>
                </Link>
                </div>
    
              )
            })}
          </main>
        )
      }
}


export default AuctionIndexpage