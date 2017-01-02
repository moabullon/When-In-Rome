let assert = require('assert')
let romanify = require('../js/roman')

// make a converter to turn numbers into Roman numerals
//like 1 => "I"
// 2 => "II"
// 3 => "III"
// looks like mu inputs are alwaus one number at a time
// and the output is a string

describe('Roman numeral converter', function () {
 it('converts 1 to I', function () {
   let result = romanify(1)
   assert.equal(result, "I")
 })
 it('converts 2 to II', function () {
   let result = romanify(2)
   assert.equal(result, "II")
 })
 it('converts  to III', function () {
   let result = romanify(3)
   assert.equal(result, "III")
 })
 it('converts  to IV', function () {
   let result = romanify(4)
   assert.equal(result, "IV")
 })
 it('converts  to V', function () {
   let result = romanify(5)
   assert.equal(result, "V")
 })
 it('converts  to VI', function () {
   let result = romanify(6)
   assert.equal(result, "VI")
 })
 it('converts  to VII', function () {
   let result = romanify(7)
   assert.equal(result, "VII")
 })
 it('converts  to VIII', function () {
   let result = romanify(8)
   assert.equal(result, "VIII")
 })
 it('converts  to IX', function () {
   let result = romanify(9)
   assert.equal(result, "IX")
 })
 it('converts  to X', function () {
   let result = romanify(10)
   assert.equal(result, "X")
 })
 it('converts  to XIV', function () {
   let result = romanify(14)
   assert.equal(result, "XIV")
 })
 it('converts  to XX', function () {
   let result = romanify(20)
   assert.equal(result, "XX")
 })
 it('converts  to XXI', function () {
   let result = romanify(21)
   assert.equal(result, "XXI")
 })
 it('converts  to XXXI', function () {
   let result = romanify(31)
   assert.equal(result, "XXXI")
 })
 it('converts  to XXXIX', function () {
   let result = romanify(39)
   assert.equal(result, "XXXIX")
 })
 it('converts  to LVII', function () {
   let result = romanify(57)
   assert.equal(result, "LVII")
 })
 it('converts  to LXXXIX', function () {
   let result = romanify(89)
   assert.equal(result, "LXXXIX")
 })
 it('converts  to XCIII', function () {
   let result = romanify(93)
   assert.equal(result, "XCIII")
 })
 it('converts  to MMXVII', function () {
   let result = romanify(2017)
   assert.equal(result, "MMXVII")
 })

 describe('when input is a string', function () {
   it('converts "1" to "I"', function () {
     let result = romanify("1")
     assert.equal(result, "I")
   })
 })
})
