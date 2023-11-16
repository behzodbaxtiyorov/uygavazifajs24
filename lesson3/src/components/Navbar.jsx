/* eslint-disable react/prop-types */


export default function Navbar({ setModal}) {
  return (
    <div className="nav">
        <ul className="nav-list">
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li><button onClick={() => setModal(true)}>sign up</button></li>
        </ul>
    </div>
  )
}
