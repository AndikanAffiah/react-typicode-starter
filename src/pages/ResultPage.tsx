import {useEffect, useState} from "react";
import searchIcon from '../assets/search.svg'
interface responseData {
    id: string,
    title: string,
    author: string,
    body: string,
}
export default function ResultPage() {
    const [data, setData] = useState<Array<responseData>>([]);
    const [filtered, setFiltered] = useState<Array<responseData>>([]);
    const [searchValue, setSearchValue] = useState<string>("")
    useEffect(() => {
        fetch(
            // 'http://localhost:3000/articles'
            "https://my-json-server.typicode.com/AndikanAffiah/json-server/articles"
        )
            .then((response) => response.json())
            .then((json: Array<responseData>) => {
                setData(json)
                setFiltered(json)
            });
    }, []);

    useEffect(()=>{
        handleSearch()
    }, [searchValue])

    function handleSearch(){
        const value:string = searchValue.toLowerCase()
        setFiltered(data.filter((item:responseData) => {
            if(item.title.toLowerCase().includes(value) || item.author.toLowerCase().includes(value)){
                return item
            }
        }))
    }
    return (
        <div className={"relative"}>
            <div className={"sticky top-0 bg-emerald-100 py-10 flex justify-center items-center gap-6 z-20"}>
                <input
                    onChange={(e)=>setSearchValue(e.target.value)}
                    value={searchValue}
                    type={"search"}
                    placeholder={"Search by author name or title "}
                    className={"border-2 border-gray-500 rounded-2xl p-4 text-xl w-[400px]"}
                />
                <div className={"cursor-pointer"}>
                    <img src={searchIcon} alt={""} width={40} onClick={handleSearch}/>
                </div>
            </div>
            <div className={"relative px-16"}>
                <div className={"text-5xl my-6 bg-white py-6 sticky top-36"}>Results:</div>
                {
                    filtered.map((item:responseData,index:number) => {
                        return (
                            <div key={index} className={"border-2 border-gray-300 rounded-xl p-4 mb-4"}>
                                <div className={"text-2xl font-medium capitalize mb-1"}>
                                    Title: {item.title}
                                </div>
                                <div> { item.body }</div>
                                <div className={"text-sm"}>{item.author}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}