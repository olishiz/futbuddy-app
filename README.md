# futbuddy-app

FutBuddy App deployed with Appflow Dashboard.

## Deployment steps

1. Just run `ng build` then it will perform prebuild, build then postbuild command in `package.json`.
2. After building the artifacts, then you can deploy the hosting by typing `firebase deploy` to deploy to production.

## Tips and tricks

1. After `ionic build` or `npm run build`, you can move all the build artifacts from `www` folder to `public` folder
   which is the folder that Firebase Hosting used to deploy by using this command `move www\\* public\\` in Windows
   cmd. (Provided you have the command `move` in your cmd installed.)
