# Now redirect for v2.0

This is kinda like a now 2.0 version of [now-redirect](https://github.com/vdanchenkov/now-redirect).

But becuase I'm lazy I didn't write a cli, so just clone the the `index.html`
and the `now.json` and replace the redirect host and alias strings in `now.json`
with your own domain. 

Then call `now` to deploy your new lambda redirect function.

And then `now alias` to alias it.

The example redirects `www` traffic to the naked domain ([remote.one](https://remote.one)).

NB: this is a copy of https://github.com/zeit/now-examples/tree/master/redirect but I couldn't find it when searching so I made this a solo repo.