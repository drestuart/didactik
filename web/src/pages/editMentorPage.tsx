import { FormEvent, useEffect, useState } from "react";
import { deleteMentor, getMentorById, updateMentor } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { trimQuotes } from "../util";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

export function EditMentorPage() {

    const [username, setUsername] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [availableStatus, setAvailableStatus] = useState<boolean>(false);
    const [categories, setCategories] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    let { mentor_id } = useParams();
    const mentorIdNum: number = Number(mentor_id);

    const navigate = useNavigate();

    useEffect(() => {
      getMentorById(mentorIdNum).then(
        result => {
          setUsername(result.username);
          setFirstName(result.firstName);
          setLastName(result.lastName);
          setEmail(result.email);
          setPhone(result.phone);
          setAvailableStatus(result.availableStatus);
          setCategories(result.categories.join(", "));
        }
      );
    },[mentorIdNum]);

    const handleSubmit = (e: FormEvent) => {
      const categoriesArray: string[] = categories.split(/ *, */);

      updateMentor({
        id: mentorIdNum,
        username,
        firstName,
        lastName,
        email,
        phone,
        availableStatus,
        categories: categoriesArray
      }).then(async (res) => {
        if (res.status === 204) {
          setErrorMessage('');
          navigate(`/mentor/${mentorIdNum}`);
        }
        else {
          res.text().then( (err) => {
            setErrorMessage(trimQuotes(err));
          })
        }
      });

      e.preventDefault();
    }

    const handleDelete = () => {
      if (confirm("Are you sure you want to delete this mentor?")) { // eslint-disable-line no-restricted-globals
        deleteMentor(mentorIdNum)
        .then(() => {
          navigate("/mentors");
        });
      }
    }

    return (
      <div id="EditMentorPage">
        <div className="page_content">
          <form onSubmit={e => { handleSubmit(e) }}>
            <p className="error">{errorMessage}</p>
            <div className="form_container">
              <table>
                <tbody>
                  <tr>
                    <td><TextField id='username' label="Username" value={username} onChange={e => setUsername(e.target.value)} variant="outlined"/></td>
                  </tr>
                  <tr>
                    <td><TextField id='firstName' label="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} variant="outlined"/></td>
                  </tr>
                  <tr>
                    <td><TextField id='lastName' label="Last Name"  value={lastName} onChange={e => setLastName(e.target.value)} variant="outlined"/></td>
                  </tr>
                  <tr>
                    <td><TextField id="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} variant="outlined"/></td>
                  </tr>
                  <tr>
                    <td><TextField id="phone" label="Phone" value={phone} onChange={e => setPhone(e.target.value)} variant="outlined"/></td>
                  </tr>
                  <tr>
                    <td>
                      <FormControlLabel id='availableStatus' label="Available" control={
                        <Checkbox checked={availableStatus} onChange={(e) => setAvailableStatus(e.target.checked)} />
                      }/>
                    </td>
                  </tr>
                  <tr>
                    <td><TextField id='categories' label="Categories" value={categories} onChange={e => setCategories(e.target.value)} variant="outlined"/></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Button
              variant="contained"
              type='submit'>
                Update
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleDelete}>
                Delete
            </Button>
          </form>
        </div>
      </div>
    );
}
