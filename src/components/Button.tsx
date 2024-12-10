export default function Button({ children, disabled = false }) {
  return (
    <button
      disabled={disabled}
      className={`px-4 py-2 text-sm font-normal uppercase text-white transition ${
        disabled
          ? 'cursor-not-allowed bg-gray-400'
          : 'bg-blue-500 hover:bg-blue-700 hover:shadow-sm'
      }`}
    >
      {children}
    </button>
  );
}
