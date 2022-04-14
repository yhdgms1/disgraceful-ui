import { Component, JSX } from "solid-js";
import clsx from "clsx";
import * as styles from "./style.css";

type NativeAttrs = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: Component<NativeAttrs> = (props) => {
  return (
    <button type="button" {...props} class={clsx(styles.button, props.class)}>
      {props.children}
    </button>
  );
};

export { Button };
