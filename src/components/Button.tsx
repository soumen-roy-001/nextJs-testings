import { ReactNode, MouseEvent } from "react";

type Props = {
  label: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ label, onClick }: Props) => {
  return (
    <button data-testid="btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
