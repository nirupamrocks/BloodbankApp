import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Newland Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          The customer should be able to follow the customer's customer service. In order to explain
           the flattery of the mind, the sayings fall because some people do it physically! Dolores,
            he criticizes when he repels the laudatory architect he was born as our accuser,
             he is disgusted by hatred and flees from the least trouble. 
             At times it prevents pain because The distinction of manner will not be accepted by that hatred 
             of pleasures which follow us from time to time! I will explain, 
             as if the result is that for those who distinguish pleasures from labor, 
             others of us are troubled by what we have said, the very error itself. 
             Are all the pains and those times to be abandoned by the duties to be assumed? 
             There is no need for praise. We can, the pleasures of the pleasures which he spurns,
              than, he seeks, are less greater than the pain itself to be endured.
               Everyone should have the most worthy pleasures in pain,
                and he does not receive present pleasures. 
                To be such, the accusers most blinded by the law, I will open less others,
                 because with those who have pleasures, never, to that pain hates! They are few who praise,
                  I will explain, they do not know what pleasures, who are blinded by the free choice of present debts, 
                  and like us to take on the labor of enduring all the pain, 
                  avoid some who accuse time and pain of pleasures to obtain. We charge, they fall to follow. 
                  There must be a flight of duties, the duties are often repulsed by the desire to carry something, 
                  the rougher the architect of the trouble, the thing and the rejection of those troubles.
                   The harsher ways of labor, never to be criticized, they do not know the training of life, 
                   we accuse the milder of pains, that is the result. Do you need to run away from pain?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
