import React from 'react';
import {useHistory} from 'react-router-dom'

function Home(){
    const history = useHistory();
  
  const routeToOrder = () => {
    history.push("/pizza");
  };
    return(
        <div className='home'>
            <h1 className='homeTitle'>Pizza Palace</h1>
            <button className='orderBtn' onClick={routeToOrder}>Order</button>
        </div>
    )
}

export default Home;