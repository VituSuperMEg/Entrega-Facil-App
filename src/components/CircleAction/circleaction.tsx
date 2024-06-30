import { ReactNode } from "react";
import { CircleActionStyles } from "./styles";

type CircleActionProps = {
  icon: ReactNode;
  fn?: () => void;
};
export function CircleAction({ icon, fn }: CircleActionProps) {
  return (
    <CircleActionStyles onPress={() => (fn ? fn() : "")}>
      {icon}
    </CircleActionStyles>
  );
}
