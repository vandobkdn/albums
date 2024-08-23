import { IconCustom } from './Icons.constant';

type Props = {
  icon: IconCustom;
  classNames?: string;
};

export const Icon = ({ icon: Icon, classNames }: Props) => {
  return (
    <span className={`hover:cursor-pointer ${classNames}`}>
      <Icon />
    </span>
  );
};
