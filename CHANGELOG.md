## [ 0.4.0 ]

v0.4 includes the use of AngularJS Material to enchance the UI and make the app more aesthetically pleasing

### Bug Fixes

- No bug fixes

### Contributors

Ryan DeStefano

### Features

- Addition of a sidenav bar that animates on and off the screen depending on the screen's size
  - New sidenav component and controller with functions to animate the navbar and toggle it on and off either side of the screen
  - Files for sidenav (in `common`):
    - `app-sidenav.component.js`
    - `app-sidenav.controller.js`
    - `app-sidenav.html`
- Inclusion of md-tabs to explain each statistic to the user while they are modifying them
  - Appears on the Armor, Weapons, and Champions pages
    - `armor.html`     (in `components/armor`)
    - `weapons.html`   (in `components/weapons`)
    - `champions.html` (in `components/champions`)
- Inclusion of md-buttons to make the navigation more visually appealing
  - Appears on the Login and Registration pages, as well as on the sidenav bar
    - `app-sidenav.html` (in `common`)
    - `login.html`       (in `components/auth/login`)
    - `register.html`    (in `components/auth/register`)
- Inclusion of md-input-containers to make the login / registration input more visually appealing
  - Appears on the Login and Registration pages
    - `auth-form.html` (in `components/auth/auth-form`)
    
## [ 0.3.0 ] 

v0.3 includes authentication for a user, and access control adjustments

### Bug Fixes

- No bug fixes

### Contributors

Ryan DeStefano, Robert Koniuta

### Features

- Adjustment so that navigation is restricted without authenication
- Protected routes redirect to auth component
- User cannot route to auth without being logged in

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
