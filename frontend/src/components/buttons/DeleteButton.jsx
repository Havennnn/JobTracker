import { FaTrash } from "react-icons/fa";

export default function DeleteButton({ onClick }) {
  return (
    <button
      className="bg-red-500 text-white rounded-lg cursor-pointer p-2"
      onClick={onClick}
    >
      <FaTrash />
    </button>
  );
}
