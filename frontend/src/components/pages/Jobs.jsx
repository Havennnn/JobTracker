import useJobs from "../../hooks/useJobs";
import JobTable from "../Table/JobTable";

export default function Jobs() {
  const { jobs, loading, error, addJob } = useJobs();

  return (
    <div>
      <JobTable jobs={jobs} loading={loading} error={error} />
      <br />
      <button
        onClick={() =>
          addJob({
            company: "New Co",
            position: "Developer",
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
