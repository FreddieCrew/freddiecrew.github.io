
interface SkillCardProps {
    title: string;
  }
  
  const SkillCard: React.FC<SkillCardProps> = ({ title }) => {
    return (
      <div className="bg-gray-800 text-white p-2 m-1 rounded-md shadow-md flex items-center hover:ring-2 hover:ring-gray-700 transition duration-300 ease-in-out select-none cursor-default">
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>
    );
  };
  
  export default SkillCard;