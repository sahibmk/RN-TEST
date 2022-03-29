export const avatarText = (name) => {
    let arr = name.split(' ');
    if (arr.length > 1) return arr[0][0] + arr[1][0];
    return name[0] + name[1];
}