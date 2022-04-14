import { Component } from "solid-js";
import { Dynamic } from "solid-js/web";
import clsx from "clsx";
import * as styles from "./style.css";

interface Props {
  as: "h1" | "h2";
  class?: string;
}

const Heading: Component<Props> = (props) => {
  const className = () => clsx(styles[props.as], props.class);

  return (
    <Dynamic component={props.as} class={className()}>
      {props.children}
    </Dynamic>
  );
};

export { Heading, Props as HeadingProps };
