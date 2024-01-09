import {Link} from "react-router-dom";

export default function CreateArticle(){
    function handleSubmit(e:SubmitEvent){
        e.preventDefault()
        fetch(
            // 'http://localhost:3000/articles'
            "/create/new",
            {
                method: "POST"
            }
        )
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
            });
        return

    }
    return (
        <div className={"relative"}>
            <div className={"sticky top-0 bg-emerald-100 py-10 flex justify-center items-center gap-6 z-20"}>
                <div>
                    <Link to={"/"}>
                        <button
                            className={"border border-black px-6 py-4 rounded-xl hover:text-white hover:bg-black transition-all duration-300"}>
                            View Articles
                        </button>
                    </Link>
                </div>
            </div>
            <form className={"relative px-16"}>
                <div className={"text-5xl text-center my-6 bg-white py-6 sticky top-36"}>Create Article</div>
                <div className={"flex justify-center "}>
                    <div className={"border-2 border-gray-800 p-6 rounded-2xl"}>
                        <div className={"my-4"}>
                            <input placeholder={"Author Name"} className={"border-2 border-gray-400 min-w-96 p-4 rounded-lg"}/>
                        </div>
                        <div className={"my-4"}>
                            <input placeholder={"Author Email"} className={"border-2 border-gray-400 min-w-96 p-4 rounded-lg"}/>
                        </div>
                        <div className={"my-4"}>
                            <textarea rows={5} placeholder={"Write content here"}
                                      className={"border-2 border-gray-400 min-w-96 p-4 rounded-lg"}/>
                        </div>
                        <div className={"my-4 min-w-96 flex justify-end"}>
                            <button onClick={handleSubmit} className={"bg-black text-white hover:bg-transparent hover:text-black border-2 border-black px-6 py-2 rounded-xl"}>Submit</button>
                        </div>


                    </div>

                </div>
            </form>
        </div>
    )
}