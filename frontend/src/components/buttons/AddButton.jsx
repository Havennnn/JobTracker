import { useState } from "react";
import JobModal from "../Modal/JobModal";

export default function AddButton({ addJob }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="py-2 px-4 bg-green-500 rounded-md text-white cursor-pointer"
      >
        Add Job
      </button>
      {showModal && (
        <JobModal onClose={() => setShowModal(false)} addJob={addJob} />
      )}
    </>
  );
}
