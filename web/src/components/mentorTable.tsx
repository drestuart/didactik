import { Link } from "react-router-dom";
import { Mentor } from "../api/api";

interface MentorTableProps {
    mentors: Mentor[];
}

export function MentorTable(props: MentorTableProps) {

    let rows: JSX.Element[] = [];

    props.mentors.forEach((m) => {
        rows.push(
          <tr>
            <td><Link to={`/mentor/${m.id}`}>{m.username}</Link></td>
            <td>{m.firstName}</td>
            <td>{m.lastName}</td>
            <td>{m.email}</td>
            <td>{m.phone}</td>
            <td>{m.availableStatus ? "Yes" : "No"}</td>
            <td>{m.categories.join(", ")}</td>
          </tr>
        );
    });

    return (
      <div className="MentorTable">
        <div>
          <table>
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Available</th>
              <th>Categories</th>
            </tr>
            {rows}
          </table>
        </div>
      </div>
    );

}
