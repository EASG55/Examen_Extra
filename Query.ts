import {GraphQLError} from "graphql";
import {Character, Origin, Location} from "./types.ts";

export const Query = {
    character: async (_:unknown, args: {id: string}): Promise<Character> => {

        const res = await fetch(`https://rickandmortyapi.com/api/character/${args.id}`)

        if(!res){throw new GraphQLError("error")};

        const charac_data = await res.json();

        console.log(charac_data);

        return charac_data;
    },

    charactersByIds: async(_:unknown, args: {ids: string[]}): Promise<Character> => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/[${args.ids}]`);

        if(!res){throw new GraphQLError("error")};

        const charac_data = await res.json();

        console.log(charac_data);

        return charac_data;

    }
}