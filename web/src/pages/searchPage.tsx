import { FormEvent, useState } from "react";
import { Mentor, searchMentors } from "../api/api";
import { MentorTable } from "../components/mentorTable";
import { Button, Input } from "@mui/material";

export function SearchPage() {

    const [categories, setCategories] = useState<string>('');
    const [mentors, setMentors] = useState<Mentor[]>([]);

    // Query for mentors matching the category list
    const handleSubmit = (e: FormEvent) => {
      const categoriesArray: string[] = categories.split(/ *, */);

      searchMentors(categoriesArray)
        .then(res => {
          setMentors(res);
        });

      e.preventDefault();
    }

    return (
      <div id="SearchPage">
        <div className="page_content">
          <form onSubmit={e => { handleSubmit(e) }}>
            <div className="form_container">
              <label htmlFor='categories'>Categories</label><br/>
              <Input id='categories' name='categories' type='text' value={categories} onChange={e => setCategories(e.target.value)}/>
            </div>
            <Button
              variant="contained"
              type='submit'>
                Search
            </Button>
          </form>
          <MentorTable mentors={mentors} />
        </div>
      </div>
    );
}
