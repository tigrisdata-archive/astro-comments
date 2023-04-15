import {
    Field,
    PrimaryKey,
    SearchField,
    Tigris,
    TigrisCollection,
    TigrisDataTypes
} from "@tigrisdata/core";

@TigrisCollection("comments")
class Comment {
    @PrimaryKey(TigrisDataTypes.UUID, { order: 1, autoGenerate: true })
    id?: string;

    @Field()
    message!: string;

    @Field()
    @SearchField({ facet: true, sort: true })
    slug!: string;

    @Field(TigrisDataTypes.DATE_TIME)
    @SearchField({ sort: true })
    createdAt?: Date;

    @Field()
    name!: string;
}

async function main() {
    // setup client
    const tigrisClient = new Tigris({
        branch: "main",
        projectName: "YOUR_TIGRIS_PROJECT_NAME",
        clientId: "YOUR_TIGRIS_CLIENT_ID",
        clientSecret: "YOUR_TIGRIS_CLIENT_SECRET",
    });
    // ensure branch exists, create it if it needs to be created dynamically
    await tigrisClient.getDatabase().initializeBranch();
    // register schemas
    await tigrisClient.registerSchemas([Comment]);
}

main()
    .then(async () => {
        console.log("Setup complete ...");
        process.exit(0);
    })
    .catch(async (e) => {
        console.error(e);
        process.exit(1);
    });