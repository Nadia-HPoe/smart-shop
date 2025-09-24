'use client';

import Image from "next/image";

type ButtonHeaderProps = {
  className?: string;
  onClick?: () => void;
};

const ButtonHeader: React.FC<ButtonHeaderProps> = ({className, onClick}) => {
  return (
    <button onClick={onClick}  className={className}>
      <Image
        src='/images/header/menu.svg'
        alt='Open navigation menu'
        width={40}
        height={40}
      />
    </button>
  )
}

export default ButtonHeader
