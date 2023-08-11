import { Link } from "react-router-dom";

const ServiceData = () =>{
    return(
        <>
        <ul>
            {ServiceText.map((curval, id)=>{
                let { imgsrc, title, link} = curval;
                return(
                    <li key={id}>
                        <Link to={`/service${link}`}>
                        <img src={imgsrc} alt="images" />
                        <h3>{title}</h3>
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}


const ServiceText = [
    {
        imgsrc : "newwebsite/logo192.png",
        title : "React JSX",
        link : "/react-jsx",
    },
    {
        imgsrc : "logo192.png",
        title : "Template litreals",
        link : "/litreals",
    },
    {
        imgsrc : "logo192.png",
        title : "Component",
        link : "/component",
    },
    {
        imgsrc : "logo192.png",
        title : "Get Time",
        link : "/watch",
    },
    {
        imgsrc : "logo192.png",
        title : "Inline CSS",
        link : "/inlinecss",
    },
    {
        imgsrc : "logo192.png",
        title : "If / Else Condition",
        link : "/Conditions",
    },
    {
        imgsrc : "logo192.png",
        title : "Export & import multiple varibale and Functions",
        link : "/ExportImport",
    },
    {
        imgsrc : "logo192.png",
        title : "React Mapping",
        link : "/mapping",
    },
    {
        imgsrc : "logo192.png",
        title : "React Spread Operator",
        link : "/spreadoperator",
    },
    {
        imgsrc : "logo192.png",
        title : "React Destructuring",
        link : "/destructuring",
    },
    {
        imgsrc : "logo192.png",
        title : "React Hooks",
        link : "/hooks",
    },
    {
        imgsrc : "logo192.png",
        title : "React Form",
        link : "/form",
    },
    {
        imgsrc : "logo192.png",
        title : "React TO DO List",
        link : "/list",
    },
]

export default ServiceData;
