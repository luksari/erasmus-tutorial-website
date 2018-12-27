# erasmus-tutorial-website

Responsive website made for Web Composing course on Erasmus in Covilha

## BEM Methodology

Every class is written in `BEM` methodology with syntax
`block__element--modifier`
where :

- **block** is the biggest part of website for example header, div, section, main, footer, aside, nav, list
- **element** is the part of block for example item, heading, paragraph, link
- **modifier** is the part that describes look for element e.g
  - danger: means red,
  - primary: means with primary colour,
  - important: means with bold weight etc.

## Mobile first styling

To style website we will use **mobile first** approach when firstly we are styling website for mobile devices which is majority of users for static websites like ours.

## Branching methodology

`master` -> `develop` -> `feature/feature-name-initials`

- If everything works fine after feature has been finished, merge `feature/feature-name-initials` to `develop`
- Else if something went bad with your feature and you want to check another possible approach make branch `hotfix/feature-name`, then after it works merge `hotfix/feature-name` to `feature/feature-name-initials` and then merge it to `develop`.

## Styling approach

Try to style with **CSS Flexbox**, **CSS Grid** as much as it is possible, **avoid** using `float: left|right`.
Use percentage values for `width/height/max-width/max-height`, use `vh, rem, em` instead of `px`

### Not used but should be

- Webpack or just Gulp
- SCSS

### Summary

Not sure if everything is the best approach for developing modern, maintainable websites but have tried to give as much tips as it is possible
