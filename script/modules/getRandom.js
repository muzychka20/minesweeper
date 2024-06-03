const getRandom = {
    getRandomIntInclusive: (min, max) => {
        const minCeiled = Math.ceil(min)
        const maxFloored = Math.floor(max)
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
    }
}

export const getRandomIntInclusive = getRandom.getRandomIntInclusive