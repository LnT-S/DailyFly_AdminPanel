import React, { createContext, useContext, useReducer } from 'react'
import AuthenticatedLayout from '../common/layout/AuthenticatedLayout'

const Context = createContext()

const Screen = (props) => {

    let initialState = {
        name: 'sh',
        stock: [
            {
                language: 'English',
                category: 'Good Night',
                image: '/uploads/images/images-1698492204988'
            },
            {
                language: 'English',
                category: 'Good Noon',
                image: '/uploads/images/images-1698492204988'
            },
            {
                language: 'English',
                category: 'Good Morning',
                image: '/uploads/images/images-1698492204988'
            },
            {
                language: 'English',
                category: 'Good Morning',
                image: '/uploads/images/images-1698492204988'
            },
            {
                language: 'Hindi',
                category: 'Suprabhaat',
                image: '/uploads/images/images-1698492204988'
            },
            {
                language: 'Hindi',
                category: 'Subhsaam',
                image: '/uploads/images/images-1698492204988'
            },
            {
                language: 'Hindi',
                category: 'subhdopahar',
                image: '/uploads/images/images-1698492204988'
            },
            {
                language: 'Hindi',
                category: 'badhai',
                image: '/uploads/images/images-1698492204988'
            },
            {
                language: 'Marathi',
                category: 'marathi subah',
                image: '/uploads/images/images-1698492204988'
            },
            {
                language: 'Marathi',
                category: 'marathi noon',
                image: '/uploads/images/images-1698492204988'
            },
            {
                language: 'Wallpaper',
                category: 'wallpaper',
                image: '/uploads/images/images-1698492204988'
            },

        ],
        languages: ['hindi', 'english', 'marathi', 'wallpaper'],
        category: {
            hindi: ['Suprabhaat', 'Subhsaam', "subhdopahar", "badhai"],
            english: ['Good Night', 'Good Noon', "Good Morning"],
            marathi: ['marathi noon', 'marathi subah'],
            wallpaper: ['wallpaper'],
        },
        user: [
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },
            {
                avatar: '/uploads/users/avatars/avatar-1704167085881',
                name: 'Shruti Mishra',
                email: 'smishra@gmail.com',
                phoneNo: 1234567891,
                password: '',
                bday: {
                    day: 10,
                    month: 9,
                    year: 2002
                },
                likes: 20,
                shared: 21,
                createdAt: '2023-10 - 28T11:05: 10.144+00:00'
            },

        ],
        level: [
            'Level 0 - Viewer',
            'Level 1 - Uploader',
            'Level 2 - Editor',
            'Level 3 - FullControl'
        ]
    }

    // action = {
    //     type : '' kisse update kare ,
    //     payload : ''value kya hai jo update karni hai
    // }

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case "STOCK": {
                return { ...state, stock: action.payload }
            }
            case "NAME": {
                return { ...state, name: action.payload }
            }
            default: {
                return state
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Context.Provider value={{ state, dispatch }}>
            <div style={{ margin: 0, overflow: 'hidden' }}>
                <AuthenticatedLayout>
                    {props.children || ''}
                </AuthenticatedLayout>
            </div>
        </Context.Provider>
    )
}
export const useContextData = () => {
    const context = useContext(Context)
    if (context === null) {
        throw Error("CONTEXT UNDEFINED")
    }
    return context
}

export default Screen