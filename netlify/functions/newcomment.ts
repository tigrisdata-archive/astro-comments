import { Tigris } from "@tigrisdata/core"
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {

    let redirectUrl = event.rawUrl

    const form = event.queryStringParameters;

    if (form) {
        const tigrisClient = new Tigris();
        const db = tigrisClient.getDatabase();
        const collection = await db.getCollection("comments");

        const savedComment = await collection.insertOne({
            name: form["name"],
            slug: form["slug"],
            message: form["message"]
        });

        redirectUrl = `/blog/${form["slug"]}`
    }

    return {
        statusCode: 302,
        headers: {
            location: redirectUrl,
            'Cache-Control': 'no-cache',
        },
        body: JSON.stringify({}),
    }
};

export { handler };
