function List({hello,remove}) {
    return  <> 
    {/* //fragment */}
    <h3>Cart</h3>
    {
        hello.length === 0 ? <div> No items in cart  </div>:
        <>
         

<ol class="list-group list-group-numbered">
{
    hello.map((fun) =>{
        return <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
        <div class="fw-bold">{fun.name}</div>
        price Rs.{fun.price}
        </div>
        <button onClick={()=>{
            remove(fun)
        }} class="badge bg-primary rounded-pill">X</button>
        </li>
    })
}

</ol>
<h3>Total : Rs.{
    hello.reduce((prev,curr)=>{
        return prev=prev+curr.price
    },0)
    }</h3>
        </>
    }
   
    </>
}

export default List