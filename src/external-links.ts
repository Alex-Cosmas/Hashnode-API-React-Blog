export function HashnodeBaseUrl(): string {
    return 'https://alexcosmas.hashnode.dev/'
};
export function TwitterUrl(): string {
    return 'https://twitter.com/AlCosmas/'
};
export function GitHubUrl(): string {
    return 'https://github.com/AlexCsmas/'
};
export function HashnodeArticleUrl(resource: string) : string {
    return `${HashnodeBaseUrl()}${resource}`
}