import {useState} from "react";

export const ProductForm = ({onSave}) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')

    const save = ()=>{
        if((name && name!=='') && price && price!==0 && category && category!==''){
            onSave({name, category, price: `$${price}`})
            setPrice(0)
            setName('')
            setCategory('')
        }
    }
    return <div>
        <h3>Add a new product</h3>

        <div className="form-group">
        <label>Name</label><br/>
        <input name='name' type='text' className="form-control" value={name} onChange={e => setName(e.target.value)}/><br/>
        </div>

        <div className="form-group">
        <label>Category</label><br/>
        <input name='name' type='text' className="form-control" value={category} onChange={e => setCategory(e.target.value)}/><br/>
        </div>

        <div className="form-group">
        <label>Price</label><br/>
        <input name='name' type='text' className="form-control" value={price} onChange={e => setPrice(e.target.value)}/><br/>
        </div>
        <button className="btn btn-info" onClick={save}>Save</button>
    </div>
}