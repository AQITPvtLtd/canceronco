import React from 'react'
import DetailedTreatments from "./DetailedTreatments";

const page = ({ params }) => {
  const { url } = params
  return (
    <div className='lg:mt-35 mt-5'>
      <DetailedTreatments url={url} />
    </div>
  )
};

export default page
