import DeleteButton from "../buttons/DeleteButton";
import EditButton from "../buttons/EditButton";
import ViewButton from "../buttons/ViewButton";

export const headsData = [
  "Company",
  "Position",
  "Location",
  "Link",
  "Date",
  "Status",
  "Action",
];

export function getRowData(job, removeJob, editJob, scanJob) {
  return [
    job.company,
    job.position,
    job.location,
    job.link ? (
      <a href={job.link} target="_blank" rel="noopener noreferrer">
        🌏︎
      </a>
    ) : (
      "—"
    ),
    job.date,
    job.status,
    <div className="space-x-1">
      <ViewButton job={job} scanJob={scanJob} />
      <EditButton job={job} editJob={editJob} />
      <DeleteButton onClick={() => removeJob(job.id)} />
    </div>,
  ];
}
