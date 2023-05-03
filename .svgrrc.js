module.exports = {
  typescript: true,
  template: (variables, { tpl }) => {
    return tpl`
    ${variables.imports};

    ${variables.interfaces};

    export const ${variables.componentName} = (${variables.props}): JSX.Element => {
        return ${variables.jsx};
      };
    `
  },
}