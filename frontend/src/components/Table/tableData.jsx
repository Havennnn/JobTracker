export const headsData = [
  "Company",
  "Position",
  "Location",
  "Link",
  "Date",
  "Status",
  "Action",
];

export function getRowData(job) {
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
    "View Details",
  ];
}
