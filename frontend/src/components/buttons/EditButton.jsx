import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import JobModal from "../Modal/JobModal";

export default function EditButton({ job, editJob }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white text-center p-2 rounded-md cursor-pointer"
      >
        <FaEdit />
      </button>
      {showModal && (
        <JobModal
          job={job}
          onClose={() => setShowModal(false)}
          editJob={editJob}
        />
      )}
    </>
  );
}
