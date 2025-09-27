import { getRowData } from "../tableData";

export default function JobRow({ job, removeJob, editJob, scanJob }) {
  return (
    <tr className="text-center p-5">
      {getRowData(job, removeJob, editJob, scanJob).map((row, index) => (
        <td key={index}>{row}</td>
      ))}
    </tr>
  );
}
