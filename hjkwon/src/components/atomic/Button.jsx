import CustomIcon from "../icons/CustomIcon";

function Button({ children, customStyle, event, fill, btn, path }) {
  return (
    <>
      <label
        htmlFor={btn}
        className="flex cursor-pointer items-center justify-between w-12"
        onClick={event}
      >
        <CustomIcon fill={fill} customStyle={customStyle} path={path} />

        {children}
      </label>
      <input id={btn} type="button" className="text-gray-500 text-sm" />
    </>
  );
}

export default Button;
