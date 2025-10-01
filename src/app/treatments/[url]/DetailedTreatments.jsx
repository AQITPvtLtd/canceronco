"use client";
import { tr } from '@/services/tr';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Query from '@/app/query/Query';
import Testimonials from '@/app/testimonialss/Testimonialss';

const DetailedTreatments = ({ url }) => {
  const [treatment, setTreatment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [treatments, setTreatments] = useState([]);

  // Fetch treatment data
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const result = await tr();
        const fetched = result.result || result;
        setTreatments(fetched);
        const foundTreatment = fetched.find((tr) => tr.url === url);
        setTreatment(foundTreatment);
      } catch (error) {
        console.error("Error fetching treatment:", error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  // Update browser tab title dynamically
  useEffect(() => {
    if (treatment) {
      document.title = treatment.meta_title || treatment.title || "Treatment";
    }
  }, [treatment]);

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (!treatment) {
    return <p className="text-center py-10">Treatment not found.</p>;
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{treatment.meta_title || treatment.title}</title>
      </Head>

      <section className="overflow-hidden pt-10 lg:px-14 px-3 bg-white">
        <div className="container dark:text-black">
          <div className="flex flex-wrap lg:flex-nowrap -mx-4">

            {/* Blog Content */}
            <div className="w-full lg:w-3/4 px-4">
              <article>
                <div>
                  <div className="w-full overflow-hidden rounded mb-6">
                    <Image
                      src={treatment.image?.startsWith('http') ? treatment.image : `/services/${treatment.image}`}
                      alt={treatment.title || "Treatment image"}
                      height={500}
                      width={800}
                      className="h-full w-full object-cover object-center"
                      priority
                    />
                  </div>
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight">
                    {treatment.title}
                  </h1>
                  <div
                    className="p-5 lg:text-justify"
                    dangerouslySetInnerHTML={{ __html: treatment.content }}
                  />
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/4 px-4 mt-10 lg:mt-0 space-y-6">
              {/* Treatments Links Section */}
              <div className="bg-blue-600 text-white rounded-md shadow-md overflow-hidden">
                <h2 className="bg-blue-700 text-center py-3 font-bold">Treatments</h2>
                <ul className="divide-y divide-blue-500">
                  {treatments.map((t) => (
                    <li key={t.id} className="hover:bg-blue-500 transition">
                      <Link
                        href={`${t.url}`}
                        className="block px-4 py-3"
                      >
                        {t.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Raise Query Form */}
              <Query />

              {/* Brain Cancer Image */}
              <div>
                <Image
                  src="/sidebar/adss.webp"
                  alt="Brain Cancer Info"
                  width={400}
                  height={400}
                  className="w-full rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Section */}
        <section className="w-full bg-gray-50 flex flex-col md:flex-row items-center md:items-start md:justify-start p-6 md:p-10">
          {/* Doctor Image */}
          <div className="flex-shrink-0 md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
            <div className="border-2 border-cyan-400 p-1">
              <Image
                src="/about/dr-sajjan1.jpg"
                alt="Dr. Sajjan Rajpurohit"
                width={300}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Doctor Info */}
          <div className="md:w-2/3 md:pl-8 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-black">
              About Dr. Sajjan Rajpurohit
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dr. Sajjan Rajpurohit has been a practicing physician for the past 22 years.
              He is a qualified MBBS with MD in Medicine and DNB in Medical Oncology
              and currently he is Director of Medical Oncology at BLK Super Speciality Hospital.
            </p>

            <Link href="/second">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold">
                GET SECOND OPINION
              </button>
            </Link>
          </div>
        </section>

        <Testimonials />
      </section>
    </>
  );
};

export default DetailedTreatments;
