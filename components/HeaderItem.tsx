import React from 'react';

interface HeaderItemProps {
  title: string;
  Icon: any;
}

const HeaderItem: React.FC<HeaderItemProps> = (props) => {
  const { title, Icon } = props;

  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Icon className="icon-element h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
