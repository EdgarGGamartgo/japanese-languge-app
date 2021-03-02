export const userData = {
    id: '1',
    name: 'Edgar',
    targetLanguage: '日本語',
    totalHoursStudied: 100,
    lastStudyDate: new Date(),
    initialStudyDate: new Date(2019, 2, 1).toDateString()
}

export const mainMsg = `You have been studying ${userData.targetLanguage} for 
${userData.totalHoursStudied} hours since ${userData.initialStudyDate},
let's keep it up!`