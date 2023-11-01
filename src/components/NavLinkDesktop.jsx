import { Link, useLocation } from 'react-router-dom';

const NavLinkDesktop = ({ path, text }) => {
  const location = useLocation();

  return (
    <Link to={path}>
      <div className={`${location.pathname === path ? 'text-white border-b-2 border-white' : 'text-gray-400'} text-base leading-6 self-stretch items-center bg-zinc-950 max-w-full px-4 py-2`}>
        {text}
      </div>
    </Link>
  );
};

export default NavLinkDesktop;
