// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (min && node.data <= min.data) return false
  if (max && node.data >= max.data) return false
  
  const { left, right } = node
  if (left && !validate(left, min, node)) return false
  if (right && !validate(right, node, max)) return false

  return true
}

module.exports = validate;
