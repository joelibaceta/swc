// @target: es5
// @downlevelIteration: true
function foo({}, { foo , bar  }) {}
function baz([], { foo , bar  }) {}
function one([], {}) {}
function two([], [a, b, c]) {}
