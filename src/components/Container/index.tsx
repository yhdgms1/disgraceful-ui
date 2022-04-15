import { JSX, Component } from "solid-js";
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

const Container: Component<Props> = (props) => {
  return (
    <div
      {...props}
      classList={{
        [styles.container]: props.block,
        [styles.independent]: props.independent,
        [styles.responsive]: props.responsive,
        [styles.text]: props.text,
      }}
    >
      {props.children}
    </div>
  );
};

export { Container, Props as ContainerProps };
