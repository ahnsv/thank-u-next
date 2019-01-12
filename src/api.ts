import axios from 'axios'
interface projectPayload {
    name?: string
    description?: string
    updated_at?: string
    language?: string
    stargazers_count?: number
    git_url?: string
}

export function getMostCommittedRepos() {
    let repos = []
    axios.get('https://api.github.com/users/ahnsv/repos?sort=updated')
        .then(
            ({ data }) => repos.push(data)
        ).catch(err => { throw err })
    return repos.filter((index: number) => {
        if (index < 6) return true;
        return false;
    }).map(val => { return <projectPayload>val.json })
}
