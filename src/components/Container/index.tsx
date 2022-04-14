import { Component } from "solid-js";
import clsx from "clsx";
import * as styles from "./style.css";

interface Props {
  independent?: boolean;
  responsive?: boolean;
  /**
   * Adds margin, centers text and increases font size
   */
  text?: boolean;
  block?: boolean;
  class?: string;
}

const Container: Component<Props> = (props) => {
  return (
    <div
      class={clsx(props.block && styles.container, props.class)}
      classList={{
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
