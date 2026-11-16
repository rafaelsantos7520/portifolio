import { StackCard } from "./style";
import { IconType } from "react-icons/lib";

interface StackProps {
  title: string;
  icon: IconType;
}

export const Stack = ({ title, icon: Icon }: StackProps): JSX.Element => {
  return (
    <StackCard>
      <Icon size={22} aria-hidden="true" />
      {title}
    </StackCard>
  );
};
