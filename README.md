This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

you can see the live demo of application on \

https://countries-three-jet.vercel.app/ \

OR \
if you want to run project locally
you should use node js version upper than 17
First, build the project with:

```
npm run build
# or
yarn build
```

then

```
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## libraries

1- axios for dealing with api \
2- clsx for add clss to html \
3- sass for more scalable project and make it more DRY \
4- react-helmet for editing body \
5- react-icons for using icons \

## performance

1- performance metrics with google chrome Lighthouse:\
Home page : Desktop : 99% Mobile : 90% \
Detail Page :Desktop : 99% Mobile : 91% \
2- some tips and tricks about code performance: \
using debounce function for searching \
images are lazy load \
using useTransition for search and filter to prevent main Thread block \
use bare html and css without any additional heavy library \
handle dark theme with context api without any additional global state managment lib \
home page countries requested on build time once \
content are server side rendered(except borders in detail page)

## clean code

1- all file structred well in relevent folder category \
2- using global sass utils
