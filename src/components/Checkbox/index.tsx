import { JSX, Component, createUniqueId } from "solid-js";
import * as styles from "./style.css";

type NativeAttrs = JSX.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: Component<NativeAttrs> = (props) => {
  const _id = createUniqueId();
  const id = () => props.id ?? _id;

  return (
    <div class={styles.checkbox}>
      <input type="checkbox" {...props} class={styles.input} id={id()} />
      <label class={styles.label} for={id()}>
        {props.children}
      </label>
    </div>
  );
};

export { Checkbox };
