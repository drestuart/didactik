import { Link } from "react-router-dom";
import { Mentor } from "../api/api";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface MentorTableProps {
    mentors: Mentor[];
}

export function MentorTable(props: MentorTableProps) {

    let rows: JSX.Element[] = [];

    props.mentors.forEach((m) => {
        rows.push(
          <TableRow key={m.id}>
            <TableCell><Link to={`/mentor/${m.id}`}>{m.username}</Link></TableCell>
            <TableCell>{m.firstName}</TableCell>
            <TableCell>{m.lastName}</TableCell>
            <TableCell>{m.email}</TableCell>
            <TableCell>{m.phone}</TableCell>
            <TableCell>{m.availableStatus ? "Yes" : "No"}</TableCell>
            <TableCell>{m.categories.join(", ")}</TableCell>
          </TableRow>
        );
    });

    return (
      props.mentors.length ?
      (<div className="MentorTable">
        <div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Username</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Available</TableCell>
                  <TableCell>Categories</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>) : null
    );

}
