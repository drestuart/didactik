import { Mentor } from "../api/api";

interface MentorTableProps {
    mentors: Mentor[];
}

export function MentorTable(props: MentorTableProps) {

    console.log(props.mentors);

    let names: JSX.Element[] = [];

    props.mentors.forEach((m) => {
        names.push(<p>{m.firstName}</p>)
    });
  
    return (
      <div className="MentorTable">
        <div>
          <p>lol</p>
          {names}
        </div>
      </div>
    );

}
