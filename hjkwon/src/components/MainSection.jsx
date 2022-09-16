function MainSection({ children, top, bottom }) {
  return (
    <div
      className="bg-white h-fit"
      style={{ marginTop: top, marginBottom: bottom }}
    >
      {children}
    </div>
  );
}

export default MainSection;
