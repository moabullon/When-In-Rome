function romanify(digits) {
    if (digits <= 3) {
        let numbers = new Array(digits)
        return numbers.fill("I").join('')
    } else if (digits == 4) {
        return "IV"
    } else if (digits <= 8) {
        return `V${romanify(digits -5)}`
    } else if (digits == 9) {
        return "IX"
    }
    var patterns = [
      {max: 39, prefix: 'X', pEq: 10},
      {max: 49, prefix: 'XL', pEq: 40},
      {max: 89, prefix: 'L', pEq: 50},
      {max: 99, prefix: 'XC', pEq: 90},
      {max: 399, prefix: 'C', pEq: 100},
      {max: 499, prefix: 'CD', pEq: 400},
      {max: 899, prefix: 'D', pEq: 500},
      {max: 999, prefix: 'CM', pEq: 900}
    ]
    var value
    for (let pattern of patterns) {
      if (digits <= pattern.max) {
        value = `${pattern.prefix}${romanify(digits - pattern.pEq)}`
        break
      }
    }
    return value || `M${romanify(digits -1000)}`
  }


module.exports = romanify
