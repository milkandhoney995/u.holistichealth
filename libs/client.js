import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "utanoharada",
    apiKey: process.env.API_KEY,
});
