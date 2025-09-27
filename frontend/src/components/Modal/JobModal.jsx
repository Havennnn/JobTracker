import CloseButton from "../buttons/CloseButton";
import { useState, useEffect } from "react";

export default function JobModal({ job, addJob, editJob, onClose }) {
  const [form, setForm] = useState({
    company: "",
    position: "",
    location: "",
    link: "",
    date: "",
    status: "",
    notes: "",
  });

  useEffect(() => {
    if (job) setForm(job);
  }, [job]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (job && editJob) {
      editJob(job.id, form);
    } else {
      addJob(form);
    }
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-opacity-40 flex items-center justify-center z-50 rounded-lg">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold text-2xl">Add a new Job</h2>
          <CloseButton onClick={onClose} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-2 p-4">
          <div className="flex flex-col">
            <label htmlFor="company" className="mb-1 font-medium">
              Company
            </label>
            <input
              name="company"
              value={form.company}
              id="company"
              type="text"
              placeholder="Company"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="position" className="mb-1 font-medium">
              Position
            </label>
            <input
              name="position"
              value={form.position}
              id="position"
              type="text"
              placeholder="Position"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="location" className="mb-1 font-medium">
              Location
            </label>
            <input
              name="location"
              value={form.location}
              id="location"
              type="text"
              placeholder="Location"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="link" className="mb-1 font-medium">
              Link
            </label>
            <input
              name="link"
              value={form.link}
              id="link"
              type="url"
              placeholder="Link"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date" className="mb-1 font-medium">
              Date
            </label>
            <input
              name="date"
              value={form.date}
              id="date"
              type="date"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="status" className="mb-1 font-medium">
              Status
            </label>
            <input
              name="status"
              value={form.status}
              id="status"
              type="text"
              placeholder="Status"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="notes" className="mb-1 font-medium">
              Notes
            </label>
            <textarea
              name="notes"
              value={form.notes}
              id="notes"
              placeholder="Notes"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
            >
              {job ? "Update Job" : "Add Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
