import { useEffect, useState } from "react";
import { Mentor, getAllMentors } from "../api/api";
import { MentorTable } from "../components/mentorTable";

export function MentorsPage() {

    const [mentors, setMentors] = useState<Mentor[]>([]);

    // Get all mentor entries
    useEffect(() => {
        getAllMentors().then(
            result => setMentors(result));
    },[]);

    return (
      <div id="MentorsPage">
        <MentorTable mentors={mentors} />
      </div>
    );
}
