export const ProductRow=({product, onDestroy})=>{
    return <tr>
        <td>{product.name}</td><td>{product.category}</td><td>{product.price}</td><td><button className={'btn btn-info'} onClick={onDestroy}>Delete</button></td>
    </tr>
}