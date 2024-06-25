import { IconCustom } from './Icons.constant';

export function Icon({ icon }: { icon: IconCustom }) {
  const Icon = icon;
  return (
    <span className={''}>
      <Icon />
    </span>
  );
}
