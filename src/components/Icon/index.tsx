import { JSX, Component } from "solid-js";

type NativeAttrs = JSX.SvgSVGAttributes<SVGSVGElement>;

const Icon: Component<NativeAttrs> = (props) => (
  <svg fill="none" viewBox="0 0 24 24" {...props}>
    {props.children}
  </svg>
);

export { Icon };
