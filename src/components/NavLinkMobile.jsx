import { Link, useLocation } from 'react-router-dom';

const NavLinkMobile = ({ path, text, handleClick }) => {
  const location = useLocation();

  return (
    <Link to={path}>
      <div className={`flex p-4 ${location.pathname === path && 'bg-[#3a3a43]'}`} onClick={handleClick}>
        <p className={`ml-[20px] font-semibold text-[14px] ${location.pathname === path ? 'text-[#1dc071]' : 'text-[#808191]'}`}>{text}</p>
      </div>
    </Link>
  );
};

export default NavLinkMobile;
