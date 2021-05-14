import { Image } from 'cloudinary-react'
import React from 'react'

const CloudImage = (props) => {
    const {imageId, className, width, height} = props
    return <Image className={className} width={width} height={height} cloudName="kariecloud" publicId={imageId} />
}

export default CloudImage
