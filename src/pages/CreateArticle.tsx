import {Link} from "react-router-dom";
import {useState} from "react";
interface IArticleFormData {
    name: string,
    email: string,
    title: string,
    body: string,
}
export default function CreateArticle(){

    const [state, setState] = useState<IArticleFormData>({});
    const [loadingState, setLoadingState] = useState(false);

    // function handleChange(e: InputEvent){
    //     setState((prev)=>{...})
    // }
    function handleSubmit(){
        fetch(
            // 'http://localhost:3000/articles'
            "https://my-json-server.typicode.com/AndikanAffiah/json-server/create",
            // "/create/new",
            {
                method: "POST",
                body: JSON.stringify(state)
            }
        )
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
            });

    }
    return (
        <div className={"relative bg-grid-dot"}>
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
            <div className={"relative px-16"}>
                <div className={"text-5xl text-center my-6 bg-white py-6 sticky top-36"}>Create Article</div>
                <div className={"flex justify-center "}>
                    <div className={"border-2 border-gray-800 p-6 rounded-2xl"}>
                        <div className={"my-4"}>
                            <input onChange={(e) => setState({...state, name: e.target.value})}
                                   placeholder={"Author Name"}
                                   className={"border-2 border-gray-400 min-w-96 p-4 rounded-lg"}/>
                        </div>
                        <div className={"my-4"}>
                            <input onChange={(e) => setState({...state, email: e.target.value})}
                                   placeholder={"Author Email"}
                                   className={"border-2 border-gray-400 min-w-96 p-4 rounded-lg"} type={"email"}/>
                        </div>
                        <div className={"my-4"}>
                            <input onChange={(e) => setState({...state, title: e.target.value})}
                                   placeholder={"Title"}
                                   className={"border-2 border-gray-400 min-w-96 p-4 rounded-lg"}/>
                        </div>
                        <div className={"my-4"}>
                            <textarea onChange={(e) => setState({...state, body: e.target.value})} rows={5}
                                      placeholder={"Write content here"}
                                      className={"border-2 border-gray-400 min-w-96 p-4 rounded-lg"}/>
                        </div>
                        <div className={"my-4 min-w-96 flex justify-end"}>
                            <button onClick={handleSubmit}
                                    className={"inline-flex items-center bg-black text-white hover:bg-transparent hover:text-black border-2 border-black px-6 py-2 rounded-xl"}>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                    <path className="opacity-75" fill="currentColor"
                                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Create
                            </button>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}