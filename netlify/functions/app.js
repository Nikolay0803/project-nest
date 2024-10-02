import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports.handler = async function (event, _context) {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  await app.init();

  const result = await app.handleRequest(event);

  return {
    statusCode: result.statusCode || 200,
    body: JSON.stringify(result.body),
    headers: result.headers || {},
  };
};
