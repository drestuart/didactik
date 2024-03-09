import { useEffect, useState } from "react";
import { Mentor, getMentorById, mentorDefault } from "../api/api";
import { Link, useParams } from "react-router-dom";
import avatar from '../images/avatar.webp';

export function MentorPage() {

    const [mentor, setMentor] = useState<Mentor>(mentorDefault);

    let { mentor_id } = useParams();
    const mentorId: number = Number(mentor_id);
    let categoryRows: JSX.Element[] = [];

    useEffect(() => {
      getMentorById(mentorId).then(
            result => {
              setMentor(result);
            });
    }, [mentorId]);

    mentor.categories.forEach( (c) => {
      categoryRows.push(<p key={c}>{c}</p>)
    });

    return (
      <div id="MentorPage">
        <div id="MentorAvatar">
          <img src={avatar} alt="avatar placeholder"/>
        </div>
        <div id="MentorInfo">
          <p>{mentor.firstName} {mentor.lastName}</p>
          <p>{mentor.email}</p>
          <p>{mentor.phone}</p>
          <p>
            {mentor.firstName} is {mentor.availableStatus ? '' : ' not'} available for mentoring.
          </p>
          {mentor.availableStatus ?
            <div>
              <p>
                {mentor.firstName} is an expert on the following subjects:
              </p>
              {categoryRows}
            </div>
          : <div></div>}
          <Link to={`/mentor/${mentor.id}/edit`}>Edit</Link>
        </div>
      </div>
    );
}
