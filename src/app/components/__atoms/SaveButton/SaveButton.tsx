
interface SaveButtonProps {
  onClick: () => void;
}
const SaveButton: React.FC<SaveButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="rounded-[30px] w-full p-[10px] bg-[#0a66c2] text-white cursor-pointer">
     Continue
    </button>
  );
};

export default SaveButton;
