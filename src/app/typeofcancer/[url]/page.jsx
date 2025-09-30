import DetailedType from "./DetailedType";

const Page = ({ params }) => {
  const { url } = params;
  return (
    <div className='lg:mt-35 mt-5'>
      <DetailedType url={url} />
    </div>
  )
};

export default Page;
