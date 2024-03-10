import { FormEvent, useState } from "react";
import { createMentor } from "../api/api";
import { trimQuotes } from "../util";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

export function RegisterPage() {

    const [username, setUsername] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [availableStatus, setAvailableStatus] = useState<boolean>(false);
    const [categories, setCategories] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent) => {

      const categoriesArray: string[] = categories.split(/ *, */);

      createMentor({
        username,
        firstName,
        lastName,
        email,
        phone,
        availableStatus,
        categories: categoriesArray
      }).then(async (res) => {
        if (res.status === 200) {
          setErrorMessage('');
          res.text().then( (new_id) => {
            navigate(`/mentor/${new_id}`);
          })
        }
        else {
          res.text().then( (err) => {
            setErrorMessage(trimQuotes(err));
          })
        }
      });

      e.preventDefault();
    }

    return (
      <div id="RegisterPage">
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
                Register
            </Button>
          </form>
        </div>
      </div>
    );
}
