import { JSX, Component } from "solid-js";
import clsx from "clsx";
import * as styles from "./style.css";

type NativeAttrs = JSX.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: Component<NativeAttrs> = (props) => {
  return <textarea class={clsx(styles.textarea, props.class)} {...props} />;
};

export { Textarea };
