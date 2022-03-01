import {addPostAC, PostsType, profileReducer, ProfileType} from "./profileReducer";


it ("length of posts should be increment", () => {
    let action = addPostAC("Privet")

    let state= {
        posts: [
            {id: 1, message: 'Hi, how are you?', like: 15},
            {id: 2, message: 'It is my first post', like: 20}
        ] as Array<PostsType>,
        profile: {} as ProfileType,
        status: ''
    }
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
})
