import React, { Component } from 'react'
import { Auction } from '../requests';
import NewBidForm from './NewBidForm';
import BidList from './BidList';
import AuctionDetails from './AuctionDetails';


class AuctionShowPage extends Component {
    constructor(props) {
        super(props); 
        this.state = {
          auction: {}
        }
        this.createBid = this.createBid.bind(this);
      }

      componentDidMount() {
        Auction.show(this.props.match.params.id)
          .then(auction => {
            console.log(auction);
            this.setState((state) => {
              return {
                auction: auction
              }
            })
          })
      }


      createBid(params){
        this.setState((state) => {
            return {
              bids: [
                ...state.bids, 
                {
                  id: (Math.max(...state.bids.map(b => b.id)) + 1),
                  ...params
                }
              ]
            }
          })
      }


      render() {
        console.log('Auction Show Page Rendered')
        const { title, description, ends_at, reserve_price, created_at,bids} = this.state.auction;
        
        return(
          <main>
            <AuctionDetails
              title={title}
              description={description}
              ends_at={ends_at}
              reserve_price={reserve_price}
              created_at={new Date(created_at)}
            />
            <NewBidForm createBid= {this.createBid} />
            <BidList
              bids={bids}
            />
          </main>
        )
      }
}

export default AuctionShowPage