export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-700 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">Student Portal</h2>
      <nav className="space-y-4">
        <a href="#" className="block hover:underline">
          Dashboard
        </a>
        <a href="#" className="block hover:underline">
          Assignments
        </a>
        <a href="#" className="block hover:underline">
          Grades
        </a>
      </nav>
    </aside>
  );
}
