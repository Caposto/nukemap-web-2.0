# Nukemap Web 2.0

As part of my Summer Research for Professor Wellerstein at Stevens Institute of Technology, I am investigating how Augmented Reality (AR) can be used to visualize nuclear weapons and their mushroom clouds at scale. While most AR applications are made to run natively on headsets and smartphones, I decided to explore web-based approaches for creating AR experiences.

This particular repository builds off of [nukemap-web-ar](https://github.com/Caposto/nukemap-web-ar) where I used the WebXR JavaScript API to explore features like anchoring and hit-testing. After many hours I realized how difficult it was to work with WebXR as it seems to deal with device communication on a very low and direct level. So, I decided to try other methods and found the AR.js library built upon A-Frame. This library abstracts many of WebXR's complexities away and allows for more rapid development. It also comes with out-of-the-box features like marker-based and location-based AR that I plan to take advantage of.

My goal is to create two different modes of visualizing mushroom clouds in AR.

1. ***Indoor Marker/Table Top Visualization*** : Mushroom cloud models will be rendered on 2D and 3D maps and users will be allowed to rotate & scale the models. I am currently using the Mapbox GL JS Library to create accurate maps. Ideally, the user will be able to select specific locations and yield for the nuke itself.

2. ***Outdoor/"Street View"*** : This feature will capitalize off of AR.js' location-based functionlaity to render mushroom clouds in front of the user as if they were really there. This would help people appreciate the truly massive scale of these weapons. In order for locaton-based to work however, AR.js recommends the user be outside, hence the indoor & outdoor distinction between the two features.

Full Documentation on [My Notion](https://www.notion.so/NUKEMAP-AR-ca1ff0db5521413f88855b38fbb2462b)

## Installation

This page will provide instructions and resources for setting up the environment for testing Augmented-Reality with the project Repository. Make sure you have Node.js installed on your computer. [Install Node here](https://nodejs.org/en/download/)

### Cloning Repository: [nukemap-web-2.0](https://github.com/Caposto/nukemap-web-2.0)

```jsx
git clone https://github.com/Caposto/nukemap-web-2.0.git
npm install
```

### HTTPS Dev Server (July 11)

A-Frame needs to run on https. *webpack.config.js* is already setup to run https, however you need to create the SSL certificates yourself and add them to .*gitignore.*

This is what *webpack.config.js* should look like when you clone the repo.

```jsx
				server: {
            type: 'https',
            options: {
                key: fs.readFileSync(path.resolve(__dirname, 'https/cert.key')),
                cert: fs.readFileSync(path.resolve(__dirname, 'https/cert.crt')),
                ca: fs.readFileSync(path.resolve(__dirname, 'https/ca.crt'))
            }
        },
```

In order for this to work, you need to create *cert.key, cert.crt,* & *ca.crt.* If you know how to do this with OpenSSL or another method that is fine, but I recommend following [this guide on Stack Overflow by Lee Goddard](https://stackoverflow.com/questions/26663404/webpack-dev-server-running-on-https-web-sockets-secure) that uses mkcert. At the end, put all the files in a folder called *https*.

I will copy the steps to his guide here just so that everything is in one place.

**1. Project configuration**

In your project root run in Powershell (or CMD):

```
npx mkcert create-ca
npx mkcert create-cert
```

Your `webpack.config.js`:

```
devServer: {
    // ...
    https: {
        key: fs.readFileSync("cert.key"),
        cert: fs.readFileSync("cert.crt"),
        ca: fs.readFileSync("ca.crt"),
    },
    // ....
},
```

**2. Install certificate**

Double-click on `ca.crt` > Install Certificate >

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a9c0aca2-84e7-4d6d-8599-08584e682e72/Untitled.png)

... > Current User > Place all certificates in the following store > Trusted Root Certification Authorities >

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/825be344-3667-4d01-83c7-fe40fe25f8dc/Untitled.png)

... > Finish > Yes

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/967402cf-33ee-4a83-a303-fca327a43a66/Untitled.png)

**3. Check correct installation**

Start > Type: "cert" > Manage User Certificates > ...

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/50d23e03-1243-42e3-816d-e7f175872bee/Untitled.png)

... > Trusted Root Certification Authorities > Certificates > Test CA

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ba2e9737-a745-43e0-8870-60ed2846676a/Untitled.png)

**4. Reload & Test**

Reload your browser, Start yout webpack dev server and check the SSL Certificate validity:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e28b6e83-f0d2-4abd-9dec-3ee1d48648cf/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/54c19bdf-e9ec-4494-bc71-5345f455b707/Untitled.png)

### Git LFS (July 30)

Since these web-based AR experiences often require .glb/.gltf files, LFS is necessary to push them to the repository. Git LFS is **ALREADY** enabled on the repository so **IT SHOULD** come installed when you clone it. However if you need to install it manually:

Run these on the terminal

```jsx
git install lfs
git lfs track "*glb"
```

Your *.gitattributes* file should look like this

```jsx
*.glb filter=lfs diff=lfs merge=lfs -text
```

Click [here](https://git-lfs.github.com/) for official Git LFS Documentation.

### Environment Variables

Currently the only environment variable is the Mapbox GL JS API Token. You can get an access token by making a free account at [Mapbox](https://www.mapbox.com/).

The setup is already complete, you just have to create a *.env* and add the token to it:

*.env*

```jsx
MAPBOX_API_KEY="sometoken"
```

If you need to setup the environment variables again:

1. Run `npm i dotenv-webpack` in the terminal
2. Add `const Dotenv = require('dotenv-webpack')` to the top of *webpack.config.js*

### Testing on Mobile Device with USB Debugging

AR experiences only work on certain devices such as mobile phones or AR glasses. In addition, WebXR is only compatible with certain browsers ([click here for compatible browsers](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API#browser_compatibility)) and devices ([click here for compatible devices](https://developers.google.com/ar/devices)). Unfortunately, Safari does not support WebXR, and even Apple phones that run Chrome will not be able to utilize the API at present. Nevertheless, if you posses an Android phone that can run WebXR, you will need to connect it to your development device/computer to run and test the web server. 

1. Connect Computer to device with a USB cord
2. On the mobile device go Settings → Developer Options → USB Debugging and turn it on

![0.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6ab94d64-0acd-4bd3-b834-77f16c732821/0.jpg)

1. On your computer open Chrome and search `chrome://inspect/#devices` 

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c066fec4-1761-43d3-8f20-f20218f1bf61/Untitled.png)

Make sure that port 3000 is there. If you need to use a different port, make sure to change the setting in *webpack.config.js*

1. Use this command in the terminal to activate the server: `npm run dev`

*Computer View*

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8bac1e2e-1ef9-4003-b0af-e8ced2671a7f/Untitled.png)

You should now be able to run the code from the repository. For the marker-based experiences, click on the Mushroom Marker tag in the Notion documentation to get the picture (it is already linked as a .patt file in the code).

### Main Development Resources

[A-Frame](https://aframe.io/)

[WebXR](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)

[Three.js](https://threejs.org/)

[AR.js](https://ar-js-org.github.io/AR.js-Docs/)

[8th Wall](https://www.8thwall.com/)

[Google ARCore](https://developers.google.com/ar)


