function throttle(func ,wait) {
    let lastTime = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            lastTime = now;
            // 确保目标函数 func 在执行时能够访问到调用节流函数时的上下文
            func.apply(this, args)
        }
    }
}