# LWC React-Webpack Container

<img width="901" alt="LWC_React_Hello_World___Salesforce" src="https://user-images.githubusercontent.com/5217568/62799975-6c3cc880-ba9f-11e9-9525-1975e6ac0d50.png">

Proof of concept demonstracting how you can use webpack to bundle a react application and mount it in a LWC.

At this time, I do not recommend doing this for anything other than a static page.  If you want to develop react SPA applications on salesforce, I recommend using Visualforce (check out [B.A.S.S.](https://github.com/ChuckJonas/bad-ass-salesforce-stack) for ready to go boiler plate)

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
