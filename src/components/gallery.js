import React, { Component } from 'react';

class Gallery extends Component{
    render(){
        return(
            <div>
                <div className='outerBox bgImg' style={{"backgroundImage": "url('https://cdn-images-1.medium.com/max/1000/1*qmt5I59swFl0EWQSBALU5A.jpeg')"}}>
                    <div className='innerBox'>
                        <h1 className='bigLetters white-text' >Gallery</h1>
                    </div>
                </div>
                <div className="galleryGrid container">
                    <div className="bgImg" style={{'backgroundImage': 'url("https://data.luebeck-tourismus.de/typo3temp/GB/csm_shutterstock_73748515_01_cf1fd34057_519ffe33ac.jpg")'}}></div>
                    <div className="bgImg" style={{'backgroundImage': 'url("https://www.restaurant-il-gusto.com/wp-content/uploads/2017/06/image-bandeau-large-705x353.jpg")'}}></div>
                    <div className="bgImg" style={{'backgroundImage': 'url("https://www.tropical-islands.de/fileadmin/_processed_/csm_TI_RESTAURANT_TROPICAL-GARDEN1_RGB_2000x860_c3a4238088.jpg")'}}></div>
                    <div className="bgImg" style={{'backgroundImage': 'url("https://s3.envato.com/files/220083862/Inline%20Preview%20Image.jpg")'}}></div>
                    <div className="bgImg" style={{'backgroundImage': 'url("https://www.foodnewsfeed.com/sites/foodnewsfeed.com/files/feature-images/fifty-future.jpg")'}}></div>
                    <div className="bgImg" style={{'backgroundImage': 'url("https://www.hotelzoo.de/fileadmin/user_upload/Restaurant/Hotel_Zoo_Berlin_-_Low_Res_GRACE_Restaurant_Terasse_2_Nalies.jpg")'}}></div>
                    <div className="bgImg" style={{'backgroundImage': 'url("https://www.dosbrisas.com/d/dosbrisas/media/__thumbs_1200_700_crop/restaurant_patiokatiepark_1_48f11d.jpg")'}}></div>
                    <div className="bgImg" style={{'backgroundImage': 'url("https://cdn.vox-cdn.com/uploads/chorus_asset/file/4344367/Candide-2.0.JPG")'}}></div>
                    <div className="bgImg" style={{'backgroundImage': 'url("http://graduateinstitute.ch/files/live/sites/iheid/files/sites/public_relations/venues/venues_resto.jpg")'}}></div>
                </div>
            </div>
        );
    }
}

export default Gallery;