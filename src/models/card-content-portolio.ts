import {StackContent} from "@/models/stack-content";

export interface CardContentPortolio {
    name: string,
    description: string,
    date: string,
    imgRedirect: string,
    redirectUrl: string,
    stacks: StackContent[],
    flags: [],
}