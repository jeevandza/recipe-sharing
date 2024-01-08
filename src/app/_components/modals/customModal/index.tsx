type CustomModalI = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function CustomModal({
  isOpen,
  onClose,
  children,
}: CustomModalI) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full z-40 h-full py-8">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="z-10 w-full h-full mx-auto max-w-md rounded-md bg-white p-8">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-4 overflow-y-scroll w-full  h-full">{children}</div>
      </div>
    </div>
  );
}
