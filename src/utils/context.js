export function getPrefixCls(suffixCls, customizePrefixCls) {
    // 返回自定义前缀
    if (customizePrefixCls) return customizePrefixCls;

    // 返回默认前缀
    return suffixCls ? `ly-${suffixCls}` : 'ly';
}