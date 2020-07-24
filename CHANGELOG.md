## [ 0.4.0 ] 

v0.4 includes a robust testing funcionality, supplied by python selenium (ModernWebTest.py)

### Bug Fixes

- No bug fixes, many more html and css tags have been added to uniquely idenify elements on the page

### Features

- Testing for login, register, armor, and champions functionalities  
- Please consult "Instructions.txt" or the ModernWebTestTutorial video for extensive instrutions on how to operate this

Contributors
Robert Koniuta


## [ 0.3.0 ] 

v0.3 includes authentication for a user, and access control adjustments

### Bug Fixes

- No bug fixes

### Contributors

Ryan Destefano, Robert Koniuta

### Features

- Adjustment so that navigation is restricted without authenication
- Protected routes redirect to auth component
- User cannot route to auth without being logged in

Contributors
Ryan Destefano, Robert Koniuta

## [ 0.2.0 ]

v0.2 includes breaking the single file from Feature 3 into component architecture and building with gulpjs.

### Bug Fixes
  
- No bug fixes

### Contributors

Ryan DeStefano, Robert Koniuta

### Features

- Added real Parse queries as opposed to pulling data from a local json file
- Included more stats for champions and weapons than in previous versions
- Added a build system using gulpjs to build and host the web app
- Added the ability to add customized champions to the Parse database
- Utilized UI Router to navigate between components
- Broke down initial file into component architecture
