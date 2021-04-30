# The three phases are: Mounting, Updating, and Unmounting.

1. Mounting
   - constructor()
   - getDerivedStateFromProps()
   - render()
   - componentDidMount()
2. Updating
   <!-- - getDerivedStateFromProps() -->
   - shouldComponentUpdate()
   - render()
   <!-- - getSnapshotBeforeUpdate() -->
   - componentDidUpdate()
3. Unmounting
   - componentWillUnmount()
