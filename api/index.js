// export default import("../dist/my-app/server/server.mjs").then(
//   (module) => module.app
// );

export default import("../dist/my-app/server/server.mjs").then(
  (module) => module.handler
);