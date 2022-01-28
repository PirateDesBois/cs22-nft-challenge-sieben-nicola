import React from 'react';
import './Image.css';

class Image extends React.Component {
    
    render() {
        let imageplop=document.getElementsByClassName('equilibrium')[0];
        console.log(imageplop);
        return (
            <div>
                <img onMouseOver={(e) => {e.target.src="./img/image-equilibrium2.jpg";}} onMouseOut={(e) => {e.target.src="./img/image-equilibrium.jpg";}} src="./img/image-equilibrium.jpg" className="equilibrium" alt="img-principale" />
            </div>
        );
    }
}
export default Image;
