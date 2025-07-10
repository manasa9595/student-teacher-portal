const EventCard = ({ title, description }) => {
  return (
    <div className="flex items-start justify-between py-6 border-b border-gray-200">
      <div className="flex items-start gap-3">
        <img
          src="https://i.pravatar.cc/40" // or a static avatar
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <div>
          <h3 className="font-medium mb-2 text-gray-800">{title}</h3>
          <p className="text-sm text-gray-400 ">{description}</p>
        </div>
      </div>
      <a href="#" className="text-blue-400 text-sm hover:underline self-center">
        View
      </a>
    </div>
  );
};

export default EventCard;
