// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   let prev = 0
//   let cur = 1
//   let entry
  
//   while (--n > 0) {
//     entry = prev + cur
//     prev = cur
//     cur = entry
//   }
  
//   return cur
// }

// function fib(n) {
//   let result = [0, 1]

//   // if n === 1, for loop never executes
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1]
//     const b = result[i - 2]
//     result.push(a + b)
//   }

//   return result.pop()
// }

// fib(0)
//   -> 0
// fib(1)
//   -> 1
// fib(2)
//   -> fib(1) + fib(0)
//   -> 1 + 0
//   -> 1
// fib(3)
//   -> fib(2) + fib(1)
//   -> fib(1) + fib(0) + 1
//   -> 1 + 1
//   -> 2
// fib(4)
//   -> fib(3) + fib(2)
//   -> fib(2) + fib(1) + fib(1) + fib(0)
//   -> fib(1) + fib(0) + 1 + 1 + 0
//   -> 1 + 0 + 1 + 1 + 0
//   -> 3

// // O(2^n) exponential complexity: (2^n-1 + 2^n-2)
// // (because it doubles for every increment of n)
// function fib(n) {
//   if (n <= 1) return n
//   return fib(n - 1) + fib(n - 2)
// }

// // memoize
// const memoize = (expensiveFn) => {
//   // const cache = {}
//   // return (...args) => {
//   //   if (cache[args]) return cache[args]
//   //   const result = expensiveFn(...args)
//   //   cache[args] = result
//   //   return result
//   // }
// }

// // stringify non-primitive types to avoid key collision, i.e. `[object Object]`
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// const primitiveTypes = ['number', 'string', 'boolean']

// const computeKey = (args = []) => {
//   let hash = ''
//   for (let i = 0; i < args.length; i++) {
//     const arg = args[i], type = typeof arg
//     hash += (!arg || primitiveTypes.includes(type)) ? arg : JSON.stringify(arg)
//   }
//   return hash
// }

// const memoize = (fn) => {
//   const cache = {}

//   return (...args) => {
//     const key = computeKey(args)
//     // if key is in cache, return cached previous result
//     if (cache.hasOwnProperty(key)) return cache[key]
//     // otherwise perform expensive function, cache result and return
//     return cache[key] = fn(...args)
//   }
// }

const value = Symbol('value')

const retrieve = (node, path) => {
  for (let i = 0; i < path.length; i++) {
    const key = path[i]
    if (node.has(key)) {
      node = node.get(key)
    } else {
      const child = new Map()
      node.set(key, child)
      node = child
    }
  }
  return node
}

const memoize = (fn) => {
  let cache = new Map()
  let size = 0

  function memoized (...args) {
    const node = retrieve(cache, args)
    // if key is in cache, return cached previous result
    if (node.has(value)) return node.get(value)
    // otherwise perform expensive function, cache result and return
    const result = fn.apply(this, args)
    node.set(value, result)
    return result
  }
  // expose cache (e.g. to allow manual clearing)
  Object.defineProperty(memoized, "cache", {
    get: () => cache,
  })
  return memoized
}

const fib = memoize((n) => {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
})

// // with memoization
// function fib(n, cache = {}) {
//   if (n <= 1) return n
//   if (!cache[n]) {
//     cache[n] = fib(n - 1, cache) + fib(n - 2, cache)
//   }
//   return cache[n]
// }

// fastest
// function fib(n, prev = 0, cur = 1) {
//   if (n === 0) return prev
//   if (n === 1) return cur

//   return fib(n - 1, cur, prev + cur)
// }

module.exports = fib;
