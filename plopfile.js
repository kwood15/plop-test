module.exports = function(plop) {
  plop.setGenerator("React Function Component", {
    description: "A stateless function component",
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
        templateFile: "plop-templates/component.hbs",
        skipIfExists: true
      }
    ]
  });
};
