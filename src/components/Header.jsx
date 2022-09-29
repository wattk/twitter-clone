function Header({ children }) {
  return (
    <div className="fix-content bg-white h-20 top-0 shadow shadow-gray-100 flex items-center justify-between px-12 z-10">
      {children}
    </div>
  );
}

export default Header;
