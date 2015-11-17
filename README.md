# PersistentJenkinsServer
Persistent Jenkins server running on docker that is easy to deploy and migrate.

# Pre-reqs
- Docker
- Node/npm
- Grunt-cli

# Installation
1. Clone this repo
2. Navigate to the folder in terminal
3. Run "npm install" to install dependencies
4. Run "grunt init"  -- note: Docker needs to be running

# Migration
1. Run: "grunt export-data"
2. Package the folder and move it onto another host
3. On the new host, run: "grunt init"
4. All previous configurations from original host will exist on new host

# List of options
- grunt init: builds required images and creates the required docker containers
- grunt start: starts the Jenkins Server, available on port 8080
- grunt stop: stop the Jenkins Server
- grunt export-data: Saves any changes to the data for any rebuilds


