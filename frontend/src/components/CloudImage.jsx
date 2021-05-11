import { Image } from 'cloudinary-react'
import React from 'react'

const CloudImage = (props) => {
    const {publicId, className, width} = props
    return <Image className={className} width={width} cloudName="kariecloud" publicId={publicId} />
}

export default CloudImage
