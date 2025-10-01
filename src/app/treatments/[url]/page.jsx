"use client";
import React, { useEffect } from 'react';
import DetailedTreatments from "./DetailedTreatments";

const page = ({ params }) => {
  const { url } = params;

  // ✅ Scroll reset fix
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <div className='lg:mt-35 mt-5'>
      <DetailedTreatments url={url} />
    </div>
  );
};

export default page;
