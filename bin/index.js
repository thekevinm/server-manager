#!/usr/bin/env node

const program = require('commander');

// import function to list servers
const list = require('../lib/list');

/*******************************************/

// Print coffee drinks menu
// $ sshmanager list
// $ sshmanager ls
program
    .command('list') // sub-command name
    .alias('ls') // alternative sub-command is `al`
    .description('List Servers') // command description

    // function to execute when command is uses
    .action(function () {
        list();
    });


// allow commander to parse `process.argv`
program.parse(process.argv);