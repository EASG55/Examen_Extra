import {Character} from "./types.ts";

export const Character = {
    origin: async (parent: Character): Promise<{name: string, url: string}> => {
        if (parent.origin) {
          return{
            name: parent.origin.name,
            url: parent.origin.url
          }
        }
      },
      location: async (parent: Character): Promise<{name: string, url: string}> => {
        if (parent.location) {
            return{
              name: parent.location.name,
              url: parent.location.url
            }
          }
      },
}