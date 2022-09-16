function MainSection({ children, top, bottom }) {
  return (
    <div
      className="bg-white h-fit"
      style={{ "margin-top": top, "margin-bottom": bottom }}
    >
      {children}
    </div>
  );
}

export default MainSection;
