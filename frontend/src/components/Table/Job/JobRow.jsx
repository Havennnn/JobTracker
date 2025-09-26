import DeleteButton from "../../buttons/DeleteButton";

export default function JobRow({ job, removeJob }) {
  return (
    <tr>
      <td>{job.company}</td>
      <td>{job.position}</td>
      <td>{job.location}</td>
      <td>
        <a href={job.link} target="_blank" rel="noopener noreferrer">
          🌏︎
        </a>
      </td>
      <td>{job.date}</td>
      <td>{job.status}</td>
      <td>
        <DeleteButton onClick={() => removeJob(job.id)} />
      </td>
    </tr>
  );
}
