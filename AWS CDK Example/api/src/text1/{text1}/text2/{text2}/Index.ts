import type { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const handler: APIGatewayProxyHandler = async (event, context) => {
    try {
        console.log(event);
        return {
            statusCode: 200,
            body: JSON.stringify({
                text1: event.pathParameters!['text1'],
                text2: event.pathParameters!['text2'],
            }),
        };
    } catch (e) {
        console.error(e);
        return {
            statusCode: 500,
            body: '',
        };
    }
};
export default handler;
