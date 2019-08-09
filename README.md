# LWC React-Webpack Container

Proof of concept demonstracting how you can use webpack to bundle a react application and mount it in a LWC. 

At this time, I do not recommend doing this for anything other than a static page.

## Setup

- clone this repository
- npm install
- create a scratch org.  Set as default
- `npm run deploy`
- `sfdx force:user:permset:assign -n lwc_react`

## Demo

- `sfdx force:org:open`
- Add 1 or more contacts
- Open App Launcher 
- Select "LWC React Hello World"
