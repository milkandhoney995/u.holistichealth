module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  sassOptions: {
    fiber: false,
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    // SVGのインポートを処理する既存のルールを取得する
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      // 既存のルールを再適用するが、?urlで終わるsvgインポートにのみ適用する。
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      // その他 *.svg インポートをすべて React コンポーネントに変換する。
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )
  }
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/holistichealthcoach",
  //       permanent: true,
  //     },
  //   ];
  // },
};
