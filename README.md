Angular Image Src
=================

Angular directive that loads image src tags for `<img>` elements and shows placeholder using `fallback-src`
image for missing or not-found images, and loading images using `loading-src` while the actual image is 
being loaded.

An alternative to using angular `ng-src`.

## Installation
1. Download and add script tag.
`<script src="lib/angular-img-src.js"></script>`

## Usage
Add `img-src` to an `<img>` element.  
`<img img-src="{{'img.png'}}">`

Optionally 
1. `fallback-src` directive can be added to show a placeholder image if the actual image is missing.  
2. `loading-src` directive can be added to show a loading image while the actual image is loading.  
  
`<img img-src="{{'img.png'}}" fallback-src="{{'fallback-img.png'}}" loading-src="{{'fallback-img.png'}}">`


## Icons license
Icons are provided from http://icomoon.io/ under the GNU General Public License v3.0<br />
http://www.gnu.org/licenses/gpl.html
