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

var text = $editor.selectedText.split("\n")
$editor.selectedText = text.map(s => "".padEnd(number_of_spaces) + s).join("\n")
range.length = range.length + text.length * number_of_spaces
$editor.selectedRange = range
