import React from 'react';
import './button.style.scss';

type ButtonProps = {
  labelText: string;
  secundary?: boolean;
  onClickEvent?: () => void;
};

const Button = ({
  labelText,
  secundary = false,
  onClickEvent = () => {},
}: ButtonProps) => (
  <div>
    <button
      type='button'
      onClick={onClickEvent}
      className={`button pa1 br3 ${secundary ? 'secundary' : 'primary'}`}
    >
      {labelText}
    </button>
  </div>
);

export default Button;
export type { ButtonProps };
