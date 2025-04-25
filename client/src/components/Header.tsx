import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-bold text-gray-800">Feedback System</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-blue-600 hover:text-blue-800">Submit Feedback</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;