import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign ,faEnvelope } from '@fortawesome/free-solid-svg-icons'

// import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'


// import Select from '../SelectedPlayer/Select';


const Profile = (props) => {
    // console.log(props)

const {name ,age , email ,image ,salary} = props.players;




    return (
        <div style={{}}>

           <div style={{ width:'70%' ,float:'left',display:'flex' ,  flexDirection: 'row'}} >
                   
           
        <Card style={{ width: '25rem',alignItems:'center',marginLeft:'45%',marginBottom:'10px',marginTop:'10px'}}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>Name :{name}</Card.Title>
            <Card.Title>Age :{age}</Card.Title>

            {/* font awsome used */}
            <Card.Title><FontAwesomeIcon icon={faEnvelope}/>: {email}</Card.Title>
            <Card.Title>Salary :  <FontAwesomeIcon icon={faDollarSign}/> {salary}</Card.Title>
   
            <button     
                onClick={() => props.handleAddPlayer(props.players)}
                > Add Player</button>

            </Card.Body>
            </Card>            
  
                    
           </div>

        </div>
    );
};

export default Profile;