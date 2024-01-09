import {useEffect, useState} from "react";
import searchIcon from '../assets/search.svg'
import {Link} from "react-router-dom";
interface IArticle {
    id: string,
    title: string,
    author: string,
    body: string,
}
export default function ResultPage() {
    const [data, setData] = useState<Array<IArticle>>([]);
    const [filtered, setFiltered] = useState<Array<IArticle>>([]);
    const [searchValue, setSearchValue] = useState<string>("")
    useEffect(() => {
        fetch(
            // 'http://localhost:3000/articles'
            "https://my-json-server.typicode.com/AndikanAffiah/json-server/articles"
        )
            .then((response) => response.json())
            .then((json: Array<IArticle>) => {
                setData(json)
                setFiltered(json)
            });
    }, []);

    useEffect(()=>{
        handleSearch()
    }, [searchValue])

    function handleSearch(){
        const value:string = searchValue.toLowerCase()
        setFiltered(data.filter((item:IArticle) => {
            if(item.title.toLowerCase().includes(value) || item.author.toLowerCase().includes(value)){
                return item
            }
        }))
    }
    return (
        <div className={"relative"}>
            <div className={"sticky top-0 bg-emerald-100 py-10 flex justify-center items-center gap-6 z-20"}>
                <div className={"flex justify-center items-center"}>
                    <input
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                        type={"search"}
                        placeholder={"Search by author name or title "}
                        className={"border-2 border-gray-500 rounded-2xl p-4 text-xl w-[500px]"}
                    />
                    <div className={"cursor-pointer -ml-12"}>
                        <img src={searchIcon} alt={""} width={40} onClick={handleSearch}/>
                    </div>
                </div>
                <div>
                    <Link to={"/create/new"}>
                        <button className={"border border-black px-6 py-4 rounded-xl hover:text-white hover:bg-black transition-all duration-300"}>
                            Create Article
                        </button>
                    </Link>
                </div>

            </div>
            <div className={"relative px-16"}>
                <div className={"text-5xl my-6 bg-white py-6 sticky top-36"}>Results:</div>
                {
                    filtered.map((item: IArticle, index: number) => {
                        return (
                            <div key={index} className={"border-2 border-gray-300 hover:bg-gray-300/30 hover:cursor-pointer rounded-xl p-4 mb-4"}>
                                <div className={"text-2xl font-medium capitalize mb-1"}>
                                    Title: {item.title}
                                </div>
                                <div> { item.body }</div>
                                <div className={"text-sm text-gray-500"}>{item.author}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}