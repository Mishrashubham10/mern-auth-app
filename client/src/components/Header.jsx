import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-slate-200">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-3">
        <h1 className="font-bold">
            <Link to="/">Auth App</Link>
        </h1>
        <ul className="flex items-center gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/sign-in">Signin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
