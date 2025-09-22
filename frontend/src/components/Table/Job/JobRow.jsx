export default function JobRow({ job }) {
  return (
    <tr>
      <td>{job.company}</td>
      <td>{job.position}</td>
      <td>
        <a href={job.link} target="_blank" rel="noopener noreferrer">
          🌏︎
        </a>
      </td>
      <td>{job.date}</td>
      <td>{job.status}</td>
      <td>{job.notes}</td>
      <td>View Details</td>
    </tr>
  );
}
