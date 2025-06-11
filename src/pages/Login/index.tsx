import axios from 'axios'
import { useState } from 'react';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login', {
            email,
            password,
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <section>
                <div>
                    <form onSubmit={handleSubmit} className="w-10/12 mx-auto">
                        <div>
                            <input
                                required
                                className={`w-full border border-gray-300  pt-5 pb-1 px-2 mt-3 rounded-sm}`}
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label
                                className="relative -top-12 left-2 text-sm text-gray-500"
                            >
                                email
                            </label>
                        </div>
                        <div>
                            <input
                                required
                                className={`w-full border border-gray-300  pt-5 pb-1 px-2 mt-3 rounded-sm}`}
                                type="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label
                                className="relative -top-12 left-2 text-sm text-gray-500"
                            >
                                password
                            </label>
                        </div>
                        <div>
                            <input type="submit" placeholder={'login'} className={"bg-blue-500 text-white w-28 h-10 text-lg hover:bg-blue-400 cursor-pointer transition ease-in-out duration-150"} />
                        </div>
                    </form>
                </div>

            </section>
        </>
    )
}

export default Login