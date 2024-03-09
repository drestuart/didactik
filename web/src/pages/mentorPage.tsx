import { useEffect, useState } from "react";
import { Mentor, getMentorById } from "../api/api";
import { useParams } from "react-router-dom";

export function MentorPage() {

    const [mentor, setMentor] = useState<Mentor>();

    let { mentor_id } = useParams();
    const mentorId: number = Number(mentor_id);

    useEffect(() => {
      getMentorById(mentorId).then(
            result => setMentor(result));
    },[mentorId]);
    
    return (
      <div className="MentorPage">
        <p>{mentor?.username}</p>
        <p>{mentor?.email}</p>
        <p>{mentor?.firstName}</p>
        <p>{mentor?.lastName}</p>
      </div>
    );
}
