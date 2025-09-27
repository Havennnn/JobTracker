import React from "react";
import CloseButton from "../buttons/CloseButton";

export default function JobViewModal({ job, onClose }) {
  if (!job) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-2xl">Job Details</h2>
          <CloseButton onClick={onClose} />
        </div>

        <div className="p-4 space-y-2">
          <p>
            <strong>Company:</strong> {job.company}
          </p>
          <p>
            <strong>Position:</strong> {job.position}
          </p>
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Link:</strong>{" "}
            {job.link ? (
              <a
                href={job.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {job.link}
              </a>
            ) : (
              "—"
            )}
          </p>
          <p>
            <strong>Date:</strong> {job.date}
          </p>
          <p>
            <strong>Status:</strong> {job.status}
          </p>
          <p>
            <strong>Notes:</strong> {job.notes}
          </p>
        </div>
      </div>
    </div>
  );
}
