# Front-end final mockup-to-website project

<div align="center">
  <h3>
    <a href="https://github.com/Betsimisaraka/front-end-finals">
      Demo
    </a>
    <span> | </span>
    <a href="https://betsimisaraka.github.io/front-end-finals/">
      Solution
    </a>
  </h3>
</div>

In this project we built a website that is about photograph. This webpage shows how beautiful photos are. And it provide some examples of the photographs that the photographer have taken in the deserts of Morroco. This application is made by `html` and `css/sass`

![MY photograph](./webroot/images/photograph-page.webp)

## 1- My demo

You can see my demo by clicking this github link with the username [Betsimisaraka](https://github.com/Betsimisaraka/front-end-assessment)

## 1- Explaination about the structure of my project.
This project structures as the folowing instruction below:

First, I have a folder called `source-materials` which contains three subfolders that are the `images`, the `fonts` and the `icons`. Inside of these we can see all the necessary fonts, images and icons that are necessary for this project.

And then, there is a folder called `scss` in which all of my scss files stored.

Lastly `Webroot` folder this is the bigest folder that store the web-files in this application. This contains the `index.html` file, `images` folder which store the images that have been compiled, also `fonts` folder this also contains all of the fonts that have been formated and converted into `woff` and `woff2` and lastly the `css` folder where you can see the output of the `scss` files. I also use a `script` file which has a little bit of javascript to make the image slider work fine.

## 1- My experience

## 1- What have I learned/improved are:

### Built With

-   [Html](https://html.org/)
-   [Css/Sass](https://css.org)


To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Betsimisaraka/front-end-finals

# Install dependencies
$ Node.js
$ Figma
$ Figma Font Helper
$ npm install node-sass
$ npm i

# Run css
$ npm run scss:watch
```

## Getting started

- Fork this repo to your own github account
- Clone your github account version of the repo (e.g. `STUDENT_NAME/front-end-finals` ) to your computer.
- Work in your `main` branch

### Design

You can find the design:

- online at [figma.com/Laaqiq-1-Portfolio-detail-Responsive](https://www.figma.com/file/VgF87mULloYb7HZ1EMCRzU/Laaqiq-1-Portfolio-detail-Responsive?node-id=0%3A1) (Recommended)
- by importing the `.fig` file in [the `source_materials` folder](./source_materials/) into your figma app.

## Development

You'll want to run the `scss:watch` task when you're developing this project.

## Contact

-  GitHub [Betsimisaraka](https://github.com/Betsimisaraka)

## Fuctionality

- **All the HTML**
  - HTML should be clean, accurate, and consistent.
  - Using the right elements for the right job.
  - Structure the HTML nicely.
  - Make sure the HTML is accessible.
  - Make sure the HTML is valid.
  - Progressively enhancing our HTML, e.g. using `<picture>` elements with multiple sources.
- **Sass**
  - Sass should use variables at a minimum, and be extended with mixins, functions, and abstract classes if I can.
  - Sass output should be orderly, and expected.
  - Clean Sass
  - Adding some helpful comments to the difficult-to-understand parts.
  - Completed components.
- **CSS**
  - Add style to elements that the user can focus, hover over, or interact with.
  - Work on Mobile-First and Responsive.
  - Using Custom Properties.
- **Images**
  - Using a CSS `background-image` or an `<img>` in the HTML for the right reasons.
  - Using the correct image format for each case
  - Compress images
- **Fonts**
  - Using our own `@font-face` declarations. Link up the WOFF2 and WOFF formats to our CSS using as many `@font-face` at-rules as we need.
  - Using `local()` functions for locally-installed fonts.
  - Test that the website works without local font support.
  - Subset fonts
- **Advanced**
  - Make the menu on mobile work nicely, using our own imagination here.
  - Make the Image Slider, and other components work as intended, using some JS
  - Using newer image formats such as WebP and AVIF, while still maintaining support for older formats.