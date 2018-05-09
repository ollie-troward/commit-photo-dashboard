# Commit Photo Dashboard
With Support from [lolcommits](https://github.com/mroth/lolcommits), displays a dashboard using Socket IO.

## Installation
Run the following commands below to get set up.
```
# Setting up the repo
git clone git@github.com:ollie-troward/commit-photo-dashboard.git
cd commit-photo-dashboard
npm install
node main.js

# Dependencies
brew install imagemagick
[sudo] gem install lolcommits
```

## Usage
1. Setting up the post-commit hook.
```
lolcommits --enable
cat git-hooks/post-commit >> .git/hooks/post-commit
```
2. Go to http://localhost:3000
3. Commit code!
