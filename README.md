# TabSets: Role-Based Bookmarking

## About TabSets from Netjump.io

Modern desk jobs require workers to use a handful of web apps to perform their
roles.  From SaaS (Software as a Service) products like Salesforce.com to 
corporate intranet web apps, the first step toward performing a role is having
the right set of links.  How employees get these links varies widely from
organization to organization, from link-sharing via email to company Wikis to
consumer-grade Bookmark Management solutions.  But all these solutions have one
thing in common: they're weak, and they don't work well.  A strong, dedicated
solution to this ubiquitous business problem does not exist.

Until now.

TabSets from Netjump.io is the first Role-Based Bookmarking solution.  TabSets
provides advanced tools for managing a complex directory of hyperlinks that
exist within the enterprise, organizations, groups, and roles.

Switching email web apps for your entire company? No problem. With TabSets, one
link can be changed, and the entire organization's bookmarks will be updated.

That's just the beginning, because we also recognize that hyperlinks can be
closely-guarded secrets -- which is another advantage to TabSets mirroring your
Role-Based Access Control system.  You can assign bookmarks to your salespeople,
accountants, developers, and executives based on their roles, and know that no
one has links to resources they shouldn't be attempting to access.


## Installation and Use

From a root directory you'd like to install to, issue the following commands:

```sh
git clone git@github.com:dash-/netjumpio-tabs-web.git web
git clone git@github.com:dash-/netjumpio-tabs-api.git api
```

In each of these directories, install the node packages:

```sh
npm install
```

Create local copies of the environmental files, and edit them appropriately.

```sh
cp web/env-example.sh ~/.tabs-web-env.sh
cp api/env-example.sh ~/.tabs-api-env.sh
```

To run the API, from the `api` directory, run:

```sh
source ~/.tabs-web-env.sh
node .
```

To run the webserver, from the `web` directory, run:

```sh
source ~/.tabs-api-env.sh
npm start
```


## Testing

There are currently 230 tests in 138 test suites.  Tests can be run from the
`web` directory by issuing the command:

```sh
npm test
```

## Architecture / Key Dependencies

* create-react-app
  * react
  * webpack
  * babel
  * Autoprefixer
  * ESLint
  * Jest
* redux
* immutable, redux-immutable
* rxjs, redux-observable
* react-router
* less
* bootstrap, bootstrap-webpack, react-bootstrap


## Contribute

This project is managed in [Trello](https://trello.com/b/eOQPzm7e/client-dev),
but feel free to submit issues or pull-requests on
[Github](https://github.com/dash-/netjumpio-tabs-web).  Please ensure that all
tests run successfully before submitting a pull request.

Developers serious about contributing can even join the development team,
although there are currently no paid positions.  Visit our [New Developer
Setup](https://trello.com/b/r0FRZ0bU/new-developer-setup) board on Trello for
a rough step-by-step guide to becoming a developer.

