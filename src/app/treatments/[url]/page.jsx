"use client";
import React, { useEffect, use } from "react";
import DetailedTreatments from "./DetailedTreatments";

const Page = ({ params }) => {
  // ✅ unwrap params with React.use()
  const { url } = use(params);

  // ✅ Scroll reset fix
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <div className="lg:mt-35 mt-10">
      <DetailedTreatments url={url} />
    </div>
  );
};

export default Page;
