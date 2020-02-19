const promptDir = require('inquirer-directory');

module.exports = function(plop) {
  plop.setPrompt('directory', promptDir);
  plop.setGenerator("React Function Component", {
    description: "A Function Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name"
      },
      {
        type: "directory",
        name: "path",
        message: "Component folder",
        basePath: "./src"
      }
    ],
    actions: [
      {
        type: "add",
        path: "./src/{{path}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component-function.hbs",
        skipIfExists: true
      }
    ]
  });
  plop.setGenerator("React Function Component with Hooks", {
    description: "A Function Component with Hooks",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name"
      },
      {
        type: "directory",
        name: "path",
        message: "Component folder",
        basePath: "./src"
      }
    ],
    actions: [
      {
        type: "add",
        path: "./src/{{path}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component-hooks.hbs",
        skipIfExists: true
      }
    ]
  });
  plop.setGenerator("React Arrow Function", {
    description: "A React Arrow Function",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name"
      },
      {
        type: "directory",
        name: "path",
        message: "Component folder",
        basePath: "./src"
      }
    ],
    actions: [
      {
        type: "add",
        path: "./src/{{path}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component-arrow.hbs",
        skipIfExists: true
      }
    ]
  });
  plop.setGenerator("React Class Component", {
    description: "A React Class Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name"
      },
      {
        type: "directory",
        name: "path",
        message: "Component folder",
        basePath: "./src"
      }
    ],
    actions: [
      {
        type: "add",
        path: "./src/{{path}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component-class.hbs",
        skipIfExists: true
      }
    ]
  });
};
