import { JSX, Component } from "solid-js";
import { splitProps } from "solid-js";
import clsx from "clsx";
import * as styles from "./style.css";

type NativeAttrs = JSX.HTMLAttributes<HTMLParagraphElement>;

interface Props extends NativeAttrs {
  margin?: boolean;
}

const Paragraph: Component<Props> = (props) => {
  const [local, rest] = splitProps(props, ["margin", "class"]);

  return (
    <p
      {...rest}
      class={clsx(styles.text, local.margin && styles.margin, local.class)}
    />
  );
};

export { Paragraph, Props as ParagraphProps };
