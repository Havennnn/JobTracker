import useJobs from "../../hooks/useJobs";
import JobTable from "../Table/JobTable";
import AddButton from "../buttons/AddButton";

export default function Jobs() {
  const { jobs, loading, error, addJob, removeJob, editJob, scanJob } =
    useJobs();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl mb-4 font-bold">Job Tracker</h1>
        <AddButton addJob={addJob}></AddButton>
      </div>
      <JobTable
        jobs={jobs}
        loading={loading}
        error={error}
        removeJob={removeJob}
        editJob={editJob}
        scanJob={scanJob}
      />
      <br />
    </div>
  );
}
