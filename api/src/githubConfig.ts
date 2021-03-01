const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: "4953891b357b2a168e5bf495171bc5ace0268fa0"
});

export default octokit;
