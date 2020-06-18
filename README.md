# Misakey SSO Demo

[Misakey](https://www.misakey.com) is the user account solution for people and applications who
value privacy and simplicity. And it’s open source.

## About this repo

This repository is the source code of https://demo.sso.misakey.com.

Here a [video](https://www.youtube.com/watch?v=BTvFQIyV-i0) that show you how to integrate Misakey's SSO.

If you want to join the beta, just fill [this form](https://misakey.typeform.com/c/nPS0xm?typeform-cui-avatar=https://images.typeform.com/images/wayUDRdgTnmY) !

This repo is simply a [create-react-app](https://github.com/facebook/create-react-app) + [@misakey/sdk](https://github.com/misakey/sso-js-sdk).

## How to replicate it locally ?

If you want to try this locally, just change the `authConfig` in the `src/App.js` to

```js
const authConfig = {
  clientId: '0032b619-9539-4526-918c-696430280f2b',
  redirectUri: 'http://localhost:3000/callback',
  buttonPlacement: 'top-right',
  userInfoRequirement: ['email', 'name', 'phone'],
}
```

Then `yarn install` and `yarn start`, and it should work !

## License

Most code is released under the GPLv3. 
If subdirectories include a different license, that license applies instead.

## Source management disclaimer

Misakey uses GitLab for the development of its free softwares. Our Github repositories are only mirrors. If you want to work with us, fork us on gitlab.com (no registration needed, you can sign in with your Github account)
