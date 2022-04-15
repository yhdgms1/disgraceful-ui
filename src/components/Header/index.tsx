import { JSX, Component } from "solid-js";
import clsx from "clsx";
import * as styles from "./style.css";

type NativeAttrs = JSX.HTMLAttributes<HTMLElement>;

const Header: Component<NativeAttrs> = (props) => {
  return (
    <header {...props} class={clsx(styles.header, props.class)}>
      {props.children}
    </header>
  );
};

export { Header };
