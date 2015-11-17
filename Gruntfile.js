/*
 Dependencies before running this grunt file:
 1. Update the system, 'yum update'
 2. Install Node.js and Docker
 3. Install dependencies: 'npm install'
 4. Install grunt cli: 'npm install -g grunt-cli'
 */

module.exports = function(grunt) {
    //Grunt init
    grunt.initConfig({
        // configure exec commands
        exec: {
            build_jenkins_data:     'docker build -t jenkinsdata jenkins-data/.',
            build_jenkins:          'docker build -t jenkins jenkins-master/.',
            create_jenkins_data:    'docker run --name=jenkins-data jenkinsdata',
            create_jenkins:         'docker create -p 8080:8080 -p 50000:50000 --name=jenkins-master ' +
                                    '--volumes-from=jenkins-data jenkins',
            start_jenkins:          'docker start jenkins-master',
            stop_jenkins:           'docker stop jenkins-master',
            export_data:            'docker run --volumes-from=jenkins-data -v $(pwd)/jenkins-data/data:/data ubuntu ' +
                                    'tar cvf /data/data.tar /var/jenkins_home',
            load_data:              'docker run --volumes-from=jenkins-data -v $(pwd)/jenkins-data/data:/data ubuntu ' +
                                    'tar xvf /data/data.tar -C /'

        }
    });

    // Load the grunt-exec
    grunt.loadNpmTasks('grunt-exec');

    //My Tasks
    grunt.registerTask('init', [
        'exec:build_jenkins_data',
        'exec:build_jenkins',
        'exec:create_jenkins_data',
        'exec:load_data',
        'exec:create_jenkins'
    ]);

    grunt.registerTask('start', [
        'exec:start_jenkins'
    ]);

    grunt.registerTask('stop', [
        'exec:stop_jenkins'
    ]);

    grunt.registerTask('export-data', ['exec:export_data']);
};
