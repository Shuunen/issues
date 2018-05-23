console.log('issue : start')

const { ExifTool } = require("exiftool-vendored")
const exiftool = new ExifTool()
const filepath = 'problematic.jpg'

exiftool
  .read(filepath)
  .then(tags => {
    console.log('got tags : ', Object.keys(tags).join(', '))
  })
  .then(() => {
    console.log('closing exiftool instance')
    exiftool.end()
    console.log('issue : end')
  })
