import "./style/index.css";
import React from "react";
import setClassNames from "classnames";
import { getPrefixCls } from "@/utils/context";
import { LY_BUTTON_SIZE, LY_BUTTON_TYPE } from "@/utils/constant.js";
import LoadingIcon from "./LoadingIcon.tsx";

function getButtonType(type, decorate) {
  const hasType = LY_BUTTON_TYPE.includes(type);
  // 不存在该类型的按钮
  if (!hasType) return false;
  if (!decorate) return type;
  return `${type}-${decorate}`;
}

function getSizeClassName(size) {
  return !!LY_BUTTON_SIZE.includes(size);
}

const InternalButton = (props, ref = React.createRef()) => {
  const {
    icon,
    type = "default",
    size = "medium",
    loading = false,
    decorate,
    disabled = false,
    htmlType = "button",
    children,
    className,
    ...rest
  } = props;

  const handleClick = (e) => {
    const { onClick, disabled } = props;
    if (loading || disabled) return e.preventDefault();
    onClick?.(e);
  };

  const tempType = getButtonType(type, decorate);
  const prefixCls = getPrefixCls("btn");
  const customizeClasss = setClassNames(
    prefixCls,
    {
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-${size}`]: getSizeClassName(size),
      [`${prefixCls}-${tempType}`]: tempType,
    },
    className
  );

  return (
    <button
      ref={ref}
      type={htmlType}
      onClick={handleClick}
      disabled={loading}
      className={customizeClasss}
    >
      {loading && (
        <LoadingIcon
          existIcon={!!icon}
          prefixCls={prefixCls}
          loading={loading}
        />
      )}
      {children}
    </button>
  );
};
const Button = React.forwardRef(InternalButton);
Button.displayName = "Button";

export default Button;
