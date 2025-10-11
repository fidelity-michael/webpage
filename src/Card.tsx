interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ icon, title, desc }) => {
  return (
    <div
      className="bg-gray-50 p-8 rounded-lg shadow-sm card-hover transition duration-300"
      data-aos="fade-up"
    >
      <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
        <div className="h-8 w-8 text-indigo-600">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{desc}</p>
    </div>
  );
};

export default Card;
