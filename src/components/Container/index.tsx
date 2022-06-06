import { JSX, Component, splitProps } from "solid-js";
import * as styles from "./style.css";

type NativeAttrs = JSX.HTMLAttributes<HTMLDivElement>;

interface Props extends NativeAttrs {
  independent?: boolean;
  responsive?: boolean;
  /**
   * Adds margin, centers text and increases font size
   */
  text?: boolean;
  block?: boolean;
}

const Container: Component<Props> = ($props) => {
  const [props, rest] = splitProps($props, [
    "block",
    "independent",
    "responsive",
    "text",
  ]);

  return (
    <div
      {...rest}
      classList={{
        [styles.container]: props.block,
        [styles.independent]: props.independent,
        [styles.responsive]: props.responsive,
        [styles.text]: props.text,
      }}
    >
      {rest.children}
    </div>
  );
};

export { Container, Props as ContainerProps };
