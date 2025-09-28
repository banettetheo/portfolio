import {StackContent} from "@/models/stack-content";

export interface CardContentPortolio {
    enName: string,
    frName: string,
    enDescription: string,
    frDescription: string,
    enDate: string,
    frDate: string,
    imgRedirect: string,
    redirectUrl: string,
    stacks: StackContent[],
    flags: [],
}