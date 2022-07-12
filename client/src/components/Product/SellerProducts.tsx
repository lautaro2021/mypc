import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector} from 'react-redux';
import { useAppDispatch } from "src/config/config"
import { getAllComponents} from "src/redux/actions"
import s from '../Styles/SellerProducts.module.css'

function SellerProducts(){
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllComponents())
    }, [])

    const product = useSelector((state:any) => state.productDetails)
    const seller = useSelector((state:any) => state.productDetails?.sellerInfo)
    const components = useSelector((store:any) => store.allComponents)
    const sellerId = seller && seller.id
    const sProducts = components.filter((p) => p.sellerInfo.id === sellerId)
    const finalP = sProducts.filter((p) => p.id !== product.id)
    const spanish = useSelector((state: any) => state.spanish);

    let random1 = Math.floor(Math.random()*(finalP.length ? (finalP.length/2) : 1))
    let random2 = Math.floor(Math.random()*50)
    let actualComponents = [];
    if(random1 > random2) actualComponents = finalP.slice(random2, random1);
    else if(random2 > random1) actualComponents = finalP.slice(random1, random2);
    else actualComponents = finalP.slice(random1, random2 + 3)
    let sellerProducts = actualComponents.filter((p:any) => p.sellerInfo.id === sellerId).slice(0, 3)

  return (
    <>
    {
        sProducts.length > 1 && 
        <div className = {s.prodContainer}>
               <div className = {s.h2Prod}>
               <h2>{spanish ? "Más productos del vendedor" : "More products from the seller"}</h2>
               </div>
               {sellerProducts.length && sellerProducts.map((prod:any) => (
                    <div className = {s.prodDetails}>
                     <Link to = {`/detail/${prod.id}`}>
                        <img src={prod.photo[0]} className = {s.prodImg}></img>
                     </Link>
                     <div className = {s.prodD}>
                     <h3>{prod.title}</h3>
                     <h4>${prod.price}</h4>
                     <h5>{prod.status}</h5>
                     </div>
                  </div>
                    ))
               }
    </div>
    }
    </>
  )
}

export default SellerProducts