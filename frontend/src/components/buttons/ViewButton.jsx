import { useState } from "react";
import JobViewModal from "../Modal/JobViewModal";
import { FaEye } from "react-icons/fa";

export default function ViewButton({ job }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-500 text-white text-center p-2 rounded-md cursor-pointer"
      >
        <FaEye />
      </button>
      {showModal && (
        <JobViewModal job={job} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
