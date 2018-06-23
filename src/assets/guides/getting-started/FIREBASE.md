### Firebase Console

Access this project's firebase console [here](https://console.firebase.google.com/u/0/project/uiux-material/overview). 
You must have a Google account and granted access to the firebase project.

### Prerequisite

Install firebase tools:

```bash
npm install -g firebase-tools
```

### Deploying

All firebase features are enabled for this project, although only hosting
is utilized at this time. To deploy, you must first build the project.

```bash
# build cdk
yarn build.cdk

# build material
yarn build.mat

# build docs app
yarn build

# deploy to firebase hosting only
firebase deploy --only hosting

```
