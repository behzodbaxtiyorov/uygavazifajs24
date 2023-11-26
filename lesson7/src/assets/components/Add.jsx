/* eslint-disable react/prop-types */


export default function Add({edit,pname, setPname, price, setPrice, addProduct}) {
  return (
    <div className="add">
      <form action="" onSubmit={addProduct}>
        <input className="add-inp" type="text" 
               name=""
               id=""
               value={pname}
               onChange={(e) => setPname(e.target.value)} 
               />
               <br />
        <input className="add-inp2" type="text" 
               name="" 
               id=""
               value={price}
               onChange={(e) => setPrice(e.target.value)}
                />
                <br />
        <button className="add-btn">
          {edit ? 'edit' : 'add'}
                </button>
      </form>
    </div>
  )
}
