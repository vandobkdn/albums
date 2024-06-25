import { IconCustom } from './Icons.constant';

export function Icon({
  icon,
  classNames,
}: {
  icon: IconCustom;
  classNames?: string;
}) {
  const Icon = icon;
  return (
    <span className={`hover:cursor-pointer ${classNames}`}>
      <Icon />
    </span>
  );
}
