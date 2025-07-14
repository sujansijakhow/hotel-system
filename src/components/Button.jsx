import { Link } from "react-router-dom";

const Button = ({
  name,
  height = 40,
  width = 120,
  to
}) => {
  return (
    <Link to={to}>
      <button
        style={{ height: `${height}px`, width: `${width}px` }}
        className="bg-primary rounded-md font-medium text-white text-[14px] border p-1"
      >
        {name}
      </button>
    </Link>
  );
};

export default Button;      