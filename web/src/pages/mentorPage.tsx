import { useEffect, useState } from "react";
import { Mentor, getMentorById, mentorDefault } from "../api/api";
import { useParams } from "react-router-dom";
import avatar from '../images/avatar.webp';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";

export function MentorPage() {

    const [mentor, setMentor] = useState<Mentor>(mentorDefault);

    let { mentor_id } = useParams();
    const mentorId: number = Number(mentor_id);
    let categoryRows: JSX.Element[] = [];

    // Get info on this mentor
    useEffect(() => {
      getMentorById(mentorId).then(
            (result) => {
              if (result.categories !== undefined) {
                setMentor(result);
              }
            });
    }, [mentorId]);

    mentor.categories.forEach( (c) => {
      categoryRows.push(<Typography key={c}>{c}</Typography>)
    });

    return (
      <div id="MentorPage">
        <div id="MentorAvatar">
          <img src={avatar} alt="avatar placeholder"/>
        </div>
        <div>
          <TableContainer component={Paper} id="MentorInfo">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>{mentor.firstName} {mentor.lastName}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>{mentor.email}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>{mentor.phone}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>{mentor.firstName} is {mentor.availableStatus ? '' : ' not'} available for mentoring.</Typography>
                  </TableCell>
                </TableRow>
                {mentor.availableStatus ?
                  <TableRow>
                    <TableCell>
                      <Typography>{mentor.firstName} is an expert on the following subjects:</Typography>
                        {categoryRows}
                    </TableCell>
                  </TableRow>
                : <TableRow></TableRow>}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            href={`/mentor/${mentor.id}/edit`}>
              Edit
          </Button>
        </div>
      </div>
    );
}
