require('../../project/support/project_env.js');
process.env.ThisModule = 'test-demoapp';
process.env.ModulePath = process.env.ProjectPath + '/' + process.env.ThisModule;
// define module level Env vars here