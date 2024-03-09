
export interface Mentor {
    'id': number
    'username': string
    'firstName': string
    'lastName': string
    'email': string
    'phone': string
    'availableStatus': boolean
    'categories': string[]
}

export const mentorDefault: Mentor = {
    id: 0,
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    availableStatus: false,
    categories: []
}

export function getAllMentors(): Promise<Mentor[]> {
    return fetch("http://127.0.0.1:5000/mentors")
        .then(res => res.json()).then(res => {
            return res as Mentor[]
          });
}

export function getMentorById(mentor_id: number): Promise<Mentor> {
    return fetch(`http://127.0.0.1:5000/mentor/${mentor_id}`)
        .then(res => res.json()).then(res => {
            return res as Mentor
          });
}

export function updateMentor(mentor: Mentor): Promise<Response> {
    const options = {
        body: JSON.stringify(mentor),
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(`http://127.0.0.1:5000/mentor/${mentor.id}`, options)
        .then(res => {
            return res
        });
}

