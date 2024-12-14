function Spinner({ className }: { className?: string }) {
  return (
    <div
      className={`flex h-[97vh] w-full items-center justify-center ${className}`}
    >
      <div className='box-border inline-block h-8 w-8 animate-spin rounded-full border-4 border-dark-900 border-b-transparent'></div>
    </div>
  );
}

export default Spinner;
