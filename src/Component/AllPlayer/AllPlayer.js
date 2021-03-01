import React, { useState } from 'react';
import playerData from '../data.json'
import Profile from '../Profile/Profile';
import Select from '../SelectedPlayer/Select';

// import {Card} from 'react-bootstrap'


const AllPlayer = () => {
    const [player, setPlayer] = useState(playerData);
    // setPlayer(player)
    // console.log(playerData)

    const [count, setCount] = useState([])
    const handleAddPlayer = (player)=> {
        const newPlayer = [...count , player]
        setCount(newPlayer)
    }
 

    return (
        <div>
           <div>
           
           {
               player.map(pf => <Profile count={count}  handleAddPlayer={handleAddPlayer} players={pf}></Profile>)
           }
           </div>

           <div>
             

           {
                   
                    <Select count={count}></Select>
           }

           
                
           </div>
            
        </div>
        
    );
};

export default AllPlayer;