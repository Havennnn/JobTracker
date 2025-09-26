import JobRow from "../Table/Job/JobRow";
import { headsData } from "./tableData";

export default function JobTable({ jobs, loading, error, removeJob }) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {headsData.map((head, index) => (
            <td
              key={index}
              className="font-bold border border-black px-6 py-2 text-center"
            >
              {head}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <JobRow key={job.id} job={job} removeJob={removeJob} />
        ))}
      </tbody>
    </table>
  );
}
