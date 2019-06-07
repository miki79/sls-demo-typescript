import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import 'source-map-support/register';

interface ResponseExample {
  data: string;
  pathRequest: string;
}

export const getExample = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const response: ResponseExample = {
    data: 'Test TypeScript',
    pathRequest: event.path,
  };
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
