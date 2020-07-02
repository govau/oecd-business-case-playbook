Digital Transformation Agency - Business Case Playbook
==========================
The DTA business case Playbook is a compilation of the key activities and questions for consideration that OECD member states might like to consider when building an ICT business case.

## Description
This site can be used by any users that would like to build an ICT business case and would like insight on how the OECD member states would consider when building a ICT business case.


## Installation
This workspace is using Node.js . It can be installed using the npm or yarn command line tools.

## Dependencies
* "@gov.au/accordion": "latest",
* "@gov.au/animate": "latest",
* "@gov.au/body": "latest",
* "@gov.au/breadcrumbs": "latest",
* "@gov.au/buttons": "latest",
* "@gov.au/callout": "latest",
* "@gov.au/card": "latest",
* "@gov.au/control-input": "latest",
* "@gov.au/core": "latest",
* "@gov.au/cta-link": "latest",
* "@gov.au/direction-links": "latest",
* "@gov.au/footer": "latest",
* "@gov.au/form": "latest",
* "@gov.au/grid-12": "latest",
* "@gov.au/header": "latest",
* "@gov.au/headings": "latest",
* "@gov.au/inpage-nav": "latest",
* "@gov.au/keyword-list": "latest",
* "@gov.au/link-list": "latest",
* "@gov.au/main-nav": "latest",
* "@gov.au/page-alerts": "latest",
* "@gov.au/progress-indicator": "latest",
* "@gov.au/responsive-media": "latest",
* "@gov.au/searchbox": "latest",
* "@gov.au/select": "latest",
* "@gov.au/side-nav": "latest",
* "@gov.au/skip-link": "latest",
* "@gov.au/table": "latest",
* "@gov.au/tags": "latest",
* "@gov.au/text-inputs": "latest",
* "autoprefixer": "^9.0.1",
* "node-sass": "^4.12.0",
* "postcss-cli": "^6.0.0",
* "pug": "^3.0.0"

## Licence
ISC

## Notes
Below are the information of the design template that was used to build this website.


Australian Government Design System - Starter
==========================

> Get started with full page templates using the Australian Government Design System.

| Production [![CircleCI](https://circleci.com/gh/govau/design-system-starter/tree/master.svg?style=svg)](https://circleci.com/gh/govau/design-system-starter/tree/master)          | Staging [![CircleCI](https://circleci.com/gh/govau/design-system-starter/tree/develop.svg?style=svg)](https://circleci.com/gh/govau/design-system-starter/tree/develop)                     |
|-----------------------------|--------------------------------|
| https://design-system-starter.apps.b.cld.gov.au/ | https://ds-starter.apps.y.cld.gov.au/ |
|  | username:`ds`   password:`ds` |

## Contents


* [Templates](#templates)
* [Development environment](#development-environment)
* [Get started](#get-started)
* [How it works](#how-it-works)
* [Prerequisites](#prerequisites)
* [Contributing](#contributing)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Templates


Browse full page templates using the Australian Government Design System.

- [Home page](https://design-system-starter.apps.b.cld.gov.au/)
- [Content page](https://design-system-starter.apps.b.cld.gov.au/content/)
- [Form page](https://design-system-starter.apps.b.cld.gov.au/form/)


## Development environment

Clone this repository to create a local development environment and start modifying the templates.

* [Get started](#get-started)
* [How it works](#how-it-works)
* [Contributing](#contributing)
* [License](#license)


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Get started

The starter pack uses npm (node package manager) to set up a local development environment and install the Design System components. The default package manager for Node is npm. When you download Node, npm comes pre-installed.

1. Make sure you have npm and Node installed on your computer. You can follow the [npm instructions](https://www.npmjs.com/get-npm) if you are unsure.

1. Download, clone, or fork this repository into a folder on your computer.

1. In the command line go into this folder and run `npm install`. This will install dependencies necessary for the local development environment.

1. You should now be ready to start your local server by running `npm run watch`. This will watch for changes on `*.scss` files, create new `*.css` files and refresh the browser.


### Using Docker

Build the image:

```bash
$ docker build -t ds-starter .
```

Then run the image and map the volume. Note: $PWD is not supported in windows.

```bash
$ docker run --rm --volume="$PWD:/app" -p 3000:3000 -it ds-starter
```

**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## How it works

In your directory you have a `package.json` file. This file points to dependencies to install when running `npm install`. When you run `npm install` you install all of the Design System components and additional packages related to the local development environment.

After `npm install` [Pancake](https://github.com/govau/pancake) is ran, this checks that your dependencies work together and creates the `docs/js/script.min.js` and `src/sass/_uikit.scss`.

The `src/sass/main.scss` imports the generated `_uikit.scss`. You shouldn't touch the `_uikit.scss` file as it is generated, but feel free to change the `main.scss` file. 

When the user runs `npm run build` or `npm run watch` we use [node-sass]("https://www.npmjs.com/package/node-sass?activeTab=versions") to convert the `src/sass/main.scss` file into the `docs/css/main.css` file. [Autoprefixer]("https://www.npmjs.com/package/autoprefixer") is ran after compilation to add vendor prefixes to the `main.css` file.

> Refer to the `package.json` scripts for how this has been set up

This set up allows you to modify the variables in the Design System file from the `main.scss` file. You can add your own colour scheme, or change the typography and spacing. Tweaks to the components or additional ones should be added below the import of `_uikit.scss`. Changes to these files will be injected into your browser so you don’t even need to refresh thanks to [Browser Sync](https://www.browsersync.io/).

The `docs` folder in the contains all the files required to publish a website. The `index.html` file references the `main.css` file and `script.min.js` assets to generate the page. We name the folder `docs` because [github pages](https://pages.github.com/) uses the docs folder to host static websites. 


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------

## Prerequisites
- [`Node.js`](https://nodejs.org) **8 or higher**, preferably the current LTS version.

> **NOTE:** If you're developing on Windows, please ensure that [your local `npm` configuration is using a shell that supports UNIX like folder pathing](https://stackoverflow.com/questions/23243353/how-to-set-shell-for-npm-run-scripts-in-windows) ( i.e `a/unix/path`  rather than `a\\windows\\path` ).

**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## Contributing

To contribute to the Australian Government Design System Starter Pack:
1. Fork the project & clone it locally.
1. Create a new branch for the work that is going to be completed.
1. Complete the work and test it to the best of your abilities following the [guidelines here](https://github.com/govau/uikit#checklist-and-browser-support).
1. Once the work is completed, write a good commit message.
1. Push your work to GitHub and create a new pull request.
1. Respond to any code review feedback.


**[⬆ back to top](#contents)**


----------------------------------------------------------------------------------------------------------------------------------------------------------------


## License

Copyright (c) Commonwealth of Australia. With the exception of the Commonwealth Coat of Arms and where otherwise noted, this work is licensed under the [MIT license](https://raw.githubusercontent.com/govau/design-system-starter/master/LICENSE).


**[⬆ back to top](#contents)**

# };
