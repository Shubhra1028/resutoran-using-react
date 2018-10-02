import React, { Component } from 'react';

class Chef extends Component{
    render(){
        return(
            <div className='grey lighten-2' style={{'padding':'0.5in'}}>
            <h1 style={{'textAlign':'center'}}>Our Chefs</h1>
                <div className='container chefGrid'>
                    <div>
                        <div className=" chefImg" style={{'backgroundImage':'url("https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/85/121/skd181312sdc.jpg")'}}></div>
                        
                    </div>
                    <div>
                        <div className="bgImg chefImg" style={{'backgroundImage':'url("https://img.freepik.com/foto-gratuito/cuoco-con-le-braccia-incrociate-su-sfondo-bianco_1368-2792.jpg?size=338&ext=jpg")'}}></div>
                        
                    </div>
                    <div>
                        <div className="bgImg chefImg" style={{'backgroundImage':'url("https://www.uniformsell.com/7081-large_default/high-quality-cook-head-chef-uniform-coat.jpg")'}}></div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Chef;