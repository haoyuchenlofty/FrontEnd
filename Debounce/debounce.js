function debounce(func, wait) {
    let timeout;
    // 返回了一个新的函数，这个函数是实际被调用的防抖函数
    return function(...args) {
        // 确保目标函数 func 在执行时能够访问到调用节流函数时的上下文
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}