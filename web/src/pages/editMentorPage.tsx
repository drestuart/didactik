import { FormEvent, useEffect, useState } from "react";
import { Mentor, getMentorById, mentorDefault, updateMentor } from "../api/api";
import { useParams } from "react-router-dom";

export function EditMentorPage() {

    const [mentor, setMentor] = useState<Mentor>(mentorDefault);
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

    useEffect(() => {
      getMentorById(mentorIdNum).then(
        result => {
          setMentor(result);
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
      
      const res = updateMentor({
        id: mentorIdNum,
        username,
        firstName,
        lastName,
        email,
        phone,
        availableStatus,
        categories: categoriesArray
      }).then(async (res) => {
        // console.log(res.text());
        // console.log(res.status);

        if (res.status === 204) {
          setErrorMessage('');
        }
        else {
          let err: string = await res.text();
          setErrorMessage(err);
        }

        console.log(errorMessage);
      });

      e.preventDefault();
    }
    
    return (
      <div className="EditMentorPage">
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
