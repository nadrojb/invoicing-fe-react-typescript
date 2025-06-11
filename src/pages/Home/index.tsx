import { Link } from "react-router";


function Home() {



    return (
        <>
            <section>
                <Link to={"/login"} className={"bg-blue-500 text-white w-28 h-10 text-lg hover:bg-blue-400 cursor-pointer transition ease-in-out duration-150\""}>
                    Login
                </Link>
                <button className={"bg-blue-500 text-white w-28 h-10 text-lg hover:bg-blue-400 cursor-pointer transition ease-in-out duration-150"}>
                    Register
                </button>
            </section>
        </>
    )
}

export default Home