const projects = require("../../backend/src/data/projects");

exports.handler = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ success: true, data: projects }),
  };
};
