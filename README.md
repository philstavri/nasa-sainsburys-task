# Sainsbury's tech task - NASA Search

## My approach to development
* atomic commits - I like to commit little and often in self contained chunks so if a feature needs to be reverted or cherrypicked it can easily be isolated
* aim at TDD (will sacrifice coverage to showcase more skills)
* offer basic accessibility/a11y (will sacrifice a comprehensive solution to showcase more skills)

## Summary of my approach
* Reviewed the brief, checked the docs relating to the API, I noticed the API responses were paginated and is using a self discovery approach (maybe HATEOS). Quickly drew up a few ideas for how to break the brief into deliverable pieces (have since added some issues to the repo to track this), decided to use VueJS and SCSS with BEM methodology.
* Generated the initial app (and build tools) using vue-cli. I decided to use the CLI to kickstart the project for rapid development, I did introduce a few preferences (decorators) for convenience. 
* Added Welcome view as wireframes suggested search wasn't the root page (/search), was considering ignoring this for improved UX but as it offered an opportunity to showcase routing early on I decided to have a 'welcome page' instead.
* As I looked at the next page (search) I decided to abstract out my choice of "page" component. This allows me to create more components to compose the application, offers re-use and allows me to increase the test coverage. 
