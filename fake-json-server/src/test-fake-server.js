import fakeServer from "json-fake-server";
const model = {
  port: 9090,
  api: [
    {
      method: "GET",
      path: "/",
      response: "Hello World",
    },
  ],
};
const server = fakeServer(model);
setTimeout(() => {
  server.stop();
}, 25000);
