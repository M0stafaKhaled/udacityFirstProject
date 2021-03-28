import "babel-polyfill";

const axios = require("axios");
describe("check it work", () => {
  it(" status should be (200) success ", async () => {
    const result = await axios.post("http://localhost:8081/add-url", {
      url: "https://expressjs.com/en/resources/middleware/cors.html",
    });
    expect(result.status).toEqual(200);
    //  console.log(result)
  });
});
