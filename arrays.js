
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {

  return [element, ... array]

}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = array.unshift(element)
  return function() {
    return newArray
  }()

}
