export default function DeleteButton({ onClick }) {
  return (
    <button
      className="border border-black cursor-pointer px-4 py-2"
      onClick={onClick}
    >
      Delete
    </button>
  );
}
