import { NodePlopAPI } from "plop";

export default function(plop: NodePlopAPI) {
  const plopActionsConfig = {
    skipIfExists: true,
    pattern: "",
    template: "",
    force: false,
    data: {},
    abortOnFail: true
  }

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
        // basePath: "./src/components"
      }
    ],
    actions: [
      {
        type: "add",
        path: "./src/components/{{path}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component-function.hbs",
        ...plopActionsConfig
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
        // basePath: "./src/components"
      }
    ],
    actions: [
      {
        type: "add",
        path: "./src/components/{{path}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component-hooks.hbs",
        ...plopActionsConfig
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
        // basePath: "./src/components"
      }
    ],
    actions: [
      {
        type: "add",
        path: "./src/components/{{path}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component-arrow.hbs",
        ...plopActionsConfig
      }
    ]
  });
  plop.setGenerator("React Class Component", {
    description: "A React Class component",
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
        // basePath: "./src"
      }
    ],
    actions: [
      {
        type: "add",
        path: "./src/components/{{path}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component-class.hbs",
        ...plopActionsConfig
      }
    ]
  });
}
