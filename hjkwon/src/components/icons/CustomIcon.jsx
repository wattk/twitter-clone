function CustomIcon({ fill, customStyle, path }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={customStyle}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </svg>
    </>
  );
}

export default CustomIcon;
