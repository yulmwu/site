import Text from './Text';
import Button from './Button';
import Center from './Center';

export default interface PropsBase {
    children: React.ReactNode;
    className: string;
}

export { Text, Button, Center };
