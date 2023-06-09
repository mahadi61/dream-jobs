import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../../public/fakedb";

const JobDetails = () => {
  const { jobId } = useParams();
  const jobData = useLoaderData();
  const job = jobData.find((job) => job.id === Number(jobId));

  const handleApply = (job) => {
    addToDb(job.id);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-between items-center  relative -mt-28 -z-10">
          <img
            className=" bottom-0 left-0"
            src="https://i.ibb.co/K60bF50/Vector.png"
            alt=""
          />
          <h2 className="mb-5 text-3xl text-center font-bold">Job Details</h2>
          <img
            className="top-0 right-0"
            src="https://i.ibb.co/Tt8BFYN/Vector-1.png"
            alt=""
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-6	mt-10">
        <div>
          <p className="text-xl font-bold text-gray-600 mb-5">
            <span className="text-xl text-black">Job Description: </span>
            {job.jobDescription}
          </p>
          <p className="text-xl font-bold text-gray-600 mb-5">
            <span className="text-xl text-black">Job Responsibility: </span>
            {job.jobResponsibility}
          </p>
          <p className="text-xl font-bold text-gray-600 mb-5">
            <span className="text-xl text-black">
              Educational Requirements:{" "}
            </span>
            {job.educationalRequirements}
          </p>
          <p className="text-xl font-bold text-gray-600 mb-5">
            <span className="text-xl text-black">Experiences: </span>
            {job.experience}
          </p>
        </div>

        <div className="">
          <div className="bg-gray-300 rounded-lg p-14">
            <h2 className="mb-5 text-xl font-bold">Job Details</h2>
            <hr className="border-black" />
            <p className="flex mt-6">
              {" "}
              <img
                src="https://i.ibb.co/5rV8xQC/Frame.png"
                alt=""
              /> Salary: {job.salary}
            </p>
            <p className="flex">
              {" "}
              <img src="https://i.ibb.co/SwzBT51/Frame-1.png" alt="" /> Job
              Title : {job.jobTitle}
            </p>
            <h2 className="my-5 text-xl font-bold">Contact Information</h2>
            <hr className="border-black" />
            <p className="mt-6 flex">
              {" "}
              <img
                src="https://i.ibb.co/vzwwVN2/Frame-2.png"
                alt=""
              /> Phone: {job.phoneNumber}{" "}
            </p>
            <p className="flex">
              {" "}
              <img
                src="https://i.ibb.co/TbRXDPn/Frame-3.png"
                alt=""
              /> Email: {job.email}
            </p>
            <p className="flex">
              <img src="https://i.ibb.co/cLXSpS9/Frame-4.png" alt="" /> Address:{" "}
              {job.location}{" "}
            </p>
          </div>
          <button
            onClick={() => handleApply(job)}
            className="primary-btn  px-4 py-3 font-bold	rounded-lg text-xl text-white mt-6 w-full"
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
