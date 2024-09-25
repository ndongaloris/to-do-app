import "./styles.css"

export default function app(){
  return ( 
  <>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input id="item" type="text" />
        </div>    
        <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list">
      <li>
        <label>
          <input type="checkbox" /> Item1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox" /> Item2
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
  </>
  )
}