const TemplatetExpressions = () =>{
    const name = "Gabriel";
    const data= {
        age:1,
        job:"programer"
    };  
    return(
        <div>
            <h1>oi meu nome é, {name}</h1>
            <p>meu trabalho é {data.job}</p>
            <p>{4+4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
};

export default TemplatetExpressions;