type ModalProps = {
  title: string;
  description: string;
  onClose: () => void;
};

const WithdrawModal = ({ title, description, onClose }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose} // Close the modal when clicking outside
    >
      {/* Background with opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        className="relative bg-modal-gray  rounded-lg shadow-lg p-6 w-[383px] h-[402px] max-w-md mx-4 border-black-4 border-[1px] flex flex-col items-center justify-start"
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
      
      <div className="flex w-full justify-center gap-2">
        <button
          onClick={onClose}
          className="w-full bg-black-4 rounded-xl w-[163px] h-[48px]"
        >
          test
        </button>
          <button
          onClick={onClose}
           className="w-full bg-black-4 rounded-xl w-[163px] h-[48px]"
        >
          test
        </button>
        </div>
 
      </div>
    </div>
  );
};

export default WithdrawModal;
