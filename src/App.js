import React from 'react';
import Cart  from './Cart';
import Navbar from './Navbar';
class App extends React.Component{
  //For list of products
  constructor(){
    super();
    this.state={
        products:[
          {
            price:2999,
            title:"Watch",
            qty:1,
            img:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80',
            id:1
          },
          {
            price:19550,
            title:"Phone",
            qty:4,
            img:'https://images.unsplash.com/photo-1528795259021-d8c86e14354c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
            ,
            id:2
          },
          {
            price:89960,
            title:"Laptop",
            qty:10,
            img:'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            id:3
          }
        ]
    }
    //this.increaseQty=this.increaseQty.bind(this);
}
handleIncreaseQty=(product)=>{
  console.log("Increase Qty");
  const{products}=this.state;
  const index=products.indexOf(product);
  products[index].qty+=1;

  this.setState({
    products
  })
}
handleDecreaseQty=(product)=>{
  console.log("Decrease Qty");
  const{products}=this.state;
  const index=products.indexOf(product);
  

  if(products[index].qty===0){
    return;
  }
  products[index].qty-=1;
  this.setState({
    products
  })
}
handleDeleteProduct=(id)=>{
  const {products}=this.state;
  const items=products.filter((item)=>item.id!==id);
  this.setState({
    products:items
  })
}

getCartCount=()=>{
  const {products}=this.state;
  let count=0;

  products.forEach((product)=>{
    count+=product.qty;
  })
  return count;
}

getCartTotal=()=>{
  const{products}=this.state;

  let cartTotal=0;

  products.map((product)=>{

    cartTotal = cartTotal + product.qty * product.price
  })

return cartTotal;
}

render(){
  const{products}=this.state;
  return(
    <div className='App'>
       <Navbar count={this.getCartCount()}/>
       <Cart
       products={products}
       onIncreaseQty={this.handleIncreaseQty}
       onDecreaseQty={this.handleDecreaseQty}
       onDeleteProduct={this.handleDeleteProduct}
       />
       <div style={{padding:10,fontSize:20}}>
        TOTAL : {this.getCartTotal()}
       </div>
    </div>
  );
}
}
export default App;