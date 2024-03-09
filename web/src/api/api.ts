
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

