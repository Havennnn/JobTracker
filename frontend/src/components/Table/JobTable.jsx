import JobRow from "../Table/Job/JobRow";

export default function JobTable({ jobs, loading, error }) {
  return (
    <table
      border="1"
      cellPadding="8"
      style={{ borderCollapse: "collapse", width: "100%" }}
    >
      <thead>
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Link</th>
          <th>Date</th>
          <th>Status</th>
          <th>Notes</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <JobRow key={job.id} job={job} />
        ))}
      </tbody>
    </table>
  );
}
