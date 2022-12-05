export const Filter = ({filter, setFilter}) => {
    return <div>
        <input
            type={'search'}
            value={filter}
            className="form-control"
            onChange={e => setFilter(e.target.value)}
            placeholder={'Search...'}/>
        <br/>
    </div>
}