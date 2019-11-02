const number_of_spaces = 2

var range = $editor.selectedRange
while (!$editor.selectedText.startsWith("\n")) {
  range.location = range.location - 1
  range.length = range.length + 1
  $editor.selectedRange = range
}
range.location = range.location + 1
range.length = range.length - 1
$editor.selectedRange = range
while (!$editor.selectedText.endsWith("\n")) {
  range.length = range.length + 1
  $editor.selectedRange = range
}
range.length = range.length - 1
$editor.selectedRange = range
var lengthChange = 0
$editor.selectedText = $editor.selectedText.split("\n").map(s => {
  let es= countSpace(s) % number_of_spaces
  if (es != 0) {
    let p = number_of_spaces - es
    s = "".padEnd(p) + s
    lengthChange += p
  }
  for (var i = 0;i < number_of_spaces;i++) {
    s = shiftSpace(s)
  }
  return s
}).join("\n")
range.length = range.length + lengthChange
$editor.selectedRange = range

function shiftSpace(s) {
  if(s.startsWith(" ")) {
    s = s.replace(" ","")
    lengthChange--
  }
  return s
}

function countSpace(s) {
  let n = 0
  let f = true
  s.split("").forEach(c => {
    if (f) {
      if (c == " ") {
        n++
      } else {
        f = false
      }
    }
  })
  return n
}
