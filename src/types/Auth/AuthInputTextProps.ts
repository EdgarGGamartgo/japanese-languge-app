export interface AuthInputTextProps {
    text: string
    textHandler: (text: string) => void
    textValue: string
    placeHolder: string
}

export interface ScreenLayout {
    title: string
    firstText: string
    secondText: string
    noticeText: string
    buttonTitle: string
    secondButtonTitle: string
}

export interface AuthCredentials {
    name: string
    password: string
}

export interface AuthLayout {
    layout: ScreenLayout
    changeLayout: (layout: ScreenLayout) => void
}