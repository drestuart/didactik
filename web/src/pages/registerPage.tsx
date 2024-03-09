import { FormEvent, useEffect, useState } from "react";
import { Mentor, createMentor, getMentorById, mentorDefault, updateMentor } from "../api/api";
import { trimQuotes } from "../util";
import { useNavigate } from "react-router-dom";

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
            err = trimQuotes(err);
            setErrorMessage(err);
          })
        }
      });

      e.preventDefault();
    }
    
    return (
      <div className="RegisterPage">
        <form onSubmit={e => { handleSubmit(e) }}>
          <p className="error">{errorMessage}</p>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor='username'>Username</label></td>
                <td><input id='username' name='username' type='text' value={username} onChange={e => setUsername(e.target.value)}/></td>
              </tr>
              <tr>
                <td><label htmlFor='firstName'>First Name</label></td>
                <td><input id='firstName' name='firstName' type='text' value={firstName} onChange={e => setFirstName(e.target.value)}/></td>
              </tr>
              <tr>
                <td><label htmlFor='lastName'>Last Name</label></td>
                <td><input id='lastName' name='lastName' type='text' value={lastName} onChange={e => setLastName(e.target.value)}/></td>
              </tr>
              <tr>
                <td><label htmlFor='email'>Email</label></td>
                <td><input id='email' name='email' type='text' value={email} onChange={e => setEmail(e.target.value)}/></td>
              </tr>
              <tr>
                <td><label htmlFor='phone'>Phone</label></td>
                <td><input id='phone' name='phone' type='text' value={phone} onChange={e => setPhone(e.target.value)}/></td>
              </tr>
              <tr>
                <td><label htmlFor='availableStatus'>Available</label></td>
                <td><input id='availableStatus' name='availableStatus' type='checkbox' checked={availableStatus} onChange={e => setAvailableStatus(e.target.checked)}/></td>
              </tr>
              <tr>
                <td><label htmlFor='categories'>Categories</label></td>
                <td><input id='categories' name='categories' type='text' value={categories} onChange={e => setCategories(e.target.value)}/></td>
              </tr>
            </tbody>
          </table>
          <input 
            type='submit' 
            value='Update' 
          />
        </form>
      </div>
    );
}
