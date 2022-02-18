# www.searle.me.uk

NextJS based site generator for www.searle.me.uk

## Github Actions

Any push of main or a tag v\* will trigger github actions to run.

- main -> will build and push a staging image (:staging)
- v\* tag -> will build and push a promoted image (:latest) - tag name has to start v and since this is not software the format is YYYYMMDDXX where XX is zero padded "release count that day".

## NPM

- dev - run dev server
- build - build
- postbuild - build sitemap (runs automatically after build)
- export - dump the contents as static HTML to out/
- serve - serve the contents of out/
- start - serve the contents as built
- lint - run lint

## Docker

Local docker build:

docker build -t www-smu:latest .
