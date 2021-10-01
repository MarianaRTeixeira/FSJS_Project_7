import React from 'react';

// //import Componetnts needed
import Photo from './Photo';
import NotFound from './NotFound';

 const PhotoContainer = (props) => {
  
    const results = props.responseData;
    let photos;

    if (results.length > 0) {
        photos = results.map( (photo) =>
        <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} title={photo.title} />)
    } else {
        photos = <NotFound />
    }

    return (
        <div className='photo-container'>
        <ul> { photos } </ul>
      </div>
    )
} 

export default PhotoContainer; 
