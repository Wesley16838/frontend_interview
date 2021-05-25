function getByClassName(root, className) {
  const nodes = [];

  function traverse(node) {
    if (node.className.split(" ").indexOf(className) !== -1) {
      nodes.push(node);
    }
    for (let child of node.children) {
      traverse(child);
    }
  }

  traverse(root);

  return nodes;
}

// getByClassnameHierarchy
