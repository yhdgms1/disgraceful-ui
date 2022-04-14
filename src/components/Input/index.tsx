import { JSX, Component } from "solid-js";
import clsx from "clsx";
import * as styles from "./style.css";

type NativeAttrs = JSX.InputHTMLAttributes<HTMLInputElement>;

const Input: Component<NativeAttrs> = (props) => (
  <label class={styles.label}>
    <span class={styles.title}>{props.children}</span>
    <input {...props} class={clsx(styles.input, props.class)} />
  </label>
);

export { Input };
