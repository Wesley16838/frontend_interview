# State Update is Async

> React may batch multiple setState() calls into a single update for performance. This means that accessing the state immediately after call setState can possibly return the old value. The purpose is to avoid performance issue related to re-render
> Ex. if we only call setState, it will immediately update state, but if we put setState in Event Handler such as onClick, onChange, it will only be execute one time

- Using updater function could get old state value [Counter](https://codesandbox.io/s/counter-ub21y)

# Why use bind in React
