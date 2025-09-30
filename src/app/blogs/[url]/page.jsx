import React from 'react'
import DetailedBlog from './DetailedBlog'

const page = ({ params }) => {
    const { url } = params
    return (
        <div className='lg:mt-50 mt-5'>
            <DetailedBlog url={url} />
        </div>
    )
}

export default page