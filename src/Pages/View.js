import '../App.css';
import { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Footer from "../Components/Footer";
import { database } from '../firebaseConfig';
import Header from '../Components/Header';
// import { getAuth } from 'firebase/auth';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';


function View() {

  const [array, setArray] = useState([]);
  // const [data, setData] = useState({
  //   name: '',
  //   email: '',
  //   password: ''
  // });

  const [loading, setLoading] = useState(false)

  const getData = async () => {
    setLoading(true);
    const data = await getDocs(dbInstance)
    setArray(data.docs.map((item) => {
      return { ...item.data(), id: item.id }
    }))
    setLoading(false);

  };

  let history = useHistory();

  useEffect((getData = getData) => {

    const token = localStorage.getItem("user-info")
    if (token == null) {
      history.push("/login");
    }
    getData()
  }, [history])

  // const auth = getAuth();
  const dbInstance = collection(database, 'users')
  // const handleInputs = (event) => {
  //   let inputs = { [event.target.name]: event.target.value }

  //   setData({ ...data, ...inputs })
  // }


  const deleteData = (id) => {

    let dataToDelete = doc(database, 'users', id)
    deleteDoc(dataToDelete)
      .then(() => {
        // alert('Data Deleted')
        getData()
      })

      .catch((err) => {
        alert(err)
      })
  }


  return (

    <>
      <Header />
      <div className="App">





        <div class="container p-5">
          <Container>
            {loading ? <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
              <LinearProgress color="secondary" />
              <LinearProgress color="success" />
              <LinearProgress color="inherit" />
            </Stack> :

              <div className="container-fluid">
                <div className="row">
                  {array.map((item) => {
                    return (
                      <div className="col-md-4 col-sm-6  mt-3">
                        <div className="card bg-black text-white p-2">

                          <h6>Name :- <span style={{ fontWeight: "300" }}>{item.name}</span></h6>
                          <h6>Email :- <span style={{ fontWeight: "300" }}>{item.email}</span></h6>
                          <h6>Password :- <span style={{ fontWeight: "300" }}>{item.password}</span></h6>
                          <Button variant="warning" onClick={() => deleteData(item.id)}>Delete</Button>

                        </div>
                      </div>
                    )

                  })}

                  <div className="container">
                    <br />

                  </div>
                </div>
              </div>

            }
          </Container>


        </div>



      </div>
      <Footer />
    </>
  );
}

export default View;
