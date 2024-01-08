import CustomModal from "../customModal";

type FormModalI = {
  children: React.ReactNode;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  handleCustomSubmit: () => void;
  formTitle:string;
};

export default function FormModal({
  children,
  isModalOpen,
  setIsModalOpen,
  formTitle,
}: FormModalI) {
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCustomSubmit = () => {
    closeModal();
  };

  return (
    <CustomModal isOpen={isModalOpen} onClose={closeModal}>
      <form onSubmit={handleCustomSubmit}>
        <h2 className="mb-4 text-xl font-semibold">{formTitle}</h2>
        {children}
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
          <button
            onClick={closeModal}
            className="ml-2 rounded-md border border-gray-300 px-4 py-2 text-gray-600 transition duration-300 hover:bg-gray-100 focus:border-blue-500 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </form>
    </CustomModal>
  );
}
