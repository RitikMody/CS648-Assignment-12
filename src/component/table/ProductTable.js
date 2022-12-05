import {ProductRow} from "./ProductRow";

export const ProductTable = ({products, filterText, onDestroy}) => {
    const filteredProducts = Object.keys(products)
        .map(key => products[key])
        .filter(product => product.name.toLowerCase().includes(filterText.toLowerCase()))

    return <table className={'table table-striped'}>
        <thead>
        <tr className="bg-dark text-light">
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th/>
        </tr>
        </thead>
        <tbody>
        {filteredProducts.map(product =>
            (<ProductRow
                product={product}
                onDestroy={() => onDestroy(product.id)}
                key={product.id}/>)
        )}
        </tbody>
    </table>
}