import DetailedTreatments from "./DetailedTreatments";

const Page = ({ params }) => {
  const { url } = params;
  return (
    <div className='lg:mt-35 mt-5'>
      <DetailedTreatments url={url} />
    </div>
  )
};

export default Page;
