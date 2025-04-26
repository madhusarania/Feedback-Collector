interface HeaderProps {
  showAdmin: boolean;
  toggleAdmin: () => void;
}

const Header = ({ showAdmin, toggleAdmin }: HeaderProps) => {
  return (
    <header className="py-6 px-4 border-b border-gray-200 bg-white">
      <div className="container flex items-center justify-between">
        <h1 className="text-xl font-bold text-purple-600">
          Feedback Collector
        </h1>

        <button
          onClick={toggleAdmin}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors
    ${
      showAdmin
        ? "bg-purple-600 text-white hover:bg-purple-700"
        : "border border-purple-600 text-purple-600 hover:bg-purple-50"
    }`}
        >
          {showAdmin ? "Submit Feedback" : "View Submitted Feedback"}
        </button>
      </div>
    </header>
  );
};

export default Header;
