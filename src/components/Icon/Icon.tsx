import { View } from '../../primitives';
import { IconCustom } from './Icons.constant';

type Props = {
  icon: IconCustom;
  classNames?: string;
};

export const Icon = ({ icon: Icon, classNames }: Props) => {
  return (
    <View tag="span" className={`hover:cursor-pointer ${classNames}`}>
      <Icon />
    </View>
  );
};
