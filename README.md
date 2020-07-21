


DTA - Business Case Playbook Website
==========================
The DTA business case Playbook is a compilation of the key activities and questions for consideration that OECD member states might like to consider when building an ICT business case.


<br />

## Getting Started

These instructions will get you a copy of the project up and running on your local computer for development and testing purposes.



### Prerequisites
To run this project, you'll need to first make sure the following is installed on your computer:

1. [Jekyll](http://jekyllrb.com/) 
> For **Mac** users install Jekyll `$ gem install jekyll` 
For **Windows** users [follow these instructions](https://jekyllrb.com/docs/installation/windows/) to install Jekyll



2. [NodeJS](http://nodejs.org) - **8 or higher**, preferably the current LTS version - use the installer.

> **Windows** users,  ensure that [your local `npm` configuration is using a shell that supports UNIX like folder pathing](https://stackoverflow.com/questions/23243353/how-to-set-shell-for-npm-run-scripts-in-windows) ( i.e `a/unix/path`  rather than `a\\windows\\path` ).

3. [Gulp](https://gulpjs.com/) `$ npm install --global gulp-cli`
<br />

### Setup 
1. Clone this repository into a project directory on your computer
2. Navigate to your project directory `$ cd your-project-directory`
3. Install project dependencies `$ npm install`
4. Start your project up by running `$ gulp`

<br />

### Usage

As this is a Jekyll project, you can use any of the commands listed in their [docs](http://jekyllrb.com/docs/usage/)

In most cases, running the site using the `$ gulp` command, or `$ jekyll build` (to compile page files without running the project in a dev environment), should suffice.

> **Remember** you must generate the site once you've made any changes to files. This can be done automatically by starting the project up using the command `$ gulp` .

<br />

## Project structure



1. The '**_site**' folder is automatically generated - don't modify anything inside this directory. 
2. To modify pages, edit the '**index.html**' (homepage) or pages located in the '**_pages**' directory.
3. **SCSS** files are located in the '**_scss**' folder. These files are compiled automatically and placed in the '**assets > css**' directory.
4. Global page template files are located in the '**_layouts**' folder.
5. Reusable template parts are located in the '**_includes** folder. 
6. To add/remove links globally to the site navigation, edit the '**navigation.yml**' file located in '**_data**'  - this automatically generates the active class for the current page.
7. Breadcrumbs are automatically generated.

**Adding links to pages:**
The site has been set up to use "**pretty links**" (shortens the url). For example, instead of a url being yourwebsite.com/about.html, it would become yourwebsite.com/about (much prettier!). When the site is automatically generated, each page is placed in its own directory (directories are given the same name as the page) and the page is renamed index.html. This means you don't include the '`.html`' when linking pages. 
For example, linking to the about page would be: `a href="/about"` (instead of ` a href="/about.html"`). The link `about.html` will not work, because the about page has automatically been renamed index.html and placed in a directory named 'about'.




<br />


## Notes

In your directory you have a `package.json` file. This file points to dependencies to install when running `$ npm install`. When you run `$ npm install` you install all of the projects packages related to the local development environment.

This project uses [Gulp](https://gulpjs.com/) to watch for changes in HTML, Sass, JS, images. Whenever a file is changed, the project is recompiled and generated.


<br />


## License

Copyright (c) Commonwealth of Australia. With the exception of the Commonwealth Coat of Arms and where otherwise noted, this work is licensed under the [MIT license](https://raw.githubusercontent.com/govau/design-system-starter/master/LICENSE).
