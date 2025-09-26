import useJobs from "../../hooks/useJobs";
import JobTable from "../Table/JobTable";

export default function Jobs() {
  const { jobs, loading, error, addJob, removeJob } = useJobs();

  return (
    <div>
      <JobTable
        jobs={jobs}
        loading={loading}
        error={error}
        removeJob={removeJob}
      />
      <br />
      <button
        className="border border-black cursor-pointer"
        onClick={() =>
          addJob({
            company: "New Co",
            position: "Developer",
            location: "Taytay",
            link: "https://testing.com",
            date: "2025-09-22",
            status: "Applied",
            notes: "Test note",
          })
        }
      >
        Add Job
      </button>
    </div>
  );
}
