# PersistentJenkinsServer
Persistent Jenkins server running on docker that is easy to deploy and migrate.

# Pre-reqs
- Docker
- Node.js
- Grunt-cli

# Installation
1. Clone this repo
2. Navigate to the folder in terminal
3. Run "npm install" to install dependencies
4. Run "grunt init"  -- note: Docker needs to be running

# List of options
- grunt init: builds required images and creates the required docker containers
- grunt start: starts the Jenkins Server, available on port 8080
- grunt stop: stop the Jenkins Server
- grunt export-data: Saves any changes to the data for any rebuilds

# Migration
- Run: "grunt export-data"
- Package the folder and move it onto another host
- On the new host, run: "grunt init"
- All previous configurations from original host will exist on new host


