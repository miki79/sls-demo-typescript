import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getExample } from '../src/handler';

test('should return false given external link', async () => {
  const event: APIGatewayProxyEvent = {
    body: null,
    headers: {},
    multiValueHeaders: {},
    httpMethod: 'GET',
    isBase64Encoded: false,
    path: '/typescript',
    pathParameters: null,
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    stageVariables: null,
    requestContext: null,
    resource: '/typescript',
  };

  getExample(event).then((data: APIGatewayProxyResult) => {
    expect(data).toHaveProperty('body');
    expect(data).toHaveProperty('statusCode', 200);
  });
});
