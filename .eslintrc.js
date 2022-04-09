module.exports = {
    root: true, // プロジェクトのルートに配置していると教えている
    env: {
        es2020: true,
        node: true,
    },
    parser: "@typescript-eslint/parser", // ESLintにTypeScriptを適応
    parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint"], // TypeScriptプラグインのルールを適用

    extends: [
        "eslint:recommended", //ESLintのJavaScriptルールを適用
        "plugin:@typescript-eslint/recommended", // 型チェックが不要なルールを適用
        "prettier",
        "prettier/@typescript-eslint",
    ],

    rules: {},
};
