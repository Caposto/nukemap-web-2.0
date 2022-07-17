# Nukemap Web 2.0

As part of my Summer Research for Professor Wellerstein at Stevens Institute of Technology, I am investigating how Augmented Reality (AR) can be used to visualize nuclear weapons and their mushroom clouds at scale. While most AR applications are made to run natively on headsets and smartphones, I decided to explore web-based approaches for creating AR experiences.

This particular repository builds off of [nukemap-web-ar](https://github.com/Caposto/nukemap-web-ar) where I used WebXR JavaScript API to explore features like anchoring and hit-testing. After many hours I realized how difficult it was to work with WebXR as it seems to deal with device communication on a very low and direct level. So, I decided to try other methods and found the AR.js library built upon A-Frame. This library abstracts many of WebXR's complexities away and allows for more rapid development. It also comes with out-of-the-box features like marker-based and location-based AR that `I plan to take advantage of.

My goal is to create two different modes of visualizing mushroom clouds in AR.

1. ***Indoor Marker/Table Top Visualization*** : Mushroom cloud models will be rendered on 2D and 3D maps and users will be allowed to rotate & scale the models. I am currently using the Mapbox GL JS Library to create accurate maps. Ideally, the user will be able to select specific locations and yield for the nuke itself.

2. ***Outdoor/"Street View"*** : This feature will capitalize off of AR.js' location-based functionlaity to render mushroom clouds in front of the user as if they were really there. This would help people appreciate the truly massive scale of these weapons. In order for locaton-based to work however, AR.js recommends the user be outside, hence the indoor & outdoor distinction between the two features.

## Installation

`git clone https://github.com/Caposto/nukemap-web-2.0.git`

`npm install`

Create an account with [Mapbox](https://www.mapbox.com/) and get an API key

`npm run dev` to run webpack server (configure it to be on HTTPS)

## Resources & Credits


