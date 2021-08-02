import styles from "./style/index.less";
import React from "react";
import setClassNames from "classnames";

const InternalBox = (props, ref = React.createRef()) => {
  const { children, className, ...rest } = props;

  return (
    <label class={styles.ly_radio} ref={ref}>
      <input type="radio" name="color" value="red" />
      <span class={styles.ly_radio_label}>{children}</span>
    </label>
  );
};

const Radio = React.forwardRef(InternalBox);
Radio.displayName = "Radio";

export default Radio;
