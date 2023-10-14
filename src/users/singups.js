import { useState } from "react";

function singups() {
      const [username, setUsername] = useState("")
    const [password, setPasword] = useState("")
    const [name, setName] = useState("")

    function handleform(e) {
        const main = new index();
        const formdata = { password, name, username, confirmpasword, email, phone }
        const response = main.fetchsignup(formdata);
        response.then((res) => {
            if (res.data.status) {
                toast.success(res && res.data && res.data.msg);
            } else {
                toast.error(res && res.data && res.data.msg);
            }
            console.log(res);
        }).catch((err) => {
            const error = err.errors;
            console.log(error);

        });
    }
    return (
        <section id="reg">
        <div className="container">
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-6 mr-2">
                    <Form >
                        <h2 >Registration</h2>
                       
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">

                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                placeholder="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text"
                                value={password}
                                onChange={(e) => { setPasword(e.target.value) }}
                                placeholder="Pasword" />
                        </Form.Group>
                       

                        <Link to="/login">   
                          <Button variant="primary" className='form-control' onClick={handleform}  >
                            Submit
                        </Button></Link>

                    </Form>
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>

    </section>
    );
}

export default singups;