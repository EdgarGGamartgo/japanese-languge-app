export const ValidateMinLength = (text: string, minLength: number) => {
    return text.length < minLength && text.length !== 0 ?  true : false
}

