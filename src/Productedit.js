export default function Productedit(props){
    console.log(props)
    return <>
    <h1>Product edit {props.match.params.id}</h1>
    </>

}