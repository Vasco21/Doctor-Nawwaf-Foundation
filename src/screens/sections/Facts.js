import React, { useState, useEffect} from "react";
import { Section } from "../../Styles/global";
import bgImage from "../../images/facts_bg.jpg";


const Facts = () => {
  const API_URL = "https://vasco21.github.io/CPO-API/mymembers.json"

  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => fetchItems(), 2000);

  }, [])

  return (
    <Section id='facts' accent>
      <div className='facts-container'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
      {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <div

      />}
        <div className='container pt-5 pb-4'>
          <div className='row'>
            <div className='col-sm-6 col-md-3 text-center mb-5'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-users' />
              </div>
             <h4 className='facts-counter text-light'>{items.length}</h4>
              <h5 className='facts-title text-light'>Active Members</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-grin-beam' />
              </div>
              <h4 className='facts-counter text-light'>3</h4>
              <h5 className='facts-title text-light'>Happy Clients</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-project-diagram' />
              </div>
              <h4 className='facts-counter text-light'>0</h4>
              <h5 className='facts-title text-light'>Total Projects</h5>
            </div>
            <div className='col-sm-6 col-md-3 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-trophy' />
              </div>
              <h4 className='facts-counter text-light'>0</h4>
              <h5 className='facts-title text-light'>Awards</h5>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Facts;
