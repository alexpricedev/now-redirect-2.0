# Now redirect for v2.0

This is kinda like a now 2.0 version of [now-redirect](https://github.com/vdanchenkov/now-redirect).

But becuase I'm lazy I didn't write a cli, so just clone the the `index.js` and the `now.json` and replace the `REDIRECT_HOST` variable with your own domain. 

Then call `now` to deploy your new lambda redirect function.

And then `now alias <new-deployment-url> <url-to-redirect>`.

The example redirects `www` traffic to the naked domain ([remote.one](https://remote.one)).

For clarity, I used `now alias redirect-18akmcg65.now.sh www.remote.one`.