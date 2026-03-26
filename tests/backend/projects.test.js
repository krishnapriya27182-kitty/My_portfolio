const request = require("supertest");
const app = require("../../backend/src/index");

describe("GET /api/projects", () => {
  it("returns a list of projects", async () => {
    const res = await request(app).get("/api/projects");
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it("each project has required fields", async () => {
    const res = await request(app).get("/api/projects");
    res.body.data.forEach((project) => {
      expect(project).toHaveProperty("id");
      expect(project).toHaveProperty("title");
      expect(project).toHaveProperty("description");
      expect(project).toHaveProperty("techStack");
    });
  });
});

describe("POST /api/contact", () => {
  it("returns success for valid data", async () => {
    const res = await request(app).post("/api/contact").send({
      name: "Test User",
      email: "test@example.com",
      message: "Hello from test",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it("returns 400 for missing fields", async () => {
    const res = await request(app).post("/api/contact").send({ name: "Test" });
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  it("returns 400 for invalid email", async () => {
    const res = await request(app).post("/api/contact").send({
      name: "Test",
      email: "not-an-email",
      message: "Hello",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });
});
