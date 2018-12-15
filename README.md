# notes
This is a basic note taking app build with nodeJS.
I build this app for a course project while I was learning about nodeJS from [Udemy](https://www.udemy.com/the-complete-nodejs-developer-course-2/)

## Installation Steps:
1. Download or clone the files form this github [repo](www.github.com)
2. Start command promt (Windows) / terminal (MAC)
3. Navigate to the installed folder
4. run `npm install`
5. You are all set!

## Documentation:

1. **Add a new note:**
    run `node app.js add --title="Note title" --body="Note body"`
    or
    run `node app.js add -t "Note title" -b "Note body"`

1. **Remove a note:**
    run `node app.js remove --title="Note title"`
    or
    run `node app.js remove -t "Note title"`

1. **Read a saved note:**
    run `node app.js read --title="Note title"`
    or
    run `node app.js read -t "Note title"`

1. **Show all notes:**
    run `node app.js list`

1. **Help:**
    run `node app.js --help`
