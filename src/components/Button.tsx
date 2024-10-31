export default function Button({ children, disabled = false }) {
  return (
    <button
      disabled={disabled}
      className={`rounded px-4 py-2 font-bold text-white ${
        disabled
          ? 'cursor-not-allowed bg-gray-400'
          : 'bg-blue-500 hover:bg-blue-700'
      }`}
    >
      {children}
    </button>
  );
}
