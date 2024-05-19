function createUserProfiles(namesArr, modifiedNamesArr) {
    let id = 1;
    return namesArr.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNamesArr[index],
            id: id++
        };
    });
}

// Example usage:
const originalNames = ["Alice", "Bob", "Charlie"];
const modifiedNames = ["alice", "BOB", "charlie"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);