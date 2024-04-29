import { useContext } from "react"
import { mycontext } from "./context"

const Like = () => {
    const{likeProduct}=useContext(mycontext)
    console.log(likeProduct);
    return(
        <div>
            <h1>likedproducts</h1>
            <ul>
                {likeProduct.map((product,likedproducts) => (
                    <li key={likedproducts}>
                        <img src={product.Image}/>
                        <p>Name:{product.Name}</p>
                        {/* <p>pame:{product.price}</p>
                        <p>lame:{product.color}</p> */}
                    </li>
                ))}
            </ul>
        </div>
    )
    
}
 export default Like