import "./main.css";
import React from 'react'

const Main = () => {
  return (
    <div className="main ">
      <div className="top">
                <h1 className="mtitle">Etherum Lottery Decentralized App</h1>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusantium architecto delectus necessitatibus vero. Delectus optio facilis atque itaque incidunt voluptates totam, ipsum exercitationem consequatur. Perspiciatis veritatis aspernatur dolor? Quidem nesciunt illo nulla possimus consequatur?</p>
      </div>
      <div className="bottom">
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWA5ku33LABSkOTS1ykx4_RLhUxSxL3WqsA&usqp=CAU"  className="cImg" alt="" />
        <h3 className="cTitle">Players</h3>
        <p className="cDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum laborum modi voluptas exercitationem tenetur magni quia quos ab beatae. Ut, nobis. Expedita voluptatibus unde repellat ex quo numquam iste voluptates.</p>
        <button className="cBtn">Players</button>
      </div>
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWA5ku33LABSkOTS1ykx4_RLhUxSxL3WqsA&usqp=CAU"  className="cImg" alt="" />
        <h3 className="cTitle">Manager</h3>
        <p className="cDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum laborum modi voluptas exercitationem tenetur magni quia quos ab beatae. Ut, nobis. Expedita voluptatibus unde repellat ex quo numquam iste voluptates.</p>
        <button className="cBtn">Manager</button>
      
      </div>

      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWA5ku33LABSkOTS1ykx4_RLhUxSxL3WqsA&usqp=CAU"  className="cImg" alt="" />
        <h3 className="cTitle">How To Play</h3>
        <p className="cDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum laborum modi voluptas exercitationem tenetur magni quia quos ab beatae. Ut, nobis. Expedita voluptatibus unde repellat ex quo numquam iste voluptates.</p>
        <button className="cBtn">How To Play</button>
      </div>
      </div>
    </div>
  )
}

export default Main
