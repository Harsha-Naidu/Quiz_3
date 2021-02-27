const BidDetails = ({ body,created_at,id}) => {
    return (
      <main>
        <h4>Previous Bids</h4>
      <div>
        <p>${body} on {created_at} </p>
      </div>
      </main>
      
    )
  }
  
  export default BidDetails