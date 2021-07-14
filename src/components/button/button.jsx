import React from "react";
import setClassNames from "classnames";
import { getPrefixCls } from "../../utils/context";
import "./style/index.css";

const InternalButton = (props, ref = React.createRef()) => {
  const {
    icon,
    type = "default",
    size = "default",
    loading = false,
    disabled = false,
    htmlType = "button",
    children,
    className,
    prefixCls: customizePrefixCls,
    ...rest
  } = props;

  const handleClick = (e) => {
    const { onClick, disabled } = props;
    if (loading || disabled) return e.preventDefault();
    onClick?.(e);
  };

  const prefixCls = getPrefixCls("btn", customizePrefixCls);
  const classes = setClassNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-loading`]: loading,
    },
    className
  );

  // 加载图标
  const LoadingIcon = <span>加载中</span>;

  return (
    <button
      ref={ref}
      type={htmlType}
      onClick={handleClick}
      disabled={loading}
      className={classes}
    >
      {loading && LoadingIcon}
      {children}
    </button>
  );
};
const Button = React.forwardRef(InternalButton);
Button.displayName = "Button";

export default Button;
