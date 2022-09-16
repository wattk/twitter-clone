function Button({ children, customStyle, event, fill, btn, path }) {
  return (
    <>
      <label
        htmlFor={btn}
        className="flex cursor-pointer items-center justify-between w-12"
        onClick={event}
      >
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

        {children}
      </label>
      <input id={btn} type="button" className="text-gray-500 text-sm" />
    </>
  );
}

export default Button;
