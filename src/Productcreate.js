import { useContext,useState } from "react"
import ProductContext from "./ProductContext"


export default function Productcreate(){
    let [productname,setproductname]=useState('')
    let [productid,setproductid]=useState('')
    let [productbrand,setproductbrand]=useState('')
    let [price,setprice]=useState('')

    let productdata = useContext(ProductContext)

    let ProductSubmit = (e)=>{
        e.preventDefault()   
        productdata.setproductlist([...productdata.productlist,{
            productname,
            productid,
            productbrand,
            price
        }])
    }
    return <>
   <div className = 'container'>
    <form onSubmit={ProductSubmit}>
        <div className='row'>
            <div className ='col-lg-12 p-0'>
                <h3>Product Creation Form</h3>
            </div>
        </div>
        <div className = 'row'>
          
                <div className = 'col-lg-6 p-0 mt-3'>
                    <label >Product Id</label>
                    <input className='form-control' value={productname} onChange={(e)=> setproductname(e.target.value) }></input>
                </div>
                <div className = 'col-lg-6 mt-3'>
                    <label >Product Name</label>
                    <input className='form-control'value={productid} onChange={(e)=> setproductid(e.target.value) }></input>
                </div>
                <div className = 'col-lg-6 p-0 mt-3'>
                    <label >Brand</label>
                    <input className='form-control'value={productbrand} onChange={(e)=> setproductbrand(e.target.value) }></input>
                </div>
                <div className = 'col-lg-6 mt-3'>
                    <label >Price</label>
                    <input className='form-control'value={price} onChange={(e)=> setprice(e.target.value) }></input>
                </div>
                <div className = 'row'>
                <div className = 'col-lg-6 mt-3'>
                <input type="submit" value="Submit"className='btn btn-primary'></input>
                    </div>
                </div>
        </div>
        </form>
    </div>
    </>

}