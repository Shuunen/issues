console.log('issue : start')

const {
  ExifTool
} = require("exiftool-vendored")
const exiftool = new ExifTool()
const filepath = 'problematic.jpg'

exiftool
  .read(filepath)
  .then(tags => {
    console.log('got tags : ', Object.keys(tags).join(', '))
    console.log('reading went good')
  })
  .then(() => {
    console.log('writing a new date')
    return exiftool.write(filepath, {
      AllDates: "2016-02-06T16:56:00"
    })
  })
  .catch(err => {
    console.log('error happend :', err)
  })
  .then(() => {
    console.log('closing exiftool instance')
    exiftool.end()
    console.log('issue : end')
  })