export default function CloseButton({ onClick }) {
  return (
    <button
      className="py-2 px-4 rounded-md bg-red-500 font-bold text-white cursor-pointer"
      onClick={onClick}
    >
      X
    </button>
  );
}
