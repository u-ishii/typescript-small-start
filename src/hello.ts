import colors from 'ansi-colors'

const hello = (name: string): string => {
    return colors.red(`Hello, ${name}!`)
}

export { hello }