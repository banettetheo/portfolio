import {StackContent} from "@/models/StackContent";

export interface CardContentPortolio {
    name: string,
    description: string,
    date: string,
    imgRedirect: string,
    redirectUrl: string,
    stacks: StackContent[],
    flags: [],
}