import useAuth from "../context/useAuth";
import EventCard from "../components/EventCard";

const StudentDashboard = () => {
  const { userData } = useAuth();

  const events = [
    {
      title: "Event 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: "Event 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: "Event 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title: "Event 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  return (
    <div className="pb-8 flex justify-between items-start relative">
      {/* Left Content */}
      <div className="w-2/3">
        <h1 className="text-5xl font-semibold mb-5">
          Hello, {userData?.name || "Student"}!
        </h1>
        <h2 className="text-4xl font-semibold mb-6">Choose Programme/Event</h2>

        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
