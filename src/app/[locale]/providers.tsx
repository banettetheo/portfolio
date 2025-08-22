'use client'

import {PropsWithChildren} from "react";
import {I18nProviderClient} from "@/locales/client";
import {ThemeProvider} from "@/components/theme-provider";

export const Providers = (props: PropsWithChildren<{locale: string}>) => {
    return(
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <I18nProviderClient locale={props.locale}>
                {props.children}
            </I18nProviderClient>
        </ThemeProvider>)
}