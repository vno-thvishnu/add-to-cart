function Card({collection,click,check}) {
  return <div className="col-lg-4 border mt-1  p-3">
    <div className="row">
      <div className="col-lg-12">
        
        <img
          className="img-fluid"
          src={collection.picture}
        />
      </div>
      <div className="col-lg-12">
        <h3>{collection.name}</h3>
        <h6>price Rs.{collection.price}</h6>
        <button disabled={check.some(obj => obj.id===collection.id)} onClick={()=>{
            click(collection)

        }} className="btn btn-sm btn-primary">
          {
            check.some(obj => obj.id===collection.id) ? 'Added to Cart' : ' Add to Cart'
          }
        </button>
      </div>
    </div>
  </div>;
}

export default Card
