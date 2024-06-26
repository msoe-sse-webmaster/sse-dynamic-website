import "source-map-support/register";
import { Context, APIGatewayEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import renderMain from "./src/server/renderMain";

export const main = async (event: APIGatewayEvent, _context: Context): Promise<APIGatewayProxyResultV2> => {
  try {
    // We use asynchronous import here so we can better catch server-side errors during development
    const render = (await import("./src/server/renderMain")).default;
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html",
      },
      body: await render(event),
    };
  } catch (error) {
    // Custom error handling for server-side errors
    // TODO: Prettify the output, include the callstack, e.g. by using `youch` to generate beautiful error pages
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "text/html",
      },
      body: `<html><body>${error.toString()}</body></html>`,
    };
  }
};

export const eBoard = async (event: APIGatewayEvent, _context: Context): Promise<APIGatewayProxyResultV2> => {
  try {
    const render = (await import("./src/server/renderEBoard")).default;
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html",
      },
      body: await render(event),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "text/html",
      },
      body: `<html><body>${error.toString()}</body></html>`,
    };
  }
};


