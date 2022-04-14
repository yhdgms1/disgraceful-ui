import { JSX, Component } from "solid-js";
import { Icon } from "..";
import { ArrowDown } from "../../icons";
import clsx from "clsx";
import * as styles from "./style.css";

type NativeAttrs = JSX.SelectHTMLAttributes<HTMLSelectElement>;

const Select: Component<NativeAttrs> = (props) => (
  <label class={styles.label}>
    <span class={styles.title}>{props.title}</span>
    <select {...props} class={clsx(styles.select, props.class)}>
      {props.children}
    </select>
    <Icon class={styles.icon} aria-hidden={true}>
      <ArrowDown />
    </Icon>
  </label>
);

export { Select };
