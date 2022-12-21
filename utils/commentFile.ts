export const userColor = ( comment: string ) => {
    let user = comment.split( " " );
    let [ name, ...commentUser ] = user;

    return { 
        user: user[0],
        comment: commentUser.join(" ")
    }
}